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
          <div className="rounded-xl overflow-hidden border border-white/10 bg-gray-900/50 aspect-video group">
            <img
              src="/assets/aula.png"
              alt="Gustavo dando aula"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => e.target.src = "https://placehold.co/600x400/111/444?text=Foto+da+Aula"}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="text-purple-400 font-bold mb-2 uppercase text-[10px] tracking-[0.2em]">Mentoria e Aulas</h4>
            <p className="text-[12px] text-gray-400 leading-relaxed italic">
              "Ensinar é a melhor forma de aprender. Foco em HTML, CSS, JS e a realidade do mercado."
            </p>
          </div>
        </div>
      )
    },
    comunidade: {
      title: "Comunidade Tech",
      description: "Participação ativa em eventos e meetups.",
      icon: <Lucide.Users size={16} />,
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-in slide-in-from-bottom-4 duration-500 w-full">
          {['event1.png', 'event2.png', 'event8.png', 'event3.png', 'event4.png', 'event5.png', 'event6.png', 'event7.png', 'event9.png'].map((imgName, i) => (
            <div key={i} className="aspect-square bg-gray-900/50 rounded-2xl border border-white/5 overflow-hidden group shadow-lg">
              <img
                src={`/assets/${imgName}`}
                alt={`Evento ${i + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 opacity-80 group-hover:opacity-100"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/400x400/0a0a0a/333?text=Event+${i + 1}`;
                }}
              />
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
        <div className="flex flex-col items-center animate-in zoom-in duration-500 w-full">
          <div className="w-full max-w-[220px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-purple-500/20 shadow-2xl shadow-purple-900/20 mb-8 bg-gray-900/80">
            <video
              controls
              className="w-full h-full object-cover"
              poster="/assets/event3.png"
            >
              <source src="/assets/devInfluence.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>

          <div className="flex gap-10 text-2xl text-gray-500 border-t border-white/5 pt-6 w-full justify-center">
            <a href="https://www.instagram.com/gustta_gus/" target="_blank" className="hover:text-pink-500 transition-all hover:-translate-y-1">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@gusttaa.dev" target="_blank" className="hover:text-white transition-all hover:-translate-y-1">
              <FaTiktok />
            </a>
          </div>
        </div>
      )
    }
  };

  return (
    <section id="atividades" className="py-24 px-8 bg-gray-950 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-purple-500 font-mono text-[11px] tracking-[0.5em] uppercase mb-2">// Lifestyle</h2>
          <h3 className="text-4xl font-bold italic tracking-tight">
            Além do <span className="text-purple-600 font-extrabold text-5xl">Código</span>.
          </h3>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
          {Object.keys(activities).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-[10px] uppercase tracking-widest transition-all duration-300 border
                ${activeTab === key
                  ? "bg-purple-600 border-purple-600 text-white shadow-xl shadow-purple-500/20"
                  : "bg-gray-900/50 border-white/5 text-gray-400 hover:border-purple-500/40 hover:text-gray-300"}
              `}
            >
              {activities[key].icon}
              {key}
            </button>
          ))}
        </div>

        <Card className="min-h-[400px] border-white/5 bg-white/[0.02] backdrop-blur-sm p-8 md:p-12 rounded-[2rem]">
          <div className="mb-10 border-b border-white/5 pb-6 text-center md:text-left">
            <h4 className="text-2xl font-bold italic text-white mb-2 uppercase">{activities[activeTab].title}</h4>
            <p className="text-gray-400 text-sm max-w-lg">{activities[activeTab].description}</p>
          </div>
          <div className="flex-grow flex items-center justify-center">
            {activities[activeTab].content}
          </div>
        </Card>
      </div>
    </section>
  );
}