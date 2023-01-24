import React from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/Me.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about_container">
        <h3 className="about_title">About</h3>

        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          src={ME}
          className="about_img"
        />

        <div className="aboutText_container">
          <h4 className="about_text">Here is a Little About Me!</h4>

          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>7+ Completed</small>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
