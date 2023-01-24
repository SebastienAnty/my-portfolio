import React from "react";
import { motion } from "framer-motion";
import "./backgroundCircles.css";

const BackgroundCircles = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        }}
        transition={{ duration: 2.5 }}
        className="circle_container"
      >
        <div className="smCircle" />
        <div className="mCircle" />
        <div className="lgCircle" />
        <div className="coloredCircle" />
        <div />
      </motion.div>
    </>
  );
};

export default BackgroundCircles;
