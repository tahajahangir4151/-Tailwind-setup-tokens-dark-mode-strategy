"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");

    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <div className="min-h-screen bg-primary dark:bg-black p-6">
      <button
        onClick={toggleTheme}
        className="mt-4 p-2 bg-black text-white dark:bg-white dark:text-black rounded"
      >
        Toggle Theme
      </button>
      <h1 className="text-3xl font-bold underline  p-md rounded-container text-white">
        Hello world!
      </h1>
    </div>
  );
}
