import React from 'react'
import fan from '../assets/images/ceramics.jpeg'

function Welcome() {
  return(
    <div>
      <style jsx>{`
        div{
          background-color: #394D59;
          width: 100%;
          height: 80vh;
        },
        h1 {
          color: #C1D4D9;
          margin: 0;
          text-align: center;
        },
        img {
          height: 80px;
        }
      `}</style>
      <h1>MIRAI</h1>
      <img src={fan}/>
    </div>
  )
}

export default Welcome
