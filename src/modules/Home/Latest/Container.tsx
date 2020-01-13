import React from "react";
import { GameCard } from "../../../components";
import { Icon, TooltipHost } from "office-ui-fabric-react";

interface LatestContainerProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

export const LatestContainer: React.FC<LatestContainerProps> = ({
  isVisible,
  toggleVisibility,
}) => {
  if (!isVisible) {
    return (
      <div className="home-latest-container">
        <TooltipHost content="See titles coming soon">
          <div onClick={toggleVisibility} className="home-latest-title-icon">
            <Icon iconName="doubleChevronLeft" />
          </div>
        </TooltipHost>
      </div>
    );
  }

  return (
    <div className="home-latest-container">
      <div className="home-title">
        <TooltipHost content="Close this column">
          <div className="home-latest-title-icon" onClick={toggleVisibility}>
            <Icon iconName={"doubleChevronRight"} />
          </div>
        </TooltipHost>
        Coming Soon
      </div>
      <div className="home-latest-list">
        <GameCard
          expanded={true}
          name="Halo Infinite"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxHBC_cbWak2wpF82npTqpI1wCzvkIVAVVwTJJLNWv3hztYDeK"
          releaseDate="Jan 21"
        />
        <GameCard
          expanded={true}
          name="Forza Horizon 5"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmXICnOt00miUIXNMPiDuLyLjuOwcxtdHM8lHDupvODvuJgevq"
          releaseDate="Jan 21"
        />
        <GameCard
          expanded={true}
          name="Senua's Saga: Hellblade 2"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRV2_AGedNvEcNpFRuaGwY1aeus-cCoLPzkzVUgpqRlEJhezX1"
          releaseDate="Jan 21"
        />
        <GameCard
          expanded={true}
          name="FIFA 2021"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTy09ZZ7YsucvGoU_0cT-G5ZMiQkbiXpGgUKFfL0483h2pefRV6"
          releaseDate="Jan 21"
        />
        <GameCard
          expanded={true}
          name="Halo Infinite"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxHBC_cbWak2wpF82npTqpI1wCzvkIVAVVwTJJLNWv3hztYDeK"
          releaseDate="Jan 21"
        />
        <GameCard
          expanded={true}
          name="Forza Horizon 5"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmXICnOt00miUIXNMPiDuLyLjuOwcxtdHM8lHDupvODvuJgevq"
          releaseDate="Jan 21"
        />
        <GameCard
          expanded={true}
          name="Senua's Saga: Hellblade 2"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRV2_AGedNvEcNpFRuaGwY1aeus-cCoLPzkzVUgpqRlEJhezX1"
          releaseDate="Jan 21"
        />
        <GameCard
          expanded={true}
          name="FIFA 2021"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTy09ZZ7YsucvGoU_0cT-G5ZMiQkbiXpGgUKFfL0483h2pefRV6"
          releaseDate="Jan 21"
        />
      </div>
    </div>
  );
  // }
};
