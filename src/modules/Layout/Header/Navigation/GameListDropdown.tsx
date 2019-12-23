import React from "react";
import { Transition } from "react-transition-group";
import { GameListType } from "./Navigation";
import { isMouseBelowElement } from "../../../../lib/isMouseBelowElement";
import { GameBox } from "../../../../components";
import { GameBoxProps } from "../../../../components/GameBox/GameBox";
import { Icon } from "office-ui-fabric-react";

const duration = 200;

const style: React.CSSProperties = {
  transition: `height ${duration}ms ease-in-out`,
  height: "0px"
};

const transitionStyles = {
  entering: { height: "0px" },
  entered: { height: "368px" },
  exiting: { height: "368px" },
  exited: { height: "0px" },
  unmounted: { height: "0px" }
};

interface GameListDropdownProps {
  type: GameListType;
  toggleVisibility: () => void;
}

export const GameListDropdown: React.FC<GameListDropdownProps> = ({
  type,
  toggleVisibility
}) => {
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  const removeFromScreen = (e: React.MouseEvent) => {
    const isMouseBelowGameList = isMouseBelowElement(e);

    if (isMouseBelowGameList) {
      toggleVisibility();
    }
  };

  return (
    <Transition in={type !== undefined} timeout={0}>
      {state => (
        <div
          className="game-list-dropdown-transition-container"
          style={{ ...style, ...transitionStyles[state] }}
          onMouseOut={removeFromScreen}
          onMouseLeave={removeFromScreen}
        >
          <div className="game-list-dropdown-close" onClick={toggleVisibility}>
            <Icon iconName="chromeClose" />
          </div>
          <div
            className="game-list-dropdown-container"
            onMouseOver={stopPropagation}
            onMouseOut={stopPropagation}
          >
            {gameList.map(game => (
              <GameBox key={game.name} {...game} />
            ))}
          </div>
        </div>
      )}
    </Transition>
  );
};

const gameList: GameBoxProps[] = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxHBC_cbWak2wpF82npTqpI1wCzvkIVAVVwTJJLNWv3hztYDeK",
    name: "Halo Infinite"
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmXICnOt00miUIXNMPiDuLyLjuOwcxtdHM8lHDupvODvuJgevq",
    name: "Forza Horizon 5"
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRV2_AGedNvEcNpFRuaGwY1aeus-cCoLPzkzVUgpqRlEJhezX1",
    name: "Senua's Saga: Hellblade 2"
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTy09ZZ7YsucvGoU_0cT-G5ZMiQkbiXpGgUKFfL0483h2pefRV6",
    name: "FIFA 2020"
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR22EchAXZKvObvORs4KrT4N7U2AdNV1sH0f3v6BK4vSZ2a5pri",
    name: "Splinter Cell: Origin"
  }
];
