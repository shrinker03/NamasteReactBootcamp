import React from 'react'
import UserInfo from './UserInfo';

const VideoInfo = ({video}) => {
    const {snippet, statistics} = video;
  return (
    <div className='flex flex-col mb-8'>
        <div className='relative h-48 md:h-[171px] md:rounded-xl overflow-hidden'>
          <img className='h-full w-full object-cover' src={snippet?.thumbnails?.high?.url} alt="" />
        </div>
        <div className='grid grid-flow-col mt-1'>
          <div className='col-span-2 p-2'>
            <span className='text-sm font-medium'><UserInfo /></span>
          </div>
          <div className='col-span-10 py-2 text-start'>
            <span className='text-sm font-medium flex justify-start'>{snippet?.title}</span>
            <div className='text-gray-600 mt-1'>
              {snippet?.channelTitle}
              <div>{statistics?.viewCount}</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default VideoInfo