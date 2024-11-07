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
        >
            {/* Main Content */}
            <main className="flex flex-col items-center justify-center text-center text-white px-4 fade-in">
                {/* Title */}
                <h1 className="text-6xl font-bold mb-4">$PEOW Token</h1>
                <h2 className="text-4xl font-semibold mb-8">BUY NOW</h2>

                {/* Desktop Buttons */}
                <div className="hidden md:flex space-x-4">
                    <button className="bg-[#ff00ec] hover:bg-[#b43ab2] text-white font-bold py-2 px-6 rounded-lg">BUY NOW</button>
                    <button className="bg-[#ff00ec] hover:bg-[#b43ab2] text-white font-bold py-2 px-6 rounded-lg">CHART 📊</button>
                </div>

                {/* Mobile Links - Visible on smaller screens */}
                <div className="flex flex-col space-y-4 mt-6 md:hidden">
                    <h3 className="text-2xl font-bold underline">Useful Links:</h3>
                    <div className="grid grid-cols-2 gap-4 mt-6 md:hidden">
                        <button className="bg-[#ff00ec] hover:bg-[#cc00ff] text-white font-bold py-2 px-6 rounded-lg flex justify-between items-center">
                            Buy <span>💰</span>
                        </button>
                        <button className="bg-[#ff00ec] hover:bg-[#b43ab2] text-white font-bold py-2 px-6 rounded-lg flex justify-between items-center">
                            Chart <span>📊</span>
                        </button>
                        <button className="bg-[#ff00ec] hover:bg-[#b43ab2] text-white font-bold py-2 px-6 rounded-lg flex justify-between items-center">
                            Twitter <span>🐦</span>
                        </button>
                        <button className="bg-[#ff00ec] hover:bg-[#b43ab2] text-white font-bold py-2 px-6 rounded-lg flex justify-between items-center">
                            Telegram <span>📨</span>
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
