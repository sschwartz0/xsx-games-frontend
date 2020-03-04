import React from "react";
import { HeroLink } from "./HeroLink";

interface LinksContainerProps {
  selectedLink: number;
  setSelectedLink: React.Dispatch<React.SetStateAction<number>>;
}

export const LinksContainer: React.FC<LinksContainerProps> = ({
  selectedLink,
  setSelectedLink,
}) => {
  return (
    <div className="home-page-hero-text-area">
      <HeroLink
        selectedLink={selectedLink}
        setSelectedLink={setSelectedLink}
        index={0}
        text="News"
      />
      <HeroLink
        selectedLink={selectedLink}
        setSelectedLink={setSelectedLink}
        index={1}
        text="Forums"
      />
      <HeroLink
        selectedLink={selectedLink}
        setSelectedLink={setSelectedLink}
        index={2}
        text="Games"
      />
      <HeroLink
        selectedLink={selectedLink}
        setSelectedLink={setSelectedLink}
        index={3}
        text="Live"
      />
      <HeroLink
        selectedLink={selectedLink}
        setSelectedLink={setSelectedLink}
        index={4}
        text="xCloud"
      />
    </div>
  );
};
