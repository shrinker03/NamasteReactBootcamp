import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { getIn } from '../Redux/Slices/userInfoSlice';

const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleClick = () => {
    dispatch(getIn({ name, email }));
    navigate('/mates');
  };

  return (
    <div className="bg-landing-page h-screen w-full">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="text-6xl w-full font-caveat font-bold text-darkHeaderBgColor flex justify-center items-center">
          Namaste React Bootcamp
        </div>
        <div className="w-3/12 opacity-80 m-9 h-96 rounded-lg bg-landingPageButton text-darkHeaderColor">
          <div className="p-10 flex justify-center gap-3 flex-col">
            <label>Name</label>
            <input
              className="p-2 rounded-sm text-lightHeaderColor"
              type="text"
              placeholder="John"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              placeholder="john@doe.com"
              className="p-2 rounded-sm text-lightHeaderColor"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleClick}
              className="mt-4 p-2 font-caveat text-lg w-40 h-12 text-darkHeaderColor bg-lightHeaderBgColor rounded-lg transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ...">
              Get in..
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
