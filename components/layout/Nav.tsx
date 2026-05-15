"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

export default function Nav() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  /* ─── shared button / link style helpers ─── */
  const linkBase: React.CSSProperties = {
    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    letterSpacing: "0.08em",
    padding: "8px 14px",
    borderRadius: "8px",
    border: "none",
    background: "transparent",
    color: "var(--text-secondary)",
    cursor: "pointer",
    transition: "color 0.2s, background 0.2s",
    textDecoration: "none",
    whiteSpace: "nowrap",
  };

  return (
    <>
      {/* ══ Fixed nav bar ══ */}
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          /* always transparent at top; frosted-glass once scrolled */
          background: scrolled ? "rgba(8,8,8,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
        }}
      >
        <div
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "0 32px",
            height: "68px",           /* fixed height — hero uses 100px paddingTop to clear this */
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "3px", flexShrink: 0 }}
          >
            <span
              className="gradient-text"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "20px", lineHeight: 1 }}
            >SS</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "var(--text-muted)", lineHeight: 1 }}>.dev</span>
          </a>

          {/* Desktop links */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: "2px" }}
            className="hidden md:flex"
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => goTo(l.href)}
                style={linkBase}
                onMouseOver={(e) => { e.currentTarget.style.color = "var(--text-primary)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                onMouseOut={(e)  => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.background = "transparent"; }}
              >
                {l.label}
              </button>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...linkBase,
                marginLeft: "10px",
                border: "1px solid rgba(0,212,255,0.35)",
                color: "var(--accent)",
                padding: "8px 18px",
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = "rgba(0,212,255,0.1)"; e.currentTarget.style.borderColor = "rgba(0,212,255,0.6)"; }}
              onMouseOut={(e)  => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(0,212,255,0.35)"; }}
            >
              Resume ↗
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden"
            aria-label="Toggle menu"
            style={{ padding: "8px", border: "none", background: "transparent", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px" }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block", height: "1.5px", width: "22px",
                background: "var(--text-primary)", borderRadius: "2px",
                transition: "transform 0.3s, opacity 0.3s",
                transform:
                  i === 0 && mobileOpen ? "rotate(45deg) translate(4.5px, 4.5px)" :
                  i === 2 && mobileOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" :
                  "none",
                opacity: i === 1 && mobileOpen ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{   opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div style={{
                margin: "0 16px 12px",
                padding: "12px",
                borderRadius: "14px",
                background: "rgba(8,8,8,0.96)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}>
                {NAV_LINKS.map((l) => (
                  <button
                    key={l.href}
                    onClick={() => goTo(l.href)}
                    style={{
                      ...linkBase,
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      fontSize: "13px",
                      padding: "12px 16px",
                    }}
                  >
                    {l.label}
                  </button>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...linkBase,
                    display: "block",
                    textAlign: "center",
                    fontSize: "13px",
                    marginTop: "8px",
                    padding: "12px",
                    border: "1px solid rgba(0,212,255,0.35)",
                    color: "var(--accent)",
                    borderRadius: "10px",
                  }}
                >
                  Download Resume ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
