export const onClickOutsideElement = (
  element: HTMLElement,
  callback: Function
) => {
  if (currentListeners.includes(element)) {
    return;
  }

  document.addEventListener("click", e => {
    currentListeners.push(element);
    if (
      e.target &&
      !(e.target as any).isSameNode(element) &&
      !checkChildren(e.target as any, [...(element.children as any)])
    ) {
      callback();
    }

    return;
  });
};

const checkChildren = (
  target: HTMLElement,
  children: HTMLElement[]
): boolean => {
  return children.some(child => {
    let childCheck = false;
    if (child.children) {
      childCheck = checkChildren(target, [...(child.children as any)]);
    }

    return child.isSameNode(target) || childCheck;
  });
};

const currentListeners: any[] = [];
