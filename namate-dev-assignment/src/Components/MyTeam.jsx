import React, { useEffect, useState } from 'react';
import CardContainer from './CardContainer';
import Header from './Header';

const MyTeam = () => {
  const [githubData, setGithubData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getTeamMembers();
  }, []);

  const getMembersData = (githubNames) => {
    return Promise.all(
      githubNames.map(async (githubName) => {
        return (await fetch(`https://api.github.com/users/${githubName}`)).json();
      })
    );
  };

  const getTeamMembers = async () => {
    const githubUserNames = [
      'shrinker03',
      'ruchamahabal',
      'rishav-sah',
      'vinaysaip',
      'Pratik33',
      'shubhamyadav30',
      'ShailendraSinghRaikwar',
      'abhishekps782',
      'mojahidhd',
      'taj0598'
    ];
    let users = await getMembersData(githubUserNames);
    console.log(users, '===');
    setGithubData(users);
    setFilteredData(users);
  };
  return (
    <div className="container">
      <Header githubData={githubData} setFilteredData={setFilteredData} />
      <CardContainer githubData={filteredData.length ? filteredData : githubData} />
    </div>
  );
};

export default MyTeam;
