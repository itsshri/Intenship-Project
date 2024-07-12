import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import './index.css';

const clientId = '167713142359-laeqsv7sui0qvc0crtnpf4goarg4q834.apps.googleusercontent.com'; // Replace with your actual client ID

ReactDOM.render(
  <GoogleOAuthProvider clientId={clientId}>
    <Router>
      <App />
    </Router>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);
