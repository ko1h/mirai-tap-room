import React from 'react'
import PropTypes from 'prop-types'


function SakeDetail(props) {

  function handleSellGlass(){
    props.onSellGlass(props.selectedsake.id)
  }

  function handleSellBottle(){
    props.onSellBottle(props.selectedsake.id)
  }

  function handleCloseItem(){
    props.onCloseItem()
  }

  if(props.selectedsake.remaining < 11){
    return(
      <div>
        <div>
          <button onClick={handleCloseItem} >Close</button>
          <h2>sake Details</h2>
          <h1>{props.selectedsake.name} - {props.selectedsake.brand}</h1>
          <h2>{props.selectedsake.details}</h2>
          <h4><em>{props.selectedsake.remaining}</em></h4>
          <hr/>
          <button onClick={handleSellGlass}>Sell Glass</button>
          <button onClick={handleSellBottle}>Sell Bottle</button>
        </div>
      </div>

    )
  } else if (props.selectedsake.remaining < 50 && props.selectedsake.remaining > 10){
    return(
      <div>
        <div>
          <button onClick={handleCloseItem} >Close</button>
          <h2>sake Details</h2>
          <h1>{props.selectedsake.name} - {props.selectedsake.brand}</h1>
          <h2>{props.selectedsake.details}</h2>
          <h4><em>{props.selectedsake.remaining}</em></h4>
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
          <h1>{props.selectedsake.name} - {props.selectedsake.brand}</h1>
          <h2>{props.selectedsake.details}</h2>
          <h4><em>{props.selectedsake.remaining}</em></h4>
          <hr/>
          <button onClick={handleSellGlass}>Sell Glass</button>
          <button onClick={handleSellBottle}>Sell Bottle</button>
        </div>
      </div>
    )
  }
}

SakeDetail.propTypes = {
  selectedsake: PropTypes.object,
  onSellGlass: PropTypes.func,
  onSellBottle: PropTypes.func,
  onCloseItem: PropTypes.func
};

export default SakeDetail;
