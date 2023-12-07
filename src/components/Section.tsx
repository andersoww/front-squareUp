import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children?: ReactNode;
}

function Section({ children, className, ...rest }: SectionProps) {
  return (
    <section className="flex w-full justify-center relative" {...rest}>
      <div
        className={clsx(
          "max-w-7xl flex flex-col justify-center items-center w-full relative border border-Grey-15",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}

export { Section };
