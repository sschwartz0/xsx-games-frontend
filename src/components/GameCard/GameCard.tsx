import React from "react";
import { Icon } from "office-ui-fabric-react";

interface GameCardProps {
  expanded: boolean;
  image: string;
  name: string;
  releaseDate: string;
}

export const GameCard: React.FC<GameCardProps> = ({
  expanded,
  image,
  name,
  releaseDate
}) => {
  const containerClassNames = expanded
    ? "game-card-container"
    : "game-card-container game-card-container-condensed";

  return (
    <div className={containerClassNames}>
      <div className="game-card-top">
        <div className="game-card-title">{name}</div>
        <div className="game-card-info">Release Date: {releaseDate}</div>
      </div>
      {expanded && (
        <div
          className="game-card-image"
          style={{
            backgroundImage: `url("${image}")`
          }}
        />
      )}
      <div className="game-card-actions">
        <div className="game-card-action">
          <Icon iconName="heart" />
        </div>
        <div className="game-card-action">
          <Icon iconName="doubleChevronRight" />
        </div>
        <div className="game-card-action">
          <Icon iconName="more" />
        </div>
      </div>
    </div>
  );
};
