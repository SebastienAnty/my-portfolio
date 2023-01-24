import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header_container">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="social_icon_container"
        >
          <SocialIcon
            bgColor="transparent"
            fgColor="gray"
            url="https://www.linkedin.com/in/sebastienanty/"
          />
          <SocialIcon
            bgColor="transparent"
            fgColor="gray"
            url="https://github.com/SebastienAnty"
          />
          <SocialIcon
            bgColor="transparent"
            fgColor="gray"
            url="https://www.instagram.com/_seba.anty_/"
          />
        </motion.div>

        <a href="#contact">
          <motion.div
            initial={{ x: 500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="email_icon_container"
          >
            <SocialIcon
              bgColor="transparent"
              fgColor="gray"
              network="email"
              className="cursor-pointer"
            />
            <p className="get_in_touch">Get in touch</p>
          </motion.div>
        </a>
      </header>
    </>
  );
};

export default Header;
