import React from 'react'
import PropTypes from 'prop-types'


function SakeDetail(props) {

  function handleSellGlass(){
    props.onSellGlass(props.selectedSake.id)
  }

  function handleSellBottle(){
    props.onSellBottle(props.selectedSake.id)
  }

  function handleCloseItem(){
    props.onCloseItem()
  }

  if(props.selectedSake.remaining < 11){
    return(
      <div>
        <div>
          <button onClick={handleCloseItem} >Close</button>
          <h2>sake Details</h2>
          <h1>{props.selectedSake.name} - {props.selectedSake.brand}</h1>
          <h2>{props.selectedSake.details}</h2>
          <h4><em>{props.selectedSake.remaining}</em></h4>
          <hr/>
          <button onClick={handleSellGlass}>Sell Glass</button>
          <button onClick={handleSellBottle}>Sell Bottle</button>
        </div>
      </div>

    )
  } else if (props.selectedSake.remaining < 50 && props.selectedSake.remaining > 10){
    return(
      <div>
        <div>
          <button onClick={handleCloseItem} >Close</button>
          <h2>sake Details</h2>
          <h1>{props.selectedSake.name} - {props.selectedSake.brand}</h1>
          <h2>{props.selectedSake.details}</h2>
          <h4><em>{props.selectedSake.remaining}</em></h4>
          <hr/>
          <button onClick={handleSellGlass}>Sell Glass</button>
          <button  onClick={handleSellBottle}>Sell Bottle</button>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div>
          <button onClick={handleCloseItem}>Close</button>
          <h2>sake Details</h2>
          <h1>{props.selectedSake.name} - {props.selectedSake.brand}</h1>
          <h2>{props.selectedSake.details}</h2>
          <h4><em>{props.selectedSake.remaining}</em></h4>
          <hr/>
          <button onClick={handleSellGlass}>Sell Glass</button>
          <button onClick={handleSellBottle}>Sell Bottle</button>
        </div>
      </div>
    )
  }
}

SakeDetail.propTypes = {
  selectedSake: PropTypes.object,
  onSellGlass: PropTypes.func,
  onSellBottle: PropTypes.func,
  onCloseItem: PropTypes.func
};

export default SakeDetail;
