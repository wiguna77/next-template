"use client"
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
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
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
          <p className="text-lg text-gray-300">
            Welcome to our platform! Here we share all the latest news, partnerships, and much more about our mission.
          </p>
        </section>

        {/* Community & Buy $PEOW Section */}
        <section
          ref={communityRef}
          className={`flex justify-between mb-12 transition-opacity duration-1000 ${
            communityInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-1/2 p-6 border border-white bg-black bg-opacity-50 rounded-lg mr-5">
            <h3 className="text-2xl font-semibold mb-2 text-white">Community</h3>
            <p className="text-gray-300">Join our community and become part of the movement!</p>
          </div>
          <div className="w-1/2 p-6 text-right border border-white bg-black bg-opacity-50 rounded-lg ml-5">
            <h3 className="text-2xl font-semibold mb-2 text-white">Buy $PEOW</h3>
            <p className="text-gray-300">Buy $PEOW now and be a part of our growing ecosystem!</p>
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
