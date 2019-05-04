import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

function NewSakeForm(props) {
  let _name = null
  let _brand = null
  let _details = null

  function handleNewSakeFormSubmission(event) {
    event.preventDefault()
    props.onNewSakeCreation({name: _name.value, brand: _brand.value, details: _details.value, id: v4()})
    _name.value = ''
    _brand.value = ''
    _details.value = ''
  }

  return(
    <div>
      <style jsx>{`
          width: 100%;
           form {
             font-size: 16px;
             border: 1px solid white;
             display: flex;
             flex-direction: column;
             justify-content: space-around;
             margin: auto;
             width:50%;
             padding: 2%;
             color: white;
           },
           h1 {
             align-self: center;
           },
           input {
             margin: 5px;
             padding: 5px;
           }
           button {
             width: 15%;
             font-size: 16px;
             border-radius: 5px;
             height: 30px;
             border: none;
           }
           `}</style>
      <form onSubmit={handleNewSakeFormSubmission}>
        <h1>Add new Sake to the inventory</h1>
        <input
          type='text'
          id='name'
          placeholder='Sake Name'
          ref={(input) => {_name = input}}/>
        <input
          type='text'
          id='brand'
          placeholder='brand'
          ref={(input) => {_brand = input}}/>
        <textarea
          type='text'
          id='details'
          placeholder='Describe the sake.'
          ref={(input) => {_details = input}}/>
        <button type='submit'>Add!</button>
      </form>
    </div>
  )
}

NewSakeForm.propTypes = {
  onNewSakeCreation: PropTypes.func
}

export default NewSakeForm
