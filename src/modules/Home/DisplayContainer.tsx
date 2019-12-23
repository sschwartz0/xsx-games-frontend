import React from "react";
import { LatestContainer } from "./Latest/Container";
import { withToasts, UseToasts } from "../../providers/ToastsProvider";
import { SearchContainer } from "./Search/Container";
import { ResultsContainer } from "./Results/Container";

interface HomeDisplayContainerProps extends UseToasts {}

export class HomeDisplayContainer extends React.PureComponent<
  HomeDisplayContainerProps
> {
  render() {
    return (
      <div className="home-container page-container">
        <SearchContainer />
        <LatestContainer />
        <ResultsContainer />
      </div>
    );
  }
}

export const HomeWrapped = withToasts(HomeDisplayContainer);
