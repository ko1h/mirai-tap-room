import React from 'react'
import PropTypes from 'prop-types'

function AddList(props) {
  let _names = null
  let _brand = null
  let _description = null


  function handleNewTicketFormSubmission(event) {
  event.preventDefault();
  console.log(_names.value);
  console.log(_brand.value);
  console.log(_description.value);
  props.onNewTicketCreation({names: _names.value, brand: _brand.value, description: _description.value});
  _names.value = '';
  _brand.value = '';
  _description.value = '';

  }

  return(
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input}}/>
        <input
          type='text'
          id='brand'
          placeholder='brand'
          ref={(input) => {_brand = input}}/>
        <textarea
          id='description'
          placeholder='Describe the sake.'
          ref={(input) => {_description = input}}/>
        <button type='submit'>Add!</button>
      </form>
    </div>
    );
  }

  AddList.propTypes = {
    onNewTicketCreation: PropTypes.func
  };


export default AddList