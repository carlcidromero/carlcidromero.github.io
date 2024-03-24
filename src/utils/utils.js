export const createElement = document.createElement.bind(document);
export const getElement = document.querySelector.bind(document);

export const getClassBodyContainer = () => 'body-container';
export const getClassFlexContainerColumn = () => 'flex-container--column';
export const getClassFlexItem = () => 'flex-item';

/**
 * @returns {HTMLAnchorElement}
 */
export const createA = () => createElement('a');
/**
 * @returns {HTMLElement}
 */
export const createDiv = () => createElement('div');
/**
 * @returns {HTMLHeadingElement}
 */
export const createH1 = () => createElement('h1');
/**
 * @returns {HTMLElement}
 */
export const createHeader = () => createElement('header');
/**
 * @returns {HTMLLinkElement}
 */
export const createLink = () => createElement('link');
/**
 * @returns {HTMLElement}
 */
export const createNav = () => createElement('nav');
/**
 * @returns {HTMLStyleElement}
 */
export const createStyle = () => createElement('style');
/**
 * @returns {HTMLUListElement}
 */
export const createUl = () => createElement('ul');
/**
 * @returns {HTMLLIElement}
 */
export const createLi = () => createElement('li');

export const getBody = () => document.body;
/**
 * @returns {HTMLElement}
 */
export const getCustomHeader = () => getElement('custom-header');
/**
 * @returns {HTMLElement}
 */
export const getCustomNav = () => getElement('custom-nav');
/**
 * @returns {HTMLElement}
 */
export const getFooter = () => getElement('footer');
/**
 * @returns {HTMLElement}
 */
export const getMain = () => getElement('main');
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
/**
 * @param {HTMLElement} wrapper
 */
const wrapElementWith =
  (wrapper) =>
  /**
   * @param {(element: HTMLElement) => HTMLElement} classer
   */
  (classer) =>
  /**
   * @param {HTMLElement} element
   */
  (element) => {
    const classedWrapper = classer(wrapper());
    element.parentNode.insertBefore(classedWrapper, element);
    classedWrapper.appendChild(element);
    return classedWrapper;
  };
export const wrapElementWithFlexItem =
  wrapElementWith(createDiv)(addClassFlexItem);
