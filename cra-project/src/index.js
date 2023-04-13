import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css'
import { BrowserRouter as Router} from "react-router-dom";
import App from './App';

// require('dotenv').config()

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
