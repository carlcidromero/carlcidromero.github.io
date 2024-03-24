import { addClassFlexItem } from './pure.js';

const createElement = document.createElement.bind(document);
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

const getElement = document.querySelector.bind(document);
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
