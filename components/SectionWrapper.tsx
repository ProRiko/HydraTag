import { ReactNode } from "react";
import clsx from "clsx";

type SectionTone = "primary" | "secondary";

interface SectionWrapperProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  tone?: SectionTone;
}

export function SectionWrapper({ id, eyebrow, title, description, children, className, tone = "primary" }: SectionWrapperProps) {
  const toneClasses: Record<SectionTone, string> = {
    primary: "bg-[#0A2540]",
    secondary: "bg-[#0F2E4F]"
  };

  return (
    <section id={id} className={clsx("py-16 md:py-20", toneClasses[tone], className)}>
      <div className="container text-white">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-[#00B4D8]">{eyebrow}</p>}
            {title && <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{title}</h2>}
            {description && <p className="mt-4 max-w-2xl text-base text-slate-300">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
