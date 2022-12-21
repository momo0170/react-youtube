import { useState } from 'react';
import { createContext } from 'react';

export const darkModeContext = createContext();
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    changeMode(!darkMode);
  };
  return (
    <darkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
}

function changeMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark'); // dark 클래스 추가
  } else {
    document.documentElement.classList.remove('dark'); // dark 클래스 삭제
  }
}
