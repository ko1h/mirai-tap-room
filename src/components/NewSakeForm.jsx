import React from 'react'
import PropTypes from 'prop-types'

function NewSakeForm(props) {
  let _name = null
  let _brand = null
  let _details = null

  function handleNewSakeFormSubmission(event) {
    event.preventDefault()
    props.onNewSakeCreation({name: _name.value, brand: _brand.value, details: _details.value})
    _name.value = ''
    _brand.value = ''
    _details.value = ''
  }

  return(
    <div>
      <form onSubmit={handleNewSakeFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Pair Name'
          ref={(input) => {_name = input}}/>
        <input
          type='text'
          id='brand'
          placeholder='brand'
          ref={(input) => {_brand = input}}/>
        <textarea
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
