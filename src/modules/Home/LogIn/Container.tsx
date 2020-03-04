import React, { useState } from "react";
import { TextField, PrimaryButton } from "office-ui-fabric-react";
import { useStore } from "providers/StoreProvider";

interface LogInContainerProps {}

export const LogInContainer: React.FC<LogInContainerProps> = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const { api } = useStore();

  const setIsSigningUpTrue = () => {
    api.set.user.logOut();
    setIsSigningUp(true);
  };
  const setIsSigningUpFalse = (): void => setIsSigningUp(false);

  const onLogin = () => api.set.user.logIn();

  return (
    <div className="home-container-log-in">
      <div className="home-container-log-in-content">
        <TextField
          placeholder="Email Address"
          className="home-container-log-in-part"
        />
        <TextField
          placeholder="Password"
          className="home-container-log-in-part"
        />
        {isSigningUp && (
          <TextField
            placeholder="Confirm Password"
            className="home-container-log-in-part"
          />
        )}
        {!isSigningUp && (
          <PrimaryButton
            text="Log In"
            onClick={onLogin}
            className="home-container-log-in-part"
          />
        )}
        <PrimaryButton
          text="Sign Up"
          onClick={setIsSigningUpTrue}
          className="home-container-log-in-part"
        />
      </div>
      <div className="home-container-log-in-stripe" />
    </div>
  );
};
