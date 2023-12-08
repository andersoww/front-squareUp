"use client";

import clsx from "clsx";
import { HTMLAttributes, ReactNode, useState } from "react";

interface CardQuestionProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children?: ReactNode;
  question?: string;
  reply?: string;
  count?: string;
}

function Close({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(
        "lucide lucide-x hover:cursor-pointer stroke-Green-70",
        className
      )}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function Plus({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(
        "lucide lucide-plus hover:cursor-pointer stroke-white",
        className
      )}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function CardQuestion({ question, reply, count }: CardQuestionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(
        "flex px-10 py-6 border border-Grey-15 gap-6 overflow-hidden items-center hover:cursor-pointer duration-500 h-full"
      )}
      onClick={() => setIsOpen((state) => !state)}
    >
      <div
        className={clsx(
          "border p-5 text-white border-Grey-15 w-[70px] h-[70px] duration-500 rounded-2xl flex justify-center items-center card-icon text-2xl font-semibold",
          {
            "!text-Green-50 -translate-y-1/2": isOpen,
          }
        )}
      >
        {count}
      </div>

      <div
        className={clsx(
          "flex flex-col items-center w-full duration-500 gap-4 mt-4 h-fit"
        )}
      >
        <div className="flex justify-between w-full items-center">
          <h3
            className={clsx("font-medium text-lg w-[90%]", {
              "text-Green-70": isOpen,
            })}
          >
            {question}
          </h3>
          {!isOpen ? (
            <Plus className="w-7 h-7" />
          ) : (
            <Close className="w-7 h-7" />
          )}
        </div>

        <div
          className={clsx(
            "collapsible-text overflow-hidden rounded transition-all duration-500",
            {
              "max-h-[300px] translate-y-0 opacity-100": isOpen,
              "max-h-0 opacity-0 -translate-y-full": !isOpen,
            }
          )}
        >
          <p>{reply}</p>
        </div>
      </div>
    </div>
  );
}

export { CardQuestion };
