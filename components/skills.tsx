"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  Workflow,
  ShoppingCart,
  Layers,
  TrendingUp,
  CreditCard,
} from "lucide-react";

type Categoria = {
  titulo: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  items: string[];
};

const categorias: Categoria[] = [
  {
    titulo: "Back-end",
    icon: Code,
    accent: "from-emerald-500 to-teal-500",
    items: ["PHP", "Node.js", "Python", "REST APIs", "Postman", "Webhooks"],
  },
  {
    titulo: "Front-end",
    icon: Layers,
    accent: "from-sky-500 to-blue-500",
    items: ["JavaScript", "jQuery", "Bootstrap", "HTML & CSS", "ECharts", "PWA"],
  },
  {
    titulo: "Dados",
    icon: Database,
    accent: "from-orange-500 to-amber-500",
    items: ["SQL Server", "MySQL", "PostgreSQL", "Oracle"],
  },
  {
    titulo: "E-commerce & Plataformas",
    icon: ShoppingCart,
    accent: "from-pink-500 to-rose-500",
    items: ["VTEX", "VTEX IO", "iFood", "AnyMarket", "Mercado Livre", "TikTok Shop"],
  },
  {
    titulo: "Pagamentos & Checkout",
    icon: CreditCard,
    accent: "from-yellow-500 to-green-500",
    items: [
      "Mercado Pago",
      "PagBank",
      "VTEX Checkout",
      "PIX",
      "Cartão de Crédito",
      "Webhooks de pagamento",
    ],
  },
  {
    titulo: "Automação & Integrações",
    icon: Workflow,
    accent: "from-fuchsia-500 to-purple-500",
    items: ["n8n", "IA Agents", "ERP Procfit", "ERP Senior", "WhatsApp API"],
  },
  {
    titulo: "Cloud & Analytics",
    icon: Cloud,
    accent: "from-cyan-500 to-sky-500",
    items: [
      "Google Cloud Platform",
      "Google Analytics (GA4)",
      "Google Merchant Center",
      "Docker",
    ],
  },
];

const emProgresso = [
  {
    nome: "Java",
    versao: "21",
    pct: 60,
    cor: "from-orange-500 to-red-500",
    conceitos: ["POO", "Classes & Objetos", "Collections", "Streams", "Exceptions", "Records"],
  },
  {
    nome: "Spring Boot",
    versao: "3.5",
    pct: 55,
    cor: "from-green-600 to-emerald-500",
    conceitos: [
      "Spring Security",
      "JPA / Hibernate",
      "JWT + Refresh Token",
      "Flyway",
      "Injeção de Dependência",
      "REST Controllers",
    ],
  },
  {
    nome: "Angular",
    versao: "21",
    pct: 50,
    cor: "from-red-600 to-rose-500",
    conceitos: ["Components", "Services", "Routing", "Reactive Forms", "RxJS", "SCSS"],
  },
  {
    nome: "Ionic",
    versao: "Latest",
    pct: 35,
    cor: "from-blue-600 to-indigo-500",
    conceitos: ["Capacitor", "UI Components", "PWA", "Mobile First"],
  },
];

const certificacoes = [
  { nome: "Node.js", curso: "Rocketseat", ano: "2025" },
  { nome: "Full Stack PHP", curso: "Alura", ano: "2024" },
  { nome: "PHP", curso: "Alura", ano: "2024" },
  { nome: "SQL Server 2022", curso: "Alura", ano: "2024" },
  { nome: "Git e GitHub", curso: "Alura", ano: "2024" },
  { nome: "HTML e CSS", curso: "Alura", ano: "2024" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-brand-violetLight">
            Stack Técnica
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Ferramentas do <span className="text-gradient">ofício</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            O que eu uso todo dia em produção — e o que estou dominando agora
            para levantar o próximo nível.
          </p>
        </motion.div>

        {/* Grid de categorias */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categorias.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:border-white/15"
              >
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${c.accent} opacity-20 blur-3xl transition-opacity group-hover:opacity-40`}
                />
                <div className="relative">
                  <div
                    className={`inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${c.accent} p-[1px]`}
                  >
                    <div className="grid h-full w-full place-items-center rounded-[11px] bg-base-900">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">
                    {c.titulo}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/75 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Em Progresso */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-12"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-amber to-brand-pink p-[1px]">
              <div className="grid h-full w-full place-items-center rounded-[11px] bg-base-900">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <span className="absolute inset-0 animate-pulse-ring rounded-xl bg-brand-amber/50" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">
                Em progresso
              </h3>
              <p className="text-sm text-white/60">
                Construindo o IntegraTudo na prática com essa stack
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {emProgresso.map((s, i) => (
              <motion.div
                key={s.nome}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative glass rounded-2xl p-5 transition-all hover:border-white/15"
              >
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${s.cor} opacity-10 blur-2xl transition-opacity group-hover:opacity-25`}
                />

                <div className="relative">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-base font-semibold text-white">
                        {s.nome}
                      </span>
                      <span className="rounded-full bg-white/5 px-2 py-0.5 font-mono text-[10px] text-white/60">
                        {s.versao}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-amber/15 px-2 py-0.5 text-[10px] font-medium text-brand-amber ring-1 ring-brand-amber/30">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-amber" />
                      Aprendendo
                    </span>
                  </div>

                  <div className="relative h-2 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                      className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${s.cor}`}
                    />
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  </div>

                  <div className="mt-4">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-white/45">
                      O que já domino
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.conceitos.map((c) => (
                        <span
                          key={c}
                          className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-white/75 transition-colors hover:border-white/20 hover:text-white"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificações */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12"
        >
          <h3 className="mb-5 font-display text-2xl font-semibold text-white">
            Certificações
          </h3>
          <div className="flex flex-wrap gap-3">
            {certificacoes.map((c) => (
              <div
                key={c.nome}
                className="glass rounded-full px-4 py-2 text-sm transition-all hover:border-white/20"
              >
                <span className="text-white">{c.nome}</span>
                <span className="ml-2 text-white/50">
                  · {c.curso} · {c.ano}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-white/50">
            Graduado em Análise e Desenvolvimento de Sistemas — Faculdade Vincit
          </p>
        </motion.div>
      </div>
    </section>
  );
}
