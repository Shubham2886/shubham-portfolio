"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, GitBranch, Shield, Bell, Users, Layers, BarChart3, Zap } from "lucide-react";

const systems = [
  { icon: CreditCard, title: "Subscription Engines",     desc: "Recurring billing, plan management, payment reconciliation, pause/resume flows, and automated invoicing.", color: "#00d4ff" },
  { icon: Zap,        title: "Workflow Automation",       desc: "Event-driven pipelines, scheduled jobs, document generation, and multi-step approval chains.", color: "#f59e0b" },
  { icon: Shield,     title: "RBAC Systems",              desc: "Fine-grained role & permission architectures with middleware guards, tenant isolation, and audit logs.", color: "#7c3aed" },
  { icon: Bell,       title: "Notification Infrastructure", desc: "Push via FCM, email queues, in-app notifications, and real-time WebSocket event broadcasting.", color: "#ec4899" },
  { icon: Users,      title: "Real-time Collaboration",   desc: "Kanban boards, live comments, @mentions, and document co-editing powered by WebSockets.", color: "#10b981" },
  { icon: Layers,     title: "SaaS Infrastructure",       desc: "Multi-tenant architectures, feature flagging, usage metering, and white-label platform capabilities.", color: "#00d4ff" },
  { icon: BarChart3,  title: "Operational Dashboards",    desc: "Real-time analytics, revenue metrics, activity feeds, and data-dense admin panels.", color: "#f59e0b" },
  { icon: GitBranch,  title: "API Design Systems",        desc: "RESTful and event-driven APIs with versioning, rate-limiting, error handling, and OpenAPI docs.", color: "#7c3aed" },
];

const W: React.CSSProperties = { width: "100%", maxWidth: "1152px", margin: "0 auto", padding: "0 32px" };

export default function SystemsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ paddingTop: "120px", paddingBottom: "120px", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

      {/* Ambient glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "300px", background: "radial-gradient(ellipse, rgba(124,58,237,0.07), transparent)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={W}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "14px" }}>// engineering passion</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 1.1, marginBottom: "16px" }}>
            Systems I love <span className="gradient-text">building.</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "440px", margin: "0 auto", fontSize: "15px", lineHeight: 1.75 }}>
            These aren&apos;t just technical domains — they&apos;re the classes of problems that keep me engineering into the late hours.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "14px" }}>
          {systems.map((sys, i) => (
            <motion.div
              key={sys.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="glass rounded-2xl"
              style={{ padding: "24px", cursor: "default", transition: "border-color 0.25s" }}
            >
              <div style={{
                width: "42px", height: "42px", borderRadius: "11px",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "16px",
                background: `${sys.color}15`,
                border: `1px solid ${sys.color}30`,
              }}>
                <sys.icon size={19} style={{ color: sys.color }} />
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "14px", marginBottom: "8px" }}>
                {sys.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "13px", lineHeight: 1.7 }}>
                {sys.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
