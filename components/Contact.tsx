"use client";

import { useState, FormEvent } from "react";
import { Check, Github, Instagram, Linkedin, Mail, Send, Sparkles } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Abdulhadi405", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdulhadi-tahir-856500375/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/abdulhadi_405/", icon: Instagram },
  { label: "Email", href: "mailto:abdulhaditahir405@gmail.com", icon: Mail },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok || !result.ok) {
        if (result.code === "EMAIL_NOT_CONFIGURED") {
          const subject = encodeURIComponent(`Portfolio message from ${data.name.trim()}`);
          const body = encodeURIComponent(`Name: ${data.name.trim()}\nEmail: ${data.email.trim()}\n\n${data.message.trim()}`);
          window.location.href = `mailto:abdulhaditahir405@gmail.com?subject=${subject}&body=${body}`;
          setStatus("idle");
          return;
        }
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 sm:px-12 sm:py-32 lg:px-24">
      <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Contact</h2>
      <p className="mt-4 max-w-md text-muted">Have a project, a question, or just want to say hi? Send it over.</p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-panel/40 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-6">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-violet/10 blur-3xl" />

          {status === "success" ? (
            <div className="relative flex min-h-[440px] flex-col items-center justify-center px-5 py-10 text-center sm:min-h-[470px]">
              <div className="success-orbit absolute h-44 w-44 rounded-full border border-cyan/10" />
              <div className="success-orbit success-orbit-delayed absolute h-60 w-60 rounded-full border border-cyan/5" />
              <div className="success-check relative flex h-24 w-24 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 shadow-[0_0_60px_rgba(95,232,210,0.13)]">
                <Check className="h-10 w-10 text-cyan" strokeWidth={2.4} />
              </div>
              <div className="relative mt-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-cyan/80">Message delivered</p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">That went through.</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted">Your message has been handed off successfully. I'll get back to you as soon as I can.</p>
              </div>
              <div className="relative mt-8 flex items-center gap-3 rounded-full border border-line bg-deep/50 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px_rgba(95,232,210,0.7)]" />
                Secure delivery · complete
              </div>
              <button type="button" onClick={() => setStatus("idle")} className="relative mt-7 rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/40">Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative flex flex-col gap-4">
              <div className="mb-2 flex items-center justify-between gap-4 border-b border-line pb-4">
                <div><p className="text-[10px] font-medium uppercase tracking-[0.22em] text-cyan/80">Direct message</p><h3 className="mt-1 font-display text-xl font-semibold text-ink">Let's build something.</h3></div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-deep/50 text-muted"><Send className="h-4 w-4" /></div>
              </div>

              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px] h-0 w-0 opacity-0" aria-hidden="true" />

              <div>
                <label htmlFor="name" className="text-sm text-muted">Name</label>
                <input id="name" name="name" type="text" required minLength={2} placeholder="Your name" className="mt-2 w-full rounded-2xl border border-line bg-deep/45 px-4 py-3.5 text-ink outline-none transition-all duration-300 placeholder:text-muted/40 focus:-translate-y-px focus:border-cyan/45 focus:bg-panel/70 focus:shadow-[0_10px_30px_rgba(95,232,210,0.05)]" />
              </div>

              <div>
                <label htmlFor="email" className="text-sm text-muted">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" className="mt-2 w-full rounded-2xl border border-line bg-deep/45 px-4 py-3.5 text-ink outline-none transition-all duration-300 placeholder:text-muted/40 focus:-translate-y-px focus:border-cyan/45 focus:bg-panel/70 focus:shadow-[0_10px_30px_rgba(95,232,210,0.05)]" />
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-muted">Message</label>
                <textarea id="message" name="message" required minLength={10} maxLength={2000} rows={5} placeholder="Tell me a little about what you're working on..." className="mt-2 w-full resize-none rounded-2xl border border-line bg-deep/45 px-4 py-3.5 text-ink outline-none transition-all duration-300 placeholder:text-muted/40 focus:-translate-y-px focus:border-cyan/45 focus:bg-panel/70 focus:shadow-[0_10px_30px_rgba(95,232,210,0.05)]" />
              </div>

              <button type="submit" disabled={status === "submitting"} className="group relative mt-1 flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-ink px-6 py-3.5 text-sm font-medium text-void transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(255,255,255,0.09)] disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative flex items-center gap-2">{status === "submitting" ? <><span className="h-4 w-4 animate-spin rounded-full border-2 border-void/25 border-t-void" /> Sending…</> : <><Send className="h-4 w-4" /> Send message</>}</span>
              </button>

              {status === "error" && <div className="rounded-2xl border border-red-400/15 bg-red-400/5 px-4 py-3 text-sm leading-6 text-red-300" role="alert">{errorMsg || "Something went wrong — please try again."} You can also email me directly at <a href="mailto:abdulhaditahir405@gmail.com" className="underline">abdulhaditahir405@gmail.com</a>.</div>}
            </form>
          )}
        </div>

        <div className="flex flex-col justify-center gap-5">
          <div>
            <div className="flex items-center gap-2 text-cyan"><Sparkles className="h-4 w-4" /><span className="text-[10px] font-medium uppercase tracking-[0.22em]">Open to ideas</span></div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted">If you have an interesting idea, a small build, or simply want to connect, this is the quickest way to reach me.</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {SOCIALS.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"} className="group flex items-center gap-3 rounded-2xl border border-line bg-panel/25 px-4 py-3.5 text-sm text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/25 hover:bg-panel/50"><span className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-deep/50 text-muted transition-colors group-hover:text-cyan"><Icon className="h-4 w-4" /></span><span>{label}</span><span className="ml-auto text-muted transition-transform duration-300 group-hover:translate-x-1">→</span></a>)}
          </div>
        </div>
      </div>
    </section>
  );
}
