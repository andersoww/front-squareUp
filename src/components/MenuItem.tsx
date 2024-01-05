"use client";

import { SmoothScroll } from "@/utils/SmoothScroll";
import clsx from "clsx";

function MenuItem({
  className,
  status,
  handleStatus,
}: {
  className: string;
  status: string;
  handleStatus: (value: string) => void;
}) {
  return (
    <ul className={className}>
      {["Home", "Services", "Work", "Process", "About", "Careers"].map(
        (item, index) => (
          <li
            key={index}
            className={clsx(
              "text-Grey-90 font-medium text-sm hover:bg-Grey-15 p-3 rounded-md hover:cursor-pointer",
              {
                "bg-Grey-15": status === item,
              }
            )}
          >
            <a
              href={`#${item}`}
              onClick={(e) => {
                SmoothScroll(e);
                handleStatus(item);
              }}
            >
              {item}
            </a>
          </li>
        )
      )}
    </ul>
  );
}

export { MenuItem };
