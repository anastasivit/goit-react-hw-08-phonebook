import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import store from './redux/store';
import './index.css';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router basename="/goit-react-hw-08-phonebook">
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
);
