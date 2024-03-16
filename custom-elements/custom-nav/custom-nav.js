import { initializeCustomElementWithShadowRoot } from '../utils/initialize-custom-element.js';
import { createNavAnchor } from './custom-nav.utils.js';

export class CustomNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const { shadowRoot } = initializeCustomElementWithShadowRoot({
      element: this,
    });
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const homeAnchor = createNavAnchor({
      href: '/',
      textContent: 'Home',
    });
    const audioEngineeringAnchor = createNavAnchor({
      textContent: 'Audio Engineering',
      href: '/audio-engineering',
    });
    const softwareEngineeringAnchor = createNavAnchor({
      textContent: 'Software Engineering',
      href: '/software-engineering',
    });
    const navAnchors = [
      homeAnchor,
      audioEngineeringAnchor,
      softwareEngineeringAnchor,
    ];
    const navLis = navAnchors.map((anchor) => {
      const li = document.createElement('li');
      li.appendChild(anchor);
      return li;
    });
    navLis.forEach((li) => {
      ul.appendChild(li);
    });
    nav.appendChild(ul);
    shadowRoot.appendChild(ul);
  }
}
