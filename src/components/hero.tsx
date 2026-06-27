"use client";

import Image from "next/image";
import image from "../asset/debos_image.jpg";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { CodeXml, MapPin, Clock, Mail, Globe } from "lucide-react";
import { HatchDivider } from "./HatchDivider";

export default function Hero() {
  const [currentTime, setCurrentTime] = useState("");
  const titleRef = useRef<HTMLTitleElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const infoGridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Dhaka",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      const timeString = formatter.format(new Date());
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const ctx = gsap.context(() => {
      // Draw SVG paths animation
      const paths = svgRef.current!.querySelectorAll("path");
      gsap.set(paths, { strokeDasharray: "0 1", strokeDashoffset: "1", opacity: 0 });

      gsap.to(paths, {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.3,
        ease: "power2.inOut",
      });

      // Title animation (already exists)
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.5 }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!imageRef.current || !nameRef.current || !taglineRef.current || !infoGridRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([imageRef.current, nameRef.current, taglineRef.current], { opacity: 0 });
      gsap.set(infoGridRef.current!.querySelectorAll(".grid > div"), { opacity: 0 });

      // Image reveal animation
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, rotation: -5 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" }
      );

      // Name and tagline stagger
      gsap.fromTo(
        nameRef.current,
        { y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(
        taglineRef.current,
        { y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.5 }
      );

      // Info grid items stagger
      const gridItems = infoGridRef.current!.querySelectorAll(".grid > div");
      gsap.fromTo(
        gridItems,
        { x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.7
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="bg-background mt-10">
      <div className="max-w-3xl border-x border-[lab(90.6853%_0.399232_-1.45452)] mx-auto">
        <div className="mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-center py-6 relative">
            <svg
              ref={svgRef}
              className="h-14 sm:h-20 text-foreground w-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 638 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="14.8883"
              strokeLinecap="round"
            >
              <title ref={titleRef}>hello</title>
              <path
                d="M8.69214 166.553C36.2393 151.239 61.3409 131.548 89.8191 98.0295C109.203 75.1488 119.625 49.0228 120.122 31.0026C120.37 17.6036 113.836 7.43883 101.759 7.43883C88.3598 7.43883 79.9231 17.6036 74.7122 40.9363C69.005 66.5793 64.7866 96.0036 54.1166 190.356"
              />
              <path
                d="M55.1624 181.135C60.6251 133.114 81.4118 98.0479 107.963 98.0479C123.844 98.0479 133.937 110.703 131.071 128.817C129.457 139.487 127.587 150.405 125.408 163.06C122.869 178.941 130.128 191.348 152.122 191.348C184.197 191.348 219.189 173.523 237.097 145.915C243.198 136.509 245.68 128.073 245.928 119.884C246.176 104.996 237.739 93.8296 222.851 93.8296C203.992 93.8296 189.6 115.17 189.6 142.465C189.6 171.745 205.481 192.341 239.208 192.341C285.066 192.341 335.86 137.292 359.199 75.8585C365.788 58.513 368.26 42.4065 368.26 31.1512C368.26 17.8057 364.042 7.55823 352.131 7.55823C340.469 7.55823 332.777 16.6141 325.829 30.9129C317.688 47.4967 311.667 71.4162 309.203 98.4549C303 166.301 316.896 191.348 349.936 191.348C390 191.348 434.542 135.534 457.286 75.6686C463.803 58.513 466.275 42.4065 466.275 31.1512C466.275 17.8057 462.057 7.55823 450.146 7.55823C438.484 7.55823 430.792 16.6141 423.844 30.9129C415.703 47.4967 409.682 71.4162 407.218 98.4549C401.015 166.301 414.911 191.348 444.416 191.348C473.874 191.348 489.877 165.67 499.471 138.402C508.955 111.447 520.618 94.8221 544.935 94.8221C565.035 94.8221 580.916 109.71 580.916 137.75C580.916 168.768 560.792 192.093 535.362 192.341C512.984 192.589 498.285 174.475 499.774 147.179C501.511 116.907 519.873 94.8221 543.943 94.8221C557.839 94.8221 569.51 100.999 578.682 107.725C603.549 125.866 622.709 114.656 630.047 96.7186"
              />
            </svg>
          </div>

          <div
            className="absolute top-[140px] sm:top-[180px] left-0 right-0 h-8 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 8px)",
            }}
          />

          <div className="flex flex-col sm:flex-row items-center sm:items-end mt-8 sm:mt-[34px] relative w-full gap-6 sm:gap-0 px-4 sm:px-0">
            <div className="flex-shrink-0 border-r border-[lab(90.6853%_0.399232_-1.45452)] hidden sm:block">
              <div ref={imageRef} className="h-36 w-36 m-[5px] rounded-full shadow-lg ring-4 ring-white overflow-hidden">
                <Image
                  src={image}
                  alt="Debos"
                  width={144}
                  height={144}
                  className="object-cover h-36 w-36"
                />
              </div>
            </div>

            <div className="sm:hidden flex justify-center -mt-4 mb-2">
              <div className="h-28 w-28 rounded-full shadow-lg ring-4 ring-white overflow-hidden border border-[lab(90.6853%_0.399232_-1.45452)]">
                <Image
                  src={image}
                  alt="Debos"
                  width={112}
                  height={112}
                  className="object-cover h-28 w-28"
                />
              </div>
            </div>

            <div className="w-full text-center sm:text-left">
              <h1 ref={nameRef} className="flex items-center justify-center sm:justify-start gap-2 py-1.5 pl-0 sm:pl-4 font-heading text-3xl sm:text-3xl font-semibold leading-none tracking-tight border-y border-[lab(90.6853%_0.399232_-1.45452)] text-foreground">
                Debos Das
                <svg
                  className="h-6 w-6 text-[#1d9bf0] flex-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="10" fill="#1d9bf0" />
                  <path
                    d="M16.5 9l-5 5-2.5-2.5"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </h1>

              <div className="h-auto py-1.5 pl-0 sm:pl-4">
                <p ref={taglineRef} className="inline-flex items-center gap-1 font-mono text-sm text-balance text-muted-foreground">
                  Passionate web developer specializing in modern.
                </p>
              </div>
            </div>
          </div>

          <div
            className="absolute top-[310px] sm:top-[365px] left-0 right-0 h-8 pointer-events-none border-y border-[lab(90.6853%_0.399232_-1.45452)]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 8px)",
            }}
          />

          <div className="p-4 mt-8 sm:mt-[34px] space-y-2.5">
            <div ref={infoGridRef} className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <div className="flex items-center gap-4 font-mono text-sm">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background select-none [&_svg]:pointer-events-none [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4">
                    <CodeXml aria-hidden="true" />
                  </div>
                  <p className="text-balance flex items-center gap-1">
                    <span>Web Developer</span>
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 font-mono text-sm">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background select-none [&_svg]:pointer-events-none [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4">
                    <MapPin aria-hidden="true" />
                  </div>
                  <p className="text-balance">
                    <a className="link hover:underline" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=Chittagong,Bangladesh">
                      Chittagong, Bangladesh
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 font-mono text-sm">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background select-none [&_svg]:pointer-events-none [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4">
                    <Clock aria-hidden="true" />
                  </div>
                  <p className="text-balance">
                    {currentTime} // Asia/Dhaka
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 font-mono text-sm">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background select-none [&_svg]:pointer-events-none [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4">
                    <Mail aria-hidden="true" />
                  </div>
                  <p className="text-balance">
                    <a href="mailto:Debos.das.02@gmail.com" className="link hover:underline">
                      Debos.das.02@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 font-mono text-sm">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background select-none [&_svg]:pointer-events-none [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4">
                    <Globe aria-hidden="true" />
                  </div>
                  <p className="text-balance">
                    <a className="link hover:underline" href="tel:+8801834491602">
                      +8801834491602
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-4 pt-2">
            <ul className="flex flex-wrap justify-center sm:justify-start gap-2">
              {/* Add your social links here (GitHub, LinkedIn, etc.) */}
            </ul>
          </div>
        </div>
      </div>

      <HatchDivider />
    </section>
  );
}