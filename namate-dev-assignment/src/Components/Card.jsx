import React from 'react'
import LinkedinIcon from '../assets/linkedin-icon.png'
import GithubIcon from '../assets/github-icon.png'

const Card = ({info}) => {
    const {name, company, location, bio, linkedin, html_url:url, avatar_url} = info;
  return (
    <div className='card'>
        <img className='card-img' src={avatar_url} alt='avatar_url' />
        <div className='card-content'>
            <hr className='hr' />
            <div className='card-name'>{name + ' '}<span>{company ? company : ''}</span></div>
            <div className='card-address'>
                {location}
            </div>
            <div>{bio}</div>
            <div className='card-icons'>
                <a href={linkedin} target="_blank">
                    <img width={30} height={30} src={LinkedinIcon} alt="linkedin-icon"/>
                </a>
                <a href={url} target="_blank">
                    <img width={30} height={30} src={GithubIcon} alt="github-icon" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Card