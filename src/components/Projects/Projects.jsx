import React from "react";
import { motion } from "framer-motion";
import { projects } from "./IndividualProjects";

const Projects = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full 
        justify-evenly mx-auto items-center z-0"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Selected Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#f34848] scrollbar-thin">
          {projects?.map((project, i) => {
            return (
              <div
                className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
               justify-center p-20 md:p-44 h-screen"
              >
                <motion.img
                  initial={{ y: -300, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  src={project?.projectImage}
                  alt=""
                  style={{
                    height: "25rem",
                    justifyContent: "center",
                    display: "flex",
                    borderRadius: "20px",
                  }}
                />

                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="text-4xl font-semibold text-center">
                    <span className="underline decoration-[#f348481a]/50">
                      Project {i + 1} of {projects.length}:
                    </span>{" "}
                    <a href={project?.projectLink}>{project?.projectTitle}</a>
                  </h4>

                  <p className="text-lg text-center md:text-left">
                    {project?.projectDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full absolute top-[30%] bg-[#f348481a] left-0 h-[500px] -skew-y-6" />

        <div className="project_background" />
      </motion.div>
    </>
  );
};

export default Projects;
