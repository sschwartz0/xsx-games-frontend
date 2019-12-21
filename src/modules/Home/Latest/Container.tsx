import React from "react";

interface LatestContainerProps {}

export class LatestContainer extends React.PureComponent<LatestContainerProps> {
  render() {
    return (
      <div className="home-latest-container">
        <div className="test">Game 1</div>
      </div>
    );
  }
}
