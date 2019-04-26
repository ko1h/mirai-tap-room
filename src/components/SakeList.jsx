import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

function SakeList(props) {
  return (
    <div>
      <style jsx>{`
        div{
          display: flex;
          flex-direction:row;
          flex-wrap: wrap;
          margin: 2% 10%;
        }
        `}</style>
      {props.sakeList.map((card, index) =>
        <Card image={card.image}
          name={card.name}
          position={card.position}
          details={card.details}
          key={index}/>
      )}
    </div>
  );
}

SakeList.propTypes = {
  sakeList: PropTypes.array
};

export default SakeList;
