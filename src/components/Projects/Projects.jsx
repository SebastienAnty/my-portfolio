import React from "react";
import { motion } from "framer-motion";
import { projects } from "./IndividualProjects";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="projects_container"
      >
        <h3 className="project_title">Projects</h3>

        <div className="project_individual">
          {projects?.map((project, i) => {
            return (
              <div className="project_carousel">
                <motion.img
                  initial={{ y: -300, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  src={project?.projectImage}
                  alt=""
                  style={{
                    height: "35rem",
                    justifyContent: "center",
                    display: "flex",
                    borderRadius: "20px",
                  }}
                />

                <div className="project-text_container">
                  <h4 className="project_text">
                    <span className="project-text_decoration">
                      Project {i + 1} of {projects.length}:
                    </span>{" "}
                    <a href={project?.projectLink}>{project?.projectTitle}</a>
                  </h4>

                  <p className="project_description">
                    {project?.projectDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="project_background" />
      </motion.div>
    </>
  );
};

export default Projects;
