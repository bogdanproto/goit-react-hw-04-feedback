import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';

const optionsFeedback = ['good', 'neutral', 'bad'];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App options={optionsFeedback} />
  </React.StrictMode>
);
