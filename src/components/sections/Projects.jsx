import Card from "../ui/Card";
import * as Lucide from "lucide-react";
import {
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiGithub,
  SiNodedotjs,
  SiDocker,
  SiJavascript,
  SiSupabase,
  SiMinutemailer,
  SiVite,
} from "react-icons/si";
import { FaCss3Alt } from 'react-icons/fa'; // Importando o Java Clássico aqui


export default function Projects() {
  const projects = [
    {
      title: "Smart Inventory System",
      description: "Dashboard Full Stack para controle de inventário em tempo real. Implementa CRUD completo e detalhad0.",
      objective: "Organização do inventário simplificada com foco em UX moderna.",
      tech: [
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
      github: "https://github.com/gusttamartins01/Estoque-Pro",
      demo: "https://estoque-pro-flame.vercel.app/",
      image: "/assets/project1.png"
    },
    {
      title: "Professional Portfolio",
      description: "Portfólio profissional desenvolvido para apresentar minha trajetória como desenvolvedor, incluindo habilidades técnicas, projetos, experiências e atividades. O projeto foi construído com foco em design moderno, responsividade e boa experiência do usuário, servindo como vitrine das minhas competências em desenvolvimento web."
      ,
      objective: "Apresentar de forma clara e profissional minhas habilidades, projetos e evolução como desenvolvedor, facilitando a visualização da minha experiência prática e acadêmica, além de demonstrar domínio em tecnologias modernas de desenvolvimento web."
      ,
      tech: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "React", icon: <SiReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "SupaBase", icon: <SiSupabase /> },
      ],
      github: "https://github.com/gusttamartins01/portf-lio-pro-dev",
      demo: "https://gustavo-portfolio-pro-dev.vercel.app/",
      image: "/assets/portfolio-me.png"
    },
    {
      title: 'Project "My First Job"',
      description: "Sistema desenvolvido para dar suporte aos alunos do ensino médio, e pessoas que desejam entrar ou se realocar no mercado de trabalho.",
      objective: "Facilitar a transição acadêmica para o mercado de trabalho através de ferramentas práticas de empregabilidade.",
      tech: [
        { name: "React", icon: <SiReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Supabase", icon: <SiSupabase /> },
      ],
      github: "https://github.com/gusttamartins01/project-meu-primeiro-trampo",
      demo: "https://project-meu-primeiro-trampo.vercel.app/",
      image: "/assets/project2.png"
    },
    {
      title: 'Project UniConnect',
      description: "Sistema para comunidade academica de alunos e professores universitários",
      objective: "Fomentar o networking e a colaboração científica através de um ecossistema digital intuitivo e seguro.",
      tech: [
        { name: "React", icon: <SiReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Supabase", icon: <SiSupabase /> },
      ],
      github: "https://github.com/gusttamartins01/connect-hub",
      demo: "https://learn-connect-hub-93.vercel.app/",
      image: "/assets/project3.png"
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