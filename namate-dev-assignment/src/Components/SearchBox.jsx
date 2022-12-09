import React, { useState } from 'react';

const SearchBox = ({ setFilteredData, data }) => {
  const [search, setSearch] = useState('');

  const filterSearch = (e) => {
    e.preventDefault();
    const newArr = data?.filter(
      (person) =>
        person?.login?.toLowerCase().includes(search?.toLowerCase()) ||
        person?.name?.toLowerCase().includes(search?.toLowerCase())
    );
    setFilteredData(newArr);
  };

  return (
    <div>
      <label className="input-label-search">Search Member</label>
      <form onSubmit={filterSearch}>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="input-search"
        />
        <button className="search-box-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
