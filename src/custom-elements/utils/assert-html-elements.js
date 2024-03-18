/**
 * @param {{map: Map<string, HTMLElement>}} config
 * @returns
 */
export const assertHtmlElements = (config) => {
  const { map } = config;
  const htmlElementHashMap = {};
  const entries = map.entries();
  for (const entry of entries) {
    if (!(entry[1] instanceof HTMLElement)) {
      console.error(`${entry[1]} is not an HTMLElement.`);
      return;
    }
    htmlElementHashMap[entry[0]] = entry[1];
  }
  return htmlElementHashMap;
};
