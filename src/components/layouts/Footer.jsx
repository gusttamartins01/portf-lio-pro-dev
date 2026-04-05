import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiNodedotjs, SiJavascript } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://api.whatsapp.com/send?phone=5585998568223&text=Olá,%20Gustavo,%20vim%20através%20do%20seu%20site%20.%Gostaria%20de520mais%20informações%20dos%20seus%20serviços",
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
    <footer className="bg-gray-950 border-t border-white/5 pt-16 pb-8 px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-center md:items-start text-center md:text-left">

          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative group">
              <div className="absolute -inset-2 bg-purple-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

              <img
                src="/assets/favicon.png"
                alt="Logo Gustavo Martins"
                className="relative w-24 h-24 md:w-28 md:h-28 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div>
              <h4 className="text-white font-black italic tracking-tighter text-2xl">
                GUSTAVO<span className="text-purple-600">MARTINS</span>
              </h4>
              <p className="text-gray-400 text-[10px] font-mono uppercase tracking-[0.3em]">Full Stack Developer</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-500">Navegação</h5>
            <nav className="flex flex-col gap-2 text-sm font-medium text-gray-400">
              <a href="#inicio" className="hover:text-white transition-colors w-fit mx-auto md:mx-0">Início</a>
              <a href="#sobre" className="hover:text-white transition-colors w-fit mx-auto md:mx-0">Sobre</a>
              <a href="#projetos" className="hover:text-white transition-colors w-fit mx-auto md:mx-0">Projetos</a>
              <a href="#atividades" className="hover:text-white transition-colors w-fit mx-auto md:mx-0">Atividades</a>
              <a href="#habilidades" className="hover:text-white transition-colors w-fit mx-auto md:mx-0">Skills</a>
              <a href="#experiencia" className="hover:text-white transition-colors w-fit mx-auto md:mx-0">Experiência</a>
              <a href="#serviços" className="hover:text-white transition-colors w-fit mx-auto md:mx-0">Serviços</a>
              <a href="#contatos" className="hover:text-white transition-colors w-fit mx-auto md:mx-0">Contatos</a>
            </nav>
          </div>

          <div className="flex flex-col gap-6 items-center md:items-end">
            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-500">Conecte-se</h5>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 
                    text-xl text-gray-400 transition-all duration-300 transform hover:-translate-y-1
                    ${social.color}
                  `}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-purple-600 text-[10px] font-bold uppercase tracking-widest">
            © {currentYear} Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-gray-500">
            <span className="text-[9px] font-black uppercase tracking-widest mr-2 text-purple-600">Built with:</span>
            <div className="flex gap-3 text-lg">
              <SiNextdotjs title="Next.js" className="hover:text-white transition-colors" />
              <SiTailwindcss title="Tailwind CSS" className="hover:text-sky-400 transition-colors" />
              <SiNodedotjs title="Node.js" className="hover:text-green-500 transition-colors" />
              <SiJavascript title="TypeScript" className="hover:text-yellow-500 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}