import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure({
  ...awsExports,
  Interactions: {
    bots: {
      CloudAssistantBot: {
        name: 'CloudAssistantBot',
        alias: '$LATEST',
        region: 'us-east-1', // Replace with your Lex bot's region if different
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
