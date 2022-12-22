import React, { lazy } from 'react';
const Card = lazy(() => import('./Card'));
const Loading = lazy(() => import('./Loading'));
const NotFoundComponent = lazy(() => import('./NotFoundComponent'));

const CardContainer = ({ data, loading }) => {
  return (
    <div className="card-continer">
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : data.length ? (
        data?.map((member) => <Card key={member?.id} info={member} />)
      ) : (
        <div>
          <NotFoundComponent />
        </div>
      )}
    </div>
  );
};

export default CardContainer;
