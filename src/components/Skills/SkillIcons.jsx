import React from "react";
import { motion } from "framer-motion";
import { skills } from "./IndividualSkill";
import "./skill-icon.css";

const SkillIcons = ({ directionLeft }) => {
  console.log("---->", skills);

  return (
    <>
      {skills.map((skill) => {
        return (
          <div className="skill_iconContainer">
            <motion.img
              initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src={skill?.skillImg}
              className="skill_icons"
            />

            <div className="skill-percentage_background md:w-28">
              <div className="skill-percentage_container">
                <p className="skill-percentage">{skill?.skillLvl}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SkillIcons;
