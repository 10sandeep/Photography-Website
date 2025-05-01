import React, { useEffect, useState, useRef } from 'react';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;
    
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
      
      cursorDot.style.left = `${clientX}px`;
      cursorDot.style.top = `${clientY}px`;
    };
    
    const onMouseDown = () => {
      cursor.classList.add('cursor-click');
      setTimeout(() => {
        if (cursor) cursor.classList.remove('cursor-click');
      }, 500);
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    
    // Detect hoverable elements
    const hoverableElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    
    hoverableElements.forEach(el => {
      el.addEventListener('mouseenter', () => setIsHovering(true));
      el.addEventListener('mouseleave', () => setIsHovering(false));
    });
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      
      hoverableElements.forEach(el => {
        el.removeEventListener('mouseenter', () => setIsHovering(true));
        el.removeEventListener('mouseleave', () => setIsHovering(false));
      });
    };
  }, []);
  
  return (
    <div className="cursor-container pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      <div 
        ref={cursorRef}
        className={`custom-cursor absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference transition-all duration-300 ${
          isHovering ? 'w-16 h-16 bg-white' : 'w-10 h-10 border border-white bg-transparent'
        }`}
      ></div>
      <div 
        ref={cursorDotRef}
        className="custom-cursor-dot w-2 h-2 absolute bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"
      ></div>
    </div>
  );
};

export default Cursor;