import Image from "next/image";
import { FiBookOpen } from "react-icons/fi";

export function GovernmentLogo({
  compact = false,
  tone = "color",
  orientation = "horizontal",
}: {
  compact?: boolean;
  tone?: "color" | "white";
  orientation?: "horizontal" | "vertical";
}) {
  const src =
    orientation === "vertical"
      ? tone === "white"
        ? "/brand/sp-gov-br-vertical-white.png"
        : "/brand/sp-gov-br-vertical-rgb.png"
      : tone === "white"
        ? "/brand/sp-gov-br-horizontal-white.png"
        : "/brand/sp-gov-br-horizontal-rgb.png";
  const alt = "SP.GOV.BR - Governo do Estado de São Paulo";

  return (
    <Image
      src={src}
      alt={alt}
      width={orientation === "horizontal" ? 196 : 92}
      height={orientation === "horizontal" ? 50 : 68}
      priority={orientation === "horizontal" && tone === "color"}
      className={
        orientation === "horizontal"
          ? `${compact ? "h-[44px] w-auto md:h-[48px]" : "h-[54px] w-auto"}`
          : `${compact ? "h-[58px] w-auto" : "h-[72px] w-auto"}`
      }
    />
  );
}

export function LibraryMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-sp-blue-petrol text-sp-white">
        <FiBookOpen className="text-[22px]" aria-hidden="true" />
      </div>
      <div>
        <div className="sp-title text-[16px] uppercase leading-none text-sp-black">
          Biblioteca Digital
        </div>
        {!compact && (
          <div className="mt-1 text-[11px] leading-none text-sp-black/65">
            Logística Pública
          </div>
        )}
      </div>
    </div>
  );
}

export function SPGeometry({
  className = "",
  interactive = false,
}: {
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative ${interactive ? "sp-geometry-motion" : ""} ${className}`}
    >
      <div className="sp-geometry-block sp-geometry-red absolute left-[8%] top-[12%] h-[42%] w-[34%] rounded-md bg-sp-red" />
      <div className="sp-geometry-block sp-geometry-blue absolute right-[14%] top-[12%] h-[28%] w-[28%] rounded-md bg-sp-blue" />
      <div className="sp-geometry-block sp-geometry-black absolute bottom-[18%] left-[24%] h-[22%] w-[48%] rounded-md bg-sp-black" />
      <div className="sp-geometry-block sp-geometry-cyan absolute bottom-[24%] right-[8%] h-[18%] w-[18%] rounded-md bg-sp-blue-light" />
    </div>
  );
}
