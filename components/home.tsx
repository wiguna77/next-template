"use client";
import { useEffect, useState } from "react";
import "./style.css";

export function HomeSection() {

    const [showImage, setShowImage] = useState(true); // Show `1.jpg` or `12.jpg` initially
    const [showDorGif, setShowDorGif] = useState(false);
    const [showSecGif, setShowSecGif] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);
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
     // Preload the secondary image to optimize its load time

    const handleClick = () => {
      setShowImage(false); // Remove `1.jpg` or `12.jpg`
      setShowDorGif(true); // Show `2.jpg` or `22.jpg`

        setTimeout(()=> {
            
            // setShowSecGif(false); // Show `2.jpg` or `22.jpg`
            setShowDorGif(true);
            setContentVisible(true); // Show main content
        },1000)

    };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >

      {/* Fullscreen Initial Image */}
      {showImage && (
        <div
          className="pulsing-effect fixed top-0 left-0 w-full h-full bg-center bg-cover z-50 firenot bg-white"
          style={{
            backgroundImage: `url('./background/${isDarkMode ? "12.jpg" : "1.jpg"}')`,
          }}
          onClick={handleClick}
        ></div>
      )}
    {/* Secondary Image */}
    {/* {showSecGif && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover z-50"
          style={{
            backgroundImage: `url('./background/${isDarkMode ? "22.jpg" : "2.jpg"}')`,
          }}
        ></div>
      )} */}
      {/* Secondary Image */}
      {showDorGif && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover z-0"
          style={{
            backgroundImage: `url('./background/${isDarkMode ? "22.jpg" : "2.jpg"}')`,
          }}
        ></div>
      )}

      {/* Main Content (Visible After Both GIFs) */}
      {contentVisible && (
        <main className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 fade-in z-10">
          {/* Title */}
          {/* <h1 className="text-6xl font-bold mb-4">$PEOW Token</h1>
          <h2 className="text-4xl font-semibold mb-8">BUY NOW</h2> */}

          {/* Desktop Buttons */}
          {/* <div className="hidden md:flex space-x-4">
            <button className="bg-[#3afa6f] hover:bg-[#00FF00] text-white font-bold py-2 px-6 rounded-lg">
              BUY NOW <span>💰</span>
            </button>
            <button className="bg-[#3afa6f] hover:bg-[#00FF00] text-white font-bold py-2 px-6 rounded-lg">
              CHART 📊
            </button>
          </div> */}
                      <button className="fixed bottom-16 right-4 bg-[#3afa6f] hover:bg-[#00FF00] text-white font-bold py-2 px-6 rounded-lg w-100 h-10 shadow-lg">
              BUY NOW <span>💰</span>
            </button>
      <button
    className="fixed bottom-4 right-4 bg-[#3afa6f] hover:bg-[#00FF00] text-white font-bold py-2 px-6 rounded-lg w-100 h-10 shadow-lg"
        >
        CHART 📊
        </button>
          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-4 mt-6 md:hidden text-2xl">
            <h3 className="text-2xl font-bold underline">Useful Links:</h3>
            <div className="grid grid-cols-2 gap-4 mt-6 md:hidden">
              <button className="bg-[#3afa6f] hover:bg-[#00FF00] text-white font-bold py-2 px-6 rounded-lg flex justify-between items-center">
                Buy <span>💰</span>
              </button>
              <button className="bg-[#3afa6f] hover:bg-[#00FF00] text-white font-bold py-2 px-6 rounded-lg flex justify-between items-center">
                Chart <span>📊</span>
              </button>
              <button className="bg-[#3afa6f] hover:bg-[#00FF00] text-white font-bold py-2 px-6 rounded-lg flex justify-between items-center">
                Twitter <span>🐦</span>
              </button>
              <button className="bg-[#3afa6f] hover:bg-[#00FF00] text-white font-bold py-2 px-6 rounded-lg flex justify-between items-center">
                Telegram <span>📲</span>
              </button>
            </div>
            <button className="bg-[#3afa6f] hover:bg-[#00FF00] text-white font-bold py-2 px-6 rounded-lg flex justify-between items-center">
              Solscan <span>⛓️</span>
            </button>
          </div>
        </main>
      )}
    </div>
  );
}
