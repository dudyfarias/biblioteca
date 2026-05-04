"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBook,
  FaSignInAlt,
  FaUser,
} from "react-icons/fa";

const NAV_ITEMS = [
  { label: "Acervo", href: "/acervo" },
  { label: "Categorias", href: "/categorias" },
  { label: "Autores", href: "/autores" },
  { label: "Sobre", href: "/sobre" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-slate-100 shadow-sm px-6 flex items-center h-[72px] gap-8 font-sans">
      <Link href="/" className="flex items-center gap-3 no-underline shrink-0">
        <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center">
          <FaBook className="text-gov-red-500 text-lg" />
        </div>
        <div>
          <div className="text-[17px] font-bold text-slate-800 leading-tight">
            BIBLIOTECA
          </div>
          <div className="text-[10px] text-slate-400 leading-tight">
            Digital de Logistica Publica
          </div>
        </div>
      </Link>

      <nav className="flex gap-0.5 ml-auto">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold px-3.5 py-2 whitespace-nowrap transition-all no-underline border-b-2 ${
                active
                  ? "text-gov-red-700 border-gov-red-700"
                  : "text-[#333] border-transparent hover:text-gov-red-700 rounded"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex gap-2 items-center ml-4">
        <Link
          href="/login"
          className="font-sans text-[13px] font-semibold px-4 py-[7px] rounded border-2 border-gov-red-700 text-gov-red-700 bg-white flex items-center gap-1.5 transition-all hover:bg-gov-red-100 no-underline"
        >
          <FaSignInAlt /> Entrar
        </Link>
      </div>
    </header>
  );
}
