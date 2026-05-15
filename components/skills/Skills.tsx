"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  { category: "Backend Engineering",      color: "#00d4ff", skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "GraphQL", "Cron Jobs", "Microservices", "WebSockets"] },
  { category: "Frontend",                 color: "#7c3aed", skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "React Query"] },
  { category: "Databases",               color: "#10b981", skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma ORM", "Mongoose", "Query Optimization"] },
  { category: "DevOps & Cloud",           color: "#f59e0b", skills: ["Docker", "AWS S3", "CI/CD", "Linux", "Nginx", "PM2", "GitHub Actions"] },
  { category: "Architecture & Integrations", color: "#ec4899", skills: ["RBAC", "JWT Auth", "Razorpay", "FCM Notifications", "Webhook Systems", "PDF Generation", "OTP Auth"] },
];

const W: React.CSSProperties = { width: "100%", maxWidth: "1152px", margin: "0 auto", padding: "0 32px" };

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} style={{ paddingTop: "120px", paddingBottom: "120px", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />
      <div style={W}>

        <div style={{ marginBottom: "56px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "14px" }}>// tech arsenal</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 1.1 }}>
            Stack I <span className="gradient-text">ship with.</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.09 }}
            >
              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, ${cat.color}40, transparent)` }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", padding: "5px 14px", borderRadius: "100px", color: cat.color, border: `1px solid ${cat.color}30`, background: `${cat.color}08`, whiteSpace: "nowrap" }}>
                  {cat.category}
                </span>
              </div>

              {/* Pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "9px" }}>
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: ci * 0.08 + si * 0.04 }}
                    whileHover={{ scale: 1.07, y: -2 }}
                    className="skill-pill"
                    style={{ display: "inline-flex", alignItems: "center", gap: "7px" }}
                  >
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: cat.color, flexShrink: 0 }} />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanding section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="glass rounded-2xl"
          style={{ padding: "24px 28px", marginTop: "48px", borderStyle: "dashed" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <div className="status-dot" style={{ transform: "scale(0.75)" }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--accent-3)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Currently Expanding
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "9px" }}>
  {[
    "Kubernetes",
    "AWS Lambda",
    "Event-driven Architecture",
    "System Design",
    "gRPC",
    "ElasticSearch",
    "OpenAI APIs",
    "Embeddings",
    "Vector DB",
    "RAG",
    "LangChain Basics",
    "Python Basics",
    "Hugging Face Basics",
  ].map((s) => (
    <span
      key={s}
      className="skill-pill"
      style={{ opacity: 0.55, fontStyle: "italic" }}
    >
      {s}
    </span>
  ))}
</div>
        </motion.div>
      </div>
    </section>
  );
}
