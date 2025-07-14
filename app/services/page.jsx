"use client";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Layout,
  Paintbrush,
  BarChart2,
  Gamepad2,
  Cpu,
  Database,
  Hash,
  Settings,
  BoxSelect,
  HardDrive,
  Box,
  SmartphoneCharging,
  SquareDashedBottomCode,
  Layers,
  Triangle,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footerSection";


const iconGradients = {
  "Web Development": "from-[#6366F1] to-[#8B5CF6]",
  "Game Development": "from-[#F97316] to-[#F43F5E]",
  "Graphic Design": "from-[#EC4899] to-[#8B5CF6]",
  "SEO": "from-[#FACC15] to-[#F97316]",
  "Front-end Development": "from-[#22D3EE] to-[#3B82F6]",
  "Back-end Development": "from-[#10B981] to-[#06B6D4]",
  "Full Stack Development": "from-[#4338CA] to-[#D6D3D1]",
  "Domain & Hosting Setup": "from-[#DC2626] to-[#FCA5A5]",
  "Game Programming": "from-[#9333EA] to-[#F43F5E]",
  "Hashing Algorithms": "from-[#047857] to-[#FCD34D]",
  "Programming in C & C++": "from-[#E879F9] to-[#8B5CF6]",
  "Web Optimization": "from-[#3B82F6] to-[#06B6D4]",
  "3D Animation & Modeling": "from-[#D946EF] to-[#8B5CF6]",
  "2D/General Animation": "from-[#15803D] to-[#86EFAC]",
  "3D Architectural Design": "from-[#A855F7] to-[#6366F1]",
  "SolidWorks CAD Design": "from-[#4B5563] to-[#6B7280]",
  "Programming in Java": "from-[#F59E0B] to-[#EF4444]",
  "Python Development": "from-[#0EA5E9] to-[#10B981]",
};

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Building responsive, SEO-optimized websites and full-stack applications that scale and perform.",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Creating immersive 2D & 3D games with smooth gameplay, mechanics and beautiful visuals.",
  },
  {
    icon: Settings,
    title: "Full Stack Development",
    description: "End-to-end development combining front-end and back-end with web performance expertise.",
  },
  {
    icon: Paintbrush,
    title: "Graphic Design",
    description: "Designing logos, branding, marketing assets and visuals tailored to your unique identity.",
  },
  {
    icon: BarChart2,
    title: "SEO",
    description: "Improving search rankings through technical audits, on-page optimization, and link strategy.",
  },
  {
    icon: Code,
    title: "Front-end Development",
    description: "Crafting modern, intuitive UI with HTML, CSS, JavaScript and React frameworks.",
  },
  {
    icon: Database,
    title: "Back-end Development",
    description: "Building robust server-side logic, APIs and data storage with top security practices.",
  },
  {
    icon: BoxSelect,
    title: "Domain & Hosting Setup",
    description: "Assisting with domain registration and hosting setup—covered by the client (incl. GST).",
  },
  {
    icon: Cpu,
    title: "Game Programming",
    description: "Implementing game logic, AI, physics and player interactions for seamless gameplay.",
  },
  {
    icon: Triangle,
    title: "Hashing Algorithms",
    description: "Implementing secure hashing techniques for data integrity, passwords and encryption.",
  },
  {
    icon: Code,
    title: "Programming in C & C++",
    description: "Developing performant software, tools and applications using C/C++ standards.",
  },
  {
    icon: Globe,
    title: "Web Optimization",
    description: "Improving web performance through SEO, caching, minification, and speed best practices.",
  },
  {
    icon: Box,
    title: "3D Animation & Modeling",
    description: "Creating realistic 3D visuals and animations using tools like Blender or Maya.",
  },
  {
    icon: Layers,
    title: "2D/General Animation",
    description: "Producing smooth animations for characters, logos, and UI with modern tools.",
  },
  {
    icon: Triangle,
    title: "3D Architectural Design",
    description: "Creating CAD-based architectural visualizations for spaces, layouts, and plans.",
  },
  {
    icon: HardDrive,
    title: "SolidWorks CAD Design",
    description: "Mechanical design, part modeling and assemblies using SolidWorks CAD software.",
  },
  {
    icon: SquareDashedBottomCode,
    title: "Programming in Java",
    description: "Developing robust backend systems and Android apps using Java technologies.",
  },
  {
    icon: SmartphoneCharging,
    title: "Python Development",
    description: "Automation, scripting, and backend development using Python frameworks.",
  },
];

export default function OurServicesPage() {
  return (
    <>
     
    <Navbar />
    
    <div className="min-h-screen bg-[#121212] text-white px-6 py-24">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Our Services
        </motion.h1>

       < motion.p
       initial={{ opacity: 0, y: 30 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6 , delay:0.2}}
         className="text-gray-400 text-lg mb-14 max-w-2xl mx-auto">
          We offer a comprehensive suite of services – from scalable web apps and immersive games,
          to sharp brand visuals and optimized performance. Below’s a quick look.
       </motion.p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, idx) => {
            const gradient = iconGradients[title] || "from-gray-700 to-gray-900";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col items-start bg-[#1f1f1f] border border-white/10 p-6 rounded-xl shadow-lg hover:shadow-xl hover:bg-[#2a2a2a] hover:scale-[1.05] transition duration-400"
              >
                <div className={`p-3 bg-gradient-to-tr ${gradient} rounded-full mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-300 text-sm text-justify">{description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
