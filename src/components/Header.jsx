import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
  const linkStyle ={
    color: 'black',
    textDecoration: 'none'
  }
  return (
    <div>
      <style jsx>{`
          div {
            height: 50px;
          },
          a {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
            `}</style>
      <Link to="/" style={linkStyle}>HOME</Link> | <Link to="/sake" style={linkStyle}>SAKE</Link> | <Link to="/contact" style={linkStyle}>CONTACT</Link>
    </div>
  )
}

export default Header
