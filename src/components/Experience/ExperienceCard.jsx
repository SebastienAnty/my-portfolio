import React from "react";
import { motion } from "framer-motion";
import { workExperience } from "./WorkExperience";
import "./experienceCard.css";

const ExperienceCard = () => {
  return (
    <>
      {workExperience.map((work) => {
        return (
          <article className="experience_card transition-opacity duration-200">
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="experience_img"
              src={work?.companyLogo}
              alt={work?.altTag}
            />

            <div className="experienceCard_container">
              <h4 className="experienceCard_title">{work?.jobTitle}</h4>
              <p className="experience_company">{work?.companyName}</p>
              <div className="experience_techUsed"></div>
              <p className="experience_date">
                {work?.startDate} - {work?.endDate}
              </p>

              <ul className="experience_list">
                <li>{work.summaryPoints}</li>
              </ul>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default ExperienceCard;
