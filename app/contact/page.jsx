"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footerSection";
import ContactFormModal from "../components/contactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar />

      <div className="min-h-screen px-6 py-24 bg-[#0f0f0f] text-white flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Let’s Start a Conversation
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We’d love to hear about your project and how we can help you achieve your goals through creative solutions.
          </p>
        </div>

        {/* Info Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">

          {/* Email */}
          <div className="border border-white/10 bg-[#1a1a1a] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
            <Mail className="w-8 h-8 text-red-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-400 mb-4 mt-14">Our friendly team is here to help.</p>
            <button
              onClick={() => setShowForm(true)}
              className="text-gray-300 hover:underline font-semibold"
            >
              Send us an email
            </button>
          </div>
{/* Visit */}
<div className="md:col-span-2 border border-white/10 bg-[#1a1a1a] rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
  <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
  <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
  <p className="text-gray-400 mb-6">Come say hello at our offices in Pune and Aurangabad.</p>

  <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 md:gap-12">
    {/* Address 1 */}
    <div className="text-left md:w-1/2">
      <p className="text-gray-300 font-semibold">Address 1</p>
      <p className="text-gray-400 text-sm leading-relaxed mt-1">
        ArroWorks, Flat No. 1703, 17th Floor,<br />
        Guardian Cityscape, Sinhagad Road,<br />
        Pune, Maharashtra, India (411051).
      </p>
    </div>

    {/* Divider */}
    <div className="hidden md:block w-px h-24 bg-white/20" />

    {/* Address 2 */}
    <div className="text-left md:w-1/2">
      <p className="text-gray-300 font-semibold">Address 2</p>
      <p className="text-gray-400 text-sm leading-relaxed mt-1">
        ArroWorks, House No. 585, Arunoday Colony,<br />
        N-5 CIDCO, <br />
        Chhatrapati Sambhajinagar, Maharashtra,<br />
        India (431003).
      </p>
    </div>
  </div>
</div>


          {/* Call */}
          <div className="border border-white/10 bg-[#1a1a1a] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
            <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-400 mb-4 mt-14">Mon–Fri from 9am to 6pm</p>
            <a href="tel:+919876543210" className="text-gray-300 hover:underline font-semibold">
              +91 82085 60068
            </a>
          </div>
        </div>

        {/* Modal Form */}
        <ContactFormModal isOpen={showForm} onClose={() => setShowForm(false)} />
      </div>

      <Footer />
    </>
  );
}
