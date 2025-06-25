import React, { useState } from "react";

const Logo = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative group cursor-pointer select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main text with multiple animation layers */}
      <div className="relative">
        {/* Background glow text (for glow effect) */}
        <span className="absolute inset-0 text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent opacity-0 group-hover:opacity-70 transition-all duration-500 blur-sm scale-110">
          AT
        </span>

        {/* Main visible text */}
        <span className="relative text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-500 transform group-hover:scale-105">
          AT
        </span>

        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-clip-text text-transparent animate-pulse">
          <span className="text-2xl font-bold tracking-tight">AT</span>
        </div>
      </div>

      {/* Floating particles around text */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top right particle */}
        <div className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-ping"></div>

        {/* Bottom left particle */}
        <div className="absolute -bottom-1 -left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse"></div>

        {/* Side particles */}
        <div className="absolute top-1/2 -right-3 w-0.5 h-0.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce"></div>
        <div className="absolute top-1/2 -left-3 w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400 group-hover:animate-pulse"></div>
      </div>

      {/* Underline animation */}
      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full"></div>

      {/* Letter individual animations */}
      <style jsx>{`
        @keyframes letterBounce1 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes letterBounce2 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        .group:hover .letter-1 {
          animation: letterBounce1 0.6s ease-in-out;
        }

        .group:hover .letter-2 {
          animation: letterBounce2 0.6s ease-in-out 0.1s;
        }
      `}</style>

      {/* Individual letter animations (overlay) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-2xl font-bold tracking-tight text-transparent">
          <span className="letter-1 inline-block">A</span>
          <span className="letter-2 inline-block">T</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;
