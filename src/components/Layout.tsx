"use client";

import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { PropsWithChildren, useState } from "react";

function LayoutApp({ children }: PropsWithChildren) {
  const [status, setStatus] = useState("Home");

  function handleStatus(value: string) {
    setStatus(value);
  }

  return (
    <>
      <NavBar status={status} handleStatus={handleStatus} />
      {children}
      <Footer status={status} handleStatus={handleStatus} />
    </>
  );
}

export { LayoutApp };
