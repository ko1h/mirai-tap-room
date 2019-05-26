import React from 'react'
import PropTypes from 'prop-types'
import toji from '../assets/images/toji.jpeg'
import SakeList from './Sake';
import { Link } from 'react-router-dom';


function Sake(props) {

  let linkPath = '/edit' + props.sakeId;

  function handleDeleteSakeClick() {
      props.onDeleteSake(props.sakeId);
  }

  const mainStyle = {
    display: 'grid',
    width: '75%',
    margin: '20px 0',
    gridTemplateColumns: '50% auto',
    gridTemplateRows: '1fr 1fr 250px',
    gridGap: '5px 20px',
    color: '#C1D4D9',
    border: '1px solid red',
    paddingRight: '10px',
  }
  return(
    <div>
      <style jsx>{`
          img {
            width: 100%;
            height: 100%;
            grid-column: 1 /2;
            grid-row: 1 / 4;
          },
          h1 {
            margin: 0;
            grid-column: 2 /3;
            grid-row: 1 / 1;
          },
          h3 {
            grid-column: 2 /3;
            grid-row: 2 / 2;
          },
          p {
            grid-column: 2 /3;
            grid-row: 3 / 3;
          }
      `}</style>
    <div style={mainStyle}>
        <img src={toji} />
        <h1>{props.name}</h1>
        <h3>{props.brand}</h3>
        <p>{props.details}</p>
      </div>
      <Link to={linkPath}><button>EDIT</button></Link>
      <button onClick={handleDeleteSakeClick}>DELETE</button>
    </div>

  );
}


Sake.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  details: PropTypes.string,
  currentRouterPath: PropTypes.string,
  sakeId: PropTypes.string.isRequired,
  onDeleteSake: PropTypes.func,
};

export default Sake
