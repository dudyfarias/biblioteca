import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Você está aqui"
      className="border-b border-sp-gray-medium/60 bg-sp-white"
    >
      <div className="sp-container flex min-h-12 items-center gap-2 overflow-x-auto text-[12px] text-sp-black/62">
        {items.map((item, i) => (
          <span key={`${item.label}-${i}`} className="flex shrink-0 items-center gap-2">
            {i > 0 && <FiChevronRight className="text-sp-gray-dark" aria-hidden="true" />}
            {item.href ? (
              <Link href={item.href} className="text-sp-blue no-underline hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-sp-black/70">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
