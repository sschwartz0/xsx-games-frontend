import React from "react";
import { Link } from "react-router-dom";

export const Logo: React.FC = () => {
  return (
    <div className="app-header-logo">
      <Link to="/">XBOX SERIES GAMES </Link>
    </div>
  );
};
