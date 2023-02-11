import React from 'react'
import { SearchIcon } from '../assests'

const SearchBox = () => {
  return (
    <form className='flex flex-1 basis-[1e-9px] justify-center items-center flex-wrap'>
        <input className='border-2 h-[40px] rounded-l-2xl w-[90%] outline-none pl-2' type='text' placeholder='Search' />
        <button className='w-[10%]'>
            <div className='border-2 rounded-r-2xl h-[40px] p-1 bg-gray-100'>
                <SearchIcon />
            </div>
        </button>
    </form>
  )
}

export default SearchBox