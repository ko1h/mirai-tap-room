import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
  const linkStyle ={
      color: '#F2EFE9',
      textDecoration: 'none'
    }
    return (
      <div>
        <style jsx>{`
            div {
              height: 10vh;
              background-color: #68828C;
            },
            a {
              display: flex;
              justify-content: space-around;
              align-items: center;
            }
              `}</style>
      <Link to="/" style={linkStyle}>Home</Link> | <Link to="/sakeList" style={linkStyle}>Sake List</Link> | <Link to="/newSake" style={linkStyle}>Add new Sake</Link>
    </div>
  )
}

export default Header
