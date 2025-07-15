  "use client";
  import { motion } from "framer-motion";
  import React, { useRef, useState } from "react";

  export default function AnimatedText({ text, down = false, className = "" }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;

      const letters = Array.from(container.children);

      let closest = -1;
      let closestDist = Infinity;

      letters.forEach((letter, index) => {
        const box = letter.getBoundingClientRect();
        const center = box.left + box.width / 2 - rect.left;
        const dist = Math.abs(center - x);
        if (dist < closestDist) {
          closest = index;
          closestDist = dist;
        }
      });

      setHoveredIndex(closest);
    };

    const handleMouseLeave = () => {
      setHoveredIndex(null);
    };

    return (
      <h1
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`flex flex-wrap text-[#03fef8] text-[calc(1rem+8vw)] leading-none gap-[0.02em] cursor-pointer ${className}`}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            animate={{
              scaleY:
                hoveredIndex === null
                  ? 1
                  : Math.max(1, 1.3 - Math.abs(index - hoveredIndex) * 0.1),
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            style={{
              display: "inline-block",
              transformOrigin: down ? "top" : "bottom",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>
    );
  }
