import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="bg-white px-6 py-2.5 border-b border-off-white text-xs text-slate-400 flex items-center gap-1.5 font-sans">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <FaChevronRight className="text-[9px]" />}
          {item.href ? (
            <Link href={item.href} className="text-gov-red-700 no-underline hover:underline">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}
