import { assertHtmlElements } from '../utils/assert-html-elements.js';
import { attachOpenShadowRoot } from '../utils/attach-open-shadow-root.js';
import { createChildren } from '../utils/create-children.js';
import { createNavAnchor } from './custom-nav.utils.js';

export class CustomNav extends HTMLElement {
  connectedCallback() {
    const shadowRoot = attachOpenShadowRoot({
      element: this,
    });
    const children = createChildren({
      children: [
        { name: 'nav', tag: 'nav' },
        { name: 'ul', tag: 'ul' },
      ],
    });
    const { nav, ul } = assertHtmlElements({ map: children });
    // const nav = document.createElement('nav');
    // const ul = document.createElement('ul');
    const homeAnchor = createNavAnchor({
      href: '/',
      textContent: 'Home',
    });
    const audioEngineeringAnchor = createNavAnchor({
      textContent: 'Audio Engineering',
      href: '/pages/audio-engineering',
    });
    const softwareEngineeringAnchor = createNavAnchor({
      textContent: 'Software Engineering',
      href: '/pages/software-engineering',
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
