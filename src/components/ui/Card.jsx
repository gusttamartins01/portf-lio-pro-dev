export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        /* Fundo e Bordas */
        bg-gray-900/40 
        backdrop-blur-sm
        border border-white/5 
        rounded-3xl 
        
        /* Espaçamento e Layout */
        p-6 
        overflow-hidden
        flex flex-col
        
        /* Interação e Transição */
        hover:border-purple-500/30 
        hover:bg-gray-900/60
        shadow-2xl shadow-black/50
        transition-all 
        duration-500 
        ease-out
        
        /* Classe customizada vinda de fora */
        ${className}
      `}
    >
      {children}
    </div>
  );
}