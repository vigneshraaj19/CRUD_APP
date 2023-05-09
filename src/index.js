import React from 'react';
import ReactDOM from 'react-dom/client';
import Apps from './Apps';
import './index.css';
import UserTable from './UserTable';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
     <Apps /> 
  </React.StrictMode>
  </BrowserRouter>
);

// ReactDOM.render( <App />,document.getElementById('root'));