import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../Contexts/ThemeContextProvider';
import { logOut } from '../Redux/Slices/userInfoSlice';
import DarkIconSVG from './DarkIconSVG';
import LightIconSVG from './LightIconSVG';

const Header = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const handleLogIn = () => {
    navigate('/');
  };

  return (
    <div
      className={`flex items-center justify-between h-20 ${
        theme === 'Light'
          ? 'bg-lightHeaderBgColor text-lightHeaderColor'
          : 'bg-darkHeaderBgColor text-darkHeaderColor'
      }`}>
      <div className="text-2xl pl-2 font-bold">
        <Link className="header-link" to="/mates">
          Hustlers
        </Link>
      </div>
      <div className="flex justify-end items-center w-1/2">
        <div className="mr-4">
          {userInfo.name && 'Hii,'} {userInfo.name} {userInfo.email}
        </div>
        {userInfo.name ? (
          <div className="mr-8">
            <button onClick={handleLogout} className="rounded-sm border-2 w-20 h-10">
              LogOut
            </button>
          </div>
        ) : (
          <div className="mr-8">
            <button onClick={handleLogIn} className="rounded-sm border-2 w-20 h-10">
              LogIn
            </button>
          </div>
        )}
        <div className="theme-button" onClick={toggleTheme}>
          {theme === 'Light' ? <LightIconSVG /> : <DarkIconSVG />}
        </div>
      </div>
    </div>
  );
};

export default Header;
