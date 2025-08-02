import { useEffect, useRef, useState } from 'react';
import '../styles/DarkModeWire.css';

const DarkModeWire = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const [pullDistance, setPullDistance] = useState(0);
  const pullDistanceRef = useRef(0); // ← store latest pullDistance here
  const startY = useRef(null);

  // Sync pullDistance to pullDistanceRef so it's always fresh
  useEffect(() => {
    pullDistanceRef.current = pullDistance;
  }, [pullDistance]);

  // Apply dark/light mode on theme change
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    startY.current = e.clientY;
    document.body.style.userSelect = 'none';

    const handleMouseMove = (e) => {
      const distance = e.clientY - startY.current;
      if (distance > 0 && distance < 100) {
        setPullDistance(distance);
      }
    };

    const handleMouseUp = () => {
      if (pullDistanceRef.current > 15) {
        setIsDarkMode((prev) => !prev);
      }
      setPullDistance(0);
      document.body.style.userSelect = '';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
   const handleTouchStart = (e) => {
    if (window.scrollY === 0) {
      e.preventDefault(); // Stop pull-to-refresh
      startY.current = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e) => {
    const distance = e.touches[0].clientY - startY.current;
    if (distance > 0 && distance < 100) {
      setPullDistance(distance);
    }
  };

  const handleTouchEnd = () => {
    if (pullDistanceRef.current > 15) {
      setIsDarkMode((prev) => !prev);
    }
    setPullDistance(0);
  };


  return (
    <div className="rope-container">
      <div
        style={{ height: `${160 + pullDistance}px` }}
        className={`rope ${pullDistance === 0 ? 'swing' : ''}`}
      >
        <div
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ transform: `translateY(${pullDistance}px)` }}
          className="chain-handle"
          title="Pull to toggle theme"
          aria-label="Toggle dark mode"
        />
      </div>
    </div>
  );
};

export default DarkModeWire;
