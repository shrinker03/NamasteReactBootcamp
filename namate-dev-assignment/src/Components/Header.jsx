import React from 'react';
import SearchBox from './SearchBox';

const Header = ({ githubData, setFilteredData }) => {
  return (
    <div className="header">
      <div className="header-heading">Hustlers</div>
      <SearchBox data={githubData} setFilteredData={setFilteredData} />
    </div>
  );
};

export default Header;
