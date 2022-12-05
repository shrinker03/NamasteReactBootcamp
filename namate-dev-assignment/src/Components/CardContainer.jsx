import React from 'react'
import Card from './Card'
    
const CardContainer = ({Team}) => {
  return (
    <div className='card-continer'>
        {Team?.map((member) => (
            <Card key={member.id} info={member} />
        ))}
    </div>
  )
}

export default CardContainer