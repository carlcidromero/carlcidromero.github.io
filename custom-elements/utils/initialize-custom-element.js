/**
 * @param {{element: HTMLElement, childElements?: {name: string, tag: string}[]}} config
 */
export const initializeCustomElementWithShadowRoot = (config) => {
  if (
    !config ||
    !config.element ||
    !(config.element instanceof HTMLElement) ||
    (config.childElements &&
      (!config.childElements.length || !Array.isArray(config.childElements)))
  ) {
    console.error(
      `Something is wrong with config for ${initializeCustomElementWithShadowRoot.name}.`
    );
    return;
  }
  const { element } = config;
  const shadowRoot = element.attachShadow({ mode: 'open' });
  return { shadowRoot };
};

/**
 *
 * @param {{childElements: {name: string, tag: string}[]}} config
 * @returns
 */
export const initializeChildElements = (config) => {
  if (
    !config ||
    (config.childElements &&
      (!config.childElements.length || !Array.isArray(config.childElements)))
  ) {
    console.error(
      `Something is wrong with config for ${initializeChildElements.name}.`
    );
    return;
  }
  const { childElements } = config;
  const elementMap = new Map();
  childElements.forEach((child) => {
    const element = document.createElement(child.tag);
    elementMap.set(child.name, element);
  });
  return elementMap;
};
