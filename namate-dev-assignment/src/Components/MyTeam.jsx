import React, { useState } from 'react'
import CardContainer from './CardContainer';
import SearchBox from './SearchBox.jsx';
import { Team } from '../data';

const MyTeam = () => {
  const [data, setData] = useState(Team)
  return (
    <div className='container'>
      <div className='header'>
        <div className='header-heading'>Hustlers</div>
        <SearchBox setData={setData} />
      </div>
      <CardContainer Team={data} />
    </div>
  )
}

export default MyTeam