import React from 'react'
import { Link } from 'react-router-dom'
import fan from '../assets/images/fan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header(){
  const linkStyle ={
    color: '#F2EFE9',
    textDecoration: 'none',
    margin: '10px'
  }
  return (
    <div>
      <style jsx>{`
            div {
              height: 10vh;
              background-color: #68828C;
              display: flex;
              justify-content: space-around;
              align-items: center;
            }
            img {
              height: 50px;
              align-items: center;
            }
              `}</style>
      <img src={fan}/>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/sakeList" style={linkStyle}>Sake List</Link>
      </div>
      <div>
        <FontAwesomeIcon icon="beer" />
      </div>
    </div>
  )
}

export default Header
