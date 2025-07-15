"use client";
import { motion } from "framer-motion";
import Link from "next/link";


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
          
        <Link href="/contact">
          <button className="mt-8  relative inline-block mx-auto px-6 py-4 text-white text-lg font-semibold border border-neutral-700 rounded-full overflow-hidden group hover:scale-105 transition duration-300 cursor-pointer">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1000ms] ease-in-out"></span>
            <span className="relative z-10">Get in Touch</span>
          </button>
        </Link>
        </motion.div>
      </div>
    </section>
  );
}
