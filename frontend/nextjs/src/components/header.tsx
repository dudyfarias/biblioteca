"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { GovernmentLogo, LibraryMark } from "@/components/sp-identity";

const NAV_ITEMS = [
  { label: "Início", href: "/" },
  { label: "Acervo", href: "/acervo" },
  { label: "Metodologia", href: "/metodologia" },
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
          <div className="hidden xl:block">
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
        <details className="group ml-auto md:hidden">
          <summary aria-label="Menu principal" className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-md border border-sp-gray-medium text-sp-blue focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden">
            <FiMenu size={22} aria-hidden="true" />
          </summary>
          <nav aria-label="Navegação principal móvel" className="absolute top-full right-4 left-4 border border-sp-gray-medium bg-sp-white p-3 shadow-sm">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className="block rounded-md px-3 py-3 text-[14px] text-sp-blue hover:bg-sp-gray-light" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
      <div className="h-1 bg-sp-red" />
    </header>
  );
}
