import Image from "next/image";
import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import Services from "./components/servicesSection";
import ProcessSection from "./components/ProcessSection";
import WorkSection from "./components/workSection";
import Testimonials from "./components/testimonialsSection";
import CtaSection from "./components/ctasection";
import Footer from "./components/footerSection";




export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
     <Services/> 
    <ProcessSection />
    <WorkSection />
    <Testimonials />
    <CtaSection />
    <Footer />
    </>
  );
}
