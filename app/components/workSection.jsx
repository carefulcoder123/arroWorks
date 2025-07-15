import React from 'react'
import Link from 'next/link';


const projects = [
  {
    image: "/images/gamedev.jpg",
    title: "Portfolio Website",
    description: "A modern and responsive personal portfolio for a freelance designer.",
    type: "Web Development"
  },
  {
    image: "/images/gamedev2.jpg",
    title: "Logo & Branding Kit",
    description: "Complete visual identity for a local startup including logo, colors, and typography.",
    type: "Graphic Design"
  },
  {
    image: "/images/graphic_design.jpg",
    title: "Tower Defense Game",
    description: "A casual mobile game built with Unity and C#.",
    type: "Game Development"
  },
  {
    image: "/images/webdesign.jpg",
    title: "E-Commerce Dashboard",
    description: "Admin panel with charts, order tracking, and user management.",
    type: "Full Stack"
  },
  {
    image: "/images/webdev.jpg",
    title: "Product Animation",
    description: "A smooth 3D animation for a product launch using Blender.",
    type: "3D Animation"
  },
  {
    image: "/images/webdev2.jpg",
    title: "Architectural Render",
    description: "Photo-realistic render of a commercial building concept.",
    type: "3D Architecture"
  }
];


function worksection() {
  return (

    <section className="py-20 px-4 bg-[#0f0f0f] text-white" id='worksection'>

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Work</h2>
      <p className="text-md md:text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12">
        A glimpse into some of the projects we’ve crafted across web, design, and gaming — tailored for impact.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <a href="#worksection" key={idx} className="group">
            <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-lg group-hover:scale-[1.02] transition duration-300 h-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col h-full">
                <div className="mb-2">
                  <span className="inline-block font-michroma px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 text-gray-300">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
            </div>
          </a>

        ))}
      </div>
      <div className="flex justify-center items-center">

        <Link href="/work">
          <button className="mt-16  relative inline-block mx-auto px-6 py-4 text-white text-lg font-semibold border border-neutral-700 rounded-full overflow-hidden group hover:scale-105 transition duration-300 cursor-pointer">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-600 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1000ms] ease-in-out"></span>
            <span className="relative z-10">Explore More Projects</span>
          </button>
        </Link>
      </div>

    </section>

  )
}

export default worksection
