import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
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
            color: #F2EFE9;
            display: flex;
            justify-content: space-around;
            align-items: center;
          },
          a:hover {
            color: #F2C029;
          }
            `}</style>

          <Link to="/newSake" style={linkStyle}><a>ADD NEW SAKE</a></Link>
    </div>
  )
}

export default Footer
