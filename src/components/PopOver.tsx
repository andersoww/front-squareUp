"use client";
import { SmoothScroll } from "@/utils/SmoothScroll";
import {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface IPopover extends PropsWithChildren {
  trigger: "click" | "hover";
  content?: ReactNode;
}

function ReactPopover({ children, content, trigger = "click" }: IPopover) {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleMouseOver = () => {
    if (trigger === "hover") {
      setShow(true);
    }
  };

  const handleMouseLeft = () => {
    if (trigger === "hover") {
      setShow(false);
    }
  };

  function handleClickOutside(event: any) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShow(false);
    }
  }

  function Item({
    children,
    href,
    ...rest
  }: PropsWithChildren & { href: string }) {
    return (
      <a
        href={href}
        onClick={(e) => {
          SmoothScroll(e);

          setShow(false);
        }}
      >
        <li
          className="text-Grey-90 font-medium text-sm hover:bg-Grey-20 p-3 rounded-md hover:cursor-pointer first:bg-Grey-15"
          {...rest}
        >
          {children}
        </li>
      </a>
    );
  }

  useEffect(() => {
    if (show) {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [show, wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeft}
    >
      <div onClick={() => setShow(!show)}>{children}</div>
      <div
        hidden={!show}
        className="h-fit absolute z-50 transition-all bg-Grey-15 border border-Grey-20 rounded-lg p-2 w-[350px] right-4 mt-2 lg:hidden"
      >
        <div className="">
          <ul className="flex flex-col">
            {["Home", "Services", "Work", "Process", "About", "Careers"].map(
              (item, index) => {
                return (
                  <Item href={`#${item}`} key={index}>
                    {item}
                  </Item>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReactPopover;
