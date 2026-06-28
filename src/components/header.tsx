'use client';

import { useCallback, useEffect, useRef, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
    setMenuOpen(false);
  }, []);

  const handleLinkClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
      event.preventDefault();
      handleScroll(hash);
    },
    [handleScroll]
  );

  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (menuOpen) {
      gsap.set(mobileMenuRef.current, { height: 0, opacity: 0, overflow: "hidden" });
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.25,
        ease: "power2.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { overflow: "hidden" });
        },
      });
    }
  }, [menuOpen]);

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
          <div className="flex h-12 items-center justify-between px-3 sm:px-4">
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

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[lab(90.6853%_0.399232_-1.45452)] text-foreground transition-colors hover:bg-accent-muted md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            </button>
          </div>

          <div
            ref={mobileMenuRef}
            className="overflow-hidden border-t border-[lab(90.6853%_0.399232_-1.45452)] bg-background/95 px-3 py-3 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1">
              {sections.map((section) => (
                <a
                  key={section.hash}
                  href={section.hash}
                  onClick={(event) => handleLinkClick(event, section.hash)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === section.hash
                      ? "bg-accent-muted text-foreground"
                      : "text-muted-foreground hover:bg-accent-muted hover:text-foreground"
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}