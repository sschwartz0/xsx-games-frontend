import React from "react";
// import { LatestContainer } from "./Latest/Container";
import { withToasts, UseToasts } from "../../providers/ToastsProvider";
import { SearchContainer } from "./Search/Container";
import { ResultsContainer } from "./Results/Container";
import { getClassNames } from "../../lib/getClassNames";
import { HeroContainer } from "./Hero/Container";
import { LogInContainer } from "./LogIn/Container";

interface HomeDisplayContainerProps extends UseToasts {}

export const HomeDisplayContainer: React.FC<HomeDisplayContainerProps> = () => {
  // const [isLatestVisible, setLatestVisibility] = useState(false);
  // const toggleLatestVisibility = () => setLatestVisibility(!isLatestVisible);

  const classNames = getClassNames({
    "home-container": {
      // "latest-expand": isLatestVisible,
    },
  });

  return (
    <>
      <div className={classNames}>
        <LogInContainer />
        <HeroContainer />
        <div className="home-container-right-side">
          <SearchContainer />
          <ResultsContainer />
        </div>
        {/* <LatestContainer
        isVisible={isLatestVisible}
        toggleVisibility={toggleLatestVisibility}
      /> */}
      </div>
    </>
  );
};

export const HomeWrapped = withToasts(HomeDisplayContainer);
