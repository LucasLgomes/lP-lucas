"use client";

import { motion } from "framer-motion";

export function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grid base */}
      <div className="absolute inset-0 grid-bg" />

      {/* Orbs animados (mais leves — só 2, animação simples) */}
      <motion.div
        className="aurora-orb h-[55vw] w-[55vw] bg-brand-blue/40 will-change-transform"
        style={{ top: "-15%", left: "-15%" }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora-orb h-[50vw] w-[50vw] bg-brand-violet/40 will-change-transform"
        style={{ top: "30%", right: "-20%" }}
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise" />

      {/* Radial dark fade nas bordas */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#05060a_75%)]" />
    </div>
  );
}
