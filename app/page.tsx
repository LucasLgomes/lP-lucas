import { Aurora } from "@/components/background/aurora";
import { CodeBlock } from "@/components/code-block";
import { Contato } from "@/components/contato";
import { Experiencia } from "@/components/experiencia";
import { Hero, HeroStats } from "@/components/hero";
import { Integracoes } from "@/components/integracoes";
import { Jornada } from "@/components/jornada";
import { Navbar } from "@/components/navbar";
import { Projetos } from "@/components/projetos";
import { Skills } from "@/components/skills";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function Page() {
  return (
    <main className="relative">
      <Aurora />
      <Navbar />
      <Hero />
      <HeroStats />
      <Jornada />
      <CodeBlock />
      <Experiencia />
      <Projetos />
      <Skills />
      <Integracoes />
      <Contato />
      <WhatsAppFab />
    </main>
  );
}
