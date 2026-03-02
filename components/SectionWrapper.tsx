import { ReactNode } from "react";
import clsx from "clsx";

interface SectionWrapperProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, eyebrow, title, description, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={clsx("py-16 md:py-24", className)}>
      <div className="container">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-brand.aqua">{eyebrow}</p>}
            {title && <h2 className="mt-3 text-3xl font-semibold text-brand.deep md:text-4xl">{title}</h2>}
            {description && <p className="mt-4 text-base text-brand.deep/80">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
