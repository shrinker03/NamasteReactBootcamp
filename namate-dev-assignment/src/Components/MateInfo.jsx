import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RepoIcon from '../../public/assets/repo-icon.png';

const MateInfo = () => {
  const { id } = useParams();
  const [mateData, setMateData] = useState({});
  const [repoData, setRepoData] = useState([]);
  const { avatar_url, name, followers, following, bio } = mateData;

  const getMateInfo = async () => {
    const data = await fetch(`https://api.github.com/users/${id}`);
    const json = await data.json();
    setMateData(json);
    console.log(json);
  };

  const getMateRepo = async () => {
    const data = await fetch(`https://api.github.com/users/${id}/repos`);
    const json = await data.json();
    setRepoData(json);
    console.log(json);
  };
  useEffect(() => {
    getMateInfo();
    getMateRepo();
  }, [id]);

  return (
    <div className="mate-container">
      <div className="left-container">
        <div className="mate-card">
          <img src={avatar_url} />
        </div>
        <div className="mate-card-info">
          <h3>{name}</h3>
          <div>
            <span className="follower-following">Followers: {followers}</span>
            <span className="follower-following">Followings: {following}</span>
          </div>
          <div style={{ textAlign: 'center' }}>{bio}</div>
        </div>
      </div>
      <div className="mate-card-details">
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
                <img src={RepoIcon} alt="repo-icon" />
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
