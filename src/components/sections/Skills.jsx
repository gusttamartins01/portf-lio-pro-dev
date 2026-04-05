import { motion } from "framer-motion";
import * as Si from "react-icons/si";
import { FaCss3Alt, FaJava } from 'react-icons/fa'; // Importando o Java Clássico aqui

export default function Skills() {
  const getIcon = (iconName) => {
    const Icon = Si[iconName];
    return Icon ? <Icon /> : null;
  };

  const skills = [
    { name: "HTML5", icon: getIcon("SiHtml5"), color: "hover:text-[#E34F26]" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "hover:text-[#1572B6]" },
    { name: "JavaScript", icon: getIcon("SiJavascript"), color: "hover:text-[#F7DF1E]" },
    { name: "TypeScript", icon: getIcon("SiTypescript"), color: "hover:text-[#3178C6]" },
    { name: "React", icon: getIcon("SiReact"), color: "hover:text-[#61DAFB]" },
    { name: "Next.js", icon: getIcon("SiNextdotjs"), color: "hover:text-white" },
    { name: "Node.js", icon: getIcon("SiNodedotjs"), color: "hover:text-[#339933]" },
    { name: "Java", icon: <FaJava />, color: "hover:text-[#6e0101]" },
    { name: "Tailwind", icon: getIcon("SiTailwindcss"), color: "hover:text-[#06B6D4]" },
    { name: "Vite", icon: getIcon("SiVite"), color: "hover:text-[#646cff]" },
    { name: "Supabase", icon: getIcon("SiSupabase"), color: "hover:text-[#3ECF8E]" },
    { name: "Firebase", icon: getIcon("SiFirebase"), color: "hover:text-[#FFCA28]" },
    { name: "n8n", icon: getIcon("SiN8N"), color: "hover:text-[#FF6D5A]" },
    { name: "PostgreSQL", icon: getIcon("SiPostgresql"), color: "hover:text-[#4169E1]" },
    { name: "MySQL", icon: getIcon("SiMysql"), color: "hover:text-[#4479A1]" },
    { name: "Docker", icon: getIcon("SiDocker"), color: "hover:text-[#2496ED]" },
    { name: "Linux", icon: getIcon("SiLinux"), color: "hover:text-[#FCC624]" },
    { name: "Figma", icon: getIcon("SiFigma"), color: "hover:text-[#FFC0CB]" },
    { name: "Git", icon: getIcon("SiGit"), color: "hover:text-[#F05032]" },
    { name: "GitHub", icon: getIcon("SiGithub"), color: "hover:text-white" },
  ];

  const scrollingSkills = [...skills, ...skills];

  return (
    <section id="habilidades" className="py-20 bg-gray-950 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <h2 className="text-purple-500 font-mono text-sm tracking-[0.5em] uppercase mb-2 text-center">// Tech Stack</h2>
        <h3 className="text-3xl md:text-4xl font-bold italic text-white text-center">
          Minhas <span className="text-purple-600 font-extrabold">Habilidades</span>.
        </h3>
      </div>

      <div className="relative flex items-center">
        <div className="absolute left-0 w-24 md:w-40 h-full bg-gradient-to-r from-gray-950 to-transparent z-10" />
        <div className="absolute right-0 w-24 md:w-40 h-full bg-gradient-to-l from-gray-950 to-transparent z-10" />

        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity
          }}
        >
          {scrollingSkills.map((skill, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center gap-4 transition-all duration-500 text-gray-600 grayscale hover:grayscale-0 scale-100 hover:scale-125 ${skill.color}`}
            >
              <span className="text-5xl md:text-6xl">
                {skill.icon}
              </span>
              <span className="opacity-0 group-hover:opacity-100 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-opacity duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}