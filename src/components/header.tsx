'use client';

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import logo from "../asset/portfolio_logo.png";

gsap.registerPlugin(ScrollToPlugin);

const sections = [
  { label: "Home", hash: "#home" },
  { label: "About", hash: "#about" },
  { label: "Projects", hash: "#projects" },
  { label: "Experience", hash: "#experience" },
  { label: "Certifications", hash: "#certifications" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("#home");

  const handleScroll = useCallback((hash: string) => {
    const target = document.querySelector(hash);
    if (!target) return;

    gsap.to(window, {
      scrollTo: {
        y: target,
        offsetY: 56,
      },
      duration: 0.8,
      ease: "power3.out",
    });

    // keep route as '/' when navigating to home section
    const path = hash === "#home" ? "/" : hash;
    window.history.pushState(null, "", path);
    setActiveSection(hash);
  }, []);

  const handleLinkClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
      event.preventDefault();
      handleScroll(hash);
    },
    [handleScroll]
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const threshold = Array.from({ length: 21 }, (_, i) => i / 20);

    sections.forEach((section) => {
      const element = document.querySelector<HTMLElement>(section.hash);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(section.hash);
            }
          });
        },
        {
          root: null,
          rootMargin: "-56px 0px -70% 0px",
          threshold,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

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
                {sections.map((section) => (
                  <a
                    key={section.hash}
                    href={section.hash}
                    onClick={(event) => handleLinkClick(event, section.hash)}
                    className={`transition-colors duration-200 text-sm font-medium ${
                      activeSection === section.hash
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground/75"
                    }`}
                  >
                    {section.label}
                  </a>
                ))}
              </div>
            </div>
            {/* Theme toggle button */}
            
          </div>
        </div>
      </div>
    </header>
  );
}