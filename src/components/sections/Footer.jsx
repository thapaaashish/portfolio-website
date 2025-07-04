import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 py-6 border-t border-gray-200 dark:border-gray-800 relative z-10 overflow-hidden quicksand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Gradient Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/10 via-purple-100/10 to-pink-100/10 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 animate-gradient-shift will-change-[background-position]"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div
            className="absolute w-1.5 h-1.5 bg-blue-300/60 dark:bg-blue-400/60 rounded-full animate-float-1"
            style={{
              top: "20%",
              left: "10%",
              transform: "translate3d(0, 0, 0)",
            }}
          ></div>
          <div
            className="absolute w-1 h-1 bg-purple-300/60 dark:bg-purple-500/60 rounded-full animate-float-2"
            style={{
              top: "60%",
              right: "15%",
              transform: "translate3d(0, 0, 0)",
            }}
          ></div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="relative group inline-block">
              <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Aashish Thapa
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(0, -15px, 0) rotate(180deg);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(0, -10px, 0) rotate(-180deg);
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 15s ease-in-out infinite;
          background-size: 200% 200%;
        }

        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 8s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
