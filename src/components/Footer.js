import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const linkStyle = {
    color: '#F2EFE9',
    textDecoration: 'none',
    hover: 'red',
    fontSize: '1.5em',
  }
  const anchorStyle = {
    display: 'flex',
    justifyContent: 'center'
  }
  return (
    <div>
      <style jsx>{`
           div {
            height: 10vh;
            width: 100%;
            background-color: #68828C;
            display: flex;
            justify-content: space-around;
            align-items: center;
          },
          a:hover {
            color: #F2C029;
          }
        `}</style>
        <Link to='/admin' style={linkStyle}>ADMIN</Link>
    </div>
  )
}

export default Footer
