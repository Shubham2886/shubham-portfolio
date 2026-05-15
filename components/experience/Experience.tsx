"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Morpheo Digital", role: "Software Developer",
    period: "May 2025 – Present", type: "Full-time", color: "#00d4ff", current: true,
    highlights: [
      "Architected subscription milk delivery platform with recurring order engine",
      "Integrated Razorpay for automated billing cycles & payment reconciliation",
      "Built AWS S3 media pipeline + FCM push notification infrastructure",
      "Designed multi-tenant RBAC system for vendor/admin/customer roles",
      "Implemented delivery scheduling engine with cron automation",
      "Built Jira-style project collaboration module with kanban & comments",
      "Developed document automation platform for government form generation",
      "PDF/DOC template extraction with dynamic field mapping engine",
      "Containerized all services with Docker + managed CI/CD deployments",
    ],
    tech: ["Node.js", "React", "MongoDB", "Razorpay", "AWS S3", "FCM", "Docker", "Cron"],
  },
  {
    company: "Applore Technologies", role: "SDE-I (MERN)",
    period: "May 2024 – May 2025", type: "Full-time", color: "#7c3aed", current: false,
    highlights: [
      "Developed full-stack features using MERN stack + NestJS framework",
      "Designed and optimized RESTful APIs for enterprise clients",
      "Implemented backend optimization patterns reducing response times 40%",
      "Shipped customer-facing frontend modules with React & TypeScript",
      "Led API design reviews and backend architecture decisions",
      "Handled deployment pipelines and production monitoring",
    ],
    tech: ["MERN", "NestJS", "TypeScript", "PostgreSQL", "Redis", "REST APIs"],
  },
  {
    company: "EightyFive Technologies", role: "Full Stack Developer",
    period: "Jul 2023 – May 2024", type: "Full-time", color: "#10b981", current: false,
    highlights: [
      "Built Node.js REST APIs for crypto and real estate platforms",
      "Developed admin dashboards with role-based data access control",
      "Implemented React CRUD interfaces for complex data management",
      "Optimized backend query performance for high-traffic endpoints",
      "Collaborated on product architecture and technical planning",
    ],
    tech: ["Node.js", "React", "MongoDB", "Express", "JWT", "Admin Dashboards"],
  },
];

const W: React.CSSProperties = { width: "100%", maxWidth: "1152px", margin: "0 auto", padding: "0 32px" };

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience" ref={ref} style={{ paddingTop: "120px", paddingBottom: "120px", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />
      <div style={W}>
        <div style={{ marginBottom: "56px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "14px" }}>// experience</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 1.1 }}>
            Where I&apos;ve <span className="gradient-text">shipped.</span>
          </h2>
        </div>

        <div className="exp-grid-layout" style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "20px" }}>

          {/* Tabs */}
          <div className="exp-tabs-col" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {experiences.map((e, i) => (
              <button
                key={e.company}
                onClick={() => setActive(i)}
                style={{
                  textAlign: "left", padding: "16px 18px", borderRadius: "12px",
                  border: "1px solid",
                  borderColor: active === i ? `${e.color}35` : "transparent",
                  background: active === i ? "rgba(255,255,255,0.04)" : "transparent",
                  cursor: "pointer", transition: "all 0.22s", position: "relative",
                }}
              >
                {active === i && (
                  <div style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: "3px", height: "28px", borderRadius: "3px", background: e.color }} />
                )}
                <div style={{ display: "flex", alignItems: "center", gap: "7px", fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: "13px", color: active === i ? e.color : "var(--text-secondary)", marginBottom: "4px" }}>
                  {e.current && <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981", flexShrink: 0, display: "inline-block" }} />}
                  {e.company}
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--text-muted)" }}>{e.period}</div>
              </button>
            ))}
          </div>

          {/* Detail */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl"
            style={{ padding: "32px", borderColor: `${exp.color}20`, boxShadow: `0 0 40px ${exp.color}06` }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "28px", flexWrap: "wrap", gap: "12px" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <div style={{ width: "34px", height: "34px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", background: `${exp.color}15`, flexShrink: 0 }}>
                    <Briefcase size={15} style={{ color: exp.color }} />
                  </div>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "20px" }}>{exp.role}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "15px", fontWeight: 600, color: exp.color }}>{exp.company}</span>
                  <span className="glass" style={{ padding: "2px 8px", borderRadius: "6px", fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--text-muted)" }}>{exp.type}</span>
                </div>
              </div>
              <span className="glass" style={{ padding: "7px 14px", borderRadius: "8px", fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--text-secondary)", whiteSpace: "nowrap" }}>{exp.period}</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
              {exp.highlights.map((h, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <ChevronRight size={14} style={{ color: exp.color, flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.65 }}>{h}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
              {exp.tech.map((t) => (
                <span key={t} style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", padding: "5px 11px", borderRadius: "8px", border: `1px solid ${exp.color}30`, color: exp.color, background: `${exp.color}08` }}>{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
