import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';
import './styles.css';  

axios.defaults.baseURL = 'http://localhost:8000';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
