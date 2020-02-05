import React from "react";
import { TextField } from "office-ui-fabric-react";
import { PrimaryButton } from "components/Buttons/PrimaryButton";

export const LogIn: React.FC<{}> = () => {
  return (
    <div className="home-page-hero-cta-form">
      <TextField placeholder="mchief@gmail.com" label="Email Address" />
      <TextField placeholder="Cortana123" label="Password" type="password" />
      <div className="home-page-hero-cta-form-button">
        <PrimaryButton text="Log In" fill={true} />
      </div>
      <div className="home-page-hero-cta-form-forgot-password">
        <span className="link">Forgot password?</span>
      </div>
    </div>
  );
};
