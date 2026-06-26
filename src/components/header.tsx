'use client';

import Link from "next/link";
import logo from "../asset/portfolio_logo.png";
import Image from "next/image";


export default function Header() {


  return (
    <header className="fixed w-full z-50 border-t border-b border-[lab(90.6853%_0.399232_-1.45452)] bg-background/50 backdrop-blur-md" style={{ fontFamily: "'GeistPixelSquare', 'Geist Mono', ui-monospace, 'SFMono-Regular', 'Roboto Mono', Menlo, Monaco, 'Liberation Mono', 'DejaVu Sans Mono', 'Courier New', monospace" }}>
      <div className="max-w-3xl border-r border-l border-[lab(90.6853%_0.399232_-1.45452)] mx-auto ">
        <div>
          <div className="flex flex-wrap items-center justify-between h-12">
            <div className="flex items-center">
              <span className="text-xl font-semibold tracking-tight gradient-text gradient-text-primary">
                <Image src={logo} className="h-[40px] w-auto" alt="Logo" />
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/#about"
                  className="hover:text-foreground/75 transition-colors duration-200 text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="/#projects"
                  className="hover:text-foreground/75 transition-colors duration-200 text-sm font-medium"
                >
                  Projects
                </Link>
                <Link
                  href="/#experience"
                  className="hover:text-foreground/75 transition-colors duration-200 text-sm font-medium"
                >
                  Experience
                </Link>
                <Link
                  href="/#certifications"
                  className="hover:text-foreground/75 transition-colors duration-200 text-sm font-medium"
                >
                  Certifications
                </Link>
              </div>
            </div>
            {/* Theme toggle button */}
            
          </div>
        </div>
      </div>
    </header>
  );
}