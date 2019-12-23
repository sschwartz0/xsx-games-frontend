import React from "react";

interface FilterProps {
  isActive: boolean;
  onClick: () => void;
  text: string;
}

export const Filter: React.FC<FilterProps> = ({ isActive, onClick, text }) => {
  const classNames = isActive
    ? "home-search-filter home-search-filter-active"
    : "home-search-filter";

  return (
    <div className={classNames} onClick={onClick}>
      {text}
    </div>
  );
};
