import { ReactNode, createContext, useState } from "react";

//1) inital state:
const initialState = {
  darkMode: false,
  toggleDarkMode: () => {},
};

//2) create the context "STORE"
const DarkModeContext = createContext(initialState);

//3) create a wrapper component
export const DarkModeContextWrapper = ({ children } : { children: ReactNode }) => {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark((p) => !p);
    document.body.classList.toggle("dark");
  };

  return (
    <DarkModeContext.Provider value={{ darkMode: dark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
