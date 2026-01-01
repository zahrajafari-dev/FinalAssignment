"use client"
import { useEffect, useState } from "react";
import { Home } from "lucide-react";

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000);

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-700 ${
        isFadingOut ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      {/* Multi-color animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-cyan-500/20 animate-pulse"
        style={{ animationDuration: "3s" }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-tl from-cyan-500/25 via-violet-500/15 to-indigo-500/20 animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "0.5s" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 via-indigo-500/15 to-cyan-500/20 animate-pulse"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
      </div>

      {/* Floating gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse opacity-50"
        style={{ animationDuration: "3s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse opacity-50"
        style={{ animationDuration: "4s", animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-violet-500/25 rounded-full blur-3xl animate-pulse opacity-40"
        style={{ animationDuration: "5s", animationDelay: "0.7s" }}
      />

      {/* Main content */}
      <div className="relative flex flex-col items-center gap-8 px-4">
        {/* Home icon with glowing ring effect */}
        <div className="relative">
          {/* Outer glowing rings */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 via-violet-500/40 to-cyan-500/40 rounded-full blur-3xl animate-pulse scale-150"
            style={{ animationDuration: "2s" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-tr from-cyan-500/50 via-violet-500/50 to-indigo-500/50 rounded-full blur-2xl animate-pulse scale-125"
            style={{ animationDuration: "2.5s", animationDelay: "0.3s" }}
          />

          {/* Icon container with inner glow */}
          <div className="relative bg-background/90 backdrop-blur-xl rounded-full p-10 sm:p-12 shadow-2xl border border-violet-500/30 animate-scale-in">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-cyan-500/20 rounded-full blur-xl" />

            <Home
              className="relative w-16 h-16 sm:w-20 sm:h-20 text-violet-500 animate-pulse drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]"
              strokeWidth={1.5}
              style={{ animationDuration: "2s" }}
            />
          </div>
        </div>

        {/* Tagline */}
        {/* <p
          className="text-center text-foreground/90 text-lg sm:text-xl font-medium tracking-wide animate-fade-in max-w-md"
          style={{ animationDelay: "300ms", animationDuration: "1s" }}
        >
          Connecting You to Trusted Local Services
        </p> */}
      </div>
    </div>
  );
};

export default SplashScreen;

