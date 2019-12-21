import React from "react";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { TooltipHost } from "office-ui-fabric-react/lib/Tooltip";

interface UserIconProps {
  iconName: string;
  tooltipText: string;
}

export const UserIcon: React.FC<UserIconProps> = props => {
  const { iconName, tooltipText } = props;

  return (
    <TooltipHost content={tooltipText}>
      <Icon iconName={iconName} />
    </TooltipHost>
  );
};
