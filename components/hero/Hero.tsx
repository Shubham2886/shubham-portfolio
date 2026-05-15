"use client";
import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/ui/Icons";
import Terminal from "./Terminal";

const PARTICLES = [
  { id: 0,  w: 2.4, h: 2.1, bg: "#00d4ff", top: 82, left: 79, op: 0.20, dur: 4.9, delay: 1.3 },
  { id: 1,  w: 1.4, h: 2.7, bg: "#7c3aed", top: 79, left: 60, op: 0.32, dur: 7.7, delay: 1.1 },
  { id: 2,  w: 2.0, h: 2.8, bg: "#10b981", top: 13, left: 88, op: 0.46, dur: 4.5, delay: 0.2 },
  { id: 3,  w: 3.8, h: 3.6, bg: "#00d4ff", top: 59, left: 70, op: 0.12, dur: 6.7, delay: 0.8 },
  { id: 4,  w: 1.9, h: 3.8, bg: "#7c3aed", top: 76, left: 15, op: 0.24, dur: 4.1, delay: 1.2 },
  { id: 5,  w: 3.2, h: 2.3, bg: "#10b981", top: 27, left:  8, op: 0.35, dur: 6.6, delay: 1.9 },
  { id: 6,  w: 3.4, h: 1.0, bg: "#00d4ff", top: 22, left: 60, op: 0.29, dur: 6.7, delay: 0.9 },
  { id: 7,  w: 3.3, h: 2.6, bg: "#7c3aed", top:  4, left: 17, op: 0.32, dur: 5.3, delay: 1.8 },
  { id: 8,  w: 1.5, h: 3.5, bg: "#10b981", top: 74, left: 11, op: 0.18, dur: 5.8, delay: 1.2 },
  { id: 9,  w: 1.1, h: 2.2, bg: "#00d4ff", top: 93, left: 52, op: 0.30, dur: 7.8, delay: 0.1 },
  { id: 10, w: 2.3, h: 3.5, bg: "#7c3aed", top: 69, left: 51, op: 0.47, dur: 4.0, delay: 0.7 },
  { id: 11, w: 3.4, h: 3.6, bg: "#10b981", top: 39, left: 19, op: 0.30, dur: 4.6, delay: 1.9 },
  { id: 12, w: 4.0, h: 2.3, bg: "#00d4ff", top: 54, left: 24, op: 0.20, dur: 5.0, delay: 0.5 },
  { id: 13, w: 1.8, h: 1.0, bg: "#7c3aed", top: 14, left: 50, op: 0.26, dur: 6.9, delay: 0.8 },
  { id: 14, w: 1.8, h: 3.6, bg: "#10b981", top: 15, left: 63, op: 0.22, dur: 5.3, delay: 1.3 },
  { id: 15, w: 1.4, h: 3.0, bg: "#00d4ff", top: 23, left: 13, op: 0.26, dur: 5.9, delay: 0.9 },
  { id: 16, w: 4.0, h: 1.5, bg: "#7c3aed", top: 91, left: 32, op: 0.37, dur: 5.9, delay: 0.3 },
  { id: 17, w: 3.0, h: 1.2, bg: "#10b981", top: 66, left: 31, op: 0.14, dur: 7.2, delay: 0.7 },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        /* push content below the fixed nav (70px) */
        paddingTop: "100px",
        paddingBottom: "80px",
      }}
    >
      {/* ── Backgrounds ── */}
      <div className="absolute inset-0 grid-bg" style={{ opacity: 0.5 }} />
      <div style={{
        position: "absolute", top: "20%", left: "-160px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,212,255,0.18), transparent)",
        filter: "blur(80px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "15%", right: "-160px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.14), transparent)",
        filter: "blur(80px)", pointerEvents: "none",
      }} />

      {/* ── Particles ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }} aria-hidden>
        {PARTICLES.map((p) => (
          <div key={p.id} style={{
            position: "absolute", borderRadius: "50%",
            width: p.w, height: p.h, background: p.bg,
            top: `${p.top}%`, left: `${p.left}%`, opacity: p.op,
            animation: `float ${p.dur}s ease-in-out ${p.delay}s infinite`,
          }} />
        ))}
      </div>

      {/* ── Main content ── */}
      <div style={{
        position: "relative", zIndex: 1,
        width: "100%", maxWidth: "1152px",
        margin: "0 auto", padding: "0 32px",
      }}>
        {/*
          Two-column grid:
          - Left col: all the text / CTAs
          - Right col: terminal
          On small screens it stacks vertically.
        */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "64px",
          alignItems: "center",
        }}>

          {/* ════════════ LEFT ════════════ */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>

            {/* Status badge */}
            <div
              className="anim-fadeUp"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                marginBottom: "20px",
              }}
            >
              <div className="status-dot" />
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: "12px",
                color: "var(--text-secondary)", letterSpacing: "0.04em",
              }}>
                Available for opportunities · Nagpur, India
              </span>
            </div>

            {/* Label */}
            <div
              className="anim-fadeUp"
              style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "18px", animationDelay: "0.08s" }}
            >
              <MapPin size={12} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
              <span className="section-label">MERN Stack · 3 Years Experience</span>
            </div>

            {/* Headline */}
            <h1
              className="anim-fadeUp"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(44px, 5.5vw, 76px)",
                lineHeight: 1.04,
                letterSpacing: "-0.025em",
                marginBottom: "24px",
                animationDelay: "0.16s",
                color: "var(--text-primary)",
              }}
            >
              Building<br />
              <span className="gradient-text">scalable SaaS</span><br />
              systems.
            </h1>

            {/* Sub */}
            <p
              className="anim-fadeUp"
              style={{
                color: "var(--text-secondary)", fontSize: "17px", lineHeight: 1.8,
                marginBottom: "36px", maxWidth: "440px", animationDelay: "0.24s",
              }}
            >
              Backend-focused MERN engineer crafting{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>subscription engines</span>,{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>automation platforms</span>, and{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>production-grade APIs</span>{" "}
              that power real operations.
            </p>

            {/* CTA row */}
            <div
              className="anim-fadeUp"
              style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "44px", animationDelay: "0.32s" }}
            >
              {/* Primary */}
              <button
                onClick={() => scrollTo("#projects")}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "13px 26px", borderRadius: "12px", border: "none",
                  background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
                  color: "#fff", fontSize: "14px", fontWeight: 600, cursor: "pointer",
                  boxShadow: "0 0 32px rgba(0,212,255,0.25)",
                  transition: "opacity 0.2s, transform 0.2s",
                }}
                onMouseOver={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseOut={(e)  => { e.currentTarget.style.opacity = "1";    e.currentTarget.style.transform = "translateY(0)"; }}
              >
                View Projects <ArrowDown size={15} />
              </button>

              {/* Ghost buttons */}
              {[
                { href: "https://github.com/Shubham2886", label: "GitHub",   icon: <GithubIcon size={15} /> },
                { href: "https://linkedin.com/in/shubhamsharma-ss844686", label: "LinkedIn", icon: <LinkedInIcon size={15} /> },
                { href: "/resume.pdf", label: "Resume", icon: <Download size={15} /> },
              ].map((b) => (
                <a
                  key={b.label}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    padding: "13px 20px", borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.04)",
                    color: "var(--text-secondary)", fontSize: "14px", fontWeight: 500,
                    textDecoration: "none", transition: "all 0.2s",
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.color = "var(--text-primary)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
                  onMouseOut={(e)  => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                >
                  {b.icon} {b.label}
                </a>
              ))}
            </div>

            {/* Stats */}
            <div
              className="anim-fadeUp"
              style={{ display: "flex", gap: "40px", animationDelay: "0.40s" }}
            >
              {[
                { val: "3+",  label: "Years Building" },
                { val: "10+", label: "Prod Systems" },
                { val: "3",   label: "SaaS Products" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="gradient-text" style={{ fontFamily: "'Syne', sans-serif", fontSize: "28px", fontWeight: 800 }}>
                    {s.val}
                  </div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--text-muted)", marginTop: "4px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ════════════ RIGHT — Terminal ════════════ */}
          <div
            className="anim-fadeRight"
            style={{ position: "relative", animationDelay: "0.36s" }}
          >
            {/* Glow halo */}
            <div style={{
              position: "absolute", inset: "-20px",
              background: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(124,58,237,0.12))",
              borderRadius: "20px", filter: "blur(32px)", pointerEvents: "none",
            }} />

            <div style={{ position: "relative" }}>
              <Terminal />
            </div>

            {/* Floating badge — top right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute", top: "-16px", right: "-16px",
                padding: "7px 13px", borderRadius: "10px",
                background: "rgba(8,8,8,0.92)",
                border: "1px solid rgba(0,212,255,0.25)",
                fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#00d4ff",
                whiteSpace: "nowrap",
              }}
            >
              ⚡ Node.js APIs
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              style={{
                position: "absolute", bottom: "-16px", left: "-16px",
                padding: "7px 13px", borderRadius: "10px",
                background: "rgba(8,8,8,0.92)",
                border: "1px solid rgba(124,58,237,0.25)",
                fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#7c3aed",
                whiteSpace: "nowrap",
              }}
            >
              🐳 Dockerized
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
