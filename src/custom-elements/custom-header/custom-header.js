import { createH1, createHeader, createStyle } from '../../utils/impure.js';
import {
  appendChildren,
  getOpenShadowRoot,
  hasShadowRoot,
  setTextContent,
} from '../../utils/pure.js';
import {
  getHeaderStyleTextContent,
  getHeaderTextContent,
} from './custom-header.utils.js';

export class CustomHeader extends HTMLElement {
  connectedCallback() {
    if (hasShadowRoot(this)) return;

    appendChildren(getOpenShadowRoot(this))([
      setTextContent(createStyle())(getHeaderStyleTextContent()),
      createHeader().appendChild(
        setTextContent(createH1())(getHeaderTextContent())
      ),
    ]);
  }
}
