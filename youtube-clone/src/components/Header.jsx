import React from 'react'
import { AppBarLogo, YoutubeLogo } from '../assests'
import SearchBox from './SearchBox'
import UserInfo from './UserInfo'
import { useDispatch } from 'react-redux'
import { toggleAppBar } from '../slices/appBarSlice'
import { Link } from 'react-router-dom'

const Header = () => {
    const dispatch = useDispatch();
  return (
    <header className='h-[56px] px-[16px] flex flex-row items-center justify-between'>
        <div className='flex'>
            <div onClick={() => dispatch(toggleAppBar())} className='w-[40px] h-[40px] p-[8px] cursor-pointer'>
                <AppBarLogo />
            </div>
            <div className='w-[90px] h-[40px] ml-[14px]'>
                <Link to='/'><YoutubeLogo /></Link>
            </div>
        </div>
        <div className='flex flex-grow-0 flex-shrink-1 basis-[550px] justify-center'>
            <SearchBox />
        </div>
        <div className='flex flex-grow-0 flex-shrink-1 basis-[60px] justify-center'>
            <UserInfo />
        </div>
    </header>
  )
}

export default Header