import React from "react";
import { NavigationLink } from "./NavigationLink";

interface NavigationProps {}

export const Navigation: React.FC = (props: NavigationProps) => {
  return (
    <div className="app-header-navigation">
      <NavigationLink name="My Games" />
      <NavigationLink name="Latest" />
      <NavigationLink name="Top" />
      <NavigationLink name="Trending" />
      <NavigationLink name="Coming Soon" />
    </div>
  );
};
