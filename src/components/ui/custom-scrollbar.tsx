"use client";

import React, { useState, useEffect } from 'react';

const CustomScrollbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (docHeight > 0) {
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(Math.min(Math.max(progress, 0), 100));
      } else {
        setScrollProgress(0);
      }
    };

    // Initial calculation
    updateScrollProgress();

    window.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('resize', updateScrollProgress);
    
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        ::-webkit-scrollbar {
          display: none;
        }
        html {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <div className="fixed right-4 top-[17.5%] w-1 bg-white/20 rounded-full z-[1000] h-[65%]">
        <div 
          className="bg-white/95 rounded-full transition-all duration-150 ease-out w-full"
          style={{ 
            height: `${scrollProgress}%`
          }}
        />
      </div>
    </>
  );
};

export { CustomScrollbar };