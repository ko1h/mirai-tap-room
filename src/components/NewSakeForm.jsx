import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

class NewSakeForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };
  this.name = null;
  this.brand = null;
  this.details = null;
  this.handleNewSakeFormSubmission= this.handleNewSakeFormSubmission.bind(this);
  }

  handleNewSakeFormSubmission(e) {
    e.preventDefault();
    this.props.onNewSakeCreation({name: this.name.value, brand: this.brand.value, details: this.details.value});
    this.name.value = '';
    this.brand.value = '';
    this.details.value = '';
  }
  render() {
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
         <form onSubmit={this.handleNewSakeFormSubmission}>
        <h1>Add new Sake to the inventory</h1>
        <input
          type='text'
          id='name'
          placeholder='Sake Name'
          ref={(input) => {this.name = input}}/>
        <input
          type='text'
          id='brand'
          placeholder='brand'
          ref={(input) => {this.brand = input}}/>
        <textarea
          type='text'
          id='details'
          placeholder='Describe the sake.'
          ref={(input) => {this.details = input}}/>
        <button type='submit'>Add!</button>
      </form>
    </div>
  )
}
}

NewSakeForm.propTypes = {
  onNewSakeCreation: PropTypes.func,
}

export default NewSakeForm
