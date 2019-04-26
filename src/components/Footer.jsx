import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
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

          <Link to="/addList">ADD LIST</Link>
          <Link to="/newticket">Create Ticket</Link>
    </div>
  )
}

export default Footer
