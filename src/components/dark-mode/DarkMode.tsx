import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

const DarkMode: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check the current theme from local storage or default to system preference
    const currentTheme = localStorage.getItem("theme");
    if (
      currentTheme === "dark" ||
      (!currentTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Switch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none ${
        isDarkMode ? 'bg-gray-400' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block w-6 h-6 transform dark:bg-white bg-yellow-500 rounded-full transition-transform duration-300 ${
          isDarkMode ? 'translate-x-5' : 'translate-x-0'
        }`}
      >
        {!isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute inset-0 m-auto"
          >
            <circle cx="12" cy="12" r="5" fill="#FFFFFF" />
            <g stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="1" x2="12" y2="5" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="1" y1="12" x2="5" y2="12" />
              <line x1="19" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
              <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
              <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
              <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute inset-0 m-auto"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c1.849 0 3.581-.504 5.066-1.378a10.003 10.003 0 0 1-6.29-12.588A9.964 9.964 0 0 0 12 2z"
              fill="black"
            />
          </svg>
        )}
      </span>
    </Switch>
  );
};

export default DarkMode;
