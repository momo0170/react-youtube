import { useState } from 'react';
import { createContext } from 'react';

export const DarkModeContext = createContext();
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={darkMode}>
      {children}
    </DarkModeContext.Provider>
  );
}
