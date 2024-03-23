import {
  createH1WithTextContent,
  createHeader,
  getOpenShadowRoot,
  hasShadowRoot,
} from '../utils/utils.js';
import { getHeaderTextContent } from './custom-header.utils.js';

export class CustomHeader extends HTMLElement {
  connectedCallback() {
    if (hasShadowRoot(this)) return;

    getOpenShadowRoot(this).appendChild(
      createHeader().appendChild(
        createH1WithTextContent(getHeaderTextContent())
      )
    );
  }
}
