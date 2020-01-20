import React, { useState } from "react";
import { TextField, PrimaryButton } from "office-ui-fabric-react";
import { useStore } from "../../../../providers/StoreProvider";

export const LogIn: React.FC<{}> = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const { api } = useStore();

  const setIsSigningUpTrue = () => {
    api.set.user.logOut();
    setIsSigningUp(true);
  };
  const setIsSigningUpFalse = (): void => setIsSigningUp(false);

  const onLogin = () => api.set.user.logIn();

  return (
    <div className="app-header-login-container">
      <TextField label="Email Address" />
      <TextField label="Password" />
      {isSigningUp && <TextField label="Confirm Password" />}

      <div className="app-header-login-container-buttons">
        {!isSigningUp && (
          <PrimaryButton
            text="Log In"
            className="button-filled"
            onClick={onLogin}
          />
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
