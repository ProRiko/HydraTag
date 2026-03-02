import { ReactNode } from "react";
import clsx from "clsx";

type SectionTone = "surface" | "muted" | "navy";

interface SectionWrapperProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  tone?: SectionTone;
}

export function SectionWrapper({ id, eyebrow, title, description, children, className, tone = "surface" }: SectionWrapperProps) {
  const toneClasses: Record<SectionTone, string> = {
    surface: "bg-white",
    muted: "bg-slate-50",
    navy: "bg-[#0F2E4F]"
  };
  const isDark = tone === "navy";

  return (
    <section id={id} className={clsx("py-16 md:py-20", toneClasses[tone], className)}>
      <div className="container">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className={clsx("text-xs uppercase tracking-[0.3em]", isDark ? "text-[#00B4D8]" : "text-brand.aqua")}>{eyebrow}</p>
            )}
            {title && (
              <h2 className={clsx("mt-3 text-3xl font-semibold md:text-4xl", isDark ? "text-white" : "text-brand.deep")}>{title}</h2>
            )}
            {description && (
              <p className={clsx("mt-4 text-base", isDark ? "text-slate-300" : "text-brand.deep/80")}>{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
