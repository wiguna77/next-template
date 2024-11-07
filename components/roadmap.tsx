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
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-xl lg:text-3xl md:text:2xl"
      style={{ backgroundImage: `url('./background/background3.jpg')` }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* About Section */}
        <section
          ref={aRef}
          className={`text-center mb-12 border border-white bg-black bg-opacity-50 p-6 rounded-lg transition-opacity duration-1000 ${aInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Roadmap</h2>
        </section>

        {/* Community & Buy $PEOW Section */}
        <section
          ref={bRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 mb-12 transition-opacity duration-1000 ${bInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="p-6 border border-white bg-black bg-opacity-50 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2 text-white">Phase 1</h3>
            <div className="text-gray-300">
              <ul className="list-inside">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  Engage with the community via social media.
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  Participate in giveaways and promotions.
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 border border-white bg-black bg-opacity-50 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2 text-white">Phase 2</h3>
            <div className="text-gray-300">
              <ul className="list-inside">

                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  Hold and stake $PEOW for rewards.
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  Access exclusive early bird bonuses.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quote and Image Section */}
        <section
          ref={cRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 mb-12 transition-opacity duration-1000 ${cInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="p-6 border border-white bg-black bg-opacity-50 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2 text-white">Phase 3</h3>
            <div className="text-gray-300">
              <ul className="list-inside">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  Expansion to new platforms.
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  Listing on multiple exchanges.
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 border border-white bg-black bg-opacity-50 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2 text-white">Phase 4</h3>
            <div className="text-gray-300">
              <ul className="list-inside">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  Launch the staking platform.
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  Initiate partnership collaborations.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          ref={dRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 mb-12 transition-opacity duration-1000 ${dInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="p-6 border border-white bg-black bg-opacity-50 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2 text-white">Phase 5</h3>
            <div className="text-gray-300">
              <ul className="list-inside">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  Expand to international markets.
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  Integrate with DeFi platforms.
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 border border-white bg-black bg-opacity-50 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2 text-white">Phase 6</h3>
            <div className="text-gray-300">
              <ul className="list-inside">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  Full ecosystem launch.
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" disabled />
                  Complete integration with partners.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
