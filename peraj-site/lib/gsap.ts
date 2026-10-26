import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Mirrors the motion tokens in globals.css (seconds).
export const motion = {
  fast: 0.2,
  base: 0.5,
  slow: 0.7,
  ease: "power3.out",
};

export { gsap, ScrollTrigger, useGSAP };
