import React from 'react'
import { comments } from '../appConstants'
import Comment from './Comment'

const renderComments = (comments) => (
  comments.map((comment, index) => {
      return (
      <div key={index} className="border border-blue-300 my-2">
          <Comment comment={comment} />
          <div className='pl-4'>
              {comment?.replies && renderComments(comment?.replies)}
          </div>
      </div>
  )})
)

const Comments = () => {
  return (
    <div className='mt-2 text-lg'>
        <div>
            {comments.length} Comments
        </div>
        <div>
            {renderComments(comments)}
        </div>
    </div>
  )
}

export default Comments