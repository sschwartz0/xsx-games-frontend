import React from "react";
import { TextField, Button } from "office-ui-fabric-react";

export const HeroContainer: React.FC<{}> = () => {
  return (
    <div className="home-page-hero-container">
      <div className="home-page-hero-text-area">
        <div className="home-page-hero-text">The latest news</div>
        <div className="home-page-hero-text">Subscribe to games</div>
        <div className="home-page-hero-text">Track your collection</div>
        <div className="home-page-hero-text">Compare stats</div>
        <div className="home-page-hero-text">Your Xbox community</div>
      </div>
      <div className="home-page-hero-cta-area">
        <div className="home-page-hero-cta-switch">
          <div className="home-page-hero-cta-switch-button home-page-hero-cta-switch-button-active">
            Sign Up
          </div>
          <div className="home-page-hero-cta-switch-button">Log In</div>
        </div>
        <div className="home-page-hero-cta-form">
          <TextField placeholder="mchief@gmail.com" label="Email Address" />
          <TextField
            placeholder="Cortana123"
            label="Password"
            type="password"
          />
          <TextField
            placeholder="Cortana123"
            label="Confirm Password"
            type="password"
          />
          <Button text="Sign Up" />
        </div>
      </div>
    </div>
  );
};
