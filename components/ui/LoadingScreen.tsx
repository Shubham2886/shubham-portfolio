"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast progress animation
    const intervals = [
      setTimeout(() => setProgress(30), 100),
      setTimeout(() => setProgress(65), 400),
      setTimeout(() => setProgress(88), 700),
      setTimeout(() => setProgress(100), 1000),
      setTimeout(() => setDone(true), 1300),
    ];
    return () => intervals.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: "#080808" }}
        >
          {/* Grid bg */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          {/* Orbs */}
          <div
            className="absolute w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, #00d4ff, transparent)", top: "30%", left: "30%" }}
          />
          <div
            className="absolute w-48 h-48 rounded-full blur-3xl opacity-15"
            style={{ background: "radial-gradient(circle, #7c3aed, transparent)", bottom: "30%", right: "30%" }}
          />

          <div className="relative flex flex-col items-center gap-10">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div
                className="font-display text-5xl font-bold mb-2"
                style={{
                  fontFamily: "Syne, sans-serif",
                  background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                SS
              </div>
              <div
                className="font-mono text-xs tracking-[0.25em] uppercase"
                style={{ fontFamily: "'DM Mono', monospace", color: "#444" }}
              >
                Shubham Sharma
              </div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-3"
            >
              <div
                className="w-48 h-px relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <motion.div
                  className="absolute left-0 top-0 h-full"
                  style={{
                    background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
                    width: `${progress}%`,
                    transition: "width 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                />
              </div>
              <div
                className="font-mono text-xs"
                style={{ fontFamily: "'DM Mono', monospace", color: "#333" }}
              >
                {progress}%
              </div>
            </motion.div>

            {/* Rotating status lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-xs text-center"
              style={{ fontFamily: "'DM Mono', monospace", color: "#333" }}
            >
              {progress < 30
                ? "Initializing runtime..."
                : progress < 65
                ? "Loading systems..."
                : progress < 90
                ? "Mounting components..."
                : "Ready."}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
