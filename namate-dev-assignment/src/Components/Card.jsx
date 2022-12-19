import React, { useContext } from 'react';
import LinkedinIcon from '../../public/assets/linkedin-icon.png';
import GithubIcon from '../../public/assets/github-icon.png';
import { ThemeContext } from '../Contexts/ThemeContextProvider';
import { Link } from 'react-router-dom';

const Card = ({ info }) => {
  const { name, company, location, bio, linkedin, html_url: url, avatar_url: avatar, login } = info;
  const [theme] = useContext(ThemeContext);
  return (
    <div className={`card ${theme === 'Light' ? 'card-light' : 'card-dark'}`}>
      <Link
        style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}
        to={`/mate/${login}`}>
        <img loading="lazy" className="card-img" src={avatar} alt="avatar_url" />
      </Link>
      <div className="card-content">
        <hr className="hr" />
        <div className="card-name">
          {(name ?? 'John Doe') + ', '}
          <span>{company || ''}</span>
        </div>
        <div className="card-address">{location}</div>
        <div>{bio}</div>
        <div className="card-icons">
          <a href={linkedin} target="_blank" rel="noreferrer">
            <img loading="lazy" width={30} height={30} src={LinkedinIcon} alt="linkedin-icon" />
          </a>
          <a href={url} target="_blank" rel="noreferrer">
            <img loading="lazy" width={30} height={30} src={GithubIcon} alt="github-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
