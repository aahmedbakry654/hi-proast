import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css'; // لو بتستخدم Tailwind أو CSS
import { BrowserRouter } from 'react-router-dom'; // استيراد الـ BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);