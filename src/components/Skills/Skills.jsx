import React from "react";
import { motion } from "framer-motion";
import SkillIcons from "./SkillIcons";
import "./skills.css";

const Skills = () => {
  return (
    <>
      <motion.div className="skills_container">
        <h3 className="skills_title">Skills</h3>

        <h3 className="skills_subtitle">
          Hover over a skill to view current proficiency
        </h3>

        <div className="skills-icon_container">
          <SkillIcons />
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
