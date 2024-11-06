"use client"
import React from 'react';
import { useInView } from 'react-intersection-observer';

export function RoadMap() {
  const { ref: aRef, inView: aInView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.2, // Trigger when 10% of the element is in view
  });

  const { ref: bRef, inView: bInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: cRef, inView: cInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: dRef, inView: dInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('./background/background3.jpg')` }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* About Section */}
        <section
          ref={aRef}
          className={`text-center mb-12 border border-white bg-black bg-opacity-50 p-6 rounded-lg transition-opacity duration-1000 ${
            aInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Roadmap</h2>
          {/* <p className="text-lg text-gray-300">
            Welcome to our platform! Here we share all the latest news, partnerships, and much more about our mission.
          </p> */}
        </section>

        {/* Community & Buy $PEOW Section */}
        <section
          ref={bRef}
          className={`flex justify-between mb-12 transition-opacity duration-1000 ${
            bInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-1/2 p-6 border border-white bg-black bg-opacity-50 rounded-lg mr-5">
            <h3 className="text-2xl font-semibold mb-2 text-white">Phase 1</h3>
            <p className="text-gray-300">Join our community and become part of the movement!</p>
          </div>
          <div className="w-1/2 p-6 border border-white bg-black bg-opacity-50 rounded-lg ml-5">
            <h3 className="text-2xl font-semibold mb-2 text-white">Phase 2</h3>
            <p className="text-gray-300">Buy $PEOW now and be a part of our growing ecosystem!</p>
          </div>
        </section>

        {/* Quote and Image Section */}
        <section
          ref={cRef}
          className={`flex justify-between mb-12 transition-opacity duration-1000 ${
            cInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-1/2 p-6 border border-white bg-black bg-opacity-50 rounded-lg mr-5">
            <h3 className="text-2xl font-semibold mb-2 text-white">Phase 3</h3>
            <p className="text-gray-300">Join our community and become part of the movement!</p>
          </div>
          <div className="w-1/2 p-6 border border-white bg-black bg-opacity-50 rounded-lg ml-5">
            <h3 className="text-2xl font-semibold mb-2 text-white">Phase 4</h3>
            <p className="text-gray-300">Buy $PEOW now and be a part of our growing ecosystem!</p>
          </div>
        </section>
        <section
          ref={dRef}
          className={`flex justify-between mb-12 transition-opacity duration-1000 ${
            dInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-1/2 p-6 border border-white bg-black bg-opacity-50 rounded-lg mr-5">
            <h3 className="text-2xl font-semibold mb-2 text-white">Phase 5</h3>
            <p className="text-gray-300">Join our community and become part of the movement!</p>
          </div>
          <div className="w-1/2 p-6 border border-white bg-black bg-opacity-50 rounded-lg ml-5">
            <h3 className="text-2xl font-semibold mb-2 text-white">Phase 6</h3>
            <p className="text-gray-300">Buy $PEOW now and be a part of our growing ecosystem!</p>
          </div>
        </section>
      </div>
    </div>
  );
}
