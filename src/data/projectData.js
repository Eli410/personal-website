// Placeholder images for projects
const placeholderImage = "https://placehold.co/600x400/0a0a0f/998542?text=Project";

export const proyectos = [
  {
    titulo: "HPC Runner",
    dateRange: "Jan 24, 2026",
    subtitle: "2nd place overall at TAMU hack 2026 | React, Next.js, MongoDB, SLURM",
    descripcion:
      "2nd place overall at TAMU Hack 2026. Gemini-powered AI planning pipeline for SLURM job runner with auto-generated run specs, JWT auth, and IDE-like file management interface.",
    imagen: "/images/project_hpc.png",
    tecnologias: ["React", "Next.js", "MongoDB", "SLURM"],
    url: "https://devpost.com/software/slurmglue",
    demo: "#",
    codigo: "https://github.com/Eli410",
    categoria: "fullstack",
    summary:
      "Gemini-powered AI pipeline for SLURM that auto-generates run specs from code. JWT auth, MongoDB, and an IDE-like React frontend.",
  },
  {
    titulo: "Instant Karaoke",
    role: "Full-Stack Developer",
    dateRange: "Oct 2024 - Jan 2025",
    descripcion:
      "Full-stack karaoke web app delivering real-time stem separation with Demucs (PyTorch), chunked processing, cross-fade stitching, and lyric-synced playback with word-level highlighting.",
    imagen: placeholderImage + "+Karaoke",
    tecnologias: ["React", "Python", "PyTorch", "WebSockets"],
    url: "https://github.com/Eli410/Instant-Karaoke",
    demo: "#",
    codigo: "https://github.com/Eli410",
    categoria: "fullstack",
    summary:
      "Full-stack karaoke app with Demucs stem separation, chunked processing, and lyric-synced playback with word-level highlighting.",
  },
  {
    titulo: "Aggie Class Alert",
    role: "Full-Stack Developer",
    dateRange: "Apr 2024 - Present",
    descripcion:
      "Discord bot using TAMU public APIs to notify students when class sections open. Real-time alerts via slash commands and interactive menus. 800+ users since Apr 2024.",
    imagen: placeholderImage + "+Discord",
    tecnologias: ["Python", "Discord.py", "REST APIs"],
    url: "https://github.com/Eli410/AggieClassAlert",
    demo: "#",
    codigo: "https://github.com/Eli410",
    categoria: "backend",
    summary:
      "Discord bot that notifies students when TAMU class sections open. Slash commands and interactive menus; 800+ users.",
  },
  {
    titulo: "Maroon Rides",
    role: "React Native Development: Timetable & Bottom Sheet Interface",
    dateRange: "Oct 2023 - Apr 2024",
    descripcion:
      "React Native app showing real-time TAMU bus info with 20,000+ downloads. Features real-time API fetching, AsyncStorage caching, bottom sheet route picker, and responsive timetable.",
    imagen: "/images/maroon-rides.png",
    tecnologias: ["React Native", "TypeScript", "REST APIs"],
    url: "https://github.com/Maroon-Rides/MaroonRides",
    demo: "#",
    codigo: "https://github.com/Eli410",
    categoria: "fullstack",
    summary:
      "React Native app for real-time TAMU bus info; 20k+ downloads. Real-time API, AsyncStorage, bottom sheet picker, and timetable.",
  },
];
