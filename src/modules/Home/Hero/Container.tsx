import React, { useState } from "react";

// import { ActionBoxContainer } from "./ActionBox/Container";
import { DescriptionBox } from "./DescriptionBox/Container";
import { LinksContainer } from "./Links/Container";

export const HeroContainer: React.FC<{}> = () => {
  const [selectedLink, setSelectedLink] = useState(0);

  return (
    <div className="home-page-hero-container">
      <LinksContainer
        selectedLink={selectedLink}
        setSelectedLink={setSelectedLink}
      />
      <DescriptionBox selectedLink={selectedLink} />
      {/* <ActionBoxContainer /> */}
    </div>
  );
};
