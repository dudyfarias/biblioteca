"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GovernmentLogo, LibraryMark } from "@/components/sp-identity";

const NAV_ITEMS = [
  { label: "Início", href: "/" },
  { label: "Acervo", href: "/acervo" },
  { label: "Categorias", href: "/categorias" },
  { label: "Autores", href: "/autores" },
  { label: "Sobre", href: "/sobre" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-sp-gray-medium/60 bg-sp-white/95 backdrop-blur">
      <div className="sp-container flex min-h-[78px] items-center gap-6 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-4 no-underline">
          <GovernmentLogo compact />
          <div className="hidden h-10 w-px bg-sp-gray-medium lg:block" />
          <div className="hidden lg:block">
            <LibraryMark compact />
          </div>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href + "/"));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-[13px] no-underline transition-colors ${
                  active
                    ? "bg-sp-gray-light text-sp-blue sp-subtitle"
                    : "text-sp-black/72 hover:bg-sp-gray-light hover:text-sp-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

      </div>
      <div className="h-1 bg-[linear-gradient(90deg,#000000_0_24%,#FFFFFF_24%_30%,#FF161F_30%_58%,#034EA2_58%_100%)]" />
    </header>
  );
}
