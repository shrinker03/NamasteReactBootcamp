import React from 'react'
import LinkedinIcon from '../assets/linkedin-icon.png'
import GithubIcon from '../assets/github-icon.png'

const Card = ({info}) => {
    const {id, name, organization, address, designation, linkedin, github} = info;
  return (
    <div className='card'>
        <img className='card-img' src={`https://picsum.photos/id/${id}/250/250`} alt='https://picsum.photos/200' />
        <div className='card-content'>
            <hr className='hr' />
            <div className='card-name'>{name}</div>
            <span>{designation} {', ' + organization}</span>
            <div className='card-address'>
                {address}
            </div>
            <div className='card-icons'>
                <a href={linkedin} target="_blank">
                    <img width={30} height={30} src={LinkedinIcon} alt="linkedin-icon"/>
                </a>
                <a href={github} target="_blank">
                    <img width={30} height={30} src={GithubIcon} alt="github-icon" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Card