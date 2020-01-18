export const isMouseOutsideElement = (e: React.MouseEvent) => {
  const element = e.currentTarget.getBoundingClientRect();
  const mouseYPosition = e.clientY;
  const mouseXPosition = e.clientX;

  return (
    mouseYPosition + 1 > element.bottom ||
    mouseYPosition - 1 < element.top ||
    mouseXPosition + 1 > element.right ||
    mouseXPosition - 1 < element.left
  );
};
