import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
          div {
            text-align: center;
            margin: 10px;
            height: 50px;
          }
            `}</style>
      <Link to="/">HOME</Link> | <Link to="/sake">SAKE</Link> | <Link to="/contact">CONTACT</Link>
    </div>
  );
}

export default Header;
