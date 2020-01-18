import React, { useState, useEffect } from "react";
import { TextField, PrimaryButton } from "office-ui-fabric-react";
import { useStore } from "../../../../providers/StoreProvider";

export const LogIn: React.FC<{}> = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const setIsSigningUpTrue = () => setIsSigningUp(true);
  const setIsSigningUpFalse = (): void => setIsSigningUp(false);
  const {
    reducer,
    gamesApiGet: { loggedIn },
  } = useStore("user");
  useEffect(() => {
    loggedIn(isSigningUp);

    return;
  }, [isSigningUp, loggedIn]);

  const user = reducer.loggedIn;
  console.log({ user });

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
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        onClick={isSigningUp ? setIsSigningUpFalse : () => null}
      >
        {isSigningUp ? "Back to login" : "I forgot my password!"}
      </div>
    </div>
  );
};
