import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

export const NavBar = () => {

  return (
    <header className="w-full border-2">
      <nav className="flex items-center justify-between px-4 py-5">
        <Link href={'/'} className="font-bold text-5xl">
          Nate<span className="text-primary">Blog</span>
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
};
