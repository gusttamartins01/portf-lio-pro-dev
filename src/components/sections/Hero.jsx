export default function Hero() {
  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center px-8 py-24 overflow-hidden">
      <img
        src="/assets/bgHero4.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gray-950/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

        <div className="text-center md:text-left order-2 md:order-1">

          <div className="flex items-center justify-center md:justify-start mb-6">
            <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
                Disponível para novos projetos
              </span>
            </div>
          </div>

          <p className="text-gray-300 text-2xl md:text-5xl mb-4">
            Olá, me chamo
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-purple-800 leading-tight">
            Gustavo Martins
          </h1>

          <h2 className="text-2xl md:text-5xl text-gray-300 mt-4">
            Desenvolvedor Full Stack
          </h2>

          <p className="text-gray-200/70 mt-4 text-lg max-w-xl">
            Desenvolvedor Full Stack focado em construir sistemas modernos e
            softwares resilientes. Traduzo desafios de mercado em soluções
            escaláveis que unem inovação, testes e resultados reais.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/assets/Gustavo Martins - Currículo profissional.pdf"
              download
              className="px-6 py-3 bg-purple-800 text-white rounded-xl font-semibold hover:bg-purple-500 transition duration-300 shadow-md hover:shadow-purple-800/50"
            >
              Baixar Currículo
            </a>
            <a
              href="#projetos"
              className="px-6 py-3 border border-purple-500 text-purple-400 rounded-xl font-semibold hover:bg-purple-800 hover:text-white transition duration-300"
            >
              Projetos
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5585998568223&text=Olá,%20Gustavo,%20vim%20através%20do%20seu%20site.%20Gostaria%20de%20mais%20informações%20dos%20seus%20serviços"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-purple-500 text-purple-500 rounded-xl font-semibold hover:bg-purple-800 hover:text-white transition duration-300"
            >
              Contato
            </a>

          </div>
        </div>

        <div className="flex justify-center order-1 md:order-2">
          <div className="relative">
            <img
              src="/assets/me.png"
              alt="Gustavo Martins"
              className="w-60 h-60 md:w-96 md:h-96 object-cover rounded-full border-4 border-purple-800 shadow-xl transform transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}