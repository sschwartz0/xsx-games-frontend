export const isMouseBelowElement = (e: React.MouseEvent) => {
  const element = e.currentTarget.getBoundingClientRect();
  const mouseYPosition = e.clientY;
  const elementBottomYCoordination = element.bottom;

  return mouseYPosition + 1 > elementBottomYCoordination;
};
