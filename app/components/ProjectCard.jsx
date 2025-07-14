export default function ProjectCard({ project }) {
  return (
    <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 py-8 flex flex-col h-full">
        <div className="mb-1">
          <span className=" inline-block px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-gray-300 mb-2">
            {project.category}
          </span>
        </div>
        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
        <p className="text-md text-gray-400 text-justify">{project.description}</p>
      </div>
    </div>
  );
}
