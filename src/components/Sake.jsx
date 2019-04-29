import React from 'react'
import PropTypes from 'prop-types'
import ceramics from '../assets/images/ceramics.jpeg'


function Sake(props) {
  const mainStyle ={
    display: 'grid',
    width: '50%',
    margin: 'auto',
    gridTemplateColumns: '40% auto',
    gridTemplateRows: 'repeat(4,80px)',
    gridGap: '10px 40px',
    // border: '3px solid black',
    // backgroundColor: 'lightgray',

  }
  const cardInfo ={
    gridColumn: '2 /3',
    gridRow: '1 / 3',
  }
  return(
    <div style={mainStyle}>
      <style jsx>{`
          img {
            width: 100%;
            height: 100%;
            grid-column: 1 /2;
            grid-row: 1 / 4;
          },
          div{
            color: #C1D4D9;
            align-content: center;
          }
      `}</style>
      <img src={ceramics}/>
      <div style={cardInfo}>
        <h1>{props.name}</h1>
        <h3>{props.brand}</h3>
        <p>{props.details}</p>
      </div>
    </div>
  )
}

Sake.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired
}

export default Sake
