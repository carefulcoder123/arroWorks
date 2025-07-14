"use client";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./shadcn/carousel";

const testimonials = [
  {
    name: "Sarthak Sharma",
    role: "Founder, Designify",
    quote:
      "ArroWorks transformed our vision into a stunning digital product. Their professionalism, design sense, and technical skill exceeded our expectations.",
  },
  {
    name: "Riya Kapoor",
    role: "Marketing Head, PixelPeak",
    quote:
      "We’ve worked with multiple agencies, but ArroWorks stands out for their dedication and communication. Every step was transparent and collaborative.",
  },
  {
    name: "Aditya Mehra",
    role: "CTO, GameLayer",
    quote:
      "From concept to delivery, ArroWorks handled everything flawlessly. Their developers are top-notch and truly care about delivering quality.",
  },
  {
    name: "Aarav Patel",
    role: "CEO, CodeCrate",
    quote:
      "The team at ArroWorks is fantastic! They delivered above and beyond. Communication was clear, and the outcome was exactly what we envisioned.",
  },
  {
    name: "Neha Bansal",
    role: "Project Manager, WebNest",
    quote:
      "We had a tight deadline, but ArroWorks delivered on time without compromising quality. Highly recommended for any digital needs.",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section id="testimonials" className="bg-black text-white min-h-screen py-20 px-4">
  <div className="max-w-4xl flex flex-col justify-center min-h-screen mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
    <p className="text-gray-400 mb-20 max-w-xl mx-auto">
      We’re proud to have helped businesses of all sizes bring their ideas
      to life. Here’s what some of them had to say.
    </p>

    <div className="relative w-full max-w-3xl mx-auto">
      <Carousel opts={{ align: "center" }}>
        <CarouselContent className="pl-4 pr-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="basis-full">
              <motion.div
                transition={{ type: "spring", stiffness: 200 }}
                className="w-[80%] max-w-md mx-auto bg-neutral-900 border border-white/10 p-6 rounded-xl shadow-lg flex flex-col items-start text-left min-h-[300px] h-full"
              >
                <p className="text-gray-300 text-md leading-relaxed italic mb-4">
                  “{testimonial.quote}”
                </p>
                <div className="mt-auto">
                  <h3 className="text-lg font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  </div>
</section>

  );
}
