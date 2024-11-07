"use client";
import { useState, useEffect } from 'react';
import './style.css'; // Add your custom CSS for styling

export function LastPage() {
  return (
    <>
      {/* Main Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: 'url("/background/background4.jpg")' }} // Make sure the image path is correct
      >
        <div className="flex items-center justify-center h-screen ">
            <div className="text-center text-white p-6 md:p-12 bg-black bg-opacity-50">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                SO, WHAT ARE YOU WAITING FOR?
                </h1>
                <div className="flex justify-center items-center">
                <a
                    href="https://t.me/peowsolana" // Replace with your Telegram link
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="bg-[#ff00ec] hover:bg-[#b43ab2] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-3 text-lg">
                    Join us
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 12h-6M12 6h6m-6 12h6M4 12h6m-6 0l8-8m-8 8l8 8"
                        />
                    </svg>
                    </button>
                </a>
                </div>
            </div>
            </div>

      </section>

      {/* Footer Section */}
      <footer className="bg-[#ff00ec] text-white py-3">
        <div className="max-w-7xl mx-auto text-center px-3">
          <h3 className="text-3xl font-bold mb-4">PEOW</h3>
          <p className="text-xl">
            PEOW is your gateway to the next level. Join us now and experience
            the power of the community. Be part of something great and start
            your journey with us today!
          </p>
        </div>
      </footer>
    </>
  );
}
