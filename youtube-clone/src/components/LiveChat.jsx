import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generateName } from '../helper'
import { setChatItem } from '../slices/liveChatSlice'

const LiveChat = () => {
  const {chats} = useSelector(state => state.liveChat)
  const dispatch = useDispatch()

  const [chat, setChat] = useState();

  useEffect(() => {
    const chat = setTimeout(() => {
        dispatch(setChatItem({id:generateName()+generateName(), name: generateName(), msg: generateName()}))
    }, 1000)
    return () => clearTimeout(chat)
  })

  console.log(chats)
  return (
    <div className='border border-violet-500 w-[25%] h-[70vh]'>
        <div className='w-[100%] border border-violet-400 p-2'>Live Chats</div>
        <div className='flex flex-col-reverse h-[80%] overflow-y-auto'>
            {chats?.map((chat) => (
                <div key={chat?.id}>{chat.name}: {chat.msg}</div>
            ))}
        </div>
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(setChatItem({id: generateName()+generateName(), name: 'You', msg: chat}))
                setChat('')
            }}>
                <input className='w-[100%] h-8 mt-2 border-violet-500' value={chat} onChange={(e) => setChat(e.target.value)} placeholder="Type.." />
            </form>
        </div>
    </div>
  )
}

export default LiveChat