import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WriteNotice from './pages/WriteNotice';
import PostMain from './pages/PostMain';
import Router from './routers/Router';

ReactDOM.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root'),
);
