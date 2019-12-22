import React, { useState } from "react";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { useToasts } from "../../providers/ToastsProvider";

export interface GameBoxProps {
  image: string;
  name: string;
}

export const GameBox: React.FC<GameBoxProps> = ({ image, name }) => {
  const [isHoveredOver, setHoverState] = useState(false);
  const { addToast } = useToasts();

  const [isLiked, setLikedState] = useState(false);
  const toggleLike = () => {
    !isLiked
      ? addToast({ content: `${name} added to favorites`, type: "success" })
      : addToast({ content: `${name} removed from favorites`, type: "error" });
    setLikedState(!isLiked);
  };

  return (
    <div
      className="game-box-container"
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <div className="game-box-inner-container">
        <div
          className="game-box-cover"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="game-box-name">{name}</div>
      </div>
      {isHoveredOver && (
        <div className="game-box-hover-container">
          <Icon
            iconName={isLiked ? "heartFill" : "heart"}
            className="game-box-hover-icon"
            onClick={toggleLike}
          />
          <Icon iconName="doubleChevronRight" className="game-box-hover-icon" />
        </div>
      )}
    </div>
  );
};
