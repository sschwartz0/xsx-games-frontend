import React from "react";
import { LatestContainer } from "./Latest/Container";

interface HomeDisplayContainerProps {}

export class HomeDisplayContainer extends React.PureComponent<
  HomeDisplayContainerProps
> {
  render() {
    return (
      <div className="home-container">
        <LatestContainer />
      </div>
    );
  }
}
