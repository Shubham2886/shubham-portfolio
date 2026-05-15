"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Database, Zap, Globe } from "lucide-react";

const traits = [
  { icon: Server,   title: "Backend Architecture", desc: "Production-scale REST & event-driven APIs — auth layers, RBAC, cron jobs, and message queues.", color: "#00d4ff" },
  { icon: Database, title: "Data Systems",          desc: "Schema design with Prisma ORM across MongoDB and PostgreSQL. Indexing, query optimization, complex domains.", color: "#7c3aed" },
  { icon: Zap,      title: "Automation First",      desc: "Recurring subscription engines, auto-triggered workflows, document generation, and delivery pipelines.", color: "#10b981" },
  { icon: Globe,    title: "SaaS Infrastructure",   desc: "Razorpay, FCM, AWS S3, Dockerized deployments — end-to-end product engineering from schema to CI/CD.", color: "#f59e0b" },
];

const W: React.CSSProperties = {
  position: "relative",
  width: "100%", maxWidth: "1152px",
  margin: "0 auto", padding: "0 32px",
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} style={{ paddingTop: "120px", paddingBottom: "120px", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />
      <div style={W}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "72px", alignItems: "center" }}>

          {/* Left */}
          <div>
            <span className="section-label anim-fadeUp" style={{ display: "block", marginBottom: "16px" }}>// about me</span>
            <h2
              className="anim-fadeUp"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 1.12, marginBottom: "28px", animationDelay: "0.08s" }}
            >
              I engineer systems<br />
              <span className="gradient-text">that solve operations.</span>
            </h2>
            <div className="anim-fadeUp" style={{ animationDelay: "0.16s" }}>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "18px", fontSize: "15px" }}>
                I&apos;m <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Shubham Sharma</span> — a software developer with 3 years of hands-on experience building production systems. My focus is the backend: scalable APIs, multi-role access control, recurring commerce infrastructure, and workflow automation.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "18px", fontSize: "15px" }}>
                At <span style={{ color: "var(--accent)", fontWeight: 500 }}>Morpheo Digital</span>, I&apos;ve architected a full subscription milk delivery platform — recurring order engines, Razorpay billing, FCM push, vendor dashboards, and a document automation system that auto-generates government forms from PDF templates.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, fontSize: "15px" }}>
                I don&apos;t build toy projects. Every system I ship handles <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>real transactions</span>, <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>real users</span>, and <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>real operational complexity</span>.
              </p>
            </div>
            <div className="anim-fadeUp" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "28px", animationDelay: "0.24s" }}>
              {["Node.js", "Prisma", "RBAC", "AWS S3", "Razorpay", "Docker", "Subscriptions", "WebSockets"].map((t) => (
                <span key={t} className="skill-pill">{t}</span>
              ))}
            </div>
          </div>

          {/* Right — cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            {traits.map((tr, i) => (
              <motion.div
                key={tr.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl"
                style={{ padding: "20px", cursor: "default" }}
              >
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px", background: `${tr.color}18`, border: `1px solid ${tr.color}30` }}>
                  <tr.icon size={17} style={{ color: tr.color }} />
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: "13px", marginBottom: "8px" }}>{tr.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "12px", lineHeight: 1.65 }}>{tr.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
