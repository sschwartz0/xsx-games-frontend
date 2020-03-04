import React from "react";
import { motion } from "framer-motion";

interface DescriptionBoxContainerProps {
  selectedLink: number;
}

export const DescriptionBox: React.FC<DescriptionBoxContainerProps> = ({
  selectedLink,
}) => {
  return (
    <motion.div
      initial={{ width: "0%" }}
      transition={{ delay: 1.8 }}
      animate={{
        minWidth: ["0px", "400px"],
        width: ["0%", "100%"],
      }}
      className="home-page-hero-description-area"
    >
      <div className="home-page-hero-description-item">
        <div className="home-page-hero-description-item-header"></div>
        <div className="home-page-hero-description-item-content"></div>
      </div>
      <div className="home-page-hero-description-item">
        <div className="home-page-hero-description-item-header"></div>
        <div className="home-page-hero-description-item-content"></div>
      </div>
      <div className="home-page-hero-description-item">
        <div className="home-page-hero-description-item-header"></div>
        <div className="home-page-hero-description-item-content"></div>
      </div>
    </motion.div>
  );
};
