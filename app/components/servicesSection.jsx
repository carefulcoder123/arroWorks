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
      title: "SEO Optimization",
      icon: <Globe size={32} className="text-green-500" />,
      description: "Boost your online visibility and search engine ranking.",
    },
    {
      title: "Game Development",
      icon: <Gamepad2 size={32} className="text-purple-500" />,
      description: "Interactive 2D & 3D games for web and mobile.",
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
        <h2 className="text-4xl font-bold text-center mb-4">Our Core Services</h2>
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
          <Link
            href="/services"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition duration-300"
          >
            Explore More
          </Link>
        </div>

      </section>
    );
  }
  