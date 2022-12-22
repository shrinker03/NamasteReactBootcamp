import React, { lazy, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const BookIcon = lazy(() => import('./BookSVG'));
import { ThemeContext } from '../Contexts/ThemeContextProvider';

const MateInfo = () => {
  const { id } = useParams();
  const [mateData, setMateData] = useState({});
  const [repoData, setRepoData] = useState([]);
  const { avatar_url, name, followers, following, bio } = mateData;

  const [theme] = useContext(ThemeContext);

  const getMateInfo = async () => {
    const data = await fetch(`https://api.github.com/users/${id}`);
    const json = await data.json();
    setMateData(json);
  };

  const getMateRepo = async () => {
    const data = await fetch(`https://api.github.com/users/${id}/repos`);
    const json = await data.json();
    setRepoData(json);
  };
  useEffect(() => {
    getMateInfo();
    getMateRepo();
  }, [id]);

  return (
    <div className="mate-container">
      <div className="left-container">
        <div className={`mate-card ${theme === 'Light' ? 'mate-card-light' : 'mate-card-dark'}`}>
          <img src={avatar_url} />
        </div>
        <div
          className={`mate-card-info ${
            theme === 'Light' ? 'mate-card-info-light' : 'mate-card-info-dark'
          }`}>
          <h3>{name}</h3>
          <div>
            <span className="follower-following">Followers: {followers}</span>
            <span className="follower-following">Followings: {following}</span>
          </div>
          <div style={{ textAlign: 'center' }}>{bio}</div>
        </div>
      </div>
      <div
        className={`mate-card-details ${
          theme === 'Light' ? 'mate-card-details-light' : 'mate-card-details-dark'
        }`}>
        <h2>Mate Repository</h2>
        <div className="repo-container">
          {repoData?.map((repo) => (
            <a
              target="_blank"
              className="repo-link"
              href={repo?.html_url}
              key={repo?.id}
              rel="noreferrer">
              <div className="repo-item">
                <BookIcon style={{ width: 25, marginRight: 8, fill: '#3f8cd9' }} />
                {repo?.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MateInfo;
