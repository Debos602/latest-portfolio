"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

type RouteTransitionProps = {
  children: React.ReactNode;
};

export default function RouteTransition({ children }: RouteTransitionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [routeKey, setRouteKey] = useState("");

  useEffect(() => {
    setRouteKey(`${window.location.pathname}${window.location.hash}`);
  }, [pathname]);

  useEffect(() => {
    const updateRouteKey = () => {
      setRouteKey(`${window.location.pathname}${window.location.hash}`);
    };

    window.addEventListener("hashchange", updateRouteKey);
    return () => window.removeEventListener("hashchange", updateRouteKey);
  }, []);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
        clearProps: "all",
      }
    );
  }, [routeKey]);

  return (
    <div ref={wrapperRef} className="min-h-screen overflow-x-hidden">
      {children}
    </div>
  );
}
