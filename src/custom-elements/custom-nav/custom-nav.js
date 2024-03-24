import {
  appendChildren,
  createLi,
  createNav,
  createStyle,
  createUl,
  getOpenShadowRoot,
  hasShadowRoot,
  setTextContent,
} from '../../utils/utils.js';
import {
  getAudioEngineeringAnchor,
  getHomeAnchor,
  getNavStyleTextContent,
  getSoftwareEngineeringAnchor,
} from './custom-nav.utils.js';

export class CustomNav extends HTMLElement {
  connectedCallback() {
    if (hasShadowRoot(this)) return;

    appendChildren(getOpenShadowRoot(this))([
      setTextContent(createStyle())(getNavStyleTextContent()),
      createNav().appendChild(
        appendChildren(createUl())([
          appendChildren(createLi())([getHomeAnchor()]),
          appendChildren(createLi())([getAudioEngineeringAnchor()]),
          appendChildren(createLi())([getSoftwareEngineeringAnchor()]),
        ])
      ),
    ]);
  }
}
