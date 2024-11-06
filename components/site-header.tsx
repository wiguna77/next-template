"use client"
import { useState, useEffect } from 'react';
import './style.css';

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Added state for menu visibility
  const [prevScrollY, setPrevScrollY] = useState(0); // To track scroll direction
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // To hide/show navbar

  // Function to handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Change navbar color to pink if scrolled down (mobile)
      setIsScrolled(currentScrollY > 50); // Adjust this value for when you want color change

      // Always show navbar when on top of the page (scroll position 0)
      if (currentScrollY > 0) {
        // Hide navbar when scrolling up (mobile only)
        if (currentScrollY > prevScrollY) {
          setIsNavbarVisible(true); // Show navbar when scrolling down
        } else {
          setIsNavbarVisible(false); // Hide navbar when scrolling up
        }
      } else {
        setIsNavbarVisible(true); // Always visible when at the top of the page
      }

      setPrevScrollY(currentScrollY); // Update the scroll position for next scroll event
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]); // Dependency on previous scroll position to detect direction
  const [isCursorChanged, setIsCursorChanged] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      if (!isCursorChanged) {
        // Change the cursor on the first click
        document.body.style.cursor = 'url("/mouse/c.png"), pointer';
        setIsCursorChanged(true);

        // Revert cursor back to default after 1 second (1000ms)
        setTimeout(() => {
          document.body.style.cursor = 'url("/mouse/a.png"), pointer';
          setIsCursorChanged(false);  // Reset cursor state
        }, 200);
      }
    };

    // Attach the click event listener to the document
    document.body.addEventListener('click', handleClick);

    // Clean up event listener when component unmounts
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, [isCursorChanged]); // Depend on `isCursorChanged` to handle toggling

  return (
    <nav
      className={`fixed w-full z-10 top-0 left-0 transition-all duration-300 ${
        isNavbarVisible ? '' : '-translate-y-full' // Hide navbar on scroll up (mobile)
      } ${isScrolled ? 'bg-pink-500' : 'bg-transparent'}`} // Pink only on mobile, keep transparent on desktop
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Home Link */}
        <div className="text-white text-xl font-bold">
          $PEOW
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white text-shadow hover:text-gray-300">HOME</a>
          <a href="#buy" className="text-white hover:text-gray-300">BUY $PEOW</a>
          <a href="#news" className="text-white hover:text-gray-300">NEWS</a>
          <a href="#info" className="text-white hover:text-gray-300">INFO</a>
          <a href="#community" className="text-white hover:text-gray-300">COMMUNITY</a>
          <a href="#partnership" className="text-white hover:text-gray-300">PARTNERSHIP</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-lg p-4 space-y-4">
            <a href="#home" className="block text-white hover:text-gray-300">HOME</a>
            <a href="#buy" className="block text-white hover:text-gray-300">BUY $PEOW</a>
            <a href="#news" className="block text-white hover:text-gray-300">NEWS</a>
            <a href="#info" className="block text-white hover:text-gray-300">INFO</a>
            <a href="#community" className="block text-white hover:text-gray-300">COMMUNITY</a>
            <a href="#partnership" className="block text-white hover:text-gray-300">PARTNERSHIP</a>
          </div>
        )}
      </div>
    </nav>
  );
}
