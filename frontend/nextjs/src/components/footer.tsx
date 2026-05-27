import { GovernmentLogo, LibraryMark } from "@/components/sp-identity";

const GOV_LINKS = ["Ouvidoria", "Transparência", "SIC", "Acesso à Informação"];
const LIBRARY_LINKS = [
  "Portal de Compras SP",
  "Laboratório de Logística",
  "Legislação NLLC",
  "Capacitação",
];

export function Footer() {
  return (
    <footer className="mt-auto bg-sp-black text-sp-white">
      <div className="h-1 bg-[linear-gradient(90deg,#FF161F_0_36%,#FFFFFF_36%_42%,#034EA2_42%_100%)]" />
      <div className="sp-container py-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="rounded-lg border border-sp-white/15 bg-sp-white/5 p-5">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div>
                  <GovernmentLogo tone="white" orientation="vertical" />
                </div>
                <div className="hidden h-12 w-px bg-sp-white/16 sm:block" />
                <div className="text-sp-white [&_*]:text-sp-white">
                  <LibraryMark />
                </div>
              </div>
              <p className="mt-5 max-w-[560px] text-[13px] leading-relaxed text-sp-white/72">
                Biblioteca Digital de Logística Pública do Governo do Estado de São Paulo.
                Secretaria de Gestão e Governo Digital.
              </p>
            </div>
          </div>

          <FooterColumn title="Biblioteca" items={LIBRARY_LINKS} />
          <FooterColumn title="Governo SP" items={GOV_LINKS} />
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-sp-white/12 pt-5 text-[11px] text-sp-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Governo do Estado de São Paulo - SGGD</span>
          <span>Desenvolvido por Prodesp</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="sp-subtitle mb-4 text-[13px] text-sp-white">{title}</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-[12px] text-sp-white/70 no-underline transition-colors hover:text-sp-white"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
