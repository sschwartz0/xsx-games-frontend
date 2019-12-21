import React, { useState } from "react";
import { GameListDropdown } from "./GameListDropdown";

interface NavigationLinkProps {
  name: string;
}

export const NavigationLink: React.FC<NavigationLinkProps> = props => {
  const [isGameListDropdownVisible, setGameListDropdownVisibility] = useState(
    false
  );

  const toggleGameListDropdownVisibility = () =>
    setGameListDropdownVisibility(!isGameListDropdownVisible);

  return (
    <>
      <div
        className="app-header-navigation-link"
        onMouseOver={toggleGameListDropdownVisibility}
      >
        {props.name}
      </div>
      <GameListDropdown
        gameList={[]}
        isVisible={isGameListDropdownVisible}
        toggleVisibility={toggleGameListDropdownVisibility}
      />
    </>
  );
};
