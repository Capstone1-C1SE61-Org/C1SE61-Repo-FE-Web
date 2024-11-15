import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from "react-scroll-parallax";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </AuthProvider>
  </BrowserRouter>
);