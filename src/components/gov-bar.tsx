export function GovBar() {
  const links = ["Ouvidoria", "Transparência", "SIC", "Acesso à Informação"];

  return (
    <div className="bg-sp-black text-sp-white">
      <div className="sp-container flex min-h-10 items-center gap-4 py-2 text-[11px]">
        <span className="sp-subtitle text-xs text-sp-white">
          Governo do Estado de São Paulo
        </span>
        <div className="ml-auto hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sp-white/82 no-underline transition-colors hover:text-sp-white"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-1 md:ml-0">
          <button
            type="button"
            aria-label="Reduzir tamanho do texto"
            className="h-7 min-w-7 rounded-md border border-sp-white/30 bg-transparent px-2 text-[10px] text-sp-white transition-colors hover:bg-sp-white/10"
          >
            A-
          </button>
          <button
            type="button"
            aria-label="Aumentar tamanho do texto"
            className="h-7 min-w-7 rounded-md border border-sp-white/30 bg-transparent px-2 text-[10px] text-sp-white transition-colors hover:bg-sp-white/10"
          >
            A+
          </button>
        </div>
      </div>
    </div>
  );
}
