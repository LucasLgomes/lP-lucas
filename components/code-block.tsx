"use client";

import { motion, useInView } from "framer-motion";
import { Circle, Minimize2, Maximize2, X } from "lucide-react";
import { useRef } from "react";

type Token = { t: string; c?: string };

const linhas: Token[][] = [
  [{ t: "// o código por trás da minha história", c: "text-white/35 italic" }],
  [],
  [
    { t: "while", c: "text-fuchsia-400" },
    { t: " (", c: "text-white/50" },
    { t: "vida", c: "text-sky-300" },
    { t: ") {", c: "text-white/50" },
  ],
  [
    { t: "  nuncaPareDeSonhar", c: "text-amber-300" },
    { t: "();", c: "text-white/50" },
  ],
  [
    { t: "  coragem", c: "text-sky-300" },
    { t: " = ", c: "text-white/50" },
    { t: "paixao", c: "text-emerald-400" },
    { t: " + ", c: "text-white/50" },
    { t: "disciplina", c: "text-emerald-400" },
    { t: ";", c: "text-white/50" },
  ],
  [
    { t: "  if", c: "text-fuchsia-400" },
    { t: " (", c: "text-white/50" },
    { t: "cair", c: "text-sky-300" },
    { t: ") ", c: "text-white/50" },
    { t: "levantar", c: "text-amber-300" },
    { t: "();", c: "text-white/50" },
  ],
  [
    { t: "  sucesso", c: "text-sky-300" },
    { t: "++;", c: "text-white/50" },
  ],
  [{ t: "}", c: "text-white/50" }],
  [],
  [
    { t: "// ", c: "text-white/35" },
    { t: "vendi a moto, mas encontrei o caminho.", c: "text-white/45 italic" },
  ],
];

export function CodeBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-8 text-center"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-brand-violetLight">
            Meu código-manifesto
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Um <span className="text-gradient">while</span> que nunca termina
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-base-800/80 to-base-900/90 shadow-[0_20px_80px_-20px_rgba(139,92,246,0.4)] backdrop-blur-md"
        >
          {/* Glow border animado */}
          <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-brand-blue/30 via-brand-violet/30 to-brand-pink/30 opacity-60 blur-md" />

          {/* Header estilo editor */}
          <div className="relative flex items-center justify-between border-b border-white/5 bg-black/30 px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <Circle className="h-2.5 w-2.5 fill-red-500/80 text-red-500/80" />
              <Circle className="h-2.5 w-2.5 fill-yellow-500/80 text-yellow-500/80" />
              <Circle className="h-2.5 w-2.5 fill-green-500/80 text-green-500/80" />
            </div>
            <div className="font-mono text-xs text-white/45">
              vida.ts — lucas@inovacao
            </div>
            <div className="flex items-center gap-1.5 text-white/30">
              <Minimize2 className="h-3 w-3" />
              <Maximize2 className="h-3 w-3" />
              <X className="h-3 w-3" />
            </div>
          </div>

          {/* Código */}
          <div className="relative bg-black/40 p-6 font-mono text-[13px] leading-relaxed sm:p-8 sm:text-sm">
            {linhas.map((linha, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + i * 0.18,
                  ease: "easeOut",
                }}
                className="flex min-h-[1.5rem] items-center gap-4"
              >
                <span className="w-6 flex-shrink-0 select-none text-right text-white/20">
                  {i + 1}
                </span>
                <span>
                  {linha.length === 0 ? (
                    <span>&nbsp;</span>
                  ) : (
                    linha.map((tok, j) => (
                      <span key={j} className={tok.c ?? "text-white/80"}>
                        {tok.t}
                      </span>
                    ))
                  )}
                </span>
              </motion.div>
            ))}

            {/* Cursor piscante no final */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 + linhas.length * 0.18 }}
              className="ml-10 inline-block h-4 w-[2px] animate-pulse bg-brand-violetLight align-middle"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
