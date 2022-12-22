import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext('Dark');

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState('Dark');

  const color = theme === 'Light' ? '#130c2b' : '#EDF5E1';
  const backgroundColor = theme === 'Light' ? '#EDF5E1' : '#130c2b';

  const toggleTheme = () => {
    setTheme(theme === 'Light' ? 'Dark' : 'Light');
  };

  useEffect(() => {
    document.body.style.color = color;
    document.body.style.backgroundColor = backgroundColor;
  }, [theme]);

  const value = [theme, toggleTheme];
  return <ThemeContext.Provider value={value} {...props} />;
};

export default ThemeContextProvider;
