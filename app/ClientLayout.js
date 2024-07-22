"use client";

import { useEffect } from 'react';

export default function ClientLayout({ children }) {
  useEffect(() => {
    const loadCSS = (href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    };

    const cssFiles = [
      '/assets/css/all.min.css',
      '/assets/css/animate.css',
      '/assets/css/magnific-popup.css',
      '/assets/css/meanmenu.css'
    ];

    const timeoutId = setTimeout(() => {
      cssFiles.forEach(file => loadCSS(file));
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return <>{children}</>;
}
