import { FaBook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#333] text-white pt-8 pb-5 px-6 font-sans mt-auto">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <div className="font-bold text-[15px] mb-3 flex items-center gap-2">
              <FaBook className="text-gov-red-500" />
              BIBLIOTECA
            </div>
            <div className="text-xs text-white/65 leading-relaxed">
              Biblioteca Digital de Logistica Publica do Governo do Estado de Sao
              Paulo. Secretaria de Gestao e Governo Digital — SGGD.
            </div>
          </div>
          <div>
            <div className="font-semibold text-xs uppercase tracking-wider mb-3 text-white/50">
              Links Uteis
            </div>
            {[
              "Portal de Compras SP",
              "Laboratorio de Logistica",
              "Legislacao NLLC",
              "Capacitacao",
            ].map((l) => (
              <div
                key={l}
                className="text-xs text-white/75 mb-1.5 cursor-pointer hover:text-white"
              >
                {l}
              </div>
            ))}
          </div>
          <div>
            <div className="font-semibold text-xs uppercase tracking-wider mb-3 text-white/50">
              Governo SP
            </div>
            {["Ouvidoria", "Transparencia", "SIC", "Acesso a Informacao"].map(
              (l) => (
                <div
                  key={l}
                  className="text-xs text-white/75 mb-1.5 cursor-pointer hover:text-white"
                >
                  {l}
                </div>
              ),
            )}
          </div>
        </div>
        <div className="border-t border-white/10 pt-4 flex justify-between items-center">
          <span className="text-[11px] text-white/45">
            &copy; 2026 Governo do Estado de Sao Paulo — SGGD
          </span>
          <span className="text-[11px] text-white/45">
            Desenvolvido por Prodesp
          </span>
        </div>
      </div>
    </footer>
  );
}
