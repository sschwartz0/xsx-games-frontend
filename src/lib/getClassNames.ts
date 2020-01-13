export const getClassNames = (
  // tslint:disable-next-line:no-any
  classNames: { [index: string]: any },
  base?: string
  // tslint:disable-next-line:no-any
): any => {
  const objectKeys = Object.keys(classNames);

  return objectKeys
    .reduce(
      (acc, key, index, array) => {
        if (
          typeof classNames[key] === "boolean" ||
          classNames[key] === undefined ||
          classNames[key] === null
        ) {
          const combinedKey = base ? `${base}-${key}` : key;

          if (index === array.length - 1) {
            return `${acc}${classNames[key] ? combinedKey + "" : ""}`;
          }

          return `${acc}${classNames[key] ? combinedKey + " " : ""}`;
        } else if (typeof classNames[key] === "object") {
          if (index === array.length - 1) {
            return `${acc}${getClassNames(classNames[key], key)}`;
          }

          return `${acc}${getClassNames(classNames[key], key)} `;
        }

        return "";
      },
      base ? `${base} ` : ""
    )
    .trim();
};
