import { createA } from '../../utils/impure.js';
import { setHref, setTextContent } from '../../utils/pure.js';

export const getNavStyleTextContent = () => `
ul {
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 0.5rem;
}`;

const getHomeHref = () => '/';
const getHomeTextContent = () => 'Home';
export const getHomeAnchor = () =>
  setHref(setTextContent(createA())(getHomeTextContent()))(getHomeHref());

const getAudioEngineeringHref = () => '/pages/audio-engineering';
const getAudioEngineeringTextContent = () => 'Audio Engineering';
export const getAudioEngineeringAnchor = () =>
  setHref(setTextContent(createA())(getAudioEngineeringTextContent()))(
    getAudioEngineeringHref()
  );

const getSoftwareEngineeringHref = () => '/pages/software-engineering';
const getSoftwareEngineeringTextContent = () => 'Software Engineering';
export const getSoftwareEngineeringAnchor = () =>
  setHref(setTextContent(createA())(getSoftwareEngineeringTextContent()))(
    getSoftwareEngineeringHref()
  );
