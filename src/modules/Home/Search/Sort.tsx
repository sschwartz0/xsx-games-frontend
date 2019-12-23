import React from "react";
import { Icon } from "office-ui-fabric-react";

interface SortProps {
  isActive: boolean;
  onClick: () => void;
  direction: string;
  text: string;
}

export const Sort: React.FC<SortProps> = ({
  isActive,
  direction,
  onClick,
  text
}) => {
  const classNames = isActive
    ? "home-search-filter home-search-sort home-search-filter-active"
    : "home-search-filter home-search-sort";

  return (
    <div className={classNames} onClick={onClick}>
      <div>{text}</div>{" "}
      {isActive && (
        <div className="home-search-sort-icon">
          <Icon iconName={direction === "asc" ? "sortUp" : "sortDown"} />
        </div>
      )}
    </div>
  );
};
