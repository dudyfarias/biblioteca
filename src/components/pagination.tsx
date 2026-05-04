"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
}

export function Pagination({ current, total, onChange }: PaginationProps) {
  const pages: number[] = [];
  for (let i = 1; i <= Math.min(total, 5); i++) pages.push(i);

  const btn = (active: boolean, disabled: boolean) =>
    `w-9 h-9 flex items-center justify-center border rounded text-[13px] font-semibold cursor-pointer transition-all font-sans ${
      active
        ? "border-gov-red-700 bg-gov-red-700 text-white"
        : "border-slate-300 bg-white text-slate-600"
    } ${disabled ? "opacity-40 cursor-default" : "hover:border-gov-red-700"}`;

  return (
    <div className="flex gap-1 items-center justify-center">
      <button
        className={btn(false, current === 1)}
        onClick={() => current > 1 && onChange(current - 1)}
        disabled={current === 1}
      >
        <FaChevronLeft className="text-[11px]" />
      </button>
      {pages.map((p) => (
        <button
          key={p}
          className={btn(p === current, false)}
          onClick={() => onChange(p)}
        >
          {p}
        </button>
      ))}
      {total > 5 && (
        <>
          <span className={btn(false, false)}>...</span>
          <button className={btn(false, false)} onClick={() => onChange(total)}>
            {total}
          </button>
        </>
      )}
      <button
        className={btn(false, current === total)}
        onClick={() => current < total && onChange(current + 1)}
        disabled={current === total}
      >
        <FaChevronRight className="text-[11px]" />
      </button>
    </div>
  );
}
