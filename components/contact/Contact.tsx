"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/ui/Icons";

const W: React.CSSProperties = { width: "100%", maxWidth: "1152px", margin: "0 auto", padding: "0 32px" };

const fieldStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: "10px",
  padding: "12px 16px",
  fontFamily: "'Inter', sans-serif",
  fontSize: "14px",
  color: "var(--text-primary)",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello Shubham — from ${form.name}`);
    const body = encodeURIComponent(`Hi Shubham,\n\n${form.message}\n\n— ${form.name}\n${form.email}`);
    window.open(`mailto:ss988899@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" ref={ref} style={{ paddingTop: "120px", paddingBottom: "120px", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* Glow */}
      <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "500px", height: "220px", background: "radial-gradient(ellipse, rgba(0,212,255,0.07), transparent)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={W}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "14px" }}>// let&apos;s connect</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 56px)", lineHeight: 1.08, marginBottom: "16px" }}>
            Let&apos;s build something <span className="gradient-text">scalable.</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "420px", margin: "0 auto", fontSize: "15px", lineHeight: 1.75 }}>
            Open to full-time roles, freelance SaaS projects, and startup engineering conversations. If you&apos;re building something real — let&apos;s talk.
          </p>
        </div>

        <div className="contact-grid-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>

          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--text-muted)", display: "block", marginBottom: "7px", letterSpacing: "0.12em" }}>NAME</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" style={fieldStyle}
                  onFocus={(e) => e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)"}
                  onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"} />
              </div>
              <div>
                <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--text-muted)", display: "block", marginBottom: "7px", letterSpacing: "0.12em" }}>EMAIL</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" style={fieldStyle}
                  onFocus={(e) => e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)"}
                  onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"} />
              </div>
              <div>
                <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--text-muted)", display: "block", marginBottom: "7px", letterSpacing: "0.12em" }}>MESSAGE</label>
                <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about what you're building..." rows={6} style={{ ...fieldStyle, resize: "none" }}
                  onFocus={(e) => e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)"}
                  onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"} />
              </div>
              <button type="submit" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                padding: "14px", borderRadius: "11px", border: "none",
                background: sent
                  ? "linear-gradient(135deg, #10b981, #00d4ff)"
                  : "linear-gradient(135deg, #00d4ff, #7c3aed)",
                color: "#fff", fontSize: "15px", fontWeight: 600, cursor: "pointer",
                transition: "background 0.5s, transform 0.2s, opacity 0.2s",
                boxShadow: "0 0 28px rgba(0,212,255,0.2)",
              }}
                onMouseOver={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseOut={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {sent ? "✓ Message sent!" : <><Send size={15} /> Send Message</>}
              </button>
            </form>
          </motion.div>

          {/* ── Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {/* Availability */}
            <div className="glass rounded-2xl" style={{ padding: "22px 24px", borderColor: "rgba(16,185,129,0.18)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <div className="status-dot" />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--accent-3)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  Available Now
                </span>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.75 }}>
                Open to full-time and freelance SaaS projects. Response within 24 hours.
              </p>
            </div>

            {/* Contact links */}
            {[
              { icon: Mail,   label: "Email",    value: "ss988899@gmail.com",          href: "mailto:ss988899@gmail.com", color: "#00d4ff" },
              { icon: Phone,  label: "Phone",    value: "+91 08830388618",              href: "tel:+918830388618",         color: "#10b981" },
              { icon: MapPin, label: "Location", value: "Nagpur, Maharashtra, India",   href: "#",                        color: "#7c3aed" },
            ].map((item) => (
              <a key={item.label} href={item.href}
                className="glass rounded-xl"
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px 18px", textDecoration: "none", transition: "border-color 0.2s" }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"}
                onMouseOut={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
              >
                <div style={{ width: "38px", height: "38px", borderRadius: "9px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: `${item.color}14`, border: `1px solid ${item.color}28` }}>
                  <item.icon size={16} style={{ color: item.color }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--text-muted)", marginBottom: "2px", letterSpacing: "0.1em" }}>{item.label}</div>
                  <div style={{ fontSize: "14px", color: "var(--text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.value}</div>
                </div>
                <ArrowUpRight size={14} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
              </a>
            ))}

            {/* Social row */}
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { href: "https://github.com/Shubham2886", icon: <GithubIcon size={15} />, label: "GitHub" },
                { href: "https://linkedin.com/in/shubhamsharma-ss844686", icon: <LinkedInIcon size={15} />, label: "LinkedIn" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="glass"
                  style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "13px", borderRadius: "11px", fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s, border-color 0.2s" }}
                  onMouseOver={(e) => { e.currentTarget.style.color = "var(--text-primary)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
