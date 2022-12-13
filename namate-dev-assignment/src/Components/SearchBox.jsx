import React, { useState } from 'react';

const SearchBox = ({ setFilteredData, data }) => {
  const [search, setSearch] = useState('');

  const filterSearch = (e) => {
    e.preventDefault();
    // const newArr = data?.filter(
    //   (person) =>
    //     search == '' ||
    //     person?.name?.trim().toLowerCase().includes(search?.trim().toLowerCase()) ||
    //     person?.login?.trim().toLowerCase().includes(search?.trim().toLowerCase())
    // );
    const latestarr = [];
    for (let i = 0; i < data.length; i += 1) {
      if (
        search === '' ||
        data[i]?.name?.trim().toLowerCase().includes(search?.trim().toLowerCase())
      ) {
        latestarr.push(data[i]);
      }
    }
    setFilteredData(latestarr);
  };

  return (
    <div className="search-box">
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
