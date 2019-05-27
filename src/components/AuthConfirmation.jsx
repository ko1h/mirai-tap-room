import React from 'react'
import PropTypes from 'prop-types'

function AuthConfirmation(props){

  return (
    <div>
      <p>Are you authorized to submit this information?</p>
      <button onClick={props.onAuthConfirmation}>Yes</button>
    </div>
  )
}

AuthConfirmation.propTypes = {
  onAuthConfirmation: PropTypes.func
}

export default AuthConfirmation
