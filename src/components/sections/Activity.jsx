import { useState } from "react";
import Card from "../ui/Card";
import * as Lucide from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Activity() {
  const [activeTab, setActiveTab] = useState("professor");

  const activities = {
    professor: {
      title: "Professor de Desenvolvimento Web",
      description: "Compartilhando conhecimento e guiando a próxima geração de desenvolvedores.",
      icon: <Lucide.GraduationCap size={16} />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
          <div className="rounded-xl overflow-hidden border border-white/5 bg-gray-900/50 aspect-video">
            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-[11px] text-gray-600 italic p-4 text-center">
              [Sua Foto/Vídeo Dando Aula]
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="text-purple-400 font-bold mb-1 uppercase text-[10px] tracking-[0.2em]">Mentoria e Aulas</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed italic line-clamp-3">
              "Ensinar é a melhor forma de aprender. Foco HTML, CSS, JS, Git, GitHub e a realidade do mercado de trabalho."
            </p>
          </div>
        </div>
      )
    },
    comunidade: {
      title: "Membro de Comunidade",
      description: "Participação ativa em eventos, meetups e fóruns de tecnologia.",
      icon: <Lucide.Users size={16} />,
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-in slide-in-from-bottom-4 duration-500">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-square bg-gray-800/40 rounded-lg border border-white/5 flex items-center justify-center text-[10px] text-gray-700 italic p-2 text-center">
              Foto Evento {i}
            </div>
          ))}
        </div>
      )
    },
    influencer: {
      title: "Dev Influencer",
      description: "Conteúdo para inspirar e educar devs nas redes.",
      icon: <Lucide.Megaphone size={16} />,
      content: (
        <div className="flex flex-col items-center animate-in zoom-in duration-500">

          <div className="w-full max-w-[200px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-purple-500/20 shadow-xl shadow-purple-900/10 mb-8 bg-gray-900/50">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
          </div>

          <div className="flex gap-8 text-3xl text-gray-600 border-t border-white/5 pt-6 w-full justify-center">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all hover:scale-110" title="Ver no Instagram">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all hover:scale-110" title="Ver no TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>
      )
    }
  };

  return (
    <section id="atividades" className="py-24 px-8 bg-gray-950 text-white font-sans">
      <div className="max-w-3xl mx-auto">

        <div className="mb-10 text-center md:text-left">
          <h2 className="text-purple-500 font-mono text-[11px] tracking-[0.5em] uppercase mb-1.5">// Além do código</h2>
          <h3 className="text-3xl md:text-4xl font-bold italic tracking-tight">
            Minhas <span className="text-purple-600 font-extrabold">Atividades</span>.
          </h3>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-2.5 mb-8">
          {Object.keys(activities).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-[9px] uppercase tracking-widest transition-all duration-300 border
                ${activeTab === key
                  ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-500/15"
                  : "bg-gray-900/40 border-white/5 text-gray-500 hover:border-purple-500/40 hover:text-gray-300"}
              `}
            >
              {activities[key].icon}
              {key}
            </button>
          ))}
        </div>

        <Card className="min-h-[300px] border-white/5 bg-gray-900/10 backdrop-blur-md p-6 md:p-8 transition-all duration-500 rounded-3xl overflow-hidden relative">
          <div className="mb-8 border-b border-white/5 pb-6">
            <h4 className="text-xl font-bold italic tracking-tight mb-1 text-white">{activities[activeTab].title}</h4>
            <p className="text-gray-400 text-xs">{activities[activeTab].description}</p>
          </div>

          <div className="w-full h-full flex items-center justify-center flex-col">
            {activities[activeTab].content}
          </div>
        </Card>
      </div>
    </section>
  );
}