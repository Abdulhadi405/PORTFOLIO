import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulhadi.me"),
  title: "Abdulhadi Tahir — Developer & Curious Builder",
  description:
    "Abdulhadi Tahir is an A Levels student exploring computer science, programming, web development, and technology through thoughtful projects.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Abdulhadi Tahir — Developer & Curious Builder",
    description:
      "A student portfolio focused on computer science, programming, technology, and learning by building.",
    url: "https://abdulhadi.me",
    siteName: "Abdulhadi",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Abdulhadi Tahir — Developer & Curious Builder",
    description:
      "A student portfolio focused on computer science, programming, technology, and learning by building.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="atmosphere">
          <div className="atmosphere-cyan-orb" />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
