import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import home_en from './constants/strings/en/home.json';
import home_fr from './constants/strings/fr/home.json';
import projects_en from './constants/strings/en/projects.json';
import projects_fr from './constants/strings/fr/projects.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: true },
  lng: 'en',
  resources: {
    en: {
      home: home_en,
      projects: projects_en,
    },
    fr: {
      home: home_fr,
      projects: projects_fr,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
