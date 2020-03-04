import React from "react";
import { User } from "./User/User";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation/Navigation";

export const Header: React.FC<{}> = () => {
  return (
    <>
      <header className="app-header-container">
        <div className="app-header-content">
          <Logo />
          <Navigation />
          <User />
        </div>
      </header>
      <div className="app-header-stripe" />
    </>
  );
};
