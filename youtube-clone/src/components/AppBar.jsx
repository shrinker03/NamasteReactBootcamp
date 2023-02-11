import React from 'react'
import { HistoryIcon, HomeIcon, LibraryIcon, ShortsIcon, SubscriptionIcon, WatchLaterIcon, YourVideosIcon } from '../assests'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const categories = [
    {
        label: 'Home', 
        icon: <HomeIcon />, 
        path: '/'
    }, 
    {
        label: 'Shorts', 
        icon: <ShortsIcon />, 
        path: '/shorts'
    }, 
    {
        label: 'Subscription',
        icon: <SubscriptionIcon />,
        path: '/subscription'
    }, 
    {
        label: 'Library',
        icon: <LibraryIcon />,
        path: '/library'
    }, 
    {
        label: 'History',
        icon: <HistoryIcon />,
        path: '/history'
    }, 
    {
        label: 'Your Videos',
        icon: <YourVideosIcon />,
        path: '/yourvideos'
    }, 
    {
        label: 'Watch Later',
        icon: <WatchLaterIcon />,
        path: '/watchlater'
    }
]

const AppBar = () => {
    const location = useLocation();
    const appBarOpen = useSelector((state) => state.appBar.open);
  return (
    <div className={!appBarOpen && location.pathname.split('/')[1] === 'watch' ? 'hidden' : 'grid col-span-3 h-[50vh]'}>
        {categories.map((category) => 
            <Link to={category.path} key={category.label}>
                <div className={`mt-2 ${appBarOpen ? 'w-[210px]' : 'w-[50px]'} ml-[10px] pl-[10px] rounded-lg flex items-center ${category.path === location.pathname && 'bg-gray-100 py-[6px]'}`}>
                    <div className='w-[30px] h-[30px] p-[2px]'>{category.icon}</div>
                    {appBarOpen && (
                        <div className={`px-[20px] ${category.path === location.pathname && 'font-medium'}`}>{category.label}</div>
                    )}
                </div>
                {appBarOpen && category.label === 'Subscription' && (
                    <hr className='w-[200px] m-5' />
                )}
            </Link>
        )}
    </div>
  )
}

export default AppBar