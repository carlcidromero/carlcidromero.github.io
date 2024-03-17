/**
 *
 * @param {{textContent: string, href: string}} config
 */
export const createNavAnchor = (config) => {
  if (!config || !config.textContent || !config.href) {
    console.error(
      `Something is wrong with config for ${createNavAnchor.name}.`
    );
    return;
  }
  const { textContent, href } = config;
  const anchor = document.createElement('a');
  anchor.href = href;
  anchor.textContent = textContent;
  return anchor;
};
