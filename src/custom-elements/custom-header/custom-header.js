import {
  appendChildren,
  createH1,
  createHeader,
  createStyle,
  getOpenShadowRoot,
  hasShadowRoot,
  setTextContent,
} from '../../utils/utils.js';
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
