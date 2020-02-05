import React, { useRef } from "react";
import { motion } from "framer-motion";

import { ActionBoxContainer } from "./ActionBox/Container";

export const HeroContainer: React.FC<{}> = () => {
  return (
    <div className="home-page-hero-container">
      <div className="home-page-hero-text-area">
        <HeroText index={0} text="The latest news" />
        <HeroText index={1} text="Subscribe to games" />
        <HeroText index={2} text="Track your collection" />
        <HeroText index={3} text="Compare stats" />
        <HeroText index={4} text="Your Xbox community" />
        <motion.div
          initial={{ display: "none" }}
          animate={{
            display: "inherit",
            opacity: [0, 0.3, 0.6, 0.9, 1],
          }}
          transition={{ duration: 1, delay: 5 * 2.02 }}
          className="home-page-hero-text"
        >
          Your way
          <motion.span
            initial={{ display: "none" }}
            animate={{
              display: "inherit",
              opacity: [0, 0.3, 0.6, 0.9, 1],
            }}
            transition={{ duration: 1, delay: 5 * 2.02 + 1 }}
          >
            .
          </motion.span>
        </motion.div>
      </div>
      <ActionBoxContainer />
    </div>
  );
};

interface HeroTextProps {
  index: number;
  text: string;
}

const HeroText: React.FC<HeroTextProps> = ({ index, text }) => {
  const element = useRef<HTMLDivElement>(null);

  const removeElement = () => {
    if (element.current && element.current.parentElement) {
      element.current.parentElement.removeChild(element.current);
    }
  };

  return (
    <motion.div
      initial={{ display: "none" }}
      animate={{
        display: "inherit",
        opacity: [0, 0.3, 0.6, 0.9, 1, 0.9, 0.6, 0.3, 0],
        y: [0, 0, 0, 0, 0, 10, 20, 30, 40],
      }}
      transition={{ duration: 2, delay: index * 2.02 }}
      className="home-page-hero-text"
      ref={element}
      onAnimationComplete={removeElement}
    >
      {text}
    </motion.div>
  );
};
