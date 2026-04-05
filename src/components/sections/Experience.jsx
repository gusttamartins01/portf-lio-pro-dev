import Card from "../ui/Card";
import * as Lucide from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "ChaoScience Ciência e Tecnologia",
      role: "estágio Dev Full Stack ",
      period: "Abr - 2026 — Presente",
      description: "SaaS voltado para profissionais da área da sáude focados em condicionamento físico, alto rendimento e performance espor",
      achievements: [
        "Implementação de arquitetura escalável integrando C# e React/Next.js.",
        "Foco em usabilidade para profissionais de saúde que monitoram atletas e pacientes."
      ],
      current: true,
    },
    {
      company: "Virtutis Energy",
      role: "Dev Full Stack Ingressante",
      period: "Mar - 2026 — Presente",
      description: "Fintech de energia renovável focada em locação solar e democratização de investimentos (Vitis).",
      achievements: [
        "Manutenção e implementação de novas funcionalidades no ecossistema Web (Next.js) e Mobile (Swift).",
        "Implementação de automações e fluxos de trabalho otimizados com Inteligência Artificial.",
      ],
      current: true,
    },
    {
      company: "HypeCode Software House - Espírito Santo, Brasil",
      role: "Dev Full Stack Júnior pj",
      period: "Set - 2025 — Mar - 2026",
      description: "Foco total em ecossistema Next.js e integrações com APIs complexas.",
      achievements: [
        "Desenvolvimento de sistemas completos.",
        "Desenvolvimento de SaaS.",
      ],
      current: false,
    },
    {
      company: "RoboDev Software House",
      role: "Dev Front-end Júnior pj",
      period: "Mai - 2025 — Nov - 2025",
      description: "Início da jornada focado em práticas de Clean Code e Git Flow.",
      achievements: [
        "Desenvolvimento de  Landing Pages.",
        "Criação de projetos para clientes.",
      ],
      current: false,
    },
  ];

  return (
    <section id="experiencia" className="py-24 px-8 bg-gray-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="mb-20 text-center">
          <h2 className="text-purple-500 font-mono text-sm tracking-[0.5em] uppercase mb-2">// Carreira</h2>
          <h3 className="text-4xl font-bold italic">
            Minha <span className="text-purple-600 font-extrabold">Jornada</span>.
          </h3>
        </div>

        <div className="relative">

          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className={`
                flex flex-col md:flex-row items-center mb-12 last:mb-0 relative
                ${isEven ? "md:justify-start" : "md:justify-end"}
              `}>

                <div className={`
                  hidden md:block absolute left-1/2 -translate-x-1/2 top-10 w-4 h-4 rounded-full border-4 border-gray-950 z-20
                  ${exp.current ? "bg-purple-500 animate-pulse shadow-[0_0_15px_rgba(168,85,247,0.5)]" : "bg-gray-700"}
                `} />

                <div className={`w-full md:w-[45%] ${isEven ? "md:text-right" : "md:text-left"}`}>
                  <Card className="bg-gray-900/10 border-white/5 p-5 hover:border-purple-500/20 transition-all group">

                    <div className={`flex flex-col mb-4 ${isEven ? "md:items-end" : "md:items-start"}`}>
                      <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 px-2 py-0.5 bg-white/5 rounded-full border border-white/5 w-fit">
                        {exp.period}
                      </span>
                      <h4 className="text-lg font-black text-white uppercase italic tracking-tight group-hover:text-purple-400 transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-purple-500 font-mono text-xs font-bold">{exp.company}</p>
                    </div>

                    <p className="text-gray-400 text-[11px] mb-4 leading-relaxed italic">
                      {exp.description}
                    </p>

                    <div className={`space-y-2 flex flex-col ${isEven ? "md:items-end" : "md:items-start"}`}>
                      {exp.achievements.map((item, i) => (
                        <div key={i} className={`flex items-center gap-2 ${isEven ? "flex-row-reverse text-right" : "flex-row text-left"}`}>
                          <div className="min-w-[5px] h-[5px] rounded-full bg-purple-600 shadow-[0_0_5px_rgba(147,51,234,0.5)]" />
                          <p className="text-[10px] text-gray-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}