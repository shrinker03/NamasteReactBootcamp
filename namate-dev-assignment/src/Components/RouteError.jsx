import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorIllustaration from '../../public/assets/ErrorPageGIF.gif';

const RouteError = () => {
  const navigate = useNavigate();
  return (
    <div className="route-error">
      <img className="page-not-found-gif" src={ErrorIllustaration} alt="Page-not-found-gif" />
      <button className="go-back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default RouteError;
