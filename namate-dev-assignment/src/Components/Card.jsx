import React, { useContext } from 'react';
import LinkedinIcon from '../../public/assets/linkedin-icon.png';
import GithubIcon from '../../public/assets/github-icon.png';
import { ThemeContext } from '../Contexts/ThemeContextProvider';
import { Link } from 'react-router-dom';

const Card = ({ info }) => {
  const { name, company, location, linkedin, html_url: url, avatar_url: avatar, login } = info;
  const [theme] = useContext(ThemeContext);
  return (
    <div className={`card ${theme === 'Light' ? 'card-light' : 'card-dark'}`}>
      <Link
        style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}
        to={`/mates/${login}`}>
        <img loading="lazy" className="card-img rounded-lg" src={avatar} alt="avatar_url" />
      </Link>
      <div className="card-content">
        <hr className="hr" />
        <div className="card-name">{name ?? 'John Doe'}</div>
        <div className="card-name">{company || ''}</div>
        <div className="card-address">{location}</div>
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
