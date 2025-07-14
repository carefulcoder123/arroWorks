"use client";
import { motion } from "framer-motion";

const steps = [
    {
      title: "01. Discover",
      subtitle: "Understanding What You Need",
      description:
        "We kick things off by getting to know you — your goals, challenges, and what success looks like. Through open conversations, we gather everything we need to build something that fits your vision perfectly."
    },
    {
      title: "02. Design",
      subtitle: "Turning Ideas into Visuals",
      description:
        "Once we know what you’re aiming for, our designers get to work crafting clean, user-friendly designs. We’ll share mockups, gather your thoughts, and fine-tune everything together until it feels just right."
    },
    {
      title: "03. Develop",
      subtitle: "Bringing the Design to Life",
      description:
        "This is where the magic happens. Our developers build your product using the latest tools and best practices. You’ll get to see progress, share feedback, and watch your ideas come to life — pixel by pixel."
    }, 
    {
      title: "04. Deliver",
      subtitle: "Going Live & Staying With You",
      description:
        "Once everything’s ready, we’ll launch your project smoothly and confidently. But we don’t just disappear — we’re here to support you, fix bugs, and help as your needs grow."
    }
  ];
  
  

export default function ProcessSection() {
  return (
    <section className="py-20 px-4 bg-black text-white text-center min-h-screen" id="process">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
        <h4 className="text-lg text-center mb-12 text-gray-500"> A simple, collaborative approach — designed to turn your ideas into powerful results, step by step.</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-14 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-start group">
            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-950 border border-white/10 rounded-xl p-6 w-full h-full shadow-lg text-left"
            >
              <h3 className="text-lg text-gray-400 font-mono mb-1">{step.title}</h3>
              <h4 className="text-2xl font-bold mb-6">{step.subtitle}</h4>
              <p className="text-md text-gray-300 mb-2 text-justify">{step.description}</p>
              {/* <p className="text-xs text-gray-500 italic">
                <span className="font-medium text-white">Client’s Role:</span> {step.clientInvolvement}
              </p> */}
            </motion.div>

          </div>
        ))}
      </div>
    </section>
  );
}
