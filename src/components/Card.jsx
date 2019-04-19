import React from 'react';
import  PropTypes from 'prop-types';


function Card(props) {
  const mainStyle ={
    display: 'grid',
    width: '48%',
    gridTemplateColumns: '40% auto',
    gridTemplateRows: 'repeat(6,100px)',
    gridGap: '10px 10px',
    border: '3px solid black',
    backgroundColor: 'lightgray',
    margin: '0 5px'
  };
  const styles = {
    gridColumn: '2 / 3',
    gridRow: '1 / 4',
    height: '100%'

  };
  return(
    <div style={mainStyle}>
      <style jsx>{`
          img {
            width: 100%;
            height: 100%;
            grid-column: 1 /2;
            grid-row: 1 / 7;
          }
      `}</style>
     <img src={require(`../assets/images/${props.image}`)}></img>
      <div style={styles}>
        <h1>{props.name}</h1>
        <h3>{props.position}</h3>
        <p>{props.details}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired
};

export default Card;
