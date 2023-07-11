import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from 'components/App';
import './index.css';
import { GlobalStyles } from 'components/styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <BrowserRouter  basename="den-clinic-test">
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
