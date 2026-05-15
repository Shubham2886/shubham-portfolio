"use client";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.07)",
      padding: "40px 32px",
    }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>

        <div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "17px", marginBottom: "5px" }}>
            <span className="gradient-text">Shubham Sharma</span>
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--text-muted)" }}>
            Built with Next.js, TypeScript &amp; obsession for scalable systems.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          {[
            { href: "https://github.com/Shubham2886", icon: <GithubIcon size={18} />, hc: "var(--accent)" },
            { href: "https://linkedin.com/in/shubhamsharma-ss844686", icon: <LinkedInIcon size={18} />, hc: "var(--accent-2)" },
            { href: "mailto:ss988899@gmail.com", icon: <Mail size={18} />, hc: "var(--accent-3)" },
          ].map((item, i) => (
            <a key={i} href={item.href}
              target={item.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
              onMouseOver={(e) => e.currentTarget.style.color = item.hc}
              onMouseOut={(e) => e.currentTarget.style.color = "var(--text-muted)"}
            >{item.icon}</a>
          ))}
        </div>

        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Shubham Sharma
        </div>
      </div>
    </footer>
  );
}
