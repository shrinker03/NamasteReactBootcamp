import React, { useState } from 'react'
import { Team } from '../data';

const SearchBox = ({setData}) => {
  const [search, setSearch] = useState('');

  const filterSearch = (e) => {
    e.preventDefault()
    const newArr = Team?.filter((person) => person.name.toLowerCase().includes(search))
    newArr.length ? setData(newArr) : setData(Team)
  }

  return (
    <div>
      <label className='input-label-search'>Search Member</label>
      <form onSubmit={filterSearch}>
        <input value={search} 
            onChange={(e) => {
                setSearch(e.target.value)
                }} 
            className='input-search' 
        />
        <button className='search-box-button' type='submit'>Search</button>
        </form>
    </div>
  )
}

export default SearchBox