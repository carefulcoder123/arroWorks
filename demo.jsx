"use client";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./shadcn/carousel"

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
];

export default function TestimonialsCarousel() {
  return (
    <section
      id="testimonials"
      className="bg-black min-h-screen text-white py-20 flex items-center px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto text-center ">
        <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          We’re proud to have helped businesses of all sizes bring their ideas
          to life. Here’s what some of them had to say.
        </p>

        <Carousel className="md:w-full w-[80%] mx-auto md:mx-0 relative">
          <CarouselContent className="">
              
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className=" md:basis-1/2 basis-1/1 w-[90%] mx-auto  lg:basis-1/3">
                <motion.div
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-neutral-900  border border-white/10 p-6 rounded-xl shadow-lg flex flex-col items-start text-left min-h-[220px] h-full"
                >
                  <p className="text-gray-300 text-md leading-relaxed italic mb-4">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-auto">
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
            
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
