"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Layers3,
  Truck,
  BarChart3,
  Bot,
  ShoppingBag,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Projeto = {
  titulo: string;
  subtitulo: string;
  descricao: string;
  badges: string[];
  status?: "producao" | "desenvolvimento" | "producao-interna";
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  size: "lg" | "md" | "sm";
  destaque?: string;
};

const projetos: Projeto[] = [
  {
    titulo: "TudonoCardapio",
    subtitulo: "SaaS white-label de cardápio e delivery",
    descricao:
      "Plataforma completa em produção com clientes ativos. Lojas por subdomínio, painel do estabelecimento, app do motoboy, PDV para garçons, marketplace por cidade e afiliados. Integração com checkout de pagamento (Mercado Pago e PagBank) e IA que conversa com o lojista via n8n + WhatsApp.",
    badges: ["PHP", "MySQL", "PWA", "Mercado Pago", "PagBank", "IA + n8n"],
    status: "producao",
    icon: UtensilsCrossed,
    accent: "from-orange-500 via-rose-500 to-pink-500",
    size: "lg",
    destaque: "Case com clientes reais",
  },
  {
    titulo: "IntegraTudo",
    subtitulo: "SaaS B2B multiempresa e multiloja",
    descricao:
      "Plataforma central com motor de conectores para iFood e Mercado Livre. Autenticação JWT + refresh, fila interna persistida, Flyway, Docker. Arquitetura preparada para multiempresa, multiloja, multicanal e permissões por loja.",
    badges: ["Java 21", "Spring Boot 3.5", "Angular 21", "PostgreSQL 17", "Docker"],
    status: "desenvolvimento",
    icon: Layers3,
    accent: "from-brand-blue via-brand-violet to-brand-pink",
    size: "lg",
    destaque: "Mais novo projeto",
  },
  {
    titulo: "LOCUS — CD para Lojas",
    subtitulo: "Controle logístico Farma Conde",
    descricao:
      "Rastreio de volumes e romaneios do Centro de Distribuição até as lojas. Validação final do processo, apoio a entrada/saída/transferências e integração com o ERP.",
    badges: ["Node.js", "SQL Server", "ERP Senior"],
    status: "producao-interna",
    icon: Truck,
    accent: "from-emerald-500 to-teal-500",
    size: "md",
  },
  {
    titulo: "Dashboard Conde Negócios",
    subtitulo: "Posicionamento Digital",
    descricao:
      "Visão por canal (site, app Android, app iOS), vendas por hora e previsibilidade do dia. Bootstrap + ECharts consumindo dados consolidados da VTEX.",
    badges: ["ECharts", "Bootstrap", "VTEX IO"],
    icon: BarChart3,
    accent: "from-cyan-500 to-sky-500",
    size: "md",
  },
  {
    titulo: "Automações com IA",
    subtitulo: "n8n + agentes inteligentes",
    descricao:
      "Fluxos autônomos com agentes de IA que respondem dúvidas, disparam alertas operacionais via WhatsApp e conversam direto com lojistas.",
    badges: ["n8n", "IA Agents", "WhatsApp API"],
    icon: Bot,
    accent: "from-fuchsia-500 to-purple-500",
    size: "sm",
  },
  {
    titulo: "Integração Marketplaces",
    subtitulo: "VTEX · iFood · ML · TikTok · Checkout",
    descricao:
      "Pedidos, PBM via VTEX IO, 260+ lojas iFood, NF/XML do Mercado Livre (AnyMarket), fluxo fiscal do TikTok Shop e integração com checkout de pagamento (VTEX Checkout, Mercado Pago e PagBank) via webhooks.",
    badges: ["VTEX IO", "iFood API", "AnyMarket", "VTEX Checkout", "Webhooks"],
    icon: ShoppingBag,
    accent: "from-amber-500 to-orange-500",
    size: "sm",
  },
];

const statusLabels: Record<NonNullable<Projeto["status"]>, { label: string; color: string }> = {
  producao: { label: "Em produção", color: "bg-emerald-500/15 text-emerald-400 ring-emerald-500/30" },
  desenvolvimento: { label: "Em desenvolvimento", color: "bg-brand-blue/15 text-brand-blueLight ring-brand-blue/30" },
  "producao-interna": { label: "Produção interna", color: "bg-sky-500/15 text-sky-400 ring-sky-500/30" },
};

const sizeClasses = {
  lg: "md:col-span-3 md:row-span-2",
  md: "md:col-span-3",
  sm: "md:col-span-3",
};

function handleSpotlight(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

export function Projetos() {
  return (
    <section id="projetos" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-brand-violetLight">
            Projetos & Cases
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Produtos que <span className="text-gradient">respiram</span> em produção
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Nada de protótipo. Aqui tem SaaS com cliente pagando, 260+ lojas
            integradas e automações economizando horas reais de operação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-6 md:grid-rows-[repeat(3,minmax(220px,auto))]">
          {projetos.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.titulo}
                onMouseMove={handleSpotlight}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={cn(
                  "spotlight group relative overflow-hidden rounded-3xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.07]",
                  sizeClasses[p.size]
                )}
              >
                {/* Acento de fundo */}
                <div
                  className={cn(
                    "pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40",
                    p.accent
                  )}
                />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={cn(
                        "grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br p-[1px]",
                        p.accent
                      )}
                    >
                      <div className="grid h-full w-full place-items-center rounded-[11px] bg-base-900">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      {p.destaque && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-violet/20 to-brand-pink/20 px-2.5 py-1 text-[10px] font-medium text-brand-violetLight ring-1 ring-brand-violet/30">
                          <Sparkles className="h-3 w-3" />
                          {p.destaque}
                        </span>
                      )}
                      {p.status && (
                        <span
                          className={cn(
                            "rounded-full px-2.5 py-0.5 text-[10px] font-medium ring-1",
                            statusLabels[p.status].color
                          )}
                        >
                          {statusLabels[p.status].label}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 flex-1">
                    <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                      {p.titulo}
                    </h3>
                    <p className="mt-1 text-sm text-brand-violetLight">
                      {p.subtitulo}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">
                      {p.descricao}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.badges.map((b) => (
                      <span
                        key={b}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-white/70"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-brand-violetLight opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Saber mais <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
