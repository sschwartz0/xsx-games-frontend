import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomeWrapped as Home } from "./Home/DisplayContainer";
import { GamePageContainer as GamePage } from "./GamePage/Container";

export const RootRouter: React.FC<{}> = () => {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <Home />
      </Route>
      <Route path="/game/:id">
        <GamePage test={true} />
      </Route>
    </Switch>
  );
};
