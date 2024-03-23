import {
  appendChildren,
  createLi,
  createNav,
  createUl,
  getOpenShadowRoot,
  hasShadowRoot,
} from '../../utils/utils.js';
import {
  getAudioEngineeringAnchor,
  getHomeAnchor,
  getSoftwareEngineeringAnchor,
} from './custom-nav.utils.js';

export class CustomNav extends HTMLElement {
  connectedCallback() {
    if (hasShadowRoot(this)) return;

    getOpenShadowRoot(this)
      .appendChild(createNav())
      .appendChild(
        appendChildren(createUl())([
          appendChildren(createLi())([getHomeAnchor()]),
          appendChildren(createLi())([getAudioEngineeringAnchor()]),
          appendChildren(createLi())([getSoftwareEngineeringAnchor()]),
        ])
      );
  }
}
