"use client";

import { QRCodeSVG } from "qrcode.react";
import { motion } from "framer-motion";
import { FileDown, Scan } from "lucide-react";
import { SITE_URL } from "@/lib/config";

const CV_URL = `${SITE_URL.replace(/\/$/, "")}/cv.pdf`;

export function QrCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative grid grid-cols-1 gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-6 sm:p-6"
    >
      {/* QR code — aponta direto pro PDF do CV */}
      <div className="relative mx-auto rounded-xl bg-white p-3 shadow-lg sm:mx-0">
        <QRCodeSVG
          value={CV_URL}
          size={140}
          level="H"
          bgColor="#ffffff"
          fgColor="#05060A"
          marginSize={0}
        />
        <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-r from-brand-blue via-brand-violet to-brand-pink opacity-60 blur-md" />
      </div>

      {/* Conteúdo */}
      <div className="text-center sm:text-left">
        <div className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-brand-violet/15 px-2.5 py-0.5 text-[10px] font-medium text-brand-violetLight ring-1 ring-brand-violet/30">
          <Scan className="h-3 w-3" />
          Currículo em um scan
        </div>
        <h3 className="mt-1 font-display text-lg font-semibold text-white">
          Escaneie e baixe meu currículo
        </h3>
        <p className="mt-1 text-xs text-white/60 sm:text-sm">
          Aponte a câmera do celular no QR code e o PDF do currículo é baixado
          direto. Sem cadastro, sem login.
        </p>

        <a
          href="/cv.pdf"
          download="Lucas_Vinicius_CV.pdf"
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-display text-xs font-medium text-white/90 transition-all hover:border-white/30 hover:bg-white/10"
        >
          <FileDown className="h-3.5 w-3.5" />
          Ou baixar direto (PDF)
        </a>
      </div>
    </motion.div>
  );
}
