import React from "react";
import { User } from "./User/User";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation/Navigation";

interface HeaderProps {
  loggedIn: boolean;
}

export const Header: React.FC<HeaderProps> = ({ loggedIn }) => {
  return (
    <header className="app-header-container">
      <Logo />
      <Navigation />
      <User loggedIn={loggedIn} />
    </header>
  );
};
