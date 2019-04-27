import React from 'react'
import PropTypes from 'prop-types'

function ConfirmationQuestions(props) {
  return(
    <div>
      <p>Have you gone through all the questions?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  )
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
}

export default ConfirmationQuestions
