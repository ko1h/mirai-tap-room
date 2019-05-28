import React from 'react'
import { Link } from 'react-router-dom'
import fan from '../assets/images/fan.png'


function Header() {
  const linkStyle = {
    color: '#F2EFE9',
    textDecoration: 'none',
    hover: 'red',
    fontSize: '1.5em'
  }
  const anchorStyle = {
    display: 'flex',
    justifyContent: 'center'
  }
  return (
    <div>
      <style jsx>{`
            div {
              position: 'absolute',
              top: '0',
              height: 10vh;
              width: 100%;
              background-color: #68828C;
              display: flex;
              justify-content: space-around;
              align-items: center;
            },
            img {
              height: 40px;
              align-items: center;
            }
            a:hover {
              color: #F2C029;
            }
              `}</style>
      <div>
        <img src={fan} />
      </div>
      <div>
        <Link to="/" style={linkStyle}>HOME</Link> |
        <Link to="/sakeList" style={linkStyle}>SAKE LIST</Link>
      </div>
      <div style={anchorStyle}>

      </div>
    </div>
  )
}

export default Header
