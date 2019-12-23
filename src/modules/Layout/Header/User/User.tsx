import React from "react";
import { UserIcon } from "./UserIcon";

interface UserProps {}

export const User: React.FC = (props: UserProps) => {
  return (
    <div className="app-header-user-container">
      <UserIcon iconName="ViewDashboard" tooltipText="Dashboard" />
      <UserIcon iconName="people" tooltipText="Friends" />
      <UserIcon iconName="settings" tooltipText="Preferences" />
      <UserIcon iconName="Help" tooltipText="Help" />
    </div>
  );
};
