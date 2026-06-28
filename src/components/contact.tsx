"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HatchDivider } from "./HatchDivider";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = sectionRef.current?.querySelectorAll(".contact-reveal");

      if (elements?.length) {
        gsap.set(elements, { opacity: 0, y: 24, scale: 0.98 });
        gsap.to(elements, {
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

  return (
    <section ref={sectionRef} id="contact" className="text-center">
      <div className='max-w-3xl mx-auto border-x border-[lab(90.6853%_0.399232_-1.45452)] py-12'>
        <h2 className="contact-reveal font-heading  text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
        Let's work together
      </h2>
      <p className="contact-reveal text-muted-foreground max-w-md mx-auto mb-8">
        I'm currently available for new projects—from portfolio websites and SaaS apps to branding experiences and product launches. Send a quick message, share your goals, and let's turn your idea into a polished digital product.
      </p>
      <div className="contact-reveal relative inline-block select-none">
        <a
          href="https://drive.google.com/file/d/1rr_r63qRccDB8ogNcG5oJy5NUgsxATaV/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="animated-resume-button inline-flex items-center justify-center rounded-full border border-white/15 bg-[#111111] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_45px_-20px_rgba(0,0,0,0.8)] transition-all duration-300"
        >
          <span className="relative z-10">View Resume</span>
          <span className="absolute inset-0 rounded-full border border-white/10 opacity-50" />
          <span className="animated-resume-border absolute inset-0 rounded-full" aria-hidden="true" />
        </a>
      </div>
      </div>
      <HatchDivider/>
    </section>
  );
}