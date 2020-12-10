import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { FirebaseUserProvider } from './utils/context/user.context';
import App from './containers/App/App';

import './index.css';

ReactDOM.render(
    <Router>
      <FirebaseUserProvider>
        <App />
      </FirebaseUserProvider>
    </Router>,
  document.getElementById('root')
);
