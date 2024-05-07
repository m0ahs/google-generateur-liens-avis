// index.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import Container from './components/Container';
import '/src/App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
);
