"use client"
import { useEffect, useState } from 'react';
import './style.css'

export function HomeSection(){
    const [emotes, setEmotes] = useState<{ id: number; emote: string; left: number; top: number; animationDuration: number }[]>([]);

    // Generate a random emote every second
    useEffect(() => {
        const emoteArray = ["🔫"];
        const generateEmote = () => {
            const newEmote = {
                id: Date.now(),
                emote: emoteArray[Math.floor(Math.random() * emoteArray.length)],
                left: Math.random() * 100, // Random left position between 0% and 100%
                top: Math.random() * 100, // Random top position between 0% and 100%
                animationDuration: Math.random() * 3 + 2, // Random duration between 2s and 5s
            };
            setEmotes((prevEmotes) => [...prevEmotes, newEmote]);

            // Remove emotes after 5 seconds (animation duration)
            setTimeout(() => {
                setEmotes((prevEmotes) => prevEmotes.filter((e) => e.id !== newEmote.id));
            }, 5000);
        };

        const interval = setInterval(generateEmote, 1000); // Generate emotes every 1 second
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className="relative min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: `url('./background/background1.jpg')` }}
            id='home'
        >
            {/* Main Content */}
            <main className="flex flex-col items-center justify-center text-center text-white px-4 fade-in">
                {/* Title */}
                <h1 className="text-6xl font-bold mb-4">$PEOW Token</h1>
                <h2 className="text-4xl font-semibold mb-8">BUY NOW</h2>

                {/* Desktop Buttons */}
                <div className="hidden md:flex space-x-4">
                    <button className="bg-[#ff00ec] hover:bg-[#b43ab2] text-white font-bold py-2 px-6 rounded-lg">BUY NOW <span>💰</span></button>
                    <button className="bg-[#ff00ec] hover:bg-[#b43ab2] text-white font-bold py-2 px-6 rounded-lg">CHART 📊</button>
                </div>

                {/* Mobile Links - Visible on smaller screens */}
                <div className="flex flex-col space-y-4 mt-6 md:hidden text-2xl">
                    <h3 className="text-2xl font-bold underline">Useful Links:</h3>
                    <div className="grid grid-cols-2 gap-4 mt-6 md:hidden">
                        <button className="bg-[#ff00ec] hover:bg-[#cc00ff] text-white font-bold py-2 px-6 rounded-lg flex justify-between items-center">
                            Buy <span>💰</span>
                        </button>
                        <button className="bg-[#ff00ec] hover:bg-[#b43ab2] text-white font-bold py-2 px-6 rounded-lg flex justify-between items-center">
                            Chart <span>📊</span>
                        </button>
                        <button className="bg-[#ff00ec] hover:bg-[#b43ab2] text-white font-bold py-2 px-6 rounded-lg flex justify-between items-center">
                            Twitter <span>        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" fill="white">
          <path d="M23.643 4.937a9.727 9.727 0 0 1-2.828.775 4.926 4.926 0 0 0 2.165-2.717 9.747 9.747 0 0 1-3.103 1.184 4.904 4.904 0 0 0-8.372 4.47A13.925 13.925 0 0 1 1.671 3.149a4.904 4.904 0 0 0 1.516 6.544 4.868 4.868 0 0 1-2.22-.616v.061a4.906 4.906 0 0 0 3.933 4.808 4.9 4.9 0 0 1-2.212.084 4.906 4.906 0 0 0 4.587 3.413A9.824 9.824 0 0 1 1.2 19.293a13.816 13.816 0 0 0 7.548 2.213c9.055 0 14.01-7.496 14.01-13.985 0-.21-.004-.42-.013-.63a9.936 9.936 0 0 0 2.438-2.546z" />
        </svg></span>
                        </button>
                        <button className="bg-[#ff00ec] hover:bg-[#b43ab2] text-white font-bold py-2 px-6 rounded-lg flex justify-between items-center">
                            Telegram <span>        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="20" fill="white">
          <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
        </svg></span>
                        </button>
                    </div>
                    <button className="bg-[#ff00ec] hover:bg-[#b43ab2] text-white font-bold py-2 px-6 rounded-lg flex justify-between items-center">
                        Solscan <span>⛓️</span>
                    </button>
                </div>
            </main>

            {/* Raining Emotes */}
            {emotes.map((emote) => (
                <span
                    key={emote.id}
                    className="raining-emote"
                    style={{
                        left: `${emote.left}%`,
                        top: `${emote.top}%`,
                        animationDuration: `${emote.animationDuration}s`,
                    }}
                >
                    {emote.emote}
                </span>
            ))}
            {/* Scroll Down Indicator */}
            <div className="scroll-indicator" onClick={scrollToAbout}>
                <span className="arrow fire">&#x2193;</span>
            </div>
        </div>
    );
}
