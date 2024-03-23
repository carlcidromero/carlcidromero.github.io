import { createA, setHref, setTextContent } from '../../utils/utils.js';

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
