import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL =
  process.env.CONTACT_TO_EMAIL || "abdulhaditahir405@gmail.com";

const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ||
  "Portfolio Contact <onboarding@resend.dev>";

const submissions = new Map<string, number[]>();

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  const timestamps = (submissions.get(ip) || []).filter(
    (timestamp) => now - timestamp < WINDOW_MS
  );

  timestamps.push(now);
  submissions.set(ip, timestamps);

  return timestamps.length > MAX_PER_WINDOW;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const email =
      typeof body.email === "string" ? body.email.trim() : "";

    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    const company =
      typeof body.company === "string" ? body.company.trim() : "";

    // Honeypot protection.
    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please enter a valid name.",
        },
        { status: 400 }
      );
    }

    if (email.length > 254 || !isValidEmail(email)) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please enter a valid email.",
        },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please enter a message between 10 and 2000 characters.",
        },
        { status: 400 }
      );
    }

    const ip = getClientIp(req);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          ok: false,
          error: "Too many messages sent. Please try again later.",
        },
        { status: 429 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        {
          ok: false,
          error: "Something went wrong. Please try again.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const subject = "New message from " + name;

    const text = [
      "From: " + name + " <" + email + ">",
      "",
      "Message:",
      message,
      "",
      "Received: " + new Date().toISOString(),
    ].join("\n");

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      reply_to: email,
      subject,
      text,
    });

    if (result.error) {
      console.error("Resend delivery error:", result.error);

      return NextResponse.json(
        {
          ok: false,
          error: "Something went wrong. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}