import React from 'react'
import PropTypes from 'prop-types'

function NewSakeForm(props) {
  let _name = null
  let _brand = null
  let _description = null
  let _price = null
  let _abv = null

  let formDiv = {
    paddingTop: '125px',
    textAlign: 'center',
    height: '100%'
  }

  function handleNewSakeFormSubmission(event) {
    event.preventDefault()
    props.onNewSakeCreation({
      name: _name.value,
      brand: _brand.value,
      description: _description.value,
      price: _price.value,
      abv: _abv.value,
      id: '',
      remaining: 120})
    _name.value = ''
    _brand.value = ''
    _description.value = ''
    _price.value = ''
    _abv.value = ''

  }
  return(
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
            margin: 0;
          }
      `}</style>
      <form onSubmit={handleNewSakeFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input}}/>
        <input
          type='text'
          id='brand'
          placeholder='Brewer'
          ref={(input) => {_brand = input}}/>
        <input
          type='text'
          id='description'
          placeholder='Description'
          ref={(input) => {_description = input}}/>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input}}/>
        <input
          type='text'
          id='abv'
          placeholder='ABV'
          ref={(input) => {_abv = input}}/>
        <br/>
        <button type='submit'>Tap New Sake</button>
      </form>
    </div>
  )
}

NewSakeForm.propTypes = {
  onNewSakeCreation: PropTypes.func
}

export default NewSakeForm
