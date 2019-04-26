import React from 'react'

import ceramics from '../assets/images/ceramics.jpeg'

function Welcome() {
  var boardStyle = {
    width: '100%',
    height: '100vh'

  }
  return(
    <div>
      <style jsx>{`
          img{
            position: absolute;
          },
          h1 {
            position: relative;
            color: white;
          }
          `}</style>
      <img style={boardStyle} src={ceramics}/>
      <h1>MIRAI</h1>
    </div>
  )
}

export default Welcome
