import React from 'react'
import PropTypes from 'prop-types'

function AuthConfirmation(props){

  return (
      <div className='mainContainer'>
      <style jsx>{`
          .mainContainer{
            align-items: center;
            width: 100%;
            height: 80vh;
            background-color: #394D59;
            text-align: center;
            color: white;
          }
          p {
            margin: 10;
          }
          button {
            width: 100px;
            font-size: 16px;
            border-radius: 5px;
            height: 30px;
            border: none;
          }
      `}</style>
    <p>Are sure you want to submit new information?</p>
      <button onClick={props.onAuthConfirmation}>Yes</button>
    </div>
  )
}

AuthConfirmation.propTypes = {
  onAuthConfirmation: PropTypes.func
}

export default AuthConfirmation
