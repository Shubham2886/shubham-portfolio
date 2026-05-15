"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Mail, FileText, User, Briefcase, Code2, Star, Phone } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

const commands = [
  { id: "about", label: "Go to About", section: "Navigate", icon: User, action: () => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "experience", label: "Go to Experience", section: "Navigate", icon: Briefcase, action: () => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "projects", label: "Go to Projects", section: "Navigate", icon: Code2, action: () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "skills", label: "Go to Skills", section: "Navigate", icon: Star, action: () => document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "contact", label: "Go to Contact", section: "Navigate", icon: Phone, action: () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "email", label: "Send Email", section: "Social", icon: Mail, action: () => window.open("mailto:ss988899@gmail.com") },
  { id: "resume", label: "Download Resume", section: "Social", icon: FileText, action: () => window.open("/resume.pdf", "_blank") },
  { id: "linkedin", label: "Open LinkedIn", section: "Social", icon: User, action: () => window.open("https://linkedin.com/in/shubhamsharma-ss844686", "_blank") },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        setQuery("");
        setSelected(0);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSelected((s) => Math.min(s + 1, filtered.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
    if (e.key === "Enter" && filtered[selected]) {
      filtered[selected].action();
      setOpen(false);
    }
  };

  const grouped = filtered.reduce((acc, cmd) => {
    if (!acc[cmd.section]) acc[cmd.section] = [];
    acc[cmd.section].push(cmd);
    return acc;
  }, {} as Record<string, typeof commands>);

  return (
    <>
      {/* Trigger hint */}
      <div
        onClick={() => { setOpen(true); setQuery(""); setSelected(0); }}
        className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-2 glass rounded-xl px-3 py-2 cursor-pointer hover:border-[var(--border-hover)] transition-all"
        data-hover
      >
        <Search size={12} className="text-[var(--text-muted)]" />
        <span className="font-mono text-xs text-[var(--text-muted)]">⌘K</span>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-[9990] bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[9991] w-full max-w-xl px-4"
            >
              <div
                className="glass rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 0 80px rgba(0,212,255,0.08), 0 32px 80px rgba(0,0,0,0.8)",
                }}
              >
                {/* Search input */}
                <div className="flex items-center gap-3 px-4 py-4 border-b border-[var(--border)]">
                  <Search size={16} className="text-[var(--text-muted)] flex-shrink-0" />
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
                    onKeyDown={handleKeyDown}
                    placeholder="Search commands..."
                    className="flex-1 bg-transparent outline-none font-mono text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
                  />
                  <kbd className="font-mono text-xs text-[var(--text-muted)] bg-white/5 px-2 py-1 rounded border border-[var(--border)]">ESC</kbd>
                </div>

                {/* Results */}
                <div className="py-2 max-h-72 overflow-y-auto">
                  {Object.entries(grouped).map(([section, cmds]) => (
                    <div key={section}>
                      <div className="px-4 py-2 font-mono text-[10px] text-[var(--text-muted)] tracking-widest uppercase">{section}</div>
                      {cmds.map((cmd) => {
                        const globalIdx = filtered.indexOf(cmd);
                        const isSelected = selected === globalIdx;
                        return (
                          <button
                            key={cmd.id}
                            onMouseEnter={() => setSelected(globalIdx)}
                            onClick={() => { cmd.action(); setOpen(false); }}
                            className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-100"
                            style={{ background: isSelected ? "rgba(255,255,255,0.05)" : "transparent" }}
                          >
                            <div
                              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{
                                background: isSelected ? "rgba(0,212,255,0.12)" : "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.06)",
                              }}
                            >
                              {cmd.id === "github" ? (
                                <GithubIcon size={13} className={isSelected ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"} />
                              ) : (
                                <cmd.icon size={13} style={{ color: isSelected ? "var(--accent)" : "var(--text-secondary)" }} />
                              )}
                            </div>
                            <span className="flex-1 text-sm" style={{ color: isSelected ? "var(--text-primary)" : "var(--text-secondary)" }}>
                              {cmd.label}
                            </span>
                            {isSelected && <ArrowRight size={13} className="text-[var(--accent)]" />}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                  {filtered.length === 0 && (
                    <div className="px-4 py-8 text-center font-mono text-sm text-[var(--text-muted)]">No commands found.</div>
                  )}
                </div>

                {/* Footer */}
                <div className="px-4 py-3 border-t border-[var(--border)] flex items-center gap-4">
                  {[{ keys: "↑↓", label: "navigate" }, { keys: "↵", label: "select" }, { keys: "esc", label: "close" }].map((hint) => (
                    <div key={hint.keys} className="flex items-center gap-1.5">
                      <kbd className="font-mono text-[10px] text-[var(--text-muted)] bg-white/5 px-1.5 py-0.5 rounded border border-[var(--border)]">{hint.keys}</kbd>
                      <span className="font-mono text-[10px] text-[var(--text-muted)]">{hint.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
