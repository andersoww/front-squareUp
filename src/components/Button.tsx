"use client";

import { EffectRipple } from "@/components/Effects";
import clsx from "clsx";
import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  variants: "primary" | "secondary";
}

function Button({ className, variants, children, ...rest }: ButtonProps) {
  return (
    <EffectRipple>
      <button
        type="button"
        className={clsx(
          "py-4 px-3 rounded-md text-sm font-medium relative overflow-hidden min-w-max",
          {
            "bg-Green-50 text-Grey-15": variants === "primary",
            "text-white border border-Grey-20 border-solid bg-[#242424] bg-opacity-60":
              variants === "secondary",
          },
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </EffectRipple>
  );
}

export { Button };
