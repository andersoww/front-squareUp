"use client";
import { Button } from "@/components/Button";
import { SmoothScroll } from "@/utils/SmoothScroll";
import clsx from "clsx";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full bg-Grey-10">
      <div
        className={clsx(
          "flex justify-center w-full px-4 items-center flex-col gap-10 py-8"
        )}
      >
        <div className="flex justify-between w-full max-w-7xl items-center max-lg:flex-col max-lg:gap-4">
          <Image
            src="/logoSquare.svg"
            alt="Logo Square"
            width={120}
            height={40}
            className=" max-md:w-40"
          />

          <ul className="gap-4 flex flex-wrap justify-center">
            {["Home", "Services", "Work", "Process", "About", "Careers"].map(
              (item, index) => (
                <li
                  key={index}
                  className="text-Grey-90 font-medium text-sm hover:bg-Grey-15 p-3 rounded-md hover:cursor-pointer first:bg-Grey-15"
                >
                  <a href={`#${item}`} onClick={SmoothScroll}>
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="flex gap-4 border border-Grey-15 p-4 rounded-lg w-fit items-center max-md: flex-col max-md:w-full max-md:py-4 max-md:px-2.5">
            <p>Stay Connected</p>

            <ul className="flex items-center gap-x-2.5">
              <li className="flex items-end justify-center card-icon p-4 hover:cursor-pointer">
                <Image
                  src={"/icon/facebook.svg"}
                  alt=""
                  width={20}
                  height={20}
                />
              </li>
              <li className="flex items-end justify-center card-icon p-4 hover:cursor-pointer">
                <Image
                  src={"/icon/twitter.svg"}
                  alt=""
                  width={20}
                  height={20}
                />
              </li>
              <li className="flex items-end justify-center card-icon p-4 hover:cursor-pointer">
                <Image
                  src={"/icon/linkedin.svg"}
                  alt=""
                  width={20}
                  height={20}
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-0.5 bg-Grey-15 max-w-7xl max-md:hidden" />

        <div className="w-full justify-between items-center flex max-w-7xl max-md:flex-col gap-5">
          <ul className="flex gap-5 max-md:gap-0 w-full items-center max-md:flex-col max-md:w-full">
            <li className="flex gap-1.5 items-center max-md:py-5 max-md:border-b max-md:border-Grey-15 max-md:w-full max-md:justify-center">
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
                className="lucide lucide-mail w-5 h-5 fill-Green-50 stroke-Grey-15"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>

              <p>hello@squareup.com</p>
            </li>
            <li className="flex gap-1.5 items-center max-md:py-5 max-md:border-b max-md:border-Grey-15 max-md:w-full max-md:justify-center">
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
                className="lucide lucide-mail w-5 h-5 fill-Green-50 stroke-Grey-15"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <p>+91 91813 23 2309</p>
            </li>
            <li className="flex gap-1.5 items-center max-md:py-5 max-md:border-b max-md:border-Grey-15 max-md:w-full max-md:justify-center">
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
                className="lucide lucide-map-pin w-5 h-5 fill-Green-50 stroke-Grey-15"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p>Somewhere in the World</p>
            </li>
          </ul>

          <p className=" w-[350px] text-Grey-60 text-sm text-end max-md:w-full max-md:text-center pb-8">
            © 2023 SquareUp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
