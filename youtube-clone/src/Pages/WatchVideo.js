import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { WATCH_VIDEO_INFO_URL } from '../appConstants'
import Comments from '../components/Comments'
import LiveChat from '../components/LiveChat'
import { closeAppBar } from '../slices/appBarSlice'
import { setVideoInfo } from '../slices/watchVideoSlice'

const WatchVideo = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const {videoInfo} = useSelector((state) => state.videoInfo)
    const appBarOpen = useSelector((state) => state.appBar.open)

    const getVideoInfo = async () => {
        const data = await fetch(WATCH_VIDEO_INFO_URL);
        const json = await data.json()
        dispatch(setVideoInfo(json))
        console.log(videoInfo, '==>')
    }

    useEffect(() => {
        dispatch(closeAppBar())
        if(Object.keys(videoInfo).length === 0) {
            getVideoInfo()
        }
    }, [])

  return (
    <div className={`w-[100vw] h-[100vh] ${appBarOpen ? 'py-3' : 'p-7'}`}>
        <div className='flex gap-2'>
            <div className='w-[75%] h-[70vh]'>
                <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/"+params.id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <LiveChat />
        </div>
        <Comments />
    </div>
  )
}

export default WatchVideo