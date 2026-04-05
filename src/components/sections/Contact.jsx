import { useState } from "react";
import Card from "../ui/Card";
import { Send, User, Mail, MessageSquare, ArrowRight } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert("Mensagem enviada com sucesso!");
      setIsSubmitting(false);
      e.target.reset();
    }, 2000);
  };

  return (
    <section id="contato" className="py-24 px-8 bg-gray-950 text-white font-sans relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">

        <div className="mb-16 text-center">
          <h2 className="text-purple-500 font-mono text-sm tracking-[0.5em] uppercase mb-2">// Vamos conversar?</h2>
          <h3 className="text-4xl md:text-5xl font-bold italic tracking-tight">
            Inicie um <span className="text-purple-600 font-extrabold">Projeto</span>.
          </h3>
          <p className="text-gray-400 mt-4 text-sm max-w-md mx-auto italic">
            Tem uma ideia de serviço ou projeto? Preencha o formulário abaixo e responderei em breve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <Card className="bg-gray-900/10 border-white/5 p-8 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-purple-400 ml-1">Nome Completo</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-500 transition-colors" size={18} />
                    <input
                      type="text"
                      required
                      placeholder="Ex:Gustavo Martins"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-purple-400 ml-1">E-mail</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-500 transition-colors" size={18} />
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-purple-400 ml-1">Sua Ideia ou Projeto</label>
                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-6 text-gray-500 group-focus-within:text-purple-500 transition-colors" size={18} />
                  <textarea
                    required
                    rows="5"
                    placeholder="Descreva brevemente o que você precisa..."
                    className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-12 pr-4 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all placeholder:text-gray-600 resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-fit px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensagem
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </Card>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Disponível para novos projetos
          </div>
          <div className="hidden md:block w-px h-4 bg-white/10" />
          <p>© 2026  Gustavo Martins — Dev Portfolio</p>
        </div>

      </div>
    </section>
  );
}