"use client";

import { useState } from "react";
import Link from "next/link";
import MegaMenuPanel from "@/components/MegaMenuPanel";

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href="/driveways"
        className="text-white hover:text-[#D4AF37] transition-colors font-medium"
      >
        Driveways
      </Link>
    </div>
  );
}

export { MegaMenuPanel };
