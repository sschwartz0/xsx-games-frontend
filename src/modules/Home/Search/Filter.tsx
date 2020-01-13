import React from "react";
import { Button, PrimaryButton } from "office-ui-fabric-react";

interface FilterProps {
  isActive: boolean;
  onClick: () => void;
  text: string;
}

export const Filter: React.FC<FilterProps> = ({ isActive, onClick, text }) => {
  return isActive ? (
    <PrimaryButton onClick={onClick}>{text}</PrimaryButton>
  ) : (
    <Button onClick={onClick}>{text}</Button>
  );
};
