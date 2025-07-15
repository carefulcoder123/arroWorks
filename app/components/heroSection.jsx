"use client"
import { useState, useEffect } from "react";
import { TypingAnimation } from "./magicui/typing-animation";
import AnimatedText from "./AnimatedText";
import Link from "next/link";

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
    <div className=" relative z-0 min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
  <section className="flex flex-col justify-center items-center text-white px-4 text-center min-h-screen py-24">
    
    <div className="mb-12 ">
      <AnimatedText text="ArroWorks" className="font-logo text-[#03fef8]" />
    </div>

    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-snug text-gray-200">
      Your Ideas, Our Code –{" "}
      <TypingAnimation className="inline text-gray-600">
        Let&apos;s build what&apos;s on your mind.
      </TypingAnimation>
    </h1>

    <p className={`text-xl md:text-2xl text-gray-300 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
      {dynamicLines[index]}
    </p>


<Link href="/contact">
    <button className="mt-16  relative inline-block px-6 py-4 text-white text-lg font-semibold border border-neutral-700 rounded-full overflow-hidden group hover:scale-105 transition duration-300 cursor-pointer">
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1000ms] ease-in-out"></span>
  <span className="relative z-10">Join Now</span>
</button>
</Link>

  </section>
</div>

</>

  );
}
