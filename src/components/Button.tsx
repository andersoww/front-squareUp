"use client";

import clsx from "clsx";
import { HTMLAttributes, useEffect, useRef } from "react";

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  variants: "primary" | "secondary";
}

function Button({ className, variants, children, ...rest }: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <button
      type="button"
      className={clsx(
        "py-4 px-3 rounded-md text-sm font-medium relative overflow-hidden min-w-max",
        {
          "bg-Green-50 text-Grey-15": variants === "primary",
          "text-white border border-Grey-20 border-solid bg-[#242424] bg-opacity-60":
            variants === "secondary",
        }
      )}
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
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
}

export { Button };
