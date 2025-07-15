"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/navbar";
import Footer from "../components/footerSection";

// Categories
const allCategories = [
  "All",
  "Game Development",
  "Web Design",
  "Web Development",
  "Graphic Design",
];

// Projects
const projects = [
  {
    id: 1,
    title: "Space Shooter Game",
    category: "Game Development",
    image: "/images/gamedev.jpg",
    description:
      "A 2D space shooter built using Unity and C#. Includes enemy AI, scoring system, and polished UI/UX.",
  },
  {
    id: 2,
    title: "Restaurant Website",
    category: "Web Design",
    image: "/images/webdesign.jpg",
    description:
      "Responsive static website built with HTML, CSS, and Tailwind for a local restaurant with menu and contact sections.",
  },
  {
    id: 3,
    title: "Full Stack CRM",
    category: "Web Development",
    image: "/images/webdev.jpg",
    description:
      "MERN stack-based CRM system with user authentication, data visualization, and RESTful APIs.",
  },
  {
    id: 4,
    title: "Brand Logo Pack",
    category: "Graphic Design",
    image: "/images/graph.jpg",
    description:
      "Professional logo pack designed in Adobe Illustrator, tailored for modern tech startups and personal brands.",
  },
  {
    id: 5,
    title: "Adventure Platformer",
    category: "Game Development",
    image: "/images/gamedev2.jpg",
    description:
      "A 2D side-scroller made in Godot featuring collectible items, obstacles, and animated characters.",
  },
  {
    id: 6,
    title: "My Web",
    category: "Web Development",
    image: "/images/webdev2.jpg",
    description:
      "Personal portfolio built with React and Next.js showcasing interactive projects and blog integration.",
  },
  {
    id: 7,
    title: "Social Media Product Post Set",
    category: "Graphic Design",
    image: "/images/grapdesign2.jpg",
    description:
      "A vibrant and engaging set of Instagram and Facebook post templates designed for a skincare brand to promote their new product launch.",
  }
  
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((proj) => proj.category === activeCategory);

  return (
    <>
      <Navbar />

      <div className="min-h-screen px-4 py-24 bg-[#0f0f0f] text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10 text-center"
        >
          Our Work
        </motion.h1>

        {/* Filter Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {allCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                activeCategory === category
                  ? "bg-gradient-to-r from-neutral-900 to-stone-700 text-white shadow-lg"
                  : "bg-neutral-900 border border-neutral-700 text-gray-300 cursor-pointer hover:bg-neutral-800 hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Animated Project Cards */}
        <motion.div
          layout // Smooth container resize
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}
