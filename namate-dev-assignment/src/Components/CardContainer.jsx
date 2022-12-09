import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const CardContainer = ({ githubData }) => {
  return (
    <div className="card-continer">
      {githubData?.map((member) => (
        <Link style={{ textDecoration: 'none' }} key={member.id} to={`/mate/${member.login}`}>
          <Card info={member} />
        </Link>
      ))}
    </div>
  );
};

export default CardContainer;
