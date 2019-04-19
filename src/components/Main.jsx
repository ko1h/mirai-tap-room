import React from 'react';
import  PropTypes from 'prop-types';


function Main(props) {
  const mainStyle ={
    display: 'grid',
    width: '48%',
    gridTemplateColumns: '40% auto',
    gridTemplateRows: 'repeat(4,100px)',
    gridGap: '10px 10px',
    border: '1px solid black',
    backgroundColor: 'lightgray'
  };
  const styles = {
    gridColumn: '2 / 3',
    gridRow: '1 / 2',
    height: '100%'

  };
  return(
    <div style={mainStyle}>
      <style jsx>{`
          img {
            width: 100%;
            height: 100%;
            grid-column: 1 /2;
            grid-row: 1 / 4;
          }
      `}</style>
      <img src={`../assets/img/${props.image}`}></img>
      <div style={styles}>
        <h1>{props.name}</h1>
        <h3>{props.position}</h3>
        <p>{props.details}</p>
      </div>
    </div>
  );
}

Main.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired
};

export default Main;
