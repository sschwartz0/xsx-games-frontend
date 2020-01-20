import React from "react";
import { User } from "./User/User";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation/Navigation";

export const Header: React.FC<{}> = () => {
  return (
    <header className="app-header-container">
      <Logo />
      <Navigation />
      <User />
    </header>
  );
};
