import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
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
      <Link to="/">HOME</Link> | <Link to="/sake">SAKE</Link> | <Link to="/contact">CONTACT</Link>
    </div>
  );
}

export default Header;
