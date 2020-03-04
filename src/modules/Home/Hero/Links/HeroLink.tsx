import React, { useRef } from "react";
import { motion } from "framer-motion";

interface HeroLinkProps {
  index: number;
  selectedLink: number;
  setSelectedLink: React.Dispatch<React.SetStateAction<number>>;
  text: string;
}

export const HeroLink: React.FC<HeroLinkProps> = ({
  index,
  selectedLink,
  setSelectedLink,
  text,
}) => {
  const element = useRef<HTMLDivElement>(null);
  // const multiplier = (4 - index) * 0.5;
  const isSelected = index === selectedLink;

  return (
    <motion.div
      initial={{ display: "none" }}
      animate={{
        display: "inherit",
        borderBottomWidth: [0, 0, 0, 1],
        opacity: [0, 0.25, 0.5, 0.75, 1],
        // y: [0, -3 * multiplier, -5 * multiplier, -7 * multiplier],
        x: [-200, 0],
      }}
      transition={{ duration: 0.3, delay: index * 0.32 + 1.5 }}
      className="home-page-hero-text"
      ref={element}
      onMouseEnter={() => setSelectedLink(index)}
    >
      <div>
        {text}
        <motion.div
          initial={{ display: "none" }}
          animate={{
            display: "inherit",
            width: ["0%", "100%"],
          }}
          transition={{ delay: index * 0.32 + 1.8 }}
          className="home-page-hero-text-border"
        />
      </div>

      <div
        className="home-page-hero-link-pointer"
        style={{ display: isSelected ? "block" : "none" }}
      />
    </motion.div>
  );
};
