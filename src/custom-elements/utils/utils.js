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
export const createH1 = () => createElement('h1');
export const createHeader = () => createElement('header');

/**
 * @param {() => HTMLElement} elementCreator
 */
const createElementWithTextContent =
  (elementCreator) =>
  /**
   * @param {string} textContent
   */
  (textContent) => {
    const element = elementCreator();
    element.textContent = textContent;
    return element;
  };

export const createH1WithTextContent = createElementWithTextContent(createH1);
