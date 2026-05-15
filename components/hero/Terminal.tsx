"use client";
import { useEffect, useState, useRef } from "react";

const lines = [
  { text: "$ initializing shubham.portfolio", color: "text-[var(--text-secondary)]", delay: 0 },
  { text: "✓ MERN Stack Engineer · 3 years", color: "text-[var(--accent-3)]", delay: 400 },
  { text: "", color: "", delay: 700 },
  { text: "// Current stack in production", color: "text-[var(--text-muted)]", delay: 900 },
  { text: "const stack = {", color: "text-[var(--text-primary)]", delay: 1100 },
  { text: "  runtime: 'Node.js + Express + NestJS',", color: "text-[var(--accent)]", delay: 1300 },
  { text: "  auth: 'JWT + RBAC + Sessions',", color: "text-[var(--accent)]", delay: 1500 },
  { text: "  database: 'MongoDB + PostgreSQL + Prisma',", color: "text-[var(--accent)]", delay: 1700 },
  { text: "  infra: 'Docker + AWS S3 + CI/CD',", color: "text-[var(--accent)]", delay: 1900 },
  { text: "  payments: 'Razorpay + Subscriptions',", color: "text-[var(--accent)]", delay: 2100 },
  { text: "  notifications: 'FCM + WebSockets',", color: "text-[var(--accent)]", delay: 2300 },
  { text: "  jobs: 'Cron + Microservices',", color: "text-[var(--accent)]", delay: 2500 },
  { text: "};", color: "text-[var(--text-primary)]", delay: 2700 },
  { text: "", color: "", delay: 2900 },
  { text: "// Deploying scalable SaaS systems...", color: "text-[var(--text-muted)]", delay: 3100 },
  { text: "$ docker-compose up --build -d", color: "text-[var(--accent-warm)]", delay: 3300 },
  { text: "✓ All services running on port :3000", color: "text-[var(--accent-3)]", delay: 3700 },
  { text: "✓ Cron jobs initialized · 4 scheduled", color: "text-[var(--accent-3)]", delay: 4000 },
  { text: "✓ RBAC middleware active", color: "text-[var(--accent-3)]", delay: 4300 },
  { text: "✓ Ready to scale. ▊", color: "text-[var(--accent)]", delay: 4700 },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers = lines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <div className="terminal-window w-full">
      <div className="terminal-header">
        <div className="terminal-dot" style={{ background: "#ff5f57" }} />
        <div className="terminal-dot" style={{ background: "#ffbd2e" }} />
        <div className="terminal-dot" style={{ background: "#28ca41" }} />
        <span className="ml-3 font-mono text-xs text-[var(--text-muted)]">
          shubham@portfolio ~ /dev
        </span>
      </div>
      <div
        ref={containerRef}
        className="p-4 h-72 overflow-y-auto font-mono text-xs leading-6"
        style={{ scrollBehavior: "smooth" }}
      >
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={`${line.color} whitespace-pre`}>
            {i === visibleLines - 1 && line.text.endsWith("▊") ? (
              <>
                {line.text.slice(0, -1)}
                <span className="blink">▊</span>
              </>
            ) : (
              line.text || "\u00A0"
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
