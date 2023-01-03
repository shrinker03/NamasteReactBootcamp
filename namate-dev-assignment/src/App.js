import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
// const Header = lazy(() => import('./Components/Header'));
import Header from './Components/Header';
import ThemeContextProvider from './Contexts/ThemeContextProvider';
// const ThemeContextProvider = lazy(() => import('./Contexts/ThemeContextProvider'));
// import ThemeContextProvider from './Contexts/ThemeContextProvider';

const App = () => {
  return (
    <ThemeContextProvider>
      <Header />
      <Outlet />
    </ThemeContextProvider>
  );
};

export default App;
