import React from "react";
import { motion } from "framer-motion";
import "./experience.css";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <>
      <motion.div className="experience_container">
        <h3 className="experience_title">Experience</h3>

        <div className="experience_cardContainer">
          <ExperienceCard />
        </div>
      </motion.div>
    </>
  );
};

export default Experience;
