/* `import React from 'react';` is importing the default export from the 'react' module and assigning
it to a variable named `React`. This allows you to use React functionalities, such as creating
components, within the current file. */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
