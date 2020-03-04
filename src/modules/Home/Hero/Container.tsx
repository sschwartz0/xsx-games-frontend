import React, { useState } from "react";
import { motion } from "framer-motion";

// import { ActionBoxContainer } from "./ActionBox/Container";
import { DescriptionBox } from "./DescriptionBox/Container";
import { LinksContainer } from "./Links/Container";

export const HeroContainer: React.FC<{}> = () => {
  const [selectedLink, setSelectedLink] = useState(0);

  return (
    <div className="home-page-hero-container">
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: ["100%", "0%"] }}
        className="home-page-hero-container-background"
        transition={{ delay: 1, duration: 1 }}
      />
      <LinksContainer
        selectedLink={selectedLink}
        setSelectedLink={setSelectedLink}
      />
      <DescriptionBox selectedLink={selectedLink} />
      {/* <ActionBoxContainer /> */}
    </div>
  );
};
