"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { PROFILE } from "@/lib/config";

const msg = encodeURIComponent(
  "Olá Lucas, vi seu portfólio e queria falar com você"
);

export function WhatsAppFab() {
  return (
    <motion.a
      href={`https://wa.me/${PROFILE.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar no WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
      className="group fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-[0_10px_30px_rgba(16,185,129,0.4)] transition-transform hover:scale-110 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-green-500/50" />
      <MessageCircle className="relative z-10 h-6 w-6 fill-white text-white" />

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-base-900 px-3 py-1.5 text-xs text-white opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity group-hover:opacity-100">
        Fala comigo!
      </span>
    </motion.a>
  );
}
