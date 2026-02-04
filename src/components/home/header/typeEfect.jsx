import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div className="notranslate mt-5 text-2xl md:text-4xl font-semibold text-[#3eb489] font-mono">
      <Typewriter
        options={{
          strings: [
            "Software Engineer",
            "Full-Stack Developer", 
            "Data Engineer",
            "React & Python Builder",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 80,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
