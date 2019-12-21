import React from "react";
import { Transition } from "react-transition-group";

const duration = 200;

const style: React.CSSProperties = {
  transition: `height ${duration}ms ease-in-out`,
  height: "0px"
};

const transitionStyles = {
  entering: { height: "0px" },
  entered: { height: "200px" },
  exiting: { height: "200px" },
  exited: { height: "0px" },
  unmounted: { height: "0px" }
};

interface GameListDropdownProps {
  gameList: any[];
  isVisible: boolean;
  toggleVisibility: () => void;
}

export const GameListDropdown: React.FC<GameListDropdownProps> = ({
  isVisible,
  toggleVisibility
}) => {
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <Transition in={isVisible} timeout={duration}>
      {state => (
        <div
          className="game-list-dropdown-container"
          style={{ ...style, ...transitionStyles[state] }}
          onMouseOut={toggleVisibility}
        >
          <div onMouseOver={stopPropagation} onMouseOut={stopPropagation}>
            Test
          </div>
        </div>
      )}
    </Transition>
  );
};
