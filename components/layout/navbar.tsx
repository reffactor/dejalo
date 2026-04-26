"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-5 md:px-12 transition-all duration-400",
        scrolled && "bg-cream/88 backdrop-blur-xl border-b border-ink/8"
      )}
    >
      <Link href="/" className="font-serif text-[22px] tracking-[-0.5px]">
        déjalo
      </Link>

      <ul className="hidden md:flex items-center gap-8 list-none">
        <li>
          <Link href="#como" className="text-[13px] text-ink-3 hover:text-ink transition-colors tracking-wider">
            Cómo funciona
          </Link>
        </li>
        <li>
          <Link href="#precios" className="text-[13px] text-ink-3 hover:text-ink transition-colors tracking-wider">
            Precios
          </Link>
        </li>
        <li>
          <Link href="#zonas" className="text-[13px] text-ink-3 hover:text-ink transition-colors tracking-wider">
            Zonas
          </Link>
        </li>
        <li>
          <Link href="#faq" className="text-[13px] text-ink-3 hover:text-ink transition-colors tracking-wider">
            Preguntas
          </Link>
        </li>
        <li>
          <Button variant="primary" size="sm" className="px-5.5 py-2.5 rounded-full">
            Agendar pickup →
          </Button>
        </li>
      </ul>
    </nav>
  );
};
