import React from 'react'

function AddList() {
  return(
    <div>
      <form>
        <h1>"Add new sake to the list"</h1>
          <p>Upload image</p>
          <button>Upload</button>
        <input
          type='img'
          id='images'
          placeholder='image place'/>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='brand'
          placeholder='brand'/>
        <textarea
          id='description'
          placeholder='Describe the sake.'/>
        <button type='submit'>Add!</button>
      </form>
    </div>
  )
}

export default AddList
