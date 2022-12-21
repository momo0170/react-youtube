import { useState } from 'react';
import { createContext } from 'react';

export const DarkModeContext = createContext();
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <DarkModeContext.Provider value={darkMode}>
      {children}
    </DarkModeContext.Provider>
  );
}
