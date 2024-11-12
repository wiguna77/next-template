"use client"
import { LucideXCircle, TwitterIcon, XCircle, XIcon } from 'lucide-react';
import React from 'react';
import { useInView } from 'react-intersection-observer';


export function AboutSection() {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.2, // Trigger when 10% of the element is in view
  });

  const { ref: communityRef, inView: communityInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: quoteImageRef, inView: quoteImageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-xl lg:text-3xl md:text:2xl" id='about-section'
      style={{ backgroundImage: `url('./background/background2.jpg')` }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* About Section */}
        <section
          ref={aboutRef}
          className={`text-center mb-12 border border-white bg-black bg-opacity-50 p-6 rounded-lg transition-opacity duration-1000 ${
            aboutInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">About Us</h2>
          <p className="text-gray-300">
            Welcome to our platform! Here we share all the latest news, partnerships, and much more about our mission.
          </p>
        </section>

        {/* Community & Buy $PEOW Section */}
        <section
          ref={communityRef}
          className={`flex justify-between mb-12 transition-opacity duration-1000 w-full${
            communityInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
<div className="flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0" id='community'>
  <div className="w-full md:w-1/2 p-6 text-center md:text-left border border-white bg-black bg-opacity-50 rounded-lg">
    <h3 className="text-2xl font-semibold mb-2 text-white">Community</h3>
    <p className="text-gray-300">Join our community and become part of the movement!</p>

    {/* Flex container for links */}
    <div className="flex space-x-4 mt-4 justify-center md:justify-center flex-wrap">
      {/* X (formerly Twitter) Icon */}
      <a href="http://x.com/peowsolana" target='_blank' rel="noopener noreferrer">
      <div className="rounded-full bg-black p-2 hover:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" fill="white">
          <path d="M23.643 4.937a9.727 9.727 0 0 1-2.828.775 4.926 4.926 0 0 0 2.165-2.717 9.747 9.747 0 0 1-3.103 1.184 4.904 4.904 0 0 0-8.372 4.47A13.925 13.925 0 0 1 1.671 3.149a4.904 4.904 0 0 0 1.516 6.544 4.868 4.868 0 0 1-2.22-.616v.061a4.906 4.906 0 0 0 3.933 4.808 4.9 4.9 0 0 1-2.212.084 4.906 4.906 0 0 0 4.587 3.413A9.824 9.824 0 0 1 1.2 19.293a13.816 13.816 0 0 0 7.548 2.213c9.055 0 14.01-7.496 14.01-13.985 0-.21-.004-.42-.013-.63a9.936 9.936 0 0 0 2.438-2.546z" />
        </svg>
        </div>
      </a>

      {/* Telegram Icon */}
      <a href="http://t.me/peowsolana" target='_blank' rel="noopener noreferrer">
      <div className="rounded-full bg-black p-2 hover:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="40" fill="white">
          <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
        </svg>
        </div>
      </a>
      
    </div>
  </div>

  <div className="w-full md:w-1/2 p-6 text-center md:text-right border border-white bg-black bg-opacity-50 rounded-lg" id='buy'>
    <h3 className="text-2xl font-semibold mb-2 text-white">Buy $PEOW</h3>
    <p className="text-gray-300">Buy $PEOW now and be a part of our growing ecosystem!</p>

    <div className="flex justify-center md:justify-center flex-wrap space-x-2 md:space-x-4 mt-4">
      {/* BirdEye */}
      <a href="https://birdeye.so/token/7DptUgc1aRY6geK4WnauRKTTfVFWmLsBWP275sD2Bg9r?chain=solana" target='_blank' rel="noopener noreferrer">
        <div className="rounded-full bg-black p-2 hover:bg-gray-800 ">
          <img src="/ico/icon-birdeye.svg" width={50} alt="BirdEye"/>
        </div>
      </a>
        {/* Jupiter Aggregator (jup.ag) */}
        <a href="https://jup.ag/swap/SOL-7DptUgc1aRY6geK4WnauRKTTfVFWmLsBWP275sD2Bg9r" target='_blank' rel="noopener noreferrer">
            <div className="rounded-full bg-black p-2 hover:bg-gray-800">
                <img src="/ico/icon-jupiter.svg" width={50} alt="Jupiter"/>
            </div>
        </a>

        {/* DexScreener */}
        <a href="https://dexscreener.com/solana/ds2cv9r9yrnk52atty7nwybrsxtnjvsl4gayuzh9hkcm" target='_blank' rel="noopener noreferrer">
            <div className="rounded-full bg-black p-2 hover:bg-gray-800">
                <img src="/ico/icon-dexscreener.svg" width={50} alt="DexScreener"/>
            </div>
        </a>

        {/* DEXTools */}
        <a href="https://www.dextools.io/app/en/solana/pair-explorer/DS2cv9R9Yrnk52AttY7nWYbRSxtnJVSL4GAYuzH9hKCm?t=1731045130923" target='_blank' rel="noopener noreferrer">
            <div className="rounded-full bg-black p-2 hover:bg-gray-800">
                <img src="/ico/icon-dextools.svg" width={50} alt="DEXTools"/>
            </div>
        </a>

        {/* Meteora */}
        <a href="https://app.meteora.ag/pools/AjDkGYgQKEpMSvQwNoBMqyWTzDrD2pfGtffTFbGPuYc2" target='_blank' rel="noopener noreferrer">
            <div className="rounded-full bg-black p-2 hover:bg-gray-800">
                <img src="/ico/icon-meteora-grey.svg" width={50} alt="Meteora"/>
            </div>
        </a>

        {/* GeckoTerminal */}
        <a href="https://www.geckoterminal.com/solana/pools/AjDkGYgQKEpMSvQwNoBMqyWTzDrD2pfGtffTFbGPuYc2" target='_blank' rel="noopener noreferrer">
            <div className="rounded-full bg-black p-2 hover:bg-gray-800">
                <img src="/ico/icon-geckoterminal.svg" width={50} alt="GeckoTerminal"/>
            </div>
        </a>
    </div>
  </div>
</div>




        </section>

        {/* Quote and Image Section */}
        <section
          ref={quoteImageRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-12 transition-opacity duration-1000 ${
            quoteImageInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="space-y-4 border border-white bg-black bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-white">Quote 1</h3>
            <p className="text-gray-300 italic">
              "The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt
            </p>
          </div>
          <div className="space-y-4 border border-white bg-black bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-white">Quote 2</h3>
            <p className="text-gray-300 italic">
              "Success is not the key to happiness. Happiness is the key to success." - Albert Schweitzer
            </p>
          </div>
          <div className="flex justify-center border border-white bg-black bg-opacity-50 rounded-lg">
            <img
              src="/art/g1.png"
              alt="Placeholder"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
