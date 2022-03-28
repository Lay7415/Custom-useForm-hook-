import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';

const idRoot = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  idRoot
);