"use client";

interface TagProps {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export function Tag({ active, onClick, children }: TagProps) {
  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center gap-[5px] text-xs px-3 py-1 rounded-full border cursor-pointer transition-all font-sans ${
        active
          ? "border-gov-red-700 bg-gov-red-100 text-gov-red-700 font-semibold"
          : "border-slate-300 bg-white text-slate-600 hover:border-gov-red-700 hover:text-gov-red-700"
      }`}
    >
      {children}
    </span>
  );
}
