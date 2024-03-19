import { assertHtmlElements } from '../utils/assert-html-elements.js';
import { createChildren } from '../utils/create-children.js';
import { customHeaderChildren } from './custom-header.utils.js';

export class CustomHeader extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const children = createChildren({
      children: customHeaderChildren,
    });
    const { header, h1 } = assertHtmlElements({ map: children });

    header.appendChild(h1);
    shadowRoot.appendChild(header);
  }
}
