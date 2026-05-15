"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Layers, Shield, Bell, CreditCard, FileText, Zap, Server, Database, Users, GitBranch, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

const projects = [
  {
    id: "agile",
    name: "Agile Project Management SaaS",
    tagline: "Production-grade Agile collaboration platform.",
    description: "A Jira-style project management system built for real engineering teams. Multi-workspace RBAC, sprint boards, kanban views, burndown charts, and full collaboration infrastructure.",
    category: "SaaS Platform", color: "#00d4ff",
    stats: [{ label: "Roles", value: "5+ RBAC" }, { label: "Modules", value: "8 Core" }, { label: "Auth", value: "JWT + Refresh" }],
    features: ["Multi-tenant workspace & project management", "Sprint planning with velocity tracking", "Kanban board with drag-and-drop", "Burndown reports & analytics", "RBAC with 5 permission levels", "Real-time notifications system", "File attachments via AWS S3", "Invitation workflows & team management", "Comment threads & @mentions", "Full-text search across projects"],
    tech: ["Node.js", "React", "PostgreSQL", "Prisma", "Docker", "JWT", "WebSockets"],
  },
  {
    id: "milk",
    name: "Subscription Milk Delivery Platform",
    tagline: "Scalable subscription commerce infrastructure.",
    description: "End-to-end subscription commerce platform for recurring delivery businesses. Automated billing, real-time tracking, vendor management, analytics, and multi-role dashboards.",
    category: "Commerce Platform", color: "#10b981",
    stats: [{ label: "Billing", value: "Razorpay" }, { label: "Automation", value: "Cron Engine" }, { label: "Notifs", value: "FCM Push" }],
    features: ["Recurring subscription management engine", "Automated cron-based order generation", "Razorpay payment gateway integration", "FCM push notification infrastructure", "Multi-role flows (vendor/admin/customer)", "Delivery scheduling & route optimization", "AWS S3 media & document storage", "Revenue analytics & reporting dashboards", "Subscription pause/resume/cancel flows", "Real-time delivery status tracking"],
    tech: ["Node.js", "React", "MongoDB", "Razorpay", "AWS S3", "FCM", "Cron", "Docker"],
  },
  {
    id: "docs",
    name: "Document Automation Platform",
    tagline: "Workflow automation reducing manual government paperwork.",
    description: "Intelligent document generation system that extracts template fields from PDF/DOC files and auto-generates filled government forms. Reduces hours of manual work to seconds.",
    category: "Automation Platform", color: "#7c3aed",
    stats: [{ label: "Templates", value: "Dynamic" }, { label: "Auth", value: "OTP + RBAC" }, { label: "Monetize", value: "Pay-per-form" }],
    features: ["Dynamic PDF/DOC template field extraction", "Auto-generation of government-compliant forms", "OTP authentication flow", "RBAC for template management", "Pay-per-form monetization system", "AWS S3 secure document storage", "Template versioning & management", "Bulk form generation capabilities", "Audit trail for compliance", "Dockerized containerized deployment"],
    tech: ["Node.js", "React", "MongoDB", "AWS S3", "Docker", "OTP Auth", "RBAC", "PDF Engine"],
  },
];

const W: React.CSSProperties = { width: "100%", maxWidth: "1152px", margin: "0 auto", padding: "0 32px" };

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="projects" ref={ref} style={{ paddingTop: "120px", paddingBottom: "120px", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />
      <div style={W}>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "56px" }}>
          <div>
            <span className="section-label" style={{ display: "block", marginBottom: "14px" }}>// selected projects</span>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 1.1 }}>
              Systems I&apos;ve <span className="gradient-text">architected.</span>
            </h2>
          </div>
          <a href="https://github.com/Shubham2886" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseOver={(e) => e.currentTarget.style.color = "var(--accent)"}
            onMouseOut={(e) => e.currentTarget.style.color = "var(--text-secondary)"}
          >
            <GithubIcon size={13} /> All on GitHub →
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              className="glass rounded-2xl"
              style={{
                position: "relative", overflow: "hidden",
                borderColor: hovered === p.id ? `${p.color}30` : "var(--border)",
                boxShadow: hovered === p.id ? `0 0 60px ${p.color}08` : "none",
                transition: "border-color 0.35s, box-shadow 0.35s",
              }}
            >
              {/* Hover bg glow */}
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${p.color}05, transparent)`, opacity: hovered === p.id ? 1 : 0, transition: "opacity 0.4s", pointerEvents: "none" }} />

              <div style={{ padding: "36px", position: "relative" }}>
                <div className="proj-inner-grid" style={{ display: "grid", gridTemplateColumns: "1fr 270px", gap: "36px" }}>
                  {/* Left */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "12px" }}>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", padding: "3px 11px", borderRadius: "100px", border: `1px solid ${p.color}30`, color: p.color, background: `${p.color}10` }}>{p.category}</span>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--text-muted)" }}>Complexity: <span style={{ color: "#f59e0b" }}>High</span></span>
                    </div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "22px", marginBottom: "6px" }}>{p.name}</h3>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", fontStyle: "italic", color: p.color, marginBottom: "16px" }}>{p.tagline}</p>
                    <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.75, marginBottom: "22px" }}>{p.description}</p>

                    <div style={{ display: "flex", gap: "28px", marginBottom: "22px" }}>
                      {p.stats.map((s) => (
                        <div key={s.label}>
                          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "14px", color: p.color }}>{s.value}</div>
                          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--text-muted)" }}>{s.label}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "22px" }}>
                      {p.tech.map((t) => (
                        <span key={t} style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", padding: "4px 11px", borderRadius: "8px", border: `1px solid ${p.color}25`, color: p.color, background: `${p.color}08` }}>{t}</span>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: "8px" }}>
                      <a href="https://github.com/Shubham2886" target="_blank" rel="noopener noreferrer"
                        style={{ display: "flex", alignItems: "center", gap: "6px", padding: "9px 18px", borderRadius: "9px", border: "1px solid var(--border)", background: "rgba(255,255,255,0.03)", fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "var(--text-secondary)", textDecoration: "none" }}>
                        <GithubIcon size={12} /> Source Code
                      </a>
                      <button style={{ display: "flex", alignItems: "center", gap: "6px", padding: "9px 18px", borderRadius: "9px", border: `1px solid ${p.color}30`, fontFamily: "'DM Mono', monospace", fontSize: "12px", color: p.color, background: `${p.color}08`, cursor: "pointer" }}>
                        <ExternalLink size={12} /> Live Demo
                      </button>
                    </div>
                  </div>

                  {/* Right — feature list */}
                  <div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--text-muted)", marginBottom: "16px", letterSpacing: "0.15em" }}>ARCHITECTURE HIGHLIGHTS</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                      {p.features.map((f, fi) => (
                        <div key={fi} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                          <span style={{ color: p.color, flexShrink: 0, marginTop: "1px", fontSize: "12px" }}>▸</span>
                          <span style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.55 }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
