import { useState } from 'react';
import { createContext } from 'react';

export const darkModeContext = createContext();
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <darkModeContext.Provider value={(darkMode, toggleDarkMode)}>
      {children}
    </darkModeContext.Provider>
  );
}

function changeMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  }
}
