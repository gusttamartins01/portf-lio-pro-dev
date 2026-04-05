import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiNodedotjs, SiJavascript } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://api.whatsapp.com/send?phone=5585998568223&text=Olá...",
      color: "hover:text-green-500 hover:border-green-500/20"
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/gustta_gus/",
      color: "hover:text-pink-500 hover:border-pink-500/20"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/gustavo-martins-197b70298/",
      color: "hover:text-blue-500 hover:border-blue-500/20"
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/gusttamartins01",
      color: "hover:text-white hover:border-white/20"
    },
  ];

  return (
    <footer className="bg-gray-950 border-t border-white/5 pt-20 pb-10 px-8 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Layout Principal - Flexbox para empurrar conteúdo para as pontas */}
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-20">

          {/* Lado Esquerdo: Branding */}
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <div className="relative group mb-6">
              <div className="absolute -inset-2 bg-purple-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <img
                src="/assets/favicon.png"
                alt="Logo"
                className="relative w-20 h-20 object-contain transition-transform duration-500 group-hover:animate-pulse"
              />
            </div>
            <h4 className="text-white font-black italic tracking-tighter text-3xl mb-2">
              GUSTAVO<span className="text-purple-600">MARTINS</span>
            </h4>
            <p className="text-gray-500 text-[15px] font-bold leading-relaxed uppercase tracking-[0.2em] font-mono text-center md:text-left">
              Desenvolvedor Full Stack
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-center md:text-left">

            <div className="flex flex-col gap-5">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-600 opacity-80">Navegação</h5>
              <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-xs font-bold text-gray-400">
                <a href="#inicio" className="hover:text-white transition-all hover:translate-x-1">Início</a>
                <a href="#projetos" className="hover:text-white transition-all hover:translate-x-1">Projetos</a>
                <a href="#sobre" className="hover:text-white transition-all hover:translate-x-1">Sobre</a>
                <a href="#atividades" className="hover:text-white transition-all hover:translate-x-1">Atividades</a>
                <a href="#experiencia" className="hover:text-white transition-all hover:translate-x-1">Experiência</a>
                <a href="#habilidades" className="hover:text-white transition-all hover:translate-x-1">Skills</a>
                <a href="#serviços" className="hover:text-white transition-all hover:translate-x-1">Serviços</a>
                <a href="#contatos" className="hover:text-white transition-all hover:translate-x-1">Contatos</a>
              </nav>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-5 items-center md:items-start">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-600 opacity-80">Social</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-lg text-gray-400 transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-purple-600 text-[10px] font-bold uppercase tracking-widest">
              © {currentYear} Gustavo Martins — Fortaleza, Ceará, Brasil. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[9px] font-black uppercase tracking-widest text-purple-600">Powered by</span>
            <div className="flex gap-4 text-lg text-gray-500">
              <SiNextdotjs title="Next.js" className="hover:text-white transition-colors cursor-pointer" />
              <SiTailwindcss title="Tailwind CSS" className="hover:text-sky-400 transition-colors cursor-pointer" />
              <SiNodedotjs title="Node.js" className="hover:text-green-500 transition-colors cursor-pointer" />
              <SiJavascript title="JavaScript" className="hover:text-yellow-500 transition-colors cursor-pointer rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}