/**
 * @param {{target: HTMLElement | HTMLElement[]}} config
 */
export const wrapWithLi = (config) => {
  const { target } = config;
  if (Array.isArray(target)) {
    const lis = [];
    target.forEach((element) => {
      const wrappedElement = wrapWithLi({ target: element });
      lis.push(wrappedElement);
    });
    return lis;
  }
  const li = document.createElement('li');
  li.appendChild(target);
  return li;
};
