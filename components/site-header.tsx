"use client";
import { useState, useEffect } from 'react';
import './style.css';
import { Switch } from './ui/switch';
interface SiteHeaderProps {
  isNavbarVisible: boolean;
}

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isCursorChanged, setIsCursorChanged] = useState(false);
  const [isFading, setIsFading] = useState(false);

  // useEffect(() => {
  //   // Disable scrolling by setting overflow hidden on body
  //   document.body.style.overflow = 'hidden';

  //   // Start the loading animation and set up transition to hide it
  //   const loadingTimeout = setTimeout(() => {
  //     setIsFading(true); // Start fade-out transition
  //     setTimeout(() => {
  //       setIsLoading(false); // Remove overlay after fade-out animation
  //       document.body.style.overflow = ''; // Re-enable scrolling
  //     }, 500); // Match this duration to the CSS transition duration
  //   }, 2000); // Adjust to simulate loading duration

  //   // Cleanup timeout on component unmount
  //   return () => {
  //     clearTimeout(loadingTimeout);
  //     document.body.style.overflow = ''; // Re-enable scrolling on cleanup
  //   };
  // }, []);
  // Read the saved state from localStorage or set default
  const getCookie = (name: string) => {
    if (typeof document !== 'undefined') {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    }
    return undefined;
  };

  const initialDarkMode = getCookie("isDarkMode") === "true"; // Read cookie and set initial state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(initialDarkMode);

  useEffect(() => {
    // Set the "isDarkMode" cookie and apply the dark mode class
    const setCookie = (name: string, value: string, days: number) => {
      if (typeof document !== 'undefined') {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Expiry in days
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
      }
    };

    // Update the cookie whenever the mode changes
    setCookie("isDarkMode", String(isDarkMode), 7); // Save for 7 days
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]); // Re-run when the dark mode state changes
  
  // Handle mode change with a refresh
  const handleModeChange = (checked: boolean) => {
    setIsDarkMode(checked);
    setTimeout(() => window.location.reload(), 100); // Refresh after a small delay
  };

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
        document.body.style.cursor = 'url("/mouse/bc.png"), pointer';
        setIsCursorChanged(true);
        setTimeout(() => {
          document.body.style.cursor = 'url("/mouse/ac.png"), pointer';
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
      {/* {isLoading && (
        <div className={`loading-overlay ${isFading ? 'fade-out' : ''}`}>
          <img src="/background/dor.gif" alt="Loading animation" className="loading-animation" />
        </div>
      )} */}

      {/* Navbar */}
      <nav
        className={`z-20 fixed w-full top-0 left-0 transition-all duration-300 fade-in3 ${
          isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
        } ${!isScrolled && isMenuOpen ? 'bg-[#3afa6f] ' : ''} ${isScrolled && isMenuOpen ? 'bg-[#3afa6f] ' : ''} ${isScrolled && !isMenuOpen ? 'bg-[#3afa6f] ' : ''}  ${!isScrolled && !isMenuOpen ? 'bg-[#3afa6f] ' : ''}`} 
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-white text-xl font-bold flex text-center justify-center items-center">
            <img src="/iconp.webp" height={50} width={50} alt="" />
            <h2>$PEOW</h2>
          </div>
          <span className="text-white lg:text-2xl md:text-md">{isDarkMode ? "Anime" : "Manga"} <Switch
          checked={isDarkMode}
          onCheckedChange={handleModeChange}
          className="bg-gray-700 fire"
        /></span>
        
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white hover:text-gray-300 lg:text-2xl md:text-md">HOME</a>
            <a href="#buy" className="text-white hover:text-gray-300 lg:text-2xl md:text-md">BUY $PEOW</a>
            <a href="#news" className="text-white hover:text-gray-300 lg:text-2xl md:text-md">NEWS</a>
            <a href="#info" className="text-white hover:text-gray-300 lg:text-2xl md:text-md">INFO</a>
            <a href="#community" className="text-white hover:text-gray-300 lg:text-2xl md:text-md">COMMUNITY</a>
            <a href="#partnership" className="text-white hover:text-gray-300 lg:text-2xl md:text-md">PARTNERSHIP</a>
          </div>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 p-1 bg-[#3afa6f] hover:bg-[#00FF00] rounded-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {isMenuOpen && (
            <div
              className={`md:hidden absolute top-16 left-0 w-full bg-[#3afa6f] shadow-lg p-4 space-y-4 transition-all duration-300 ${
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
