import {
  createH1,
  createHeader,
  getOpenShadowRoot,
  hasShadowRoot,
  setTextContent,
} from '../../utils/utils.js';
import { getHeaderTextContent } from './custom-header.utils.js';

export class CustomHeader extends HTMLElement {
  connectedCallback() {
    if (hasShadowRoot(this)) return;

    getOpenShadowRoot(this)
      .appendChild(createHeader())
      .appendChild(setTextContent(createH1())(getHeaderTextContent()));
  }
}
