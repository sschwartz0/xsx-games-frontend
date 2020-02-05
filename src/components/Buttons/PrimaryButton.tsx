import React from "react";
import {
  PrimaryButton as FabricButton,
  IButtonProps,
} from "office-ui-fabric-react";
import { getClassNames } from "lib/getClassNames";

interface PrimaryButtonProps extends IButtonProps {
  fill?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  className,
  fill,
  ...props
}) => {
  const classNames = getClassNames({
    className: Boolean(className),
    "button-fill": fill,
  });

  return <FabricButton {...props} className={classNames} />;
};
