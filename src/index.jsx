import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";

// Performance monitoring in development
if (process.env.NODE_ENV === 'development') {
  // Web Vitals monitoring
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  });
}

// Preload critical resources
const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
  fontLink.as = 'style';
  document.head.appendChild(fontLink);

  // Preload critical images
  const criticalImages = [
    './public/assets/images/logo.png',
    './public/assets/images/logo_footer.png'
  ];

  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

// Initialize performance optimizations
preloadCriticalResources();

const container = document.getElementById("root");
const root = createRoot(container);

// Enable React DevTools in development
if (process.env.NODE_ENV === 'development') {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.__REACT_DEVTOOLS_GLOBAL_HOOK__ || {};
}

root.render(<App />);
