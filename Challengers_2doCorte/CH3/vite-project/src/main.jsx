import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirstApp from './Components/FirstApp';
import ComponentApp from './Components/Components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp value={10} />
    <ComponentApp />
  </React.StrictMode>
);
