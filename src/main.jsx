import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route.jsx';
import AuthoProvider from './providers/AuthoProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthoProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthoProvider>
  </React.StrictMode>
);
