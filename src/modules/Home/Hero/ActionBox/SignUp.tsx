import React from "react";
import { TextField } from "office-ui-fabric-react";
import { PrimaryButton } from "components/Buttons/PrimaryButton";

export const SignUp: React.FC<{}> = () => {
  return (
    <div className="home-page-hero-cta-form">
      <TextField placeholder="mchief@gmail.com" label="Email Address" />
      <TextField placeholder="Cortana123" label="Password" type="password" />
      <TextField
        placeholder="Cortana123"
        label="Confirm Password"
        type="password"
      />
      <div className="home-page-hero-cta-form-button">
        <PrimaryButton text="Sign Up" fill={true} />
      </div>
    </div>
  );
};
