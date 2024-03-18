import { assertHtmlElements } from '../utils/assert-html-elements.js';
import { attachOpenShadowRoot } from '../utils/attach-shadow-root.js';
import { createChildren } from '../utils/create-children.js';

export class CustomHeader extends HTMLElement {
  connectedCallback() {
    const shadowRoot = attachOpenShadowRoot({
      element: this,
    });
    const children = createChildren({
      children: [
        { name: 'header', tag: 'header' },
        { name: 'h1', tag: 'h1', textContent: 'Carl (Cid) Romero' },
      ],
    });
    const { header, h1 } = assertHtmlElements({ map: children });

    header.appendChild(h1);
    shadowRoot.appendChild(header);
  }
}
