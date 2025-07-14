"use client"
import { useState, useEffect } from "react";
import { TypingAnimation } from "./magicui/typing-animation";
import AnimatedText from "./AnimatedText";
// import Particles from "./reacbits/particles/particles";



const dynamicLines = [
  "through powerful SEO strategies.",
  "with high-impact graphic design.",
  "using scalable web development.",
  "by building immersive 3D and game experiences.",
  "with optimized code and performance.",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % dynamicLines.length);
        setFade(true); // fade in after switching
      }, 300); // fade out duration
    }, 3000); // interval every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (


    <>
    <div className="relative z-0 min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
  <section className="flex flex-col justify-center items-center text-white px-4 text-center min-h-screen py-24">
    
    <div className="mb-10">
      <AnimatedText text="ArroWorks" />
    </div>

    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-snug text-gray-200">
      Your Ideas, Our Code –{" "}
      <TypingAnimation className="inline text-gray-600">
        Let&apos;s Build What&apos;s on Your Mind.
      </TypingAnimation>
    </h1>

    <p className={`text-xl md:text-2xl text-gray-300 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
      {dynamicLines[index]}
    </p>

    <button className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition duration-300">
      Book an Appointment
    </button>
  </section>
</div>

</>

  );
}
