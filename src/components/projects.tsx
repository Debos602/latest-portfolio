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
  githubFrontendUrl?: string;
  githubBackendUrl?: string;
  logo?: React.ReactNode;
};

const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Bongo-Bazar E-Commerce",
    description: "Your ultimate online shopping destination in Bangladesh with thousands of products across fashion, electronics, and home essentials.",
    longDescription:
      "Bongobazar is a full-stack multivendor e-commerce platform built with Next.js and Node.js/Express on a PostgreSQL database via Prisma ORM. It features secure authentication through NextAuth and JWT, a responsive UI crafted with Tailwind CSS and Shadcn components, and smooth micro-interactions powered by Framer Motion. The platform enables customers to browse thousands of products, place orders, and track deliveries, while vendors and admins manage listings, inventory, and fulfillment from a centralized dashboard.",
    techStack: ["Next.js", "Node.js", "Express", "PostgreSQL", "TypeScript", "Tailwind CSS", "Shadcn", "Framer Motion", "Next Auth", "JWT", "Prisma"],
    result: "Delivered a scalable multivendor shopping experience with secure auth, real-time inventory management, and a polished UI — making online retail accessible to Bangladeshi shoppers with fast delivery and best-price guarantees.",
    previewImages: [
      { src: "https://res.cloudinary.com/dawt0ov0p/image/upload/v1777499310/Blog-images/nkjmckxoozab1bamzkvq.png", alt: "Bongo-Bazar E-Commerce homepage" },
      { src: "https://res.cloudinary.com/dawt0ov0p/image/upload/v1777499310/Blog-images/nkjmckxoozab1bamzkvq.png", alt: "Bongo-Bazar product listing" },
      { src: "https://res.cloudinary.com/dawt0ov0p/image/upload/v1777499310/Blog-images/nkjmckxoozab1bamzkvq.png", alt: "Bongo-Bazar checkout flow" },
    ],
    projectUrl: "https://bongo-bazar-client.vercel.app/",
    githubFrontendUrl: "https://github.com/Debos602/bongo-bazar-client",
    githubBackendUrl: "https://github.com/Debos602/bongo-bazar-server",
  },
  {
    id: 2,
    title: "Car Rental Website",
    description: "A modern car rental platform for browsing, booking, and managing vehicles with real-time availability and secure payments.",
    longDescription:
      "A full-stack car rental platform built with React, TypeScript, and Node.js/Express backed by MongoDB. It integrates Socket.io for real-time vehicle availability updates, Redux for global state management, and the Amarpay API for secure local payment processing. Customers can search vehicles by date, type, and location, complete bookings in minutes, and track rental status end-to-end. Admins get a dedicated dashboard for fleet management, booking oversight, and reporting — all protected by JWT-based authentication.",
    techStack: ["React", "Node.js", "TypeScript", "Express", "MongoDB", "Tailwind CSS", "Ant Design", "Socket.io", "Redux", "JWT", "Amarpay API"],
    result: "Streamlined the vehicle rental lifecycle from search to return, reducing booking friction with real-time availability and local payment support, while giving administrators full visibility into fleet utilization and customer activity.",
    previewImages: [
      { src: "https://res.cloudinary.com/dawt0ov0p/image/upload/v1777499075/Blog-images/d9m5qkhzexvcfvloyuyk.png", alt: "Car Rental homepage" },
      { src: "https://res.cloudinary.com/dawt0ov0p/image/upload/v1777499075/Blog-images/d9m5qkhzexvcfvloyuyk.png", alt: "Car Rental vehicle listings" },
      { src: "https://res.cloudinary.com/dawt0ov0p/image/upload/v1777499075/Blog-images/d9m5qkhzexvcfvloyuyk.png", alt: "Car Rental booking flow" },
    ],
    projectUrl: "https://car-rental-frontend-theta-ecru.vercel.app/",
    githubFrontendUrl: "https://github.com/Debos602/car-rental-frontend",
    githubBackendUrl: "https://github.com/Debos602/car-rental-server",
  },
  {
    id: 3,
    title: "Course Management Dashboard",
    description: "An all-in-one platform to simplify online learning, course creation, and student progress tracking from a single dashboard.",
    longDescription:
      "A full-stack course management system built with React, Node.js/Express, and MongoDB, enhanced with GSAP animations and Chart.js data visualizations. Instructors can create and organize courses, upload media via Cloudinary, and monitor student engagement through rich analytics. Students get a clean, intuitive interface to enroll, consume content, and track their own progress. The dashboard centralizes everything — from course authoring to performance reporting — in one secure, user-friendly environment.",
    techStack: ["React", "Node.js", "Express", "Tailwind CSS", "GSAP", "MongoDB", "Chart.js", "Cloudinary"],
    result: "Unified course creation, student management, and progress analytics into a single platform — cutting administrative overhead and giving both instructors and learners a faster, more organized e-learning experience.",
    previewImages: [
      { src: "https://res.cloudinary.com/dawt0ov0p/image/upload/v1777497280/Blog-images/yvlsxoeoc5xbv66etazy.png", alt: "Course Management admin dashboard" },
      { src: "https://res.cloudinary.com/dawt0ov0p/image/upload/v1777497280/Blog-images/yvlsxoeoc5xbv66etazy.png", alt: "Course listing and enrollment" },
      { src: "https://res.cloudinary.com/dawt0ov0p/image/upload/v1777497280/Blog-images/yvlsxoeoc5xbv66etazy.png", alt: "Student progress analytics" },
    ],
    projectUrl: "https://course-management-dashboard-eight.vercel.app/",
    githubFrontendUrl: "https://github.com/Debos602/course-management-dashboard",
    githubBackendUrl: "https://github.com/Debos602/course-management-server",
  },
  {
    id: 4,
    title: "Course Management Landing Page",
    description: "A visually engaging marketing landing page for the Course Management System, built with React and Framer Motion animations.",
    longDescription:
      "A polished, conversion-focused landing page for the Course Management System built with React, Node.js, and MongoDB, brought to life with Framer Motion animations. The page communicates the platform's core value proposition — simplified online learning and course administration — through smooth scroll animations, feature highlights, and a clear call-to-action flow. Designed to build trust with prospective instructors and students before they sign up.",
    techStack: ["React", "Node.js", "MongoDB", "Framer Motion"],
    result: "Created a high-impact marketing front for the Course Management System with fluid animations and a clear narrative flow, improving first impressions and driving sign-up conversions from both instructors and students.",
    previewImages: [
      { src: "https://res.cloudinary.com/dawt0ov0p/image/upload/v1777324308/Blog-images/pbmfa7ejia97hb8jebdt.png", alt: "Course Management landing page hero" },
      { src: "https://res.cloudinary.com/dawt0ov0p/image/upload/v1777324308/Blog-images/pbmfa7ejia97hb8jebdt.png", alt: "Features section" },
      { src: "https://res.cloudinary.com/dawt0ov0p/image/upload/v1777324308/Blog-images/pbmfa7ejia97hb8jebdt.png", alt: "Call to action section" },
    ],
    projectUrl: "https://course-management-landing-page.vercel.app/",
    githubFrontendUrl: "https://github.com/Debos602/course-management-frontend",
    githubBackendUrl: "https://github.com/Debos602/course-management-server",
  },
  {
    id: 5,
    title: "Sporting Goods E-Commerce",
    description: "A modern e-commerce platform for sports equipment, fitness gear, and athletic wear with secure checkout and fast delivery.",
    longDescription:
      "A full-stack sporting goods e-commerce platform built with React, TypeScript, and Node.js/Express on MongoDB. The UI leverages Tailwind CSS and Flowbite components, animated with Framer Motion for a dynamic shopping experience. Customers can browse categorized products, filter by sport or brand, and complete purchases through a secure checkout flow. The backend handles product management, order processing, and inventory tracking, making it a complete retail solution for the sporting goods space.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS", "Flowbite", "Framer Motion"],
    result: "Delivered a fully functional sporting goods storefront with smooth animations, category-based browsing, and secure end-to-end checkout — providing athletes and fitness enthusiasts a seamless online shopping experience.",
    previewImages: [
      { src: "https://res.cloudinary.com/dawt0ov0p/image/upload/v1777497736/Blog-images/ftqkntseoobwusch48ra.png", alt: "Sporting Goods homepage" },
      { src: "https://res.cloudinary.com/dawt0ov0p/image/upload/v1777497736/Blog-images/ftqkntseoobwusch48ra.png", alt: "Product category listings" },
      { src: "https://res.cloudinary.com/dawt0ov0p/image/upload/v1777497736/Blog-images/ftqkntseoobwusch48ra.png", alt: "Product detail and checkout" },
    ],
    projectUrl: "https://sportings-goods-client.vercel.app/",
    githubFrontendUrl: "https://github.com/Debos602/sporting-goods-client",
    githubBackendUrl: "https://github.com/Debos602/sportings-goods",
  },
  {
    id: 6,
    title: "Portfolio Landing Page",
    description: "A personal developer portfolio showcasing projects, skills, and experience with clean UI design and smooth animations.",
    longDescription:
      "A sleek, responsive personal portfolio site built with React, Tailwind CSS, and Framer Motion. It presents a curated view of projects, technical skills, and professional experience through animated section transitions, an interactive project gallery, and a contact form. Designed to make a strong first impression with recruiters and clients, the site balances visual flair with fast load times and accessibility — demonstrating the same frontend craft it's built to showcase.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    result: "Established a compelling personal brand online with a fast, animated portfolio that clearly communicates technical depth and design sensibility — leading to stronger engagement from potential employers and collaborators.",
    previewImages: [
      { src: "https://res.cloudinary.com/dawt0ov0p/image/upload/v1777478892/Blog-images/t5wazpwljmewgchvnzi5.png", alt: "Portfolio hero section" },
      { src: "https://res.cloudinary.com/dawt0ov0p/image/upload/v1777478892/Blog-images/t5wazpwljmewgchvnzi5.png", alt: "Projects showcase section" },
      { src: "https://res.cloudinary.com/dawt0ov0p/image/upload/v1777478892/Blog-images/t5wazpwljmewgchvnzi5.png", alt: "Skills and contact section" },
    ],
    projectUrl: "https://mumair-kohl.vercel.app/",
    githubFrontendUrl: "https://github.com/Debos602/Mumair",
  },
];

