
"use client";

import Link from "next/link";
import { useState } from "react";

export default function FilterButton({ list }) {
  const [active, setActive] = useState(false);

  return (
    <section className="w-full bg-black">
      <div className="mx-auto w-full max-w-[1600px] px-6 py-5 lg:px-10">

        {
          list.map((item, index) => (
            <Link href={item.href} key={index}  className="inline-flex items-center rounded-full border border-[#414141] bg-[#303030] px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:border-[#e6007e] hover:bg-[#e6007e] mx-2">
              {item.label}
            </Link>
          ))
        }

      </div>
    </section>

  );
}
