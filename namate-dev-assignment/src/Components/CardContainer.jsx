import React from 'react'
import Card from './Card'
    
const CardContainer = ({githubData}) => {

  return (
    <div className='card-continer'>
      {githubData?.map((member) => (
          <Card key={member.id} info={member} />
      ))}
    </div>
  )
}

export default CardContainer