"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronsUpDown, CircleCheckBig, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HatchDivider } from "./HatchDivider";

gsap.registerPlugin(ScrollTrigger);

type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
  image: string;
  icon?: "google" | "check";
};

const certifications: Certification[] = [
  {
    id: "programming-hero-web-development",
    title: "Programming Hero Web Development Certification",
    issuer: "Programming Hero",
    date: "06.19.2026",
    link: "https://www.programminghero.com/",
    image: "/certifications/cert-2.pdf",
    icon: "check",
  },
  {
    id: "bachelor-of-business-studies",
    title: "Bachelor of Business Studies",
    issuer: "National University",
    date: "12.28.2022",
    link: "https://www.nu.ac.bd/",
    image: "/certifications/cert-1.pdf",
    icon: "check",
  }
];
const INITIAL_SHOW = 3;

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#9E9E9E" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#9E9E9E" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#9E9E9E" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#9E9E9E" />
    </svg>
  );
}

/** Fullscreen modal that shows the certificate (PDF or image) enlarged */
function CertificateModal({
  cert,
  imageSrc,
  isPdf,
  onClose,
}: {
  cert: Certification;
  imageSrc: string;
  isPdf: boolean;
  onClose: () => void;
}) {
  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${cert.title} certificate enlarged view`}
    >
      <div
        className="relative flex h-full w-full max-w-4xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[lab(90.6853%_0.399232_-1.45452)] px-4 py-3">
          <div className="min-w-0">
            <h3 className="truncate font-medium">{cert.title}</h3>
            <p className="truncate text-xs text-[#3D4047]">
              {cert.issuer} | {cert.date}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="ml-4 flex size-8 shrink-0 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
            aria-label="Close"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-auto bg-muted">
          {isPdf ? (
            <iframe
              src={imageSrc}
              title={`${cert.title} certificate large view`}
              className="h-full min-h-[70vh] w-full bg-white"
            />
          ) : (
            <img
              src={imageSrc}
              alt={`${cert.title} certificate large view`}
              className="h-full w-full object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}

function CertItem({ cert }: { cert: Certification }) {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(cert.image);
  const isPdf = imageSrc.toLowerCase().endsWith(".pdf");

  const handleImageError = () => {
    if (!isPdf && imageSrc !== "/icons/code.svg") {
      setImageSrc("/icons/code.svg");
    }
  };

  return (
    <div className="cert-card border-b border-[lab(90.6853%_0.399232_-1.45452)] transition-all duration-300 ease-in-out">
      <div className="group">
        <div className="flex items-center hover:bg-accent-muted">
          {/* Icon */}
          <div className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background select-none">
            <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4">
              {cert.icon === "google" ? <GoogleIcon /> : <CircleCheckBig className="size-4" aria-hidden="true" />}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 border-l border-[lab(90.6853%_0.399232_-1.45452)] overflow-hidden">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setOpen((p) => !p)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpen((p) => !p);
                }
              }}
              aria-expanded={open}
              className="flex w-full items-center gap-2 p-4 pr-2 text-left"
            >
              <div className="flex-1 min-w-0">
                <h3 className="mb-1 leading-snug font-medium text-balance">{cert.title}</h3>
                <div className="flex flex-wrap items-center gap-x-2 text-sm text-[#3D4047]">
                  <span>
                    <span className="text-xs" aria-hidden="true">@</span>
                    <span className="ml-0.5">{cert.issuer}</span>
                  </span>
                  <span className="text-muted-foreground/50">|</span>
                  <time>{cert.date}</time>
                </div>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label={`Open ${cert.title}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </a>

              <div className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                <ChevronsUpDown className="size-4 text-muted-foreground" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        {/* Expanded panel */}
        <div
          className="overflow-hidden"
          style={{ maxHeight: open ? "600px" : "0", transition: "max-height 0.35s ease" }}
        >
          <div className="border-t border-[lab(90.6853%_0.399232_-1.45452)] p-4">
            <div className="pt-3">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="text-sm text-[#3D4047] space-y-2">
                    <p><span className="font-medium text-foreground">Issuer:</span> {cert.issuer}</p>
                    <p><span className="font-medium text-foreground">Date:</span> {cert.date}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setModalOpen(true)}
                      className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-foreground text-background text-xs font-semibold hover:bg-foreground/80 transition-all border border-line shrink-0"
                    >
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      <span className="hidden sm:inline">View Certificate</span>
                      <span className="sm:hidden">View</span>
                    </button>
                  </div>
                </div>

                {/* Certificate image — click to enlarge in modal */}
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="relative aspect-4/3 overflow-hidden rounded-md border border-[lab(90.6853%_0.399232_-1.45452)] cursor-pointer group/cert hover:scale-[1.02] transition-transform bg-muted"
                  aria-label="View certificate in full size"
                >
                  {isPdf ? (
                    <iframe
                      src={imageSrc}
                      title={`${cert.title} certificate`}
                      className="h-full w-full min-h-[320px] bg-white"
                      loading="lazy"
                    />
                  ) : (
                    <img
                      src={imageSrc}
                      alt={`${cert.title} certificate`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      onError={handleImageError}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/cert:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 text-white">
                      <ArrowUpRight className="size-8" aria-hidden="true" />
                      <span className="text-sm font-medium">Click to enlarge</span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <CertificateModal
          cert={cert}
          imageSrc={imageSrc}
          isPdf={isPdf}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? certifications : certifications.slice(0, INITIAL_SHOW);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".cert-card");
      const header = sectionRef.current?.querySelector("[data-slot=panel-title]");
      const toggle = sectionRef.current?.querySelector("button[type=button]");

      if (cards?.length) {
        gsap.set(cards, {
          opacity: 1,
          y: 40,
          scale: 0.94,
          rotateX: 12,
          transformOrigin: "center",
        });

        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power4.out",
          transformPerspective: 700,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: -12 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.1 }
        );
      }

      if (toggle) {
        gsap.fromTo(
          toggle,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.55, ease: "power3.out", delay: 0.2 }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-slot="panel"
      // className="screen-line-top screen-line-bottom "
      id="certifications"
    >
     <div className="max-w-3xl mx-auto  border-x border-[lab(90.6853%_0.399232_-1.45452)]">
       <header data-slot="panel-header" className="py-0">
        <h2 data-slot="panel-title" className="font-heading text-3xl px-4 font-semibold tracking-tight border-b border-[lab(90.6853%_0.399232_-1.45452)]">
          Certifications
          <sup className="top-[-0.75em] ml-1 text-sm font-medium tracking-normal text-gray-400">
            [{certifications.length}]
          </sup>
        </h2>
      </header>

      <div className="group/collapsible">
        <div className="divide-y border-[lab(90.6853%_0.399232_-1.45452)]">
          {visible.map((cert) => (
            <CertItem key={cert.id} cert={cert} />
          ))}
        </div>

        <div className=" flex items-center justify-center">
          <button
            type="button"
            onClick={() => setShowAll((p) => !p)}
            className="group my-2 inline-flex items-center justify-center gap-2 rounded-md border border-[lab(90.6853%_0.399232_-1.45452)] bg-background px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-50 hover:text-gray-900"
          >
            <span>{showAll ? "Show Less" : "Show More"}</span>
            <ChevronDown
              className={`size-4 transition-transform duration-200 group-hover:translate-y-0.5 ${showAll ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
     </div>
     <HatchDivider/>
    </section>
  );
}