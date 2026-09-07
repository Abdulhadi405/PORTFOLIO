import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulhadi.me"),
  title: "Abdulhadi - Student Exploring Computer Science & Technology",
  description:
    "Abdulhadi Tahir is an A Levels student from Faisalabad exploring computer science, programming, web development, and technology.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Abdulhadi - Student Exploring Computer Science & Technology",
    description:
      "A student portfolio focused on computer science, programming, technology, and learning by building.",
    url: "https://abdulhadi.me",
    siteName: "Abdulhadi",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Abdulhadi - Student Exploring Computer Science & Technology",
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
