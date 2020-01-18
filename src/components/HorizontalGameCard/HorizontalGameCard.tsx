import React from "react";

interface HorizontalGameCardProps {
  image: string;
}

export const HorizontalGameCard: React.FC<HorizontalGameCardProps> = ({
  image,
}) => {
  return (
    <div className="horizontal-game-card-container">
      <div className="horizontal-game-card-details">
        <div className="horizontal-game-card-details-name">Halo</div>
        <div className="horizontal-game-card-details-developer">Bungie</div>
        <div className="horizontal-game-card-details-rating">*****</div>
        <div className="horizontal-game-card-details-genres">
          <div className="horizontal-game-card-details-property">Genres</div>
          <div className="horizontal-game-card-details-genre">FPS</div>
          <div className="horizontal-game-card-details-genre">Action</div>
        </div>
        <div className="horizontal-game-card-details-personals">
          <div className="horizontal-game-card-details-property">Tags</div>
          <div className="horizontal-game-card-details-personal">Owned</div>
          <div className="horizontal-game-card-details-personal">
            Currently Playing
          </div>
          <div className="horizontal-game-card-details-personal">Beat</div>
        </div>{" "}
        <div className="horizontal-game-card-details-lists">
          <div className="horizontal-game-card-details-property">My Lists</div>
          <div className="horizontal-game-card-details-list">Summer 69</div>
        </div>
      </div>
      <div
        className="horizontal-game-card-image"
        style={{ backgroundImage: `url("${image}")` }}
      />
    </div>
  );
};
