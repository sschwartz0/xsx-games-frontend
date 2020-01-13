import React, { useState } from "react";
import { remove } from "lodash";
import {
  Button,
  IContextualMenuProps,
  IContextualMenuItem,
} from "office-ui-fabric-react";

type Option = { label: string; value: string };

interface FilterMultiSelectProps {
  options: Option[];
  text: string;
}

export const FilterMultiSelect: React.FC<FilterMultiSelectProps> = ({
  options,
  text,
}) => {
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
  const clearFilters = () => setActiveFilters([]);

  const onToggleSelect = (
    e:
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.KeyboardEvent<HTMLElement>
      | undefined,
    item?: IContextualMenuItem
  ) => {
    e?.preventDefault();
    if (item) {
      toggleFilterStatus(item.key);
    }
  };

  const menuItems = options.map(option => ({
    key: option.value,
    canCheck: true,
    checked: activeFilters.includes(option.value),
    text: option.label,
    onClick: onToggleSelect,
  }));

  const menuProps: IContextualMenuProps = {
    items: menuItems,
  };

  if (activeFilters.length) {
    menuProps.items.unshift({
      key: "clear",
      onClick: clearFilters,
      text: "Clear all filters",
    });
  }

  return (
    <Button
      menuProps={menuProps}
      className="home-search-filter-select-container"
    >
      <div>{text}</div>
      {activeFilters.length > 0 && (
        <div className="home-search-filter-select-active-number">
          {activeFilters.length}
        </div>
      )}
    </Button>
  );
};
