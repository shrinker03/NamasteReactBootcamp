import React, { lazy, useEffect, useState } from 'react';
import { getMembersData } from '../utils/GetMembersData';
import { githubUserNames } from '../utils/GithubInfo';
const CardContainer = lazy(() => import('./CardContainer'));
const SearchBox = lazy(() => import('./SearchBox'));

const MyTeam = () => {
  const [githubData, setGithubData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTeamMembers();
  }, []);

  const getTeamMembers = async () => {
    setLoading(true);
    if (window.sessionStorage.getItem('teamInfo')) {
      const users = JSON.parse(window.sessionStorage.getItem('teamInfo'));
      setGithubData(users);
      setFilteredData(users);
      setLoading(false);
      return;
    }
    let users = await getMembersData(githubUserNames);
    if (users.length) {
      setGithubData(users);
      setFilteredData(users);
      window.sessionStorage.setItem('teamInfo', JSON.stringify(users));
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-1 flex-col">
      <SearchBox
        data={githubData}
        setFilteredData={setFilteredData}
        getTeamMembers={getTeamMembers}
      />
      <CardContainer loading={loading} data={filteredData} />
    </div>
  );
};

export default MyTeam;
