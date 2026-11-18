
"use client";

import Link from "next/link";
import { ChevronRight, ExternalLink, X } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Movies", href: "/movies" },
  { label: "Tv Shows", href: "/tv-shows" },
  { label: "Watchlist", href: "/watchlist" },
  { label: "Jio+", href: "/premium" },
];

export default function ProfileSheet() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5a12a] bg-gradient-to-br from-orange-400 to-amber-600 text-xl">
            👨🏽
          </button>
        }
      />

      <SheetContent
        side="right"
        className="h-dvh w-full overflow-hidden border-none bg-[#0d0b0b] p-0 text-white sm:max-w-[400px]"
      >

        {/* <SheetClose
          render={
            <button className="absolute right-4 top-4 z-50 flex h-8 w-8 items-center justify-center rounded-lg border border-[#e60046] text-gray-300 hover:bg-[#e60046]">
          
            </button>
          }
        /> */}

        <div className="flex h-full flex-col justify-center px-5 pb-4 pt-14">

          {/* Profile Card */}
          <div className="relative flex h-[190px] shrink-0 flex-col items-center justify-center rounded-xl bg-[#191c20] pt-10">

            <div className="absolute -top-9 flex h-[85px] w-[85px] items-center justify-center rounded-full border-[3px] border-[#0d0b0b] bg-gradient-to-br from-orange-400 to-amber-500 text-[52px]">
              👨🏽
            </div>

            <h2 className="text-xl font-bold">Guest</h2>

            <Link
              href="/login"
              className="mt-4 rounded-full bg-[#e52278] px-6 py-2 text-base font-semibold hover:bg-[#c91865]"
            >
              Login
            </Link>
          </div>

          {/* Subscribe */}
          <Link
            href="/premium"
            className="mt-4 flex shrink-0 items-center justify-between border-b border-[#303030] py-3 text-base font-medium hover:text-[#e52278]"
          >
            Subscribe Now
            <ChevronRight size={21} />
          </Link>

          {/* Navigation */}
          <nav className="flex flex-col">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between py-[13px] text-base font-medium text-[#e5e5e5] hover:text-[#e52278]"
              >
                {item.label}
                <ExternalLink size={17} />
              </Link>
            ))}
          </nav>

        </div>
      </SheetContent>
    </Sheet>
  );
}
