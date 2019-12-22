import React from "react";
import { GameListType } from "./Navigation";

interface NavigationLinkProps {
  name: string;
  type: GameListType;
  setGameListType: React.Dispatch<React.SetStateAction<GameListType>>;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  name,
  setGameListType,
  type
}) => (
  <>
    <div
      className="app-header-navigation-link"
      onMouseOver={() => setGameListType(type)}
    >
      {name}
    </div>
  </>
);
