// index.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import '/src/App.css'

// Crée un root ReactDOM et rend l'application dedans.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);