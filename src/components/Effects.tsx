"use client";
import clsx from "clsx";
import { HTMLProps, ReactNode, useRef } from "react";

function EffectRipple({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
} & HTMLProps<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className={clsx("relative overflow-hidden min-w-max", className)}
      ref={ref}
      onClick={(event) => {
        const btn = event.currentTarget;
        const circle = document.createElement("span");
        const rect = btn.getBoundingClientRect();

        const diameter = Math.max(btn.clientWidth, btn.clientHeight);
        const radius = diameter / 2;

        const x = event.clientX - rect.left - radius;
        const y = event.clientY - rect.top - radius;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        circle.classList.add("ripple");

        const ripple = btn?.getElementsByClassName("ripple")[0];

        if (ripple) {
          ripple.remove();
        }

        btn?.appendChild(circle);
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export { EffectRipple };
