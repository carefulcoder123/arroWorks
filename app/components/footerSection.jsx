"use client";
import {
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import icons from "./icons8-twitter.svg"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + tagline */}
        <div className="col-span-2">
          <h2 className="text-2xl font-bold text-white mb-2">ArroWorks</h2>
          <p className="text-sm text-gray-400">
            We craft digital experiences that bring your ideas to life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#worksection" className="hover:text-white">Our Work</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#process" className="hover:text-white">Process</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Get in Touch</h3>
          <p className="text-sm text-gray-400 mb-3">hello@arroworks.agency</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg"  className="text-white" viewBox="0 0 30 30" width="20px" height="20px"><path fill="currentColor" d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-white" viewBox="0 0 50 50" width="20px" height="20px">    <path fill="currentColor" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ArroWorks. All rights reserved.
      </div>
    </footer>
  );
}
