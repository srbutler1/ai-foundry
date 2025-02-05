import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const EventPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-black/90 border border-red-900/50 backdrop-blur-md p-8 rounded-lg max-w-5xl w-full text-white">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side: Event Information */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
              Join Us for Our First Event!
            </h2>
            
            <h3 className="text-xl text-red-500 mb-4">
              Is DeepSeek the Next Big Thing?
            </h3>
            
            <p className="text-zinc-300 mb-4">
              We're excited to announce our inaugural event at the Arkansas AI Foundry! Join us for an introduction to the foundry and an exploration of DeepSeek's potential in the AI landscape.
            </p>
            
            <div className="bg-black/40 border border-red-900/50 p-4 rounded-lg mb-6">
              <p className="text-zinc-300">
                <strong>Date:</strong> February 13th<br />
                <strong>Location:</strong> Reynolds Center - 120, 145 N Buchanan Ave Fayetteville, AR 72701<br />
                <strong>Time:</strong> 6 PM
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSekIZCNIuUeLjcsTo_zOJBj3Yd0a8ciuLTX_akmv1rlxD3tkg/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full"
              >
                <button
                  className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
                >
                  I'll Be There!
                </button>
              </a>
              
              <a
                href="https://groupme.com/join_group/105347053/9oA8jhjn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full"
              >
                <button
                  className="w-full bg-black/40 border border-red-900/50 hover:border-red-500/50 text-white font-bold py-2 px-4 rounded transition-all duration-300"
                >
                  Join Our GroupMe
                </button>
              </a>
            </div>
          </div>

          {/* Right side: Flyer Image */}
          <div className="flex-1">
            <img 
              src="/images/deepseek-event-flyer.png" 
              alt="DeepSeek Event Flyer" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;
