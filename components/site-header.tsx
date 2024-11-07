"use client";
import { useState, useEffect } from 'react';
import './style.css';

export function SiteHeader() {
  const [isLoading, setIsLoading] = useState(true);  // State for loading overlay
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isCursorChanged, setIsCursorChanged] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Disable scrolling by setting overflow hidden on body
    document.body.style.overflow = 'hidden';

    // Start the loading animation and set up transition to hide it
    const loadingTimeout = setTimeout(() => {
      setIsFading(true); // Start fade-out transition
      setTimeout(() => {
        setIsLoading(false); // Remove overlay after fade-out animation
        document.body.style.overflow = ''; // Re-enable scrolling
      }, 500); // Match this duration to the CSS transition duration
    }, 2000); // Adjust to simulate loading duration

    // Cleanup timeout on component unmount
    return () => {
      clearTimeout(loadingTimeout);
      document.body.style.overflow = ''; // Re-enable scrolling on cleanup
    };
  }, []);

  // Scroll and cursor change handlers
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > prevScrollY) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    const handleClick = () => {
      if (!isCursorChanged) {
        document.body.style.cursor = 'url("/mouse/c.png"), pointer';
        setIsCursorChanged(true);
        setTimeout(() => {
          document.body.style.cursor = 'url("/mouse/a.png"), pointer';
          setIsCursorChanged(false);
        }, 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.body.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('click', handleClick);
    };
  }, [prevScrollY, isCursorChanged]);

  return (
    <>
      {/* Loading Overlay */}
      {isLoading && (
        <div className={`loading-overlay ${isFading ? 'fade-out' : ''}`}>
          <img src="/art/animasi222.gif" alt="Loading animation" className="loading-animation" />
        </div>
      )}

      {/* Navbar */}
      <nav
        className={`fixed w-full z-10 top-0 left-0 transition-all duration-300 ${
          isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
        } ${!isScrolled && isMenuOpen ? 'bg-[#ff00ec] ' : ''} ${isScrolled && isMenuOpen ? 'bg-[#ff00ec] ' : ''} ${isScrolled && !isMenuOpen ? 'bg-[#ff00ec] ' : ''} `} 
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-white text-xl font-bold flex text-center justify-center items-center">
            <img src="/iconp.webp" height={50} width={50} alt="" />
            <h2>$PEOW</h2>
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white hover:text-gray-300 lg:text-3xl md:text-xl">HOME</a>
            <a href="#buy" className="text-white hover:text-gray-300 lg:text-3xl md:text-xl">BUY $PEOW</a>
            <a href="#news" className="text-white hover:text-gray-300 lg:text-3xl md:text-xl">NEWS</a>
            <a href="#info" className="text-white hover:text-gray-300 lg:text-3xl md:text-xl">INFO</a>
            <a href="#community" className="text-white hover:text-gray-300 lg:text-3xl md:text-xl">COMMUNITY</a>
            <a href="#partnership" className="text-white hover:text-gray-300 lg:text-3xl md:text-xl">PARTNERSHIP</a>
          </div>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 p-1 bg-[#ff00ec] hover:bg-[#b43ab2] rounded-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {isMenuOpen && (
            <div
              className={`md:hidden absolute top-16 left-0 w-full bg-[#ff00ec] shadow-lg p-4 space-y-4 transition-all duration-300 ${
                isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
              }`}
            >
              <a href="#home" className="block text-white hover:text-gray-300 text-xl">HOME</a>
              <a href="#buy" className="block text-white hover:text-gray-300 text-xl">BUY $PEOW</a>
              <a href="#news" className="block text-white hover:text-gray-300 text-xl">NEWS</a>
              <a href="#info" className="block text-white hover:text-gray-300 text-xl">INFO</a>
              <a href="#community" className="block text-white hover:text-gray-300 text-xl">COMMUNITY</a>
              <a href="#partnership" className="block text-white hover:text-gray-300 text-xl">PARTNERSHIP</a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
