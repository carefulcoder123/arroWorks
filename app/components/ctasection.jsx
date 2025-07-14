"use client";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="bg-[#121212] text-white py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Build Something Amazing?
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Let's take your idea from concept to reality. Whether it's a website, game, or branding — we're excited to make it happen with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-medium transition duration-300 shadow-md"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
