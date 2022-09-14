import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// component file
import './App.css';

import TodoContainer from './functionBased/component/TodoContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <TodoContainer />
  </Router>,
);
