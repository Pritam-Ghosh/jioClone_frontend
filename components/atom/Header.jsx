
"use client";

import Link from "next/link";
import { Clapperboard, Crown, Search } from "lucide-react";
import ProfileSheet from "../section/ProfileSheet"
const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "Movies", href: "/movies" },
  { name: "Tv Shows", href: "/tv-shows" },
  { name: "Watchlist", href: "/watchlist" },
  { name: "Jio+", href: "/jioPlus" },
];

export default function Navbar() {
  return (
    <header className="w-full bg-[#0d0e10] text-white">
      <nav className="mx-auto flex min-h-[90px] w-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e6007e] sm:h-[53px] sm:w-[53px]">
            <Clapperboard size={28} />
          </div>

          <span className="whitespace-nowrap text-xl font-bold sm:text-2xl">
            JioCinema
          </span>
        </Link>

        {/* Premium Button */}
        <Link href="jioPlus" className="hidden shrink-0 items-center gap-2 rounded-full border border-[#bd974a] px-4 py-3 text-lg text-[#d6a94c] transition hover:bg-[#d6a94a]/10 xl:flex">
          <Crown size={21} fill="currentColor" />
          <span className="whitespace-nowrap">Go Premium</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-4 xl:gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative flex h-[90px] shrink-0 items-center whitespace-nowrap px-1 text-base font-medium transition-colors xl:text-lg 2xl:text-xl ${
                link.active
                  ? "text-white after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-[#e83e9b]"
                  : "text-[#c5c5c5] hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-5">

          {/* Desktop Search */}
          <div className="relative hidden w-[180px] lg:block xl:w-[220px] 2xl:w-[280px]">
            <Search
              size={25}
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />

            <input
              type="text"
              placeholder="Search..."
              className="h-[52px] w-full rounded-full border border-[#292a2d] bg-transparent pl-12 pr-4 text-base text-white outline-none placeholder:text-[#b7b7b7] focus:border-[#e6007e]"
            />
          </div>

          {/* Mobile Search */}
          <button
            aria-label="Search"
            className="text-white lg:hidden"
          >
            <Search size={25} />
          </button>

   
   

          <ProfileSheet/>
        </div>
      </nav>
    </header>
  );
}
