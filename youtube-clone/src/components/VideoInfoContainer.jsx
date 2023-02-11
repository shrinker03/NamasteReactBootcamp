import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { API_URL } from '../appConstants'
import { setVideoList } from '../slices/videoListSlice';
import VideoInfo from './VideoInfo';

const VideoContainer = () => {  
  const dispatch = useDispatch();
  const videoList = useSelector((state) => state.videoList.videos)
  console.log(videoList, '===>')
  const fetchVids = async () => {
    console.log('im being called???')
     const data = await fetch(API_URL)
     const json = await data.json();
     dispatch(setVideoList(json.items))
  }

  useEffect(() => {
    if(!videoList.length) {
      fetchVids()
    }
  }, []);

  return (
    <div className='grid grid-cols-4 gap-4 p-3'>
        {
          videoList?.map((video) => (
              <Link to={'watch/' + video?.id} key={video.id}>
                <VideoInfo video={video} />
              </Link>
          ))
        }
    </div>
  )
}

export default VideoContainer