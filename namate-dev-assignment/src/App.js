import React, { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
const Header = lazy(() => import('./Components/Header'));
const ThemeContextProvider = lazy(() => import('./Contexts/ThemeContextProvider'));
// import ThemeContextProvider from './Contexts/ThemeContextProvider';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeContextProvider>
        <Header />
        <Outlet />
      </ThemeContextProvider>
    </Suspense>
  );
};

export default App;
