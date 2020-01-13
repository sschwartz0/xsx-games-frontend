import React, { useState } from "react";
import { LatestContainer } from "./Latest/Container";
import { withToasts, UseToasts } from "../../providers/ToastsProvider";
import { SearchContainer } from "./Search/Container";
import { ResultsContainer } from "./Results/Container";
import { getClassNames } from "../../lib/getClassNames";

interface HomeDisplayContainerProps extends UseToasts {}

export const HomeDisplayContainer: React.FC<HomeDisplayContainerProps> = () => {
  const [isLatestVisible, setLatestVisibility] = useState(false);
  const toggleLatestVisibility = () => setLatestVisibility(!isLatestVisible);

  const classNames = getClassNames({
    "home-container": {
      "latest-expand": isLatestVisible,
    },
  });

  return (
    <div className={classNames}>
      <SearchContainer />
      <LatestContainer
        isVisible={isLatestVisible}
        toggleVisibility={toggleLatestVisibility}
      />
      <ResultsContainer />
    </div>
  );
};

export const HomeWrapped = withToasts(HomeDisplayContainer);
