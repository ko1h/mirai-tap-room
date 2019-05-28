import React from 'react'
import sake from '../assets/images/sake.jpeg'
import Footer from './Footer'

function Welcome() {
  return(
    <div>
      <style jsx>{`
        h1{
          color: #C1D4D9;
          position: relative;
          text-align: center;
          margin: 0;
        },
        img {
          position: absolute;
          width: 100%;
          height: 80vh;
        }
      `}</style>
    <img src={sake}/>
      <h1>MIRAI</h1>
      <Footer />
    </div>
  )
}

export default Welcome
