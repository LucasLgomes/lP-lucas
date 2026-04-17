"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, MapPin, Calendar, FileDown } from "lucide-react";
import { MagneticButton } from "./magnetic-button";
import { QrCard } from "./qr-card";

const contatos = [
  {
    icon: Mail,
    label: "E-mail",
    value: "lucaslgomes549@gmail.com",
    href: "mailto:lucaslgomes549@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "lucaslima012",
    href: "https://www.linkedin.com/in/lucaslima012",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "LucasLgomes",
    href: "https://github.com/LucasLgomes/",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(12) 99662-3567",
    href: "tel:+5512996623567",
  },
];

export function Contato() {
  return (
    <section id="contato" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-base-800/80 via-base-900/80 to-base-900/80 p-8 backdrop-blur-xl sm:p-14"
        >
          {/* Efeitos de fundo */}
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-brand-violet/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl" />
          <div className="absolute inset-0 grid-bg opacity-50" />

          <div className="relative">
            {/* Badge VTEX Day */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-violet/30 bg-brand-violet/10 px-4 py-1.5 text-xs text-brand-violetLight backdrop-blur-md"
            >
              <Calendar className="h-3.5 w-3.5" />
              Estarei no VTEX Day 2026 — vamos nos conhecer pessoalmente
            </motion.div>

            <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Bora construir algo que <span className="text-gradient">resolva de verdade?</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
              Integrações com marketplaces, SaaS com IA, automações que poupam
              horas de operação. Se o problema for real, o código aparece.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <MagneticButton
                href="mailto:lucaslgomes549@gmail.com"
                icon={<Mail className="h-4 w-4" />}
              >
                Entrar em contato
              </MagneticButton>
              <MagneticButton
                href="https://www.linkedin.com/in/lucaslima012"
                variant="ghost"
                icon={<Linkedin className="h-4 w-4" />}
              >
                LinkedIn
              </MagneticButton>
              <MagneticButton
                href="https://github.com/LucasLgomes/"
                variant="ghost"
                icon={<Github className="h-4 w-4" />}
              >
                GitHub
              </MagneticButton>
              <MagneticButton
                href="/cv.pdf"
                variant="ghost"
                icon={<FileDown className="h-4 w-4" />}
                download="Lucas_Vinicius_CV.pdf"
              >
                Baixar CV
              </MagneticButton>
            </div>

            <div className="mt-10">
              <QrCard />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {contatos.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 ring-1 ring-white/10">
                      <Icon className="h-4 w-4 text-brand-violetLight" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] uppercase tracking-widest text-white/45">
                        {c.label}
                      </div>
                      <div className="truncate text-sm text-white transition-colors group-hover:text-brand-violetLight">
                        {c.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-10 flex items-center gap-2 text-xs text-white/45">
              <MapPin className="h-3.5 w-3.5" />
              São José dos Campos · SP — aberto a projetos remotos e presenciais
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-white/40 sm:flex-row">
          <div>© {new Date().getFullYear()} Lucas Vinicius — Feito com muito café e código.</div>
          <div className="font-mono">
            Next.js · Tailwind · Framer Motion · Docker
          </div>
        </footer>
      </div>
    </section>
  );
}
