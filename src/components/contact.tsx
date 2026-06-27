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
        I'm currently available for new projects. Let's discuss how we can build something amazing together.
      </p>
      <div className="contact-reveal relative inline-block select-none">
        <div style={{ perspective: '1000px', perspectiveOrigin: '50% 50%' }}>
          <div style={{
            position: 'relative',
            width: '150px',
            height: '46px',
            transformStyle: 'preserve-3d',
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease',
            transform: 'none'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '150px',
              height: '46px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              transformStyle: 'preserve-3d',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease, gap 0.4s ease',
              transform: 'translateZ(20px)',
              zIndex: 30,
              pointerEvents: 'none'
            }}>
              <span style={{
                fontSize: '14px',
                color: '#ffffff',
                fontWeight: '500',
                textShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)',
                transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: 'scale(1)',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                Get in touch
              </span>
            </div>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '150px',
              height: '46px',
              transformStyle: 'preserve-3d',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease',
              transform: 'translateZ(10px) translateY(0) scale(1)',
              zIndex: 20
            }}>
              <div style={{
                width: '146px',
                height: '42px',
                margin: '2px',
                borderRadius: '12px',
                background: 'linear-gradient(180deg, #202020 0%, #000000 100%)',
                boxShadow: 'none',
                transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease, box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
              </div>
            </div>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '150px',
              height: '46px',
              transformStyle: 'preserve-3d',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease',
              transform: 'translateZ(0px) translateY(0) scale(1)',
              zIndex: 10
            }}>
              <div style={{
                height: '46px',
                width: '150px',
                borderRadius: '12px',
                boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 36px 14px 0px, rgba(0, 0, 0, 0.08) 0px 20px 12px 0px, rgba(0, 0, 0, 0.12) 0px 9px 9px 0px, rgba(0, 0, 0, 0.15) 0px 2px 5px 0px',
                transition: '0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s, height 0.4s, box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                background: 'rgba(0, 0, 0, 0)'
              }}>
                <div className="shader-container-exploded-rect" style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  width: '150px',
                  maxWidth: '150px',
                  height: '46px',
                  transition: 'width 0.4s ease, height 0.4s ease'
                  /* data-paper-shader="" */
                }}>
                  <canvas width="270" height="84"></canvas>
                  <canvas width="270" height="84"></canvas>
                  <canvas width="270" height="84"></canvas>
                  <canvas width="270" height="84"></canvas>
                  <canvas width="270" height="84"></canvas>
                </div>
              </div>
            </div>
            <button
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '150px',
                height: '46px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                outline: 'none',
                zIndex: 40,
                transformStyle: 'preserve-3d',
                transform: 'translateZ(25px)',
                transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease',
                overflow: 'hidden',
                borderRadius: '12px'
              }}
              aria-label="Get in touch"
            ></button>
          </div>
        </div>
      </div>
      </div>
      <HatchDivider/>
    </section>
  );
}