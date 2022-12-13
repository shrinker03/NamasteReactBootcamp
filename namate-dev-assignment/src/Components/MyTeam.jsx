import React, { useEffect, useState } from 'react';
import { getMembersData } from '../utils/GetMembersData';
import { githubUserNames } from '../utils/GithubInfo';
import CardContainer from './CardContainer';
import SearchBox from './SearchBox';

const MyTeam = () => {
  const [githubData, setGithubData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTeamMembers();
  }, []);

  const getTeamMembers = async () => {
    setLoading(true);
    let users = await getMembersData(githubUserNames);
    if (users.length) {
      setLoading(false);
      setGithubData(users);
      setFilteredData(users);
    }
  };
  return (
    <div className="container">
      <SearchBox data={githubData} setFilteredData={setFilteredData} />
      <CardContainer loading={loading} data={filteredData} />
    </div>
  );
};

export default MyTeam;
