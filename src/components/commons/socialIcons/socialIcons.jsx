import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const SocialIcons = () => {
  return (
    <div className="my-5 flex items-center justify-center gap-4">
      <a
        href="https://www.linkedin.com/in/Eli-chen"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 hover:text-[#38bdf8] transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn className="h-7 w-7" />
      </a>

      <a
        href="https://github.com/Eli410"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 hover:text-[#38bdf8] transition-colors duration-300"
        aria-label="GitHub"
      >
        <FaGithub className="h-7 w-7" />
      </a>

      <a
        href="mailto:ziyangc410@gmail.com"
        className="text-zinc-400 hover:text-[#38bdf8] transition-colors duration-300"
        aria-label="Email"
      >
        <HiOutlineMail className="h-7 w-7" />
      </a>
    </div>
  );
};

export default SocialIcons;
