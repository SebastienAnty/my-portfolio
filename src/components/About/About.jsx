import React from "react";
import { motion } from "framer-motion";
import ME from "../../assets/Me.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col relative h-screen text-center md:text-left 
      md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          About
        </h3>

        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          src={ME}
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full 
          object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">About Me</h4>
          <p className="text-lg">
            My name is Sebastien Anty, I am a full-stack developer based in
            Florida! I've been coding for a couple of years now and I love it. I
            am currently working on a couple of projects that I will be posting
            on my portfolio soon. I have worked as a front-end developer on
            React, React Native and Electron applications, as well as being an
            assistant instructor for Software Engineers entering the field. If
            you are interested in hiring me or simply would like to chat about
            tech, please contact me through the contact form below or any of the
            icons on the top left. Thank you!
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default About;
