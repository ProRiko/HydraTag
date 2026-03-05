import { ReactNode } from "react";
import clsx from "clsx";
import { AnalyticsWaypoint } from "./AnalyticsWaypoint";

type SectionTone = "primary" | "secondary";

interface SectionWrapperProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  tone?: SectionTone;
  analyticsId?: string;
}

const slugify = (value?: string) => value?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  tone = "primary",
  analyticsId
}: SectionWrapperProps) {
  const toneClasses: Record<SectionTone, string> = {
    primary: "bg-[#0A2540]",
    secondary: "bg-[#0F2E4F]"
  };

  const baseId = id ?? slugify(title ?? "section");
  const headingId = title ? `${baseId}-heading` : undefined;
  const descriptionId = description ? `${baseId}-description` : undefined;

  return (
    <section
      id={id}
      role="region"
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
      className={clsx("relative py-16 md:py-20", toneClasses[tone], className)}
    >
      {analyticsId && (
        <AnalyticsWaypoint
          eventId={`section-${analyticsId}`}
          category="section"
          action={analyticsId}
          context={title}
        />
      )}
      <div className="container text-white">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-[#00B4D8]">{eyebrow}</p>}
            {title && (
              <h2 id={headingId} className="mt-3 text-3xl font-bold text-white md:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p id={descriptionId} className="mt-4 max-w-2xl text-base text-slate-300">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
