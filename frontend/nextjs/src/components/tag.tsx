"use client";

interface TagProps {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export function Tag({ active, onClick, children }: TagProps) {
  const className = `inline-flex min-h-8 items-center rounded-md border px-3 text-[12px] transition-colors ${
    active
      ? "border-sp-red bg-gov-red-100 text-sp-red sp-subtitle"
      : "border-sp-gray-medium bg-sp-white text-sp-black/72 hover:border-sp-blue hover:text-sp-blue"
  } ${onClick ? "cursor-pointer" : ""}`;

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
    );
  }

  return <span className={className}>{children}</span>;
}
