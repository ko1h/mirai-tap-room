import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class EditSakeForm extends React.Component {

  constructor(props){
    super(props);
    this.sakeId = this.props.selectedSakeId;
    this.name = this.props.sakeList[this.sakeId].name;
    this.brand = this.props.sakeList[this.sakeId].brand;
    this.Details = this.props.sakeList[this.sakeId].Details;
    this.handleEditSakeFormSubmission = this.handleEditSakeFormSubmission.bind(this);
  }
    handleEditSakeFormSubmission(e) {
    e.preventDefault();
    this.props.onEditSake(this.sakeId, {name: this.name.value, brand: this.brand.value, Details: this.Details.value});
    this.props.path.history.push('/sakelist');
  }
  render() {
  return (
    <div>
      <form onSubmit={handleEditSakeForm}style={formStyle}>
        <h1>Edit {props.selectedSake.name}</h1>
        <input
          defaultValue={this.name}
          type='text'
          id='name'
          placeholder= {props.selectedSake.name}
          ref={(input) => {_name = input}}/>
        <input
          defaultValue={this.brand}
          type='text'
          id='brand'
          placeholder={props.selectedSake.brand}
          ref={(input) => {_brand = input}}/>
        <textarea
          defaultValue={this.Details}
          id='Details'
          placeholder={props.selectedSake.Details}
          ref={(input) => {_Details = input}}/>
        <button type='submit'>Change</button>
      </form>
    </div>
  );
  }
}

EditSakeForm.propTypes = {
  path: PropTypes.object.isRequired,
  selectedSakeId: PropTypes.string.isRequired,
  sakeList: PropTypes.object.isRequired,
  onEditSake: PropTypes.func.isRequired,
};

export default EditSakeForm
