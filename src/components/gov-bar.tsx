export function GovBar() {
  return (
    <div className="bg-[#333] h-10 flex items-center px-6 text-xs text-white gap-4 font-sans">
      <span className="font-bold text-xs">Governo do Estado de Sao Paulo</span>
      <div className="ml-auto flex gap-4 items-center">
        <a href="#" className="text-white/80 text-[11px] no-underline hover:text-white">
          Ouvidoria
        </a>
        <a href="#" className="text-white/80 text-[11px] no-underline hover:text-white">
          Transparencia
        </a>
        <a href="#" className="text-white/80 text-[11px] no-underline hover:text-white">
          Acesso a Informacao
        </a>
        <button className="bg-transparent border border-white/30 text-white text-[10px] px-1.5 py-0.5 rounded-sm cursor-pointer">
          A-
        </button>
        <button className="bg-transparent border border-white/30 text-white text-[10px] px-1.5 py-0.5 rounded-sm cursor-pointer">
          A+
        </button>
      </div>
    </div>
  );
}
