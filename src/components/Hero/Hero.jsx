import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import ResumeDownload from "../../assets/Anty_Sebastien_2023.pdf";
import ME from "../../assets/Me.jpg";
import "./hero.css";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi my name is Sébastien Anty",
      "Web Developer 🖥️",
      "Mobile Developer📱",
      "<Full Stack Developer />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <>
      <div className="hero_container">
        <BackgroundCircles />
        <img
          className="my_image"
          src={ME}
          alt="Sebastien wearing a pink buttoned down shirt."
        />
        <div style={{ zIndex: 20 }}>
          <h2 className="my_title">Software Engineer</h2>
          <h1 className="typewriter_text">
            <span>{text}</span>
            <Cursor cursorColor="rgb(243, 72, 72)" />
          </h1>

          <div className="button_container">
            <a href="#about">
              <button className="heroButton">About</button>
            </a>
            <a href="#experience">
              <button className="heroButton">Experience</button>
            </a>
            <a href="#skills">
              <button className="heroButton">Skills</button>
            </a>
            <a href="#projects">
              <button className="heroButton">Projects</button>
            </a>
          </div>

          <a href={ResumeDownload}>
            <button className="heroButton">Resume</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
