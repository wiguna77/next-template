"use client"
import React from 'react';

export function RoadMap() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
    >
      {/* Centered Image */}
      <div className="flex items-center justify-center text-center">
        <img 
          src="./background/roadmap.jpeg" 
          alt="Roadmap" 
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
