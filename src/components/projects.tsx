"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HatchDivider } from "./HatchDivider";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  result?: string;
  previewImages: { src: string; alt: string }[];
  projectUrl?: string;
  logo?: React.ReactNode;
};

const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Bongo-Bazar Multivendor E-commerce Platform",
    description: "Short description of the project.",
    longDescription:
      "Full-stack web app built to present plans and promos, let customers apply for new connections, and give admins a dashboard to review applications, track reports, and manage promotional campaigns.",
    techStack: ["React", "TypeScript", "Tailwind"],
    result: "Improves customer onboarding and support by centralizing applications, status tracking, and promo management in one system while keeping the public site focused on trust, speed, and availability.",
    previewImages: [
      { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", alt: "Developer workspace" },
      { src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4", alt: "Code editor preview" },
    ],
  },
  {
    id: 2,
    title: "Example Project",
    description: "Short description of the project.",
    longDescription: "Longer description that appears when the project is expanded.",
    techStack: ["React", "TypeScript", "Tailwind"],
    result: "Delivered a responsive UI",
    previewImages: [
      { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c", alt: "Programming screen" },
      { src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", alt: "Laptop coding setup" },
    ],
  },
  {
    id: 3,
    title: "Example Project",
    description: "Short description of the project.",
    longDescription: "Longer description that appears when the project is expanded.",
    techStack: ["React", "TypeScript", "Tailwind"],
    result: "Delivered a responsive UI",
    previewImages: [
      { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d", alt: "Team collaboration" },
      { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3", alt: "UI design preview" },
    ],
  },
  {
    id: 4,
    title: "Example Project",
    description: "Short description of the project.",
    longDescription: "Longer description that appears when the project is expanded.",
    techStack: ["React", "TypeScript", "Tailwind"],
    result: "Delivered a responsive UI",
    previewImages: [
      { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", alt: "Modern office workspace" },
      { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97", alt: "Frontend development setup" },
    ],
  },
];

const INITIAL_VISIBLE = 3;

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [openProjectIds, setOpenProjectIds] = useState<number[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".project-card");

      if (cards?.length) {
        gsap.set(cards, { opacity: 0, y: 24, scale: 0.98 });
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  function toggleProject(id: number) {
    const isOpening = !openProjectIds.includes(id);

    setOpenProjectIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

    const panel = panelRefs.current[id];
    if (!panel) return;

    if (isOpening) {
      // Get the actual height before animating
      panel.style.visibility = "hidden";
      panel.style.height = "auto";
      const fullHeight = panel.offsetHeight;
      panel.style.visibility = "visible";
      panel.style.height = "0";

      gsap.to(panel, {
        height: fullHeight,
        opacity: 1,
        duration: 0.4,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        onStart: () => {
          panel.style.overflow = "hidden";
        },
        onComplete: () => {
          panel.style.overflow = "visible";
          panel.style.height = "auto";
        },
      });

      // Animate inner content
      const content = panel.querySelectorAll(".project-detail-item");
      if (content.length) {
        gsap.fromTo(
          content,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.05,
            ease: "power2.out",
            delay: 0.1,
          }
        );
      }
    } else {
      gsap.to(panel, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "cubic-bezier(0.770, 0, 0.175, 1)",
        onStart: () => {
          panel.style.overflow = "hidden";
        },
        onComplete: () => {
          panel.style.overflow = "hidden";
        },
      });

      // Animate out inner content
      const content = panel.querySelectorAll(".project-detail-item");
      if (content.length) {
        gsap.to(content, {
          opacity: 0,
          y: -8,
          duration: 0.2,
          stagger: 0.03,
          ease: "power2.in",
        });
      }
    }
  }

  const visibleProjects = showAll ? MOCK_PROJECTS : MOCK_PROJECTS.slice(0, INITIAL_VISIBLE);

  return (
    <section ref={sectionRef} id="projects" aria-labelledby="projects-heading" >
      {/* Heading */}
      <div className="max-w-3xl mx-auto">
        <h2
          id="projects-heading"
          className="font-heading text-3xl font-semibold flex items-center gap-2 border-x border-[lab(90.6853%_0.399232_-1.45452)] px-4"
        >
          Projects
          <span className="text-sm font-normal text-gray-400">[{MOCK_PROJECTS.length}]</span>
        </h2>

        {/* Project list */}
        <div className="border border-[lab(90.6853%_0.399232_-1.45452)] overflow-hidden">
          {visibleProjects.map((project, index) => {
            const isOpen = openProjectIds.includes(project.id);
            return (
              <React.Fragment key={project.id}>
                <article className={`project-card ${index !== 0 ? "border-t border-[lab(90.6853%_0.399232_-1.45452)]" : ""}`}>
                  {/* Row header */}
                  <header className="flex items-center hover:bg-gray-50 transition-colors">
                    {/* Logo */}
                    <div className="shrink-0 w-9 h-9  rounded-lg border border-[lab(90.6853%_0.399232_-1.45452)] bg-gray-100 overflow-hidden flex items-center justify-center mx-4">
                      <Image
                        src={project.previewImages[0].src}
                        alt={project.title + " logo"}
                        width={36}
                        height={36}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0 p-4 border-l border-[lab(90.6853%_0.399232_-1.45452)]">
                      <h3 className="text-md font-semibold text-gray-900 leading-tight">{project.title}</h3>
                      <p className="text-gray-500 text-balance truncate mt-0.5">{project.description}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1 shrink-0">
                      <a
                        href={project.projectUrl ?? "#"}
                        className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                        aria-label={`Open ${project.title}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      </a>

                      <button
                        type="button"
                        onClick={() => toggleProject(project.id)}
                        aria-expanded={isOpen}
                        aria-controls={"project-details-" + project.id}
                        className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
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
                          className={"transition-transform duration-200 " + (isOpen ? "rotate-180" : "")}
                          aria-hidden="true"
                        >
                          <path d="m7 15 5 5 5-5" />
                          <path d="m7 9 5-5 5 5" />
                        </svg>
                      </button>
                    </div>
                  </header>

                  {/* Expanded panel */}
                  {isOpen && (
                    <div
                      ref={(node) => {
                        panelRefs.current[project.id] = node;
                      }}
                      id={"project-details-" + project.id}
                      className="border-t border-[lab(90.6853%_0.399232_-1.45452)] bg-gray-50 pt-4 pb-4"
                    >
                      {/* Two-column: description left, images right */}
                      <div className="flex gap-4 px-4 project-detail-item">
                        {/* Left: description + tags + result */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-700 leading-relaxed mb-3">
                            {project.longDescription}
                          </p>

                          {/* Tech tags */}
                          <div className="flex gap-1.5 flex-wrap mb-4">
                            {project.techStack.map((t) => (
                              <span
                                key={t}
                                className="text-xs px-2.5 py-0.5 bg-white border border-[lab(90.6853%_0.399232_-1.45452)] rounded-full text-gray-500"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          {/* Result */}
                          {project.result && (
                            <div>
                              <p className="text-sm font-semibold text-gray-800 mb-1">Result:</p>
                              <p className="text-sm text-gray-600 leading-relaxed">{project.result}</p>
                            </div>
                          )}
                        </div>

                        {/* Right: preview image grid */}
                        <div className="shrink-0 flex gap-2">
                          {project.previewImages.slice(0, 2).map((img, idx) => (
                            <div
                              key={idx}
                              className="w-35 h-27.5 rounded-lg border border-[lab(90.6853%_0.399232_-1.45452)] overflow-hidden bg-gray-100"
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-2 mt-4 pt-3 border-t border-gray-200 px-4 project-detail-item">
                        <a
                          href={project.projectUrl ?? "#"}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M7 17 17 7" /><path d="M7 7h10v10" />
                          </svg>
                          View Project
                        </a>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M7 17 17 7" /><path d="M7 7h10v10" />
                          </svg>
                          Preview Images
                        </button>
                      </div>
                    </div>
                  )}
                </article>
              </React.Fragment>
            );
          })}

          {/* Show More button */}
          {MOCK_PROJECTS.length > INITIAL_VISIBLE && (
            <div className="border-t border-gray-200">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="w-full flex items-center justify-center gap-1.5 py-3 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors " 
              >
                {showAll ? "Show Less" : "Show More"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={"transition-transform duration-200 " + (showAll ? "rotate-180" : "")}
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      <HatchDivider/>
    </section>
  );
}