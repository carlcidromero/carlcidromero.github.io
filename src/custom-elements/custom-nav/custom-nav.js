import { assertHtmlElements } from '../utils/assert-html-elements.js';
import { createChildren } from '../utils/create-children.js';
import { wrapWithLi } from '../utils/wrap-with-li.js';
import { customNavChildren } from './custom-nav.utils.js';

export class CustomNav extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const children = createChildren({
      children: customNavChildren,
    });

    const {
      nav,
      ul,
      homeAnchor,
      audioEngineeringAnchor,
      softwareEngineeringAnchor,
    } = assertHtmlElements({ map: children });

    const navAnchors = [
      homeAnchor,
      audioEngineeringAnchor,
      softwareEngineeringAnchor,
    ];

    const navLis = wrapWithLi({ target: navAnchors });

    navLis.forEach((li) => {
      ul.appendChild(li);
    });
    nav.appendChild(ul);
    shadowRoot.appendChild(ul);
  }
}
