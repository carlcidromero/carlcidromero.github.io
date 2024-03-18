import { attachOpenShadowRoot } from '../utils/attach-shadow-root.js';

export class CustomHeader extends HTMLElement {
  connectedCallback() {
    const { shadowRoot } = attachOpenShadowRoot({
      element: this,
    });

    console.log(shadowRoot);
  }
}
