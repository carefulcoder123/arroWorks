import {
    Code,
    Brush,
    Globe,
    Layers3,
    Gamepad2,
    Cpu,
  } from "lucide-react"; // Lucide icons
  import Link from "next/link";

  
  const services = [
    {
      title: "Web Development",
      icon: <Code size={32} className="text-blue-500" />,
      description: "Building scalable and fast websites using modern stacks.",
    },
    {
      title: "Graphic Design",
      icon: <Brush size={32} className="text-pink-500" />,
      description: "Eye-catching visual design for your brand and product.",
    },
    {
      title: "Game Development",
      icon: <Gamepad2 size={32} className="text-purple-500" />,
      description: "2D, 3D and realistic games for PC and consoles ",
    },
    {
      title: "SEO Optimization",
      icon: <Globe size={32} className="text-green-500" />,
      description: "Boost your online visibility and search engine ranking.",
    },
    {
      title: "Full Stack Solutions",
      icon: <Layers3 size={32} className="text-yellow-500" />,
      description: "Complete backend + frontend web solutions, optimized.",
    },
    {
      title: "Software Programming",
      icon: <Cpu size={32} className="text-red-500" />,
      description: "C, C++, Java, Python & algorithm-driven development.",
    },
  ]; 
  
  export default function Services() {
    return (
      <section className="py-16 px-4 bg-[#0f0f0f] text-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Core Services</h2>
        <h4 className="text-lg text-center mb-12 text-gray-500"> From design to deployment, we offer everything you need to build and grow your digital presence.</h4>
  
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
  
        <div className="mt-12 text-center">
          
        <Link href="/services">
          <button className="my-8  relative inline-block mx-auto px-6 py-4 text-white text-lg font-semibold border border-neutral-700 rounded-full overflow-hidden group hover:scale-105 transition duration-300 cursor-pointer">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1000ms] ease-in-out"></span>
            <span className="relative z-10">Explore More</span>
          </button>
        </Link>
        </div>

      </section>
    );
  }
  