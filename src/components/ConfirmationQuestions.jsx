import React from 'react'
import PropTypes from 'prop-types'

function ConfirmationQuestions(props) {
  return(
    <div>
      <style jsx>{`
        width: 100%;
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          width: 50%;
          margin: auto;
        },
        h1 {
          font-size: 2em;
          width: 100%;
          text-align: center;
          color: #C1D4D9;
        },
        button {
           width: 15%;
           font-size: 16px;
           border-radius: 5px;
           height: 30px;
           border: none;
         }
      `}</style>
      <h1>Did you want to add a new sake?</h1>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  )
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
}

export default ConfirmationQuestions