const INITIAL_VISIBLE = 3;

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [openProjectIds, setOpenProjectIds] = useState<number[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedPreview, setSelectedPreview] = useState<{ projectId: number; imageIndex: number } | null>(null);

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

  const visibleProjects = React.useMemo(
    () => (showAll ? MOCK_PROJECTS : MOCK_PROJECTS.slice(0, INITIAL_VISIBLE)),
    [showAll]
  );

  function openPreview(projectId: number, imageIndex = 0) {
    setSelectedPreview({ projectId, imageIndex });
  }

  function closePreview() {
    setSelectedPreview(null);
  }

  function changePreviewImage(direction: -1 | 1) {
    if (!selectedPreview) return;

    const project = MOCK_PROJECTS.find((item) => item.id === selectedPreview.projectId);
    if (!project?.previewImages.length) return;

    const totalImages = project.previewImages.length;
    const nextIndex = (selectedPreview.imageIndex + direction + totalImages) % totalImages;

    setSelectedPreview({ projectId: selectedPreview.projectId, imageIndex: nextIndex });
  }

  useEffect(() => {
    if (!selectedPreview) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPreview(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPreview]);

  const selectedProject = selectedPreview
    ? MOCK_PROJECTS.find((project) => project.id === selectedPreview.projectId)
    : null;
  const selectedImage = selectedProject?.previewImages[selectedPreview?.imageIndex ?? 0];

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
                      <h3 className=" text-[14px] md:text-md font-semibold text-gray-900 leading-tight">{project.title}</h3>
                      <p className="text-gray-500 text-[14px] text-balance truncate mt-0.5">{project.description}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1 shrink-0">
                      <a
                        href={project.projectUrl ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
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
                      <div className="flex flex-col gap-4 px-4 project-detail-item sm:flex-row">
                        {/* Left: description + tags + result */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-700 leading-relaxed mb-3">
                            {project.longDescription}
                          </p>

                          {/* Tech tags */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
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

                        {/* Right: preview image marquee */}
                        <div className="relative w-full flex-1 overflow-hidden rounded-lg border border-[lab(90.6853%_0.399232_-1.45452)] bg-gray-100 h-52 sm:w-[280px] sm:h-44">
                          <div className="flex h-full animate-marquee gap-2">
                            {[...project.previewImages, ...project.previewImages].map((img, idx) => (
                              <button
                                key={`${img.src}-${idx}`}
                                type="button"
                                onClick={() => openPreview(project.id, idx % project.previewImages.length)}
                                className="relative w-64 shrink-0 overflow-hidden cursor-pointer group/proj bg-transparent p-1 h-full"
                                aria-label={`Preview ${idx % project.previewImages.length + 1}`}
                              >
                                <img
                                  src={img.src}
                                  alt={img.alt}
                                  className="object-cover w-full h-full border border-[lab(90.6853%_0.399232_-1.45452)]"
                                />
                                <div className="absolute inset-1 bg-black/50 opacity-0 group-hover/proj:opacity-100 transition-opacity flex items-center justify-center">
                                  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 text-white">
                                    <path d="M7 17L17 7M17 7H7M17 7v10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-col gap-2 mt-4 pt-3 border-t border-gray-200 px-4 project-detail-item sm:flex-row sm:items-center sm:flex-wrap">
                        <a
                          href={project.projectUrl ?? "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M7 17 17 7" /><path d="M7 7h10v10" />
                          </svg>
                          View Project
                        </a>
                        {project.githubFrontendUrl && (
                          <a
                            href={project.githubFrontendUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M9 19c-5 1.5-5-2.5-7-3" />
                              <path d="M15 3h-1a2 2 0 0 0-2 2v1" />
                              <path d="M15 3h1a2 2 0 0 1 2 2v1" />
                              <path d="M15 3v2a2 2 0 0 0 2 2h2" />
                              <path d="M15 3v2a2 2 0 0 1-2 2h-2" />
                            </svg>
                            Frontend Code
                          </a>
                        )}
                        {project.githubBackendUrl && (
                          <a
                            href={project.githubBackendUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect x="3" y="5" width="18" height="14" rx="2" />
                              <path d="M7 9h.01" />
                              <path d="M7 13h.01" />
                              <path d="M11 9h6" />
                              <path d="M11 13h6" />
                            </svg>
                            Backend Code
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={() => openPreview(project.id)}
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
            <div className="border-t border-[lab(90.6853%_0.399232_-1.45452)] bg-white/80">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="group mx-auto my-2 flex items-center justify-center gap-2 rounded-md border border-[lab(90.6853%_0.399232_-1.45452)] bg-background px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-50 hover:text-gray-900"
              >
                <span>{showAll ? "Show Less" : "Show More"}</span>
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
                  className={"transition-transform duration-200 group-hover:translate-y-0.5 " + (showAll ? "rotate-180" : "")}
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedProject && selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-sm sm:px-6" role="dialog" aria-modal="true" aria-label={`Preview images for ${selectedProject.title}`}>
          <div className="relative flex h-full w-full max-w-7xl flex-col gap-4">
            <div className="flex items-center justify-between text-sm text-white/80">
              <div>
                <p className="font-medium text-white">{selectedProject.title}</p>
                <p>{(selectedPreview?.imageIndex ?? 0) + 1} / {selectedProject.previewImages.length}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={closePreview}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm transition hover:bg-white/20"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <button
                type="button"
                onClick={() => changePreviewImage(-1)}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-3 text-white transition hover:bg-black/70"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="h-full w-full object-contain"
              />

              <button
                type="button"
                onClick={() => changePreviewImage(1)}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-3 text-white transition hover:bg-black/70"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {selectedProject.previewImages.map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  onClick={() => setSelectedPreview({ projectId: selectedProject.id, imageIndex: index })}
                  className={`h-14 w-20 overflow-hidden rounded-lg border transition ${selectedPreview?.imageIndex === index ? "border-white" : "border-white/20"}`}
                  aria-label={`Show image ${index + 1}`}
                >
                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <HatchDivider/>
    </section>
  );
}