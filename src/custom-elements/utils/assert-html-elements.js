/**
 * @param {{map: Map<string, HTMLElement | HTMLUnknownElement>}} config
 * @returns
 */
export const assertHtmlElements = (config) => {
  const { map } = config;
  const htmlElementHashMap = {};
  const entries = map.entries();
  for (const entry of entries) {
    if (entry[1] instanceof HTMLUnknownElement) {
      console.error(`${entry[1].tagName} is an invalid HTML element.`);
      return;
    }
    htmlElementHashMap[entry[0]] = entry[1];
  }
  return htmlElementHashMap;
};
