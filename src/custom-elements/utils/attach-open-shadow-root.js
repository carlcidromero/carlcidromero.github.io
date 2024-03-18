/**
 * @param {{element: HTMLElement}} config
 */
export const attachOpenShadowRoot = (config) => {
  if (!config?.element || !(config?.element instanceof HTMLElement)) {
    console.error(
      `Something is wrong with config for ${attachOpenShadowRoot.name}.`
    );
    return;
  }
  const { element } = config;
  const shadowRoot = element.attachShadow({ mode: 'open' });
  return shadowRoot;
};
