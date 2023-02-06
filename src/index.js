import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// metemos el div vacío en la constante root que tiene un método render que tiene los componentes a renderizar. Es un archivo que pincha el componente en el div


reportWebVitals();
