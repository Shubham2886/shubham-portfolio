import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubham Sharma — MERN Stack Software Engineer",
  description: "Backend-focused product engineer building scalable SaaS systems, subscription engines, and real-world business automation platforms. 3 years of MERN stack expertise.",
  keywords: ["MERN Stack", "Software Engineer", "Node.js", "React", "Next.js", "SaaS", "Backend Engineer", "Nagpur"],
  authors: [{ name: "Shubham Sharma" }],
  openGraph: {
    type: "website",
    title: "Shubham Sharma — MERN Stack Software Engineer",
    description: "Building scalable SaaS systems & backend architectures.",
    siteName: "Shubham Sharma Portfolio",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
