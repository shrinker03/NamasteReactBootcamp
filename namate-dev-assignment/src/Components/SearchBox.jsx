import React, { useEffect, useState } from 'react';
import useFilterHook from '../Hooks/useFilterHook';

const SearchBox = ({ setFilteredData, data, getTeamMembers }) => {
  const [search, setSearch] = useState('');
  const [showGetTeamButton, setShowGetTeamButton] = useState(false);
  const [city, setCity] = useState('');

  const filterSearch = (e) => {
    e.preventDefault();
    // const newArr = data?.filter(
    //   (person) =>
    //     search == '' ||
    //     person?.name?.trim().toLowerCase().includes(search?.trim().toLowerCase()) ||
    //     person?.login?.trim().toLowerCase().includes(search?.trim().toLowerCase())
    // );
    // const latestarr = [];
    // for (let i = 0; i < data.length; i += 1) {
    //   if (data[i]?.name?.trim().toLowerCase().includes(search?.trim().toLowerCase())) {
    //     latestarr.push(data[i]);
    //   }
    // }
    const resultArr = useFilterHook(search, 'name', data);
    setFilteredData(resultArr);
    setSearch('');
    setShowGetTeamButton(true);
  };

  const filterByCity = () => {
    // const latestarr = [];
    // for (let i = 0; i < data.length; i += 1) {
    //   if (data[i]?.location?.trim().toLowerCase().includes(city?.trim().toLowerCase())) {
    //     latestarr.push(data[i]);
    //   }
    // }
    const resultArr = useFilterHook(city, 'location', data);
    setFilteredData(resultArr);
  };

  useEffect(() => {
    filterByCity();
  }, [city]);

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
        <label className="search-label">Filter by city:</label>
        <select
          className="search-filter"
          onChange={(e) => {
            setCity(e.target.value);
            setShowGetTeamButton(true);
          }}>
          {data?.map((data) => {
            if (data.location) {
              return (
                <option value={data.location} key={data.id}>
                  {data.location}
                </option>
              );
            }
          })}
        </select>
        {showGetTeamButton && (
          <button
            onClick={() => {
              getTeamMembers();
              setShowGetTeamButton(false);
            }}
            className="search-box-button-get-team"
            type="submit">
            Get All Team Mates
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBox;
