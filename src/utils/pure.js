export const getClassBodyContainer = () => 'body-container';
export const getClassFlexContainerColumn = () => 'flex-container--column';
export const getClassFlexItem = () => 'flex-item';

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
export const setRel = setProperty('rel');

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
      if (index === children.length) return;
      parent.appendChild(children[index]);
      index++;
      appendChild(index);
    };
    appendChild();
    return parent;
  };

/**
 * @param {string} className
 */
const addClassName =
  (className) =>
  /**
   * @param {HTMLElement} element
   */
  (element) => {
    element.classList.add(className);
    return element;
  };
export const addClassBodyContainer = addClassName(getClassBodyContainer());
export const addClassFlexContainerColumn = addClassName(
  getClassFlexContainerColumn()
);
export const addClassFlexItem = addClassName(getClassFlexItem());
