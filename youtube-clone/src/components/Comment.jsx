import React from 'react'

const Comment = ({comment}) => {
    // const [showReplies, setShowReplies]
  return (
    <div>
        <div>{comment?.author}</div>
        <div>{comment?.comment}</div>
        {/* {comment?.replies?.length ? (
            <button className='bg-slate-500 rounded-lg text-white p-1'>{comment?.replies?.length} replies</button>
        ) : null} */}
    </div>
  )
}

export default Comment