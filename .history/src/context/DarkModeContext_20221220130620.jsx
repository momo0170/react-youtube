import { useState } from 'react';
import { createContext } from 'react';

export const DarkModeContext = createContext();
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <DarkModeContext.Provider value={darkMode}>
      {children}
    </DarkModeContext.Provider>
  );
}

function changeMode = (darkMode) => {
  if(darkMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}