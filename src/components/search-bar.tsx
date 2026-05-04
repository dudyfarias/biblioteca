"use client";

import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
  size?: "md" | "lg";
}

export function SearchBar({
  value,
  onChange,
  onSearch,
  placeholder = "Buscar artigos, documentos, autores...",
  size = "md",
}: SearchBarProps) {
  const lg = size === "lg";

  return (
    <div className="relative flex gap-2">
      <div className="relative flex-1">
        <FaSearch
          className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${
            lg ? "left-4 text-base" : "left-3 text-sm"
          }`}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
          placeholder={placeholder}
          className={`w-full border border-slate-300 rounded bg-white text-slate-900 font-sans outline-none focus:border-gov-red-700 ${
            lg
              ? "py-3.5 px-4 pl-[46px] text-base"
              : "py-[9px] px-3 pl-[38px] text-sm"
          }`}
        />
      </div>
      <button
        onClick={onSearch}
        className={`bg-gov-red-700 text-white border-none rounded font-semibold cursor-pointer font-sans flex items-center gap-[7px] shrink-0 transition-colors hover:bg-gov-red-800 ${
          lg ? "py-3.5 px-7 text-[15px]" : "py-[9px] px-5 text-sm"
        }`}
      >
        <FaSearch /> Buscar
      </button>
    </div>
  );
}
