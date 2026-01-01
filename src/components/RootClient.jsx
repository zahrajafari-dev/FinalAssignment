"use client";
import { useState } from "react";
import SplashScreen from "./SplashScreen";

export default function RootClient({ children }) {
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("hasSeenSplash");
    }
    return false; // SSR fallback
  });

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem("hasSeenSplash", "true");
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {!showSplash && children}
    </>
  );
}
