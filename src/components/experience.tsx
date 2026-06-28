
"use client";

import Image from "next/image";
import { CodeXml, Infinity as InfinityIcon } from "lucide-react";
import { HatchDivider } from "./HatchDivider";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Position = {
  icon: React.ReactNode;
  title: string;
  type: string;
  start: string;
  end: string | null;
  duration: string;
  tags: string[];
};

type ExperienceGroup = {
  logo: string;
  name: string;
  current?: boolean;
  positions: Position[];
};

const experience: ExperienceGroup[] = [
  {
    logo: "/icons/code.svg",
    name: "Quantum os dao llc",
    current: true,
    positions: [
      {
        icon: <CodeXml className="size-4" aria-hidden="true" />,
        title: "Full Stack Developer",
        type: "Full-time",
        start: "Jan 2025",
        end: "Nov 2025",
        duration: "6m+",
        tags: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "AI Integration"],
      },
    ],
  },
  {
    logo: "/icons/code.svg",
    name: "Learning Journey",
    positions: [
      {
        icon: <CodeXml className="size-4" aria-hidden="true" />,
        title: "Coding Beginner",
        type: "Learning",
        start: "july 2023",
        end: "Running",
        duration: "2sy",
        tags: ["HTML", "CSS", "JavaScript", "Problem Solving"],
      },
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = sectionRef.current?.querySelectorAll(".experience-header");
      const groups = sectionRef.current?.querySelectorAll(".experience-group");
      const positions = sectionRef.current?.querySelectorAll(".group\\/experience-position");
      const tags = sectionRef.current?.querySelectorAll(".experience-tag");

      // Build a single timeline so animations feel cohesive and smooth
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      if (header?.length) {
        tl.from(header, {
          y: 8,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      }

      if (groups?.length) {
        tl.from(groups, {
          y: 10,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
        }, "-=" + 0.4);
      }

      if (positions?.length) {
        tl.from(positions, {
          x: -24,
          opacity: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
        }, "-=" + 0.45);
      }

      if (tags?.length) {
        // tags pop in with a little scale for tactile feel
        tl.from(tags, {
          scale: 0.92,
          opacity: 0,
          duration: 0.45,
          stagger: 0.02,
          ease: "back.out(1.2)",
        }, "-=" + 0.35);
      }

      // subtle hover effect for buttons (prefers-reduced-motion friendly)
      const buttons = sectionRef.current?.querySelectorAll(".experience-button");
      buttons?.forEach((btn) => {
        gsap.fromTo(
          btn,
          { scale: 1 },
          {
            scale: 1.01,
            duration: 0.18,
            paused: true,
            ease: "power1.out",
            onReverseComplete: () => gsap.set(btn, { scale: 1 }),
          }
        );
        btn.addEventListener("pointerenter", () => gsap.to(btn, { scale: 1.02, duration: 0.18 }));
        btn.addEventListener("pointerleave", () => gsap.to(btn, { scale: 1, duration: 0.18 }));
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="relative">
      <div className="max-w-3xl mx-auto border-x border-[lab(90.6853%_0.399232_-1.45452)]"> 
        <header className="py-0">
        <h2 className="experience-header px-4 font-heading text-3xl font-semibold tracking-tight border-b border-[lab(90.6853%_0.399232_-1.45452)] ">Experience</h2>
      </header>

      <div>
        {experience.map((group) => (
          <div key={group.name} className="experience-group space-y-4 border-b border-[lab(90.6853%_0.399232_-1.45452)] p-4 last:border-none">
            <div className="flex items-center gap-3">
              <div className="flex size-6 shrink-0 items-center justify-center">
                <Image src={group.logo} alt="" width={24} height={24} className="rounded-full" aria-hidden="true" />
              </div>
              <h3 className="text-lg leading-snug font-semibold">{group.name}</h3>
              {group.current && (
                <span className="relative flex items-center justify-center" role="img" aria-label="Current Employer">
                  <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
                  <span className="relative inline-flex size-2 rounded-full bg-info" />
                </span>
              )}
            </div>

            <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
              {group.positions.map((position) => (
                <div key={position.title} className="group/experience-position relative">
                  <div className="pointer-events-none absolute bottom-0 left-3 hidden h-px w-3 bg-border group-last/experience-position:flex" />

                  <button
                    type="button"
                    className="experience-button group relative block w-full text-left outline-none before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg before:transition-[background-color] before:ease-out hover:before:bg-accent-muted focus-visible:before:inset-ring-2 focus-visible:before:inset-ring-ring/50"
                  >
                    <div className="relative z-1 mb-1 flex items-center gap-3">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-line ring-offset-1 ring-offset-background">
                        {position.icon}
                      </div>
                      <h4 className="flex-1 leading-snug font-medium text-balance">{position.title}</h4>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pl-9 text-sm text-muted-foreground">
                      <dl>
                        <dt className="sr-only">Employment Type</dt>
                        <dd>{position.type}</dd>
                      </dl>
                      <div className="h-4 w-px shrink-0 self-center bg-border" />
                      <dl>
                        <dt className="sr-only">Employment Period</dt>
                        <dd className="flex items-center gap-0.5 tabular-nums">
                          <span>{position.start}</span>
                          <span className="font-mono">—</span>
                          {position.end ? (
                            <span>{position.end}</span>
                          ) : (
                            <InfinityIcon className="size-4.5 translate-y-[0.5px]" aria-label="Present" />
                          )}
                        </dd>
                      </dl>
                      <div className="h-4 w-px shrink-0 self-center bg-border" />
                      <dl>
                        <dt className="sr-only">Duration</dt>
                        <dd className="tabular-nums">{position.duration}</dd>
                      </dl>
                    </div>
                  </button>

                  <ul className="flex flex-wrap gap-1.5 pt-3 pl-0 md:pl-9">
                    {position.tags.map((tag) => (
                      <li key={tag} className="flex">
                        <span className="experience-tag inline-flex items-center rounded-full border border-[lab(90.6853%_0.399232_-1.45452)] bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground dark:bg-zinc-900">{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
      

      <HatchDivider />
    </section>
  );
}