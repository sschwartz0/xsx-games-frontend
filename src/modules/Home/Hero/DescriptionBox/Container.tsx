import React from "react";

interface DescriptionBoxContainerProps {
  selectedLink: number;
}

export const DescriptionBox: React.FC<DescriptionBoxContainerProps> = ({
  selectedLink,
}) => {
  return (
    <div className="home-page-hero-description-area">
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
    </div>
  );
};
