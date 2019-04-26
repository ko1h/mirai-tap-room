import React from 'react'
import  PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Card(props) {
  const mainStyle ={
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '40% auto',
    gridTemplateRows: 'repeat(4,80px)',
    gridGap: '10px 40px',
    // border: '3px solid black',
    // backgroundColor: 'lightgray',
    margin: '10px 5px'
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
          }
      `}</style>
      <img src={require(`../assets/images/${props.image}`)}></img>
      <div style={cardInfo}>
        <h1>{props.name}</h1>
        <h3>{props.position}</h3>
        <p>{props.details}</p>
        <Link to="/cart"><button><a>Buy</a></button></Link>
        <Link to="/edit"><button><a>Edit</a></button></Link>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired
}

export default Card
