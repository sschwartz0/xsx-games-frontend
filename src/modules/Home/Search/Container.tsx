import React, { useState } from "react";
import { Filter } from "./Filter";
import { FilterSelect } from "./FilterSelect";

interface SearchContainerProps {}

export const SearchContainer: React.FC<SearchContainerProps> = () => {
  const [filterType, setFilterType] = useState("title");

  return (
    <div className="home-search-area-container">
      <div className="home-title">Search</div>
      <div className="home-search-container">
        <div className="home-search-container-background" />
        <div className="home-search-container-content">
          <div className="home-search-bar">Start typing to search...</div>
          <div className="home-search-filters">
            <Filter
              isActive={filterType === "title"}
              onClick={() => setFilterType("title")}
              text="Title"
            />
            <Filter
              isActive={filterType === "devPub"}
              onClick={() => setFilterType("devPub")}
              text="Developer/Publisher"
            />
            <FilterSelect options={genreOptions} text="Genres" />
          </div>
        </div>
      </div>
    </div>
  );
};

const genreOptions = [
  {
    label: "Action/Adventure",
    value: "actionAdventure"
  },
  {
    label: "Arcade",
    value: "arcade"
  },
  {
    label: "FPS",
    value: "fps"
  },
  {
    label: "Puzzle",
    value: "puzzle"
  },
  {
    label: "RPG",
    value: "rpg"
  },
  {
    label: "TPS",
    value: "tps"
  }
];
