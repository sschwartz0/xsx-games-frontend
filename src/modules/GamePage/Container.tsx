import React from "react";
import { useRouteMatch } from "react-router-dom";

interface GamePageContainerProps {
  test: boolean;
}

export const GamePageContainer: React.FC<GamePageContainerProps> = () => {
  const match = useRouteMatch<{ id: string }>();

  return <div>{match.params.id}</div>;
};
