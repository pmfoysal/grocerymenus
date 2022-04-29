import React from 'react';
import App from '@app/app';
import '@commonStyle/reset.scss';
import ReactDOM from 'react-dom/client';
import AppWrapper from '@helper/appWrapper';
import reportWebVitals from '@test/reportWebVitals';

const root = ReactDOM.createRoot(document.querySelector("[data-app='pmfoysal']"));

root.render(
   <React.StrictMode>
      <AppWrapper>
         <App />
      </AppWrapper>
   </React.StrictMode>
);

reportWebVitals();
