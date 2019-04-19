import React from 'react';
import ceramics from '../assets/img/ceramics.jpeg'

function Welcome() {
  var boardStyle = {
  width: '100%',
  height: '660px'

};
  return(
    <div>
      <img style={boardStyle} src={ceramics}/>
    </div>
  );
}

export default Welcome;