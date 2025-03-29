import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/styles.scss';
import './lib/fontAwesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faHome, faUser, faBriefcase, faEnvelopeOpen, 
  faAdjust, faDownload, faMapMarkerAlt, 
  faEnvelope, faUserGraduate, faGlobeAfrica 
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(
  faHome, faUser, faBriefcase, faEnvelopeOpen, 
  faAdjust, faDownload, faMapMarkerAlt, 
  faEnvelope, faUserGraduate, faGlobeAfrica,
  faGithub, faLinkedinIn
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);