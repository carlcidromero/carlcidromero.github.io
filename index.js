import { CustomHeader } from './src/custom-elements/custom-header/custom-header.js';
import { CustomNav } from './src/custom-elements/custom-nav/custom-nav.js';
import {
  createDiv,
  getBody,
  getCustomHeader,
  getCustomNav,
  getFooter,
  getMain,
  wrapElementWithFlexItem,
} from './src/utils/impure.js';
import {
  addClassBodyContainer,
  addClassFlexContainerColumn,
} from './src/utils/pure.js';

customElements.define('custom-nav', CustomNav);
customElements.define('custom-header', CustomHeader);

addClassFlexContainerColumn(getBody());
const children = Array.from(getBody().children);
const newDiv = createDiv();
children.forEach((child) => newDiv.appendChild(child));
getBody().appendChild(newDiv);

addClassFlexContainerColumn(addClassBodyContainer(newDiv));

wrapElementWithFlexItem(getCustomHeader());
wrapElementWithFlexItem(getCustomNav());
wrapElementWithFlexItem(getMain());
wrapElementWithFlexItem(getFooter());
