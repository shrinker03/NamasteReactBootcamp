import React from 'react';
import NotFoundGIF from '../../public/assets/NotFoundGIF.gif';

const NotFoundComponent = () => {
  return (
    <div className="div-not-found-img">
      <img className="not-found-img" src={NotFoundGIF} alt="not-found" />
    </div>
  );
};

export default NotFoundComponent;
