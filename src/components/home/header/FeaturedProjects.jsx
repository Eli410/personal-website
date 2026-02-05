import { useState, useEffect } from "react";

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function FeaturedProjects({ pool }) {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    if (pool?.length) {
      const shuffled = shuffle(pool);
      setFeatured(shuffled.slice(0, 2));
    }
  }, [pool]);

  if (!featured.length) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[280px] animate-pulse">
        <div className="rounded-2xl bg-[#1e293b]/40 h-[280px]" />
        <div className="rounded-2xl bg-[#1e293b]/40 h-[280px]" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {featured.map((project) => (
        <a
          key={project.titulo}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="random-project-card group flex flex-col overflow-hidden rounded-2xl bg-[#1e293b]/80 backdrop-blur-sm border border-[#38bdf8]/10 transition-all duration-300 hover:-translate-y-1 text-left w-full"
        >
          <div className="relative overflow-hidden w-full">
            <img
              src={project.imagen}
              alt={`Project: ${project.titulo}`}
              className="w-full h-auto block object-contain bg-[#0f172a]/30"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col grow p-5 md:p-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.titulo}</h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-4">{project.descripcion}</p>
            <div className="flex flex-wrap gap-2">
              {project.tecnologias.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[#1e293b]/20 text-[#38bdf8] px-3 py-1 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
