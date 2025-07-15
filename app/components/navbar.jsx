"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-[#393738]/30 backdrop-blur-lg border-b border-neutral-700">
      <div className="w-full px-6 pl-2 sm:px-10 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <img src="/logo1.png" alt="my-logo" className="h-12 md:h-24" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white text-md">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/work" className="hover:underline">Work</Link></li>
          <li><Link href="/services" className="hover:underline">Services</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a] text-white px-6 py-4">
          <ul className="flex flex-col space-y-4 text-lg font-medium">
            <li><Link href="/" onClick={closeMenu}>Home</Link></li>
            <li><Link href="/work" onClick={closeMenu}>Work</Link></li>
            <li><Link href="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
