/**
 * @param {{children: {name: string, tag: string, textContent?: string, attributes?: {name: string, value: string}[]}[]}} config
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
    if (child.attributes) {
      child.attributes.forEach((attribute) => {
        element.setAttribute(attribute.name, attribute.value);
      });
    }
    if (child.textContent) {
      element.textContent = child.textContent;
    }
    childMap.set(child.name, element);
  });

  return childMap;
};
