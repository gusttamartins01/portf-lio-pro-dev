export default function About() {
  return (
    <section id="sobre" className="relative w-full py-24 px-8 bg-gray-950 overflow-hidden text-white">
      <div className="absolute top-1/2 -left-24 w-96 h-96 bg-purple-900/10 blur-[120px] rounded-full -z-10"></div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div className="relative group flex justify-center">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-800 to-indigo-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>

          <div className="relative bg-gray-900/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <img
              src="/assets/aboutMe.png"
              alt="Gustavo Martins - Dev"
              className="rounded-xl shadow-2xl grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition duration-700 w-full max-w-sm"
            />

            <div className="absolute -bottom-4 -left-4 bg-gray-900 border border-purple-500/30 p-3 rounded-lg shadow-2xl">
              <p className="text-[10px] uppercase tracking-widest text-purple-400 font-bold">Formação em curso</p>
              <p className="text-sm font-semibold text-gray-200">Análise e Dev. de Sistemas</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-purple-600 font-mono text-sm tracking-[0.4em] uppercase">
              // Quem sou eu
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Transformando <span className="text-purple-800">desafios</span> em soluções de software.
            </h3>
          </div>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed text-center md:text-left">
            <p>
              Olá, eu me chamo <span className="text-white font-semibold italic">Gustavo Martins</span>,
              natural de <span className="text-white font-semibold italic">Fortaleza, Ceará</span>.
              Minha jornada na tecnologia é movida pela vontade constante de entender o "porquê" das coisas.
              Como estudante de Análise e Desenvolvimento de Sistemas e Desenvolvedor Full Stack, acredito que uma boa solução não nasce do código,
              mas da compreensão do problema que ele se propõe a resolver.
            </p>

            <p>
              Minha atuação foca na criação de aplicações que equilibram <span className="text-white font-medium">funcionalidade,
                performance e experiência do usuário</span>. Valorizo a organização, o código limpo e a
              escalabilidade, garantindo que cada solução entregue seja sustentável a longo prazo.
            </p>

            <p>
              Para mim, a tecnologia deve ser um facilitador. Por isso, busco sempre o equilíbrio entre
              as melhores práticas de engenharia e a entrega de valor real, transformando ideias complexas
              em sistemas eficientes, acessíveis e prontos para o mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}