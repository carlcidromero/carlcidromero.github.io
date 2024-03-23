/**
 * @param {HTMLElement} element
 */
export const hasShadowRoot = (element) => !!element.shadowRoot;

/**
 * @param {HTMLElement} element
 */
export const getOpenShadowRoot = (element) =>
  element.attachShadow({ mode: 'open' });

/**
 * @param {string} tag
 */
const createElement = (tag) => document.createElement(tag);
/**
 * @returns {HTMLAnchorElement}
 */
export const createA = () => createElement('a');
/**
 * @returns {HTMLHeadingElement}
 */
export const createH1 = () => createElement('h1');
export const createHeader = () => createElement('header');
export const createNav = () => createElement('nav');
/**
 * @returns {HTMLUListElement}
 */
export const createUl = () => createElement('ul');
/**
 * @returns {HTMLLIElement}
 */
export const createLi = () => createElement('li');

/**
 * @param {string} property
 */
const setProperty =
  (property) =>
  /**
   * @param {HTMLElement} element
   */
  (element) =>
  /**
   * @param {string} value
   */
  (value) => {
    element[property] = value;
    return element;
  };
export const setTextContent = setProperty('textContent');
export const setHref = setProperty('href');

/**
 * @param {HTMLElement} parent
 */
export const appendChildren =
  (parent) =>
  /**
   * @param {HTMLElement[]} children
   */
  (children) => {
    /**
     * @param {number} index
     */
    const appendChild = (index = 0) => {
      if (children.length < 0 || index === children.length) return;
      parent.appendChild(children[index]);
      index++;
      appendChild(index);
    };
    appendChild();
    return parent;
  };
