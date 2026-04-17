import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucas Vinicius — Dev Full Stack | Integrações, Automações e SaaS",
  description:
    "Desenvolvedor Full Stack Pleno. Criador do TudonoCardapio e IntegraTudo. Especialista em VTEX, iFood, automações com n8n e integrações de e-commerce.",
  keywords: [
    "Lucas Vinicius",
    "Desenvolvedor Full Stack",
    "VTEX",
    "iFood",
    "IntegraTudo",
    "TudonoCardapio",
    "Java Spring Boot",
    "Angular",
    "Node.js",
    "n8n",
    "SaaS",
    "São José dos Campos",
  ],
  authors: [{ name: "Lucas Vinicius" }],
  openGraph: {
    title: "Lucas Vinicius — Dev Full Stack",
    description:
      "Integrações, SaaS multiempresa e automações com IA. TudonoCardapio, IntegraTudo e +260 lojas integradas no iFood.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetBrains.variable}`}
    >
      <body className="relative min-h-screen bg-base-950 text-[#e8eaf0] antialiased">
        {children}
      </body>
    </html>
  );
}
