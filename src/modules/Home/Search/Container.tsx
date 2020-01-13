import React, { useState } from "react";
import { Filter } from "./Filter";
import { FilterMultiSelect } from "./FilterMultiSelect";
import { Sort } from "./Sort";

interface SearchContainerProps {}

export const SearchContainer: React.FC<SearchContainerProps> = () => {
  const [filterType, setFilterType] = useState("title");
  const [sortType, setSortType] = useState("releaseDate");
  const [sortDirection, setSortDirection] = useState("desc");

  const onClickSort = (type: string) => {
    if (sortType !== type) {
      setSortType(type);
      setSortDirection("desc");
    } else {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    }
  };

  return (
    <div className="home-search-area-container">
      <div className="home-title">Search</div>
      <div className="home-search-container">
        <div className="home-search-container-background" />
        <div className="home-search-container-content">
          <div className="home-search-bar">Start typing to search...</div>
          <div className="home-search-filters-container">
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
            </div>
            <div className="home-search-filter-separator" />
            <div className="home-search-filters">
              <FilterMultiSelect options={genreOptions} text="Genres" />
              <FilterMultiSelect options={ratingOptions} text="Ratings" />
            </div>
            <div className="home-search-filter-separator" />
            <div className="home-search-filters">
              <Sort
                direction={sortDirection}
                isActive={sortType === "releaseDate"}
                onClick={() => onClickSort("releaseDate")}
                text="Release Date"
              />
              <Sort
                direction={sortDirection}
                isActive={sortType === "name"}
                onClick={() => onClickSort("name")}
                text="Name"
              />
              <Sort
                direction={sortDirection}
                isActive={sortType === "rating"}
                onClick={() => onClickSort("rating")}
                text="Rating"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const genreOptions = [
  {
    label: "Action/Adventure",
    value: "actionAdventure",
  },
  {
    label: "Arcade",
    value: "arcade",
  },
  {
    label: "FPS",
    value: "fps",
  },
  {
    label: "Puzzle",
    value: "puzzle",
  },
  {
    label: "RPG",
    value: "rpg",
  },
  {
    label: "TPS",
    value: "tps",
  },
];

const ratingOptions = [
  {
    label: "*****",
    value: "5",
  },
  {
    label: "****",
    value: "4",
  },
  {
    label: "***",
    value: "3",
  },
  {
    label: "**",
    value: "2",
  },
  {
    label: "*",
    value: "1",
  },
];
