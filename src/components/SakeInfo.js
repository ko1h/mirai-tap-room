import React from 'react'
import PropTypes from 'prop-types'

function SakeInfo(props) {

  function handleChangeSelectedSake(sakeId){
    props.onChangeSelectedSake(sakeId)
  }

  const mainStyle = {
    width: '100%',
    textAlign: 'center',
    color: '#C1D4D9',
    display: 'flex',
    alignItem: 'center'
  }
  const mainCardStyle = {
    margin: '10px 30px',
    width: '200px',
    padding: '10px',
    backgroundColor: '#394D59',
    border: '1px solid lightgray'
  }

  const sakeInformation =
    <div style={mainStyle}>
      <div style={mainCardStyle}>
        <h1>{props.name}</h1>
        <h3>Brand: {props.brand}</h3>
        <h5>{props.description}</h5>
        <h5>${props.price}</h5>
        <h5>{props.abv} ABV</h5>
        <h5>Glass Remaining: {props.remaining}</h5>
      </div>
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

SakeInfo.propTypes = {
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

export default SakeInfo
