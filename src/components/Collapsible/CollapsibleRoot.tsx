"use client";

import clsx from "clsx";
import { useState } from "react";

function CollapsibleRoot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex p-12 justify-center">
      <div className="max-w-[450px] overflow-hidden flex flex-col gap-4">
        <div
          className="p-4 border rounded-md"
          onClick={() => setIsOpen((state) => !state)}
        >
          Título
        </div>

        <div
          className={clsx(
            "collapsible-text overflow-hidden rounded relative transition-all border duration-500 p-4",
            {
              "max-h-[300px] translate-y-0 opacity-100": isOpen,
              "max-h-[1px] -translate-y-full -top-full opacity-0": !isOpen,
            }
          )}
        >
          <h2>Collapsible Heading</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            quibusdam fuga id, mollitia nostrum culpa quos nulla eum? Hic iste
            debitis odio impedit nesciunt omnis magni nihil enim quam sit.
          </p>
        </div>
      </div>
    </div>
  );
}

export { CollapsibleRoot };
