import { attachOpenShadowRoot } from '../utils/attach-open-shadow-root.js';

export class CustomHeader extends HTMLElement {
  connectedCallback() {
    const shadowRoot = attachOpenShadowRoot({
      element: this,
    });
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Carl (Cid) Romero';

    header.appendChild(h1);
    shadowRoot.appendChild(header);
  }
}
