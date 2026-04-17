"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";

const experiencias = [
  {
    empresa: "Farma Conde",
    cargo: "Desenvolvedor Full Stack Pleno",
    time: "Time de Inovação",
    periodo: "jul/2025 — atual",
    ativo: true,
    highlights: [
      "Integração com API da VTEX (pedidos e PBM via VTEX IO), consolidação em SQL Server",
      "Dashboard Conde Negócios (Bootstrap + ECharts): canais, vendas por hora e previsibilidade do dia",
      "iFood: coleta centralizada de pedidos de 260+ lojas em base interna",
      "Mercado Livre via AnyMarket: NF/XML para o ERP Procfit",
      "TikTok Shop: implantação do fluxo fiscal ponta a ponta",
      "LOCUS: rastreio de volumes/romaneios CD → Lojas e rotinas de estoque",
      "Automações: n8n + WhatsApp, Python para XML de NF-e, Node.js para integrações",
    ],
  },
  {
    empresa: "Farma Conde",
    cargo: "Assistente de ERP",
    time: "Operação",
    periodo: "jul/2024 — jul/2025",
    ativo: false,
    highlights: [
      "Conferência de notas fiscais e consistência de lançamentos no ERP Senior",
      "Monitoramento da operação e identificação de pontos de atenção",
      "Suporte a usuários com foco em redução de retrabalho",
    ],
  },
];

export function Experiencia() {
  return (
    <section id="experiencia" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-brand-violetLight">
            Experiência
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Entregando <span className="text-gradient">valor real</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Da operação de ERP à inovação full stack. Mesma empresa, duas
            camadas de maturidade — Scrum/Kanban com gestão no Businessmap.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiencias.map((exp, i) => (
            <motion.div
              key={exp.cargo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Glow border on hover */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-brand-blue via-brand-violet to-brand-pink opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-30" />

              <div className="relative glass rounded-3xl p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 ring-1 ring-white/10">
                      <Building2 className="h-5 w-5 text-brand-violetLight" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                        {exp.cargo}
                      </h3>
                      <p className="mt-0.5 text-sm text-white/60">
                        {exp.empresa} · {exp.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:flex-col sm:items-end">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                      <Calendar className="h-3 w-3" />
                      {exp.periodo}
                    </div>
                    {exp.ativo && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-medium text-emerald-400 ring-1 ring-emerald-500/30">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        Atual
                      </span>
                    )}
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-white/5 pt-6">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-white/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-violetLight" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
