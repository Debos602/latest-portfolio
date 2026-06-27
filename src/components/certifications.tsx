"use client";

import { useEffect, useRef, useState } from "react";
import { Link, ArrowUpRight, ChevronDown, ChevronsUpDown, CircleCheckBig } from "lucide-react";
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
    id: "ai-fundamentals",
    title: "AI Fundamentals",
    issuer: "Google",
    date: "05.25.2026",
    link: "https://coursera.org/share/b87a837a1d6f32923fa4d008984ec028",
    image: "/ai_fun_coursera/1.png",
    icon: "google",
  },
  {
    id: "k8s-monitoring",
    title: "Monitoring a Kubernetes Cluster",
    issuer: "Datadog",
    date: "05.20.2026",
    link: "https://learn.datadoghq.com/certificates/a0dgd4rxvu",
    image: "/datadog/John Kylle Pantorilla - 2026-05-20 - 1_page-0001.jpg",
  },
  {
    id: "dd-integrations",
    title: "Getting Started with Integrations",
    issuer: "Datadog",
    date: "May 20, 2026",
    link: "https://learn.datadoghq.com/certificates/vob3g0twi4",
    image: "/datadog/John Kylle Pantorilla - 2026-05-20 -Getting Started with Integrations.png",
  },
  {
    id: "devkada",
    title: "DevKada Hackathon Participation",
    issuer: "DevKada",
    date: "03.29.2026",
    link: "/devkada_cert/John Kylle H. Pantorilla.png",
    image: "/devkada_cert/John Kylle H. Pantorilla.png",
  },
  {
    id: "claude-code",
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "March 29, 2026",
    link: "http://verify.skilljar.com/c/mwfczzr4tcco",
    image: "/anthropic/certificate-mwfczzr4tcco-1774794685_page-0001.jpg",
  },
  {
    id: "ccep",
    title: "Certified Cybersecurity Educator Professional (CCEP)",
    issuer: "Red Team Leaders",
    date: "12.29.2025",
    link: "https://courses.redteamleaders.com/exam-completion/c16e1f8a4dcfb896",
    image: "/red-team/certified_certificate_page-0001.jpg",
  },
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

function CertItem({ cert }: { cert: Certification }) {
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(cert.image);

  const handleImageError = () => {
    if (imageSrc !== "/icons/code.svg") {
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
          <div className="flex-1 min-w-0 border-l border-dashed border-[lab(90.6853%_0.399232_-1.45452)] overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen((p) => !p)}
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
                className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground [&_svg]:pointer-events-none"
                aria-label="Open certification link"
              >
                <Link className="size-4" aria-hidden="true" />
              </a>

              <div className="shrink-0 text-muted-foreground">
                <ChevronsUpDown className="size-4 text-muted-foreground" aria-hidden="true" />
              </div>
            </button>
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
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-foreground text-background text-xs font-semibold hover:bg-foreground/80 transition-all border border-line shrink-0"
                    >
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      <span className="hidden sm:inline">View Certificate</span>
                      <span className="sm:hidden">View</span>
                    </a>
                  </div>
                </div>

                {/* Certificate image */}
                <button
                  type="button"
                  onClick={() => window.open(cert.link, "_blank")}
                  className="relative aspect-4/3 overflow-hidden rounded-md border border-[lab(90.6853%_0.399232_-1.45452)] cursor-pointer group/cert hover:scale-[1.02] transition-transform bg-muted"
                  aria-label="View certificate in full size"
                >
                  <img
                    src={imageSrc}
                    alt={`${cert.title} certificate`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    onError={handleImageError}
                  />
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
          opacity: 0,
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
          <sup className="top-[-0.75em] ml-1 text-sm font-medium tracking-normal text-muted-foreground">
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

        <div className="-mt-px flex h-12 items-center justify-center">
          <button
            type="button"
            onClick={() => setShowAll((p) => !p)}
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-secondary px-3 pl-3 pr-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            <span>{showAll ? "Show Less" : "Show More"}</span>
            <ChevronDown
              className={`size-4 transition-transform ${showAll ? "rotate-180" : ""}`}
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