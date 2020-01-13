import React, { useRef, useState } from "react";
import { UserIcon } from "./UserIcon";
import { getClassNames } from "../../../../lib/getClassNames";
import { Callout } from "office-ui-fabric-react";
import { LogIn } from "./LogIn";

interface UserProps {
  loggedIn: boolean;
}

export const User: React.FC<UserProps> = ({ loggedIn }) => {
  const userStatusRef = useRef(null);
  const [isLoginVisible, setLoginVisibility] = useState(false);
  const showLogin = () => setLoginVisibility(true);
  const hideLogin = () => setLoginVisibility(false);

  const loginStatusClassNames = getClassNames({
    "user-icon-logged-in": loggedIn,
    "user-icon-logged-out": !loggedIn,
  });

  return (
    <div className="app-header-user-container">
      {loggedIn ? (
        <>
          <UserIcon iconName="ViewDashboard" tooltipText="Dashboard" />
          <UserIcon iconName="People" tooltipText="Friends" />
          <UserIcon iconName="Settings" tooltipText="Preferences" />
        </>
      ) : (
        <UserIcon iconName="Bus" tooltipText="Take a tour" />
      )}
      <div
        className={loginStatusClassNames}
        ref={userStatusRef}
        onClick={showLogin}
      >
        <UserIcon
          iconName="FollowUser"
          tooltipText={isLoginVisible ? null : loggedIn ? "Log Out" : "Log In"}
        />
      </div>
      {isLoginVisible && (
        <Callout
          target={userStatusRef.current}
          onDismiss={hideLogin}
          setInitialFocus={true}
        >
          <LogIn />
        </Callout>
      )}
    </div>
  );
};
