import React, { useState } from "react";
import { remove } from "lodash";

type Option = { label: string; value: string };

interface FilterSelectProps {
  options: Option[];
  text: string;
}

export const FilterSelect: React.FC<FilterSelectProps> = ({
  options,
  text
}) => {
  const [areOptionsVisible, setOptionsVisibility]: [
    boolean,
    Function
  ] = useState(false);
  const toggleOptionsVisibility = () =>
    setOptionsVisibility(!areOptionsVisible);

  const [activeFilters, setActiveFilters]: [string[], Function] = useState([]);
  const toggleFilterStatus = (filter: string) => {
    const newActiveFilters = [...activeFilters];
    if (newActiveFilters.includes(filter)) {
      remove(newActiveFilters, activeFilter => activeFilter === filter);
    } else {
      newActiveFilters.push(filter);
    }

    setActiveFilters(newActiveFilters);
  };

  return (
    <div className="home-search-filter-select-container">
      <div className="home-search-filter" onClick={toggleOptionsVisibility}>
        <div>{text}</div>
        {activeFilters.length > 0 && (
          <div className="home-search-filter-select-active-number">
            {activeFilters.length}
          </div>
        )}
      </div>
      {areOptionsVisible && (
        <div className="home-search-filter-options">
          {options.map(option => (
            <FilterSelectOption
              activeFilters={activeFilters}
              option={option}
              onClick={toggleFilterStatus}
              key={option.value}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface FilterSelectOptionProps {
  activeFilters: string[];
  onClick: (filter: string) => void;
  option: Option;
}

const FilterSelectOption: React.FC<FilterSelectOptionProps> = ({
  activeFilters,
  onClick,
  option
}) => {
  const classNames = activeFilters.includes(option.value)
    ? "home-search-filter-option home-search-filter-option-active"
    : "home-search-filter-option";

  return (
    <div className={classNames} onClick={() => onClick(option.value)}>
      {option.label}
    </div>
  );
};
