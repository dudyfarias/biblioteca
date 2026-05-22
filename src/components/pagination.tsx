"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
}

export function Pagination({ current, total, onChange }: PaginationProps) {
  const pages: number[] = [];
  for (let i = 1; i <= Math.min(total, 5); i++) pages.push(i);

  const btn = (active: boolean, disabled: boolean) =>
    `flex h-10 min-w-10 items-center justify-center rounded-md border px-3 text-[13px] sp-subtitle transition-colors ${
      active
        ? "border-sp-blue bg-sp-blue text-sp-white"
        : "border-sp-gray-medium bg-sp-white text-sp-black/72"
    } ${disabled ? "cursor-default opacity-45" : active ? "" : "hover:border-sp-blue hover:text-sp-blue"}`;

  return (
    <nav className="flex items-center justify-center gap-1" aria-label="Paginação">
      <button
        type="button"
        className={btn(false, current === 1)}
        onClick={() => current > 1 && onChange(current - 1)}
        disabled={current === 1}
        aria-label="Página anterior"
      >
        <FiChevronLeft aria-hidden="true" />
      </button>
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          className={btn(p === current, false)}
          onClick={() => onChange(p)}
          aria-current={p === current ? "page" : undefined}
        >
          {p}
        </button>
      ))}
      {total > 5 && (
        <>
          <span className="flex h-10 min-w-10 items-center justify-center px-2 text-sp-black/50">
            ...
          </span>
          <button type="button" className={btn(false, false)} onClick={() => onChange(total)}>
            {total}
          </button>
        </>
      )}
      <button
        type="button"
        className={btn(false, current === total)}
        onClick={() => current < total && onChange(current + 1)}
        disabled={current === total}
        aria-label="Próxima página"
      >
        <FiChevronRight aria-hidden="true" />
      </button>
    </nav>
  );
}
