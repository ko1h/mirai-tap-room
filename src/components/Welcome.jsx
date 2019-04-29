import React from 'react'
import fan from '../assets/images/fan.png'

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
        }
      `}</style>
      <img src={fan}/>
      <h1>MIRAI</h1>
    </div>
  )
}

export default Welcome
