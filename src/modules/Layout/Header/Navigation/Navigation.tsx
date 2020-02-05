import React, { useState } from "react";
import { NavigationLink } from "./NavigationLink";
import { GameListDropdown } from "./GameListDropdown";

export type GameListType = "latest" | "top" | "trending" | "coming" | undefined;

export const Navigation: React.FC = () => {
  const [gameListType, setGameListType] = useState<GameListType>(undefined);

  return (
    <div className="app-header-navigation">
      <NavigationLink
        name="Latest"
        setGameListType={setGameListType}
        type="latest"
      />
      <NavigationLink name="Top" setGameListType={setGameListType} type="top" />
      <NavigationLink
        name="Trending"
        setGameListType={setGameListType}
        type="trending"
      />
      <NavigationLink
        name="Coming Soon"
        setGameListType={setGameListType}
        type="coming"
      />
      <GameListDropdown
        type={gameListType}
        toggleVisibility={() => setGameListType(undefined)}
      />
    </div>
  );
};
