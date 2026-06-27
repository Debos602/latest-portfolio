"use client";

import { MapPin } from 'lucide-react';
import Stack from './Stack';
import Experience from './experience';
import { HatchDivider } from './HatchDivider';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const points = [
    "I build fast, reliable web apps that turn complex requirements into clean, usable products",
    "I design data-driven tools for public safety teams, helping them act faster with better information",
    "I bring AI into everyday workflows so people get smarter, quicker answers without the extra friction",
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // About section heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // List items stagger animation
      gsap.fromTo(
        listRef.current?.children || [],
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stack section animation
      gsap.fromTo(
        stackRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stackRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Experience section animation
      gsap.fromTo(
        experienceRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: experienceRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="bg-gradient-safe">
      <div className="max-w-3xl mx-auto border-x border-[lab(90.6853%_0.399232_-1.45452)]">
        <h2 ref={headingRef} className="px-4 text-3xl font-bold tracking-tight text-foreground  border-b border-[lab(90.6853%_0.399232_-1.45452)]">
          About Me
        </h2>

        <ul ref={listRef} className="space-y-3 py-4">
          {points.map((text, i) => (
            <li key={i} className="flex items-center gap-3">
                 <MapPin  className="size-4 pl-2 text-primary" /> 
              <span className="text-base text-muted-foreground">{text}</span>
            </li>
          ))}
        </ul>
        
      </div>
      <HatchDivider />
      <div ref={stackRef}>
        <Stack />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
    </section>
  );
}

