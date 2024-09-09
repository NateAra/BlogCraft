import Link from "next/link";
import React from "react";

export const NavBar = () => {
  const navItems = ["Item1", "Item2", "Item3"];

  return (
    <header className="w-full border-2">
      <nav className="flex items-center justify-between px-4 py-5">
        <Link href={'/'} className="font-bold text-5xl">
          Nate<span className="text-indigo-600">Blog</span>
        </Link>
      </nav>
    </header>
  );
};
