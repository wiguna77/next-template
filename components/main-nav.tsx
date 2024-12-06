"use client"
import { useState } from 'react';

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4 flex items-center justify-between">
      {/* Logo / Home Link */}
      <div className="text-white text-xl font-bold">
        $PEOW
      </div>

      {/* Menu Links */}
      <div className="hidden md:flex space-x-6">
        <a href="#home" className="text-white hover:text-gray-300">HOME</a>
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
        {/* Icon: you can use any icon component here */}
        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
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
    </nav>
  );
}
