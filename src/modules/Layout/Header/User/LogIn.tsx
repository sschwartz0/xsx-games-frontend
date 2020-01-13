import React, { useState } from "react";
import { TextField, PrimaryButton } from "office-ui-fabric-react";

interface LogInProps {}

export const LogIn: React.FC<LogInProps> = ({}) => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const setIsSigningUpTrue = () => setIsSigningUp(true);
  const setIsSigningUpFalse = () => setIsSigningUp(false);

  return (
    <div className="app-header-login-container">
      <TextField label="Email Address" />
      <TextField label="Password" />
      {isSigningUp && <TextField label="Confirm Password" />}

      <div className="app-header-login-container-buttons">
        {!isSigningUp && (
          <PrimaryButton text="Log In" className="button-filled" />
        )}
        <PrimaryButton
          text="Sign Up"
          className="button-filled"
          onClick={setIsSigningUpTrue}
        />
      </div>

      <div
        className="app-header-login-forgot-password"
        onClick={isSigningUp ? setIsSigningUpFalse : () => null}
      >
        {isSigningUp ? "Back to login" : "I forgot my password!"}
      </div>
    </div>
  );
};
