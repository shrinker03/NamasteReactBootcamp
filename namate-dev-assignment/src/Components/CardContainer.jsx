import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Loading from './Loading';
import NotFoundComponent from './NotFoundComponent';

const CardContainer = ({ data, loading }) => {
  return (
    <div className="card-continer">
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : data.length ? (
        data?.map((member) => (
          <Link style={{ textDecoration: 'none' }} key={member.id} to={`/mate/${member.login}`}>
            <Card info={member} />
          </Link>
        ))
      ) : (
        <div>
          <NotFoundComponent />
        </div>
      )}
    </div>
  );
};

export default CardContainer;
