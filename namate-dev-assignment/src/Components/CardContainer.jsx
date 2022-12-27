import React from 'react';
import Card from './Card';
import LoaderComponent from './Loading';
import NotFoundComponent from './NotFoundComponent';

const CardContainer = ({ data, loading }) => {
  return (
    <div className="card-continer">
      {loading ? (
        <div>
          <LoaderComponent />
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
