import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header-heading">
        <Link className="header-link" to="/">
          Hustlers
        </Link>
      </div>
    </div>
  );
};

export default Header;
