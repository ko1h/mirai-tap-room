import React from 'react'
import PropTypes from 'prop-types'

function ConfirmationQuestions(props) {
  return(
    <div>
      <style jsx>{`
        p {
          margin: 0;
          color: #C1D4D9;
        }
      `}</style>
    <p>Did you want to add a new sake?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  )
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
}

export default ConfirmationQuestions
