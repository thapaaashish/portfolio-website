import React, { useState, useEffect } from "react";
import { useTheme } from "./theme";

const BackgroundParticles = ({ children }) => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      {/* Original Animated Background Elements - Enhanced */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 dark:bg-blue-300/30 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/15 dark:bg-indigo-300/25 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/10 dark:bg-purple-300/20 rounded-full blur-3xl animate-ping" />

        {/* NEW: Additional floating orbs */}
        <div
          className="absolute top-3/4 left-1/3 w-48 h-48 bg-emerald-400/15 dark:bg-emerald-300/25 rounded-full blur-2xl animate-pulse delay-2000"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${
              mousePosition.y * 0.5
            }px)`,
            transition: "transform 0.7s ease-out",
          }}
        />
        <div
          className="absolute top-1/6 right-1/3 w-56 h-56 bg-pink-400/12 dark:bg-pink-300/22 rounded-full blur-3xl animate-pulse delay-3000"
          style={{
            transform: `translate(${-mousePosition.x * 0.3}px, ${
              mousePosition.y * 0.8
            }px)`,
            transition: "transform 0.6s ease-out",
          }}
        />
      </div>

      {/* Original Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* NEW: Subtle animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none animate-pulse opacity-40" />

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Original 8 particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-700 dark:bg-blue-300 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* NEW: Additional variety particles */}
        {[...Array(2)].map((_, i) => (
          <div
            key={`extra-${i}`}
            className="absolute w-1 h-1 bg-indigo-600 dark:bg-indigo-300 rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 6}s`,
            }}
          />
        ))}

        {/* NEW: Larger accent particles */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`accent-${i}`}
            className="absolute w-3 h-3 bg-purple-500/60 dark:bg-purple-300/80 rounded-full animate-float-reverse blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* NEW: Subtle shooting stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white dark:bg-blue-200 rounded-full opacity-70 animate-shooting-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 8}s`,
              animationDuration: `16s`,
            }}
          />
        ))}
      </div>

      {/* NEW: Mouse interaction ripple */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle 200px at ${
            50 + mousePosition.x * 2
          }% ${
            50 + mousePosition.y * 2
          }%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)`,
          transition: "background 0.4s ease-out",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) translateX(5px) rotate(90deg);
          }
          50% {
            transform: translateY(-5px) translateX(-5px) rotate(180deg);
          }
          75% {
            transform: translateY(-15px) translateX(3px) rotate(270deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(15px) rotate(-180deg) scale(1.2);
          }
        }

        @keyframes shooting-star {
          0% {
            transform: translateX(-100px) translateY(0px) rotate(-30deg)
              scaleX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateX(-20px) translateY(10px) rotate(-30deg)
              scaleX(20);
          }
          90% {
            opacity: 1;
            transform: translateX(calc(100vw + 20px)) translateY(-30px)
              rotate(-30deg) scaleX(20);
          }
          100% {
            opacity: 0;
            transform: translateX(calc(100vw + 100px)) translateY(-40px)
              rotate(-30deg) scaleX(0);
          }
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 12s ease-in-out infinite;
        }

        .animate-shooting-star {
          animation: shooting-star 16s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BackgroundParticles;
