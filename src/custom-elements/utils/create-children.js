/**
 * @param {{children: {name: string, tag: string}[]}} config
 * @returns
 */
export const createChildren = (config) => {
  if (
    !config ||
    (config.children &&
      (!config.children.length || !Array.isArray(config.children)))
  ) {
    console.error(`Something is wrong with config for ${createChildren.name}.`);
    return;
  }
  const { children } = config;
  const childMap = new Map();
  children.forEach((child) => {
    const element = document.createElement(child.tag);
    childMap.set(child.name, element);
  });

  return childMap;
};
