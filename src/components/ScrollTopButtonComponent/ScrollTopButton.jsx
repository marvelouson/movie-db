import React, { useState } from 'react';
import './ScrollTopButton.css';


const ScrollTopButton = () => {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 500) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 500) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <button
    className="scrollTop"
    onClick={scrollTop}
    style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
    >
    👆
    </button>
  );
}

export default ScrollTopButton;