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
      <Link to="/">Home</Link> | <Link to="/sakeList">Sake List</Link> | <Link to="/newSake">Add new Sake</Link>
    </div>
  )
}

export default Header
