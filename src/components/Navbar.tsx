"use client";

import clsx from "clsx";
import Image from "next/image";

function NavBar() {
  const handleSmoothScroll = (e: any) => {
    e.preventDefault();

    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    const sections: any = {
      Home: targetElement?.offsetTop! - 100,
      Services: targetElement?.offsetTop! - 100,
    };

    if (targetElement) {
      const offsetTop = sections[targetId];

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

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

          <ul className="gap-4 flex max-md:hidden">
            {["Home", "Services", "Work", "Process", "About", "Careers"].map(
              (item, index) => (
                <li
                  key={index}
                  className="text-Grey-90 font-medium text-sm hover:bg-Grey-15 p-3 rounded-md hover:cursor-pointer first:bg-Grey-15"
                >
                  <a href={`#${item}`} onClick={handleSmoothScroll}>
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

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
          <button className="bg-Green-50 py-4 px-3 rounded-md text-Grey-15 text-sm font-medium max-md:hidden">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}

export { NavBar };