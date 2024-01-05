"use client";

import { Button } from "@/components/Button";
import { MenuItem } from "@/components/MenuItem";
import ReactPopover from "@/components/PopOver";
import clsx from "clsx";
import Image from "next/image";

function NavBar({
  status,
  handleStatus,
}: {
  status: string;
  handleStatus: (value: string) => void;
}) {
  return (
    <header className="w-full fixed top-0 border-b border-Grey-15 z-50 bg-Grey-10">
      <div className={clsx("flex justify-center w-full px-4")}>
        <div className="flex justify-between py-6 w-full max-w-7xl items-center">
          <Image
            src="/logoSquare.svg"
            alt="Logo Square"
            width={120}
            height={40}
          />

          <MenuItem
            status={status}
            handleStatus={handleStatus}
            className="gap-4 flex max-md:hidden"
          />

          <ReactPopover trigger="click">
            <button className="w-12 h-12 bg-Grey-15 rounded-md max-md:flex hidden max-md:items-center max-md:justify-center">
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
                className="lucide lucide-menu stroke-Green-80"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </ReactPopover>

          <Button className="max-md:hidden" variants="primary">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}

export { NavBar };
