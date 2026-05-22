"use client";

import { FiSearch } from "react-icons/fi";

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
  placeholder = "Buscar no acervo",
  size = "md",
}: SearchBarProps) {
  const lg = size === "lg";

  return (
    <div className={`flex w-full flex-col gap-3 sm:flex-row ${lg ? "max-w-[780px]" : ""}`}>
      <label className="relative min-w-0 flex-1">
        <span className="sr-only">Pesquisar no acervo</span>
        <FiSearch
          className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-sp-blue ${
            lg ? "left-5 text-[20px]" : "left-4 text-[17px]"
          }`}
          aria-hidden="true"
        />
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
          placeholder={placeholder}
          className={`w-full rounded-lg border border-sp-gray-medium bg-sp-white text-sp-black outline-none transition-colors placeholder:text-sp-black/45 focus:border-sp-blue ${
            lg ? "h-14 px-5 pl-14 text-[15px]" : "h-11 px-4 pl-11 text-[13px]"
          }`}
        />
      </label>
      <button
        type="button"
        onClick={onSearch}
        className={`sp-button-primary shrink-0 px-6 ${
          lg ? "h-14 text-[14px]" : "h-11 text-[13px]"
        }`}
      >
        <FiSearch aria-hidden="true" />
        Buscar
      </button>
    </div>
  );
}
