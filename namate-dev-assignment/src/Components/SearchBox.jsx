import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../Contexts/ThemeContextProvider';
import useFilterHook from '../Hooks/useFilterHook';

const SearchBox = ({ setFilteredData, data, getTeamMembers }) => {
  const [theme] = useContext(ThemeContext);
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
      <label className="font-normal text-lg">Search Member</label>
      <form onSubmit={filterSearch}>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className={`h-10 w-64 rounded-md pl-2 ${
            theme === 'Light'
              ? 'bg-lightHeaderBgColor text-lightHeaderColor'
              : 'bg-darkHeaderBgColor text-darkHeaderColor'
          }`}
        />
        <button
          className={`w-20 h-10 ml-1 cursor-pointer rounded-md ${
            theme === 'Light'
              ? 'bg-lightHeaderBgColor text-lightHeaderColor'
              : 'bg-darkHeaderBgColor text-darkHeaderColor'
          }`}
          type="submit">
          Search
        </button>
        <label className="search-label">Filter by city:</label>
        <select
          className="search-filter"
          onChange={(e) => {
            setCity(e.target.value);
            setShowGetTeamButton(true);
          }}>
          {Array.from(
            new Set(data?.map((item) => item?.location?.toLowerCase().split(', ')[0]))
          ).map((city) => {
            if (city) {
              return (
                <option value={city} key={data.id}>
                  {city.toUpperCase()}
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
