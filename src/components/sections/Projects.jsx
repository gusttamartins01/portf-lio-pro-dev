import Card from "../ui/Card";
import * as Lucide from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiGithub
} from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "Finans Fullstack",
      description: "Plataforma de controle financeiro com fluxos de caixa e análise de gastos detalhada.",
      objective: "Organização financeira simplificada com foco em UX moderna.",
      tech: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
      github: "https://github.com/gustavomartins",
      demo: "https://projeto-demo.vercel.app",
      image: "/assets/project-1.png"
    },
    {
      title: "DevQuest Platform",
      description: "Sistema gamificado para praticar lógica de programação.",
      objective: "Engajamento através de desafios e recompensas reais.",
      tech: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
      github: "https://github.com/gustavomartins",
      demo: "https://projeto-demo.vercel.app",
      image: "/assets/project-2.png"
    },
    {
      title: "Alpha Automation",
      description: "Dashboard de monitoramento industrial em tempo real.",
      objective: "Métricas críticas para tomada de decisão rápida.",
      tech: [
        { name: "React", icon: <SiReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
      ],
      github: "https://github.com/gustavomartins",
      demo: "https://projeto-demo.vercel.app",
      image: "/assets/project-3.png"
    }
  ];

  return (
    <section id="projetos" className="py-24 px-8 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto">

        <div className="mb-14 text-center md:text-left">
          <h2 className="text-purple-500 font-mono text-sm tracking-[0.5em] uppercase mb-2">// Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold italic">
            Projetos em <span className="text-purple-600 font-extrabold">Destaque</span>.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group p-0 flex flex-col h-full border-white/5 bg-gray-900/20 overflow-hidden">

              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700 ease-in-out"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h4>

                <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="bg-purple-900/10 border border-purple-500/10 p-3 rounded-xl mb-5">
                  <span className="text-[9px] font-bold text-purple-500 uppercase tracking-widest block mb-1">Propósito</span>
                  <p className="text-[11px] text-gray-300 italic leading-snug">{project.objective}</p>
                </div>

                <div className="flex flex-wrap gap-4 mb-8 mt-auto text-xl text-gray-500 group-hover:text-purple-300 transition-colors">
                  {project.tech.map((t, idx) => (
                    <span key={idx} title={t.name}>{t.icon}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 rounded-xl  text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                    title="Ver código no GitHub"
                  >
                    <SiGithub size={20} />
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-[10px] font-black text-purple-600 hover:text-purple-700 transition-all uppercase tracking-[0.2em]"
                  >
                    Live Demo
                    <div className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300">
                      {Lucide.ExternalLink && <Lucide.ExternalLink size={14} />}
                    </div>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}