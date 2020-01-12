import React from "react";
import { GameCard } from "../../../components";
import { Icon } from "office-ui-fabric-react";

interface LatestContainerProps {}

export class LatestContainer extends React.PureComponent<LatestContainerProps> {
  state = {
    expanded: false
  };

  toggleExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <div className="home-latest-container">
        <div className="home-title">
          Coming Soon
          <div className="home-latest-title-icon" onClick={this.toggleExpanded}>
            <Icon
              iconName={this.state.expanded ? "chevronUp" : "chevronDown"}
            />
          </div>
        </div>
        <div className="home-latest-list">
          <GameCard
            expanded={this.state.expanded}
            name="Halo Infinite"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxHBC_cbWak2wpF82npTqpI1wCzvkIVAVVwTJJLNWv3hztYDeK"
            releaseDate="Jan 21"
          />
          <GameCard
            expanded={this.state.expanded}
            name="Forza Horizon 5"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmXICnOt00miUIXNMPiDuLyLjuOwcxtdHM8lHDupvODvuJgevq"
            releaseDate="Jan 21"
          />
          <GameCard
            expanded={this.state.expanded}
            name="Senua's Saga: Hellblade 2"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRV2_AGedNvEcNpFRuaGwY1aeus-cCoLPzkzVUgpqRlEJhezX1"
            releaseDate="Jan 21"
          />
          <GameCard
            expanded={this.state.expanded}
            name="FIFA 2021"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTy09ZZ7YsucvGoU_0cT-G5ZMiQkbiXpGgUKFfL0483h2pefRV6"
            releaseDate="Jan 21"
          />
          <GameCard
            expanded={this.state.expanded}
            name="Halo Infinite"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxHBC_cbWak2wpF82npTqpI1wCzvkIVAVVwTJJLNWv3hztYDeK"
            releaseDate="Jan 21"
          />
          <GameCard
            expanded={this.state.expanded}
            name="Forza Horizon 5"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmXICnOt00miUIXNMPiDuLyLjuOwcxtdHM8lHDupvODvuJgevq"
            releaseDate="Jan 21"
          />
          <GameCard
            expanded={this.state.expanded}
            name="Senua's Saga: Hellblade 2"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRV2_AGedNvEcNpFRuaGwY1aeus-cCoLPzkzVUgpqRlEJhezX1"
            releaseDate="Jan 21"
          />
          <GameCard
            expanded={this.state.expanded}
            name="FIFA 2021"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTy09ZZ7YsucvGoU_0cT-G5ZMiQkbiXpGgUKFfL0483h2pefRV6"
            releaseDate="Jan 21"
          />
        </div>
      </div>
    );
  }
}
