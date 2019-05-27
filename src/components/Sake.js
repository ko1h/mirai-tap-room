import React from 'react'
import PropTypes from 'prop-types'

function Sake(props) {

  function handleChangeSelectedSake(sakeId){
    props.onChangeSelectedSake(sakeId)
  }

  const sakeInformation =
    <div>
      <h3>{props.name}</h3>
      <h5>Brand: {props.brand}</h5>
      <h5>{props.description}</h5>
      <h5>${props.price}</h5>
      <h5>{props.abv} ABV</h5>
      <h5>Glass Remaining: {props.remaining}</h5>
    </div>


  if (props.currentRouterPath === '/admin' ){
    if(props.remaining > 50){
      return (
        <div
          onClick={() => {handleChangeSelectedSake(
            {sakeId: props.sakeId})}}>
          {sakeInformation}
        </div>
      )
    } else if (props.remaining < 50 && props.remaining > 10){
      return (
        <div
          onClick={() => {handleChangeSelectedSake(
            {sakeId: props.sakeId})}}>
          {sakeInformation}
        </div>
      )
    } else if (props.remaining < 11){
      return (
        <div
          onClick={() => {handleChangeSelectedSake(
            {sakeId: props.sakeId})}}>
          {sakeInformation}
        </div>
      )
    }
  } else {
    return(
      <div>
        {sakeInformation}
      </div>
    )
  }
}

Sake.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  sakeId: PropTypes.string.isRequired,
  remaining: PropTypes.number,
  onChangeSelectedSake: PropTypes.func,
  currentRouterPath: PropTypes.string
}

export default Sake
