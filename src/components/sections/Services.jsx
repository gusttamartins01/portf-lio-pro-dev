import Card from "../ui/Card";
import {
  Code2,
  Smartphone,
  Globe,
  Zap,
  Layers,
  Search
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Criação de aplicações robustas e escaláveis com React, Next.js e as melhores tecnologias do mercado.",
      icon: <Globe className="text-purple-500" size={32} strokeWidth={1.5} />,
      tags: ["React", "Next.js", "Performance"]
    },
    {
      title: "Mobile First",
      description: "Interfaces responsivas e focadas na experiência do usuário, garantindo fluidez em qualquer dispositivo.",
      icon: <Smartphone className="text-purple-500" size={32} strokeWidth={1.5} />,
      tags: ["Responsividade", "UI/UX", "Tailwind"]
    },
    {
      title: "APIs & Backend",
      description: "Desenvolvimento de APIs RESTful e integração com bancos de dados relacionais e não-relacionais.",
      icon: <Layers className="text-purple-500" size={32} strokeWidth={1.5} />,
      tags: ["Node.js", "PostgreSQL", "Prisma"]
    },
    {
      title: "Automação (n8n)",
      description: "Otimização de fluxos de trabalho e processos internos utilizando ferramentas de automação low-code.",
      icon: <Zap className="text-purple-500" size={32} strokeWidth={1.5} />,
      tags: ["n8n", "Workflow", "Produtividade"]
    },
    {
      title: "Clean Code & Refactoring",
      description: "Melhoria de código legado, aplicando padrões de projeto e garantindo manutenibilidade a longo prazo.",
      icon: <Code2 className="text-purple-500" size={32} strokeWidth={1.5} />,
      tags: ["Patterns", "Refactor", "Escalabilidade"]
    },
    {
      title: "SEO & Performance",
      description: "Otimização técnica para motores de busca e carregamento ultra-rápido de páginas (Core Web Vitals).",
      icon: <Search className="text-purple-500" size={32} strokeWidth={1.5} />,
      tags: ["SEO", "Vitals", "Analytics"]
    }
  ];

  return (
    <section id="servicos" className="py-24 px-8 bg-gray-950 text-white font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="mb-20 text-center">
          <h2 className="text-purple-500 font-mono text-sm tracking-[0.5em] uppercase mb-2">// O que eu entrego</h2>
          <h3 className="text-4xl md:text-5xl font-bold italic tracking-tight">
            Meus <span className="text-purple-600 font-extrabold">Serviços</span>.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-gray-900/10 border-white/5 p-8 hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-600/5 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all duration-500" />

              <div className="mb-6 p-3 bg-purple-500/5 rounded-2xl w-fit border border-purple-500/10 group-hover:scale-110 group-hover:border-purple-500/30 transition-all duration-500">
                {service.icon}
              </div>

              <h4 className="text-xl font-bold mb-3 italic tracking-tight group-hover:text-purple-400 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/5 rounded-md text-gray-500 group-hover:text-purple-300 group-hover:border-purple-500/20 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}