import React from 'react'
import PropTypes from 'prop-types'


function Sake(props) {

  function handleSellPint(){
    props.onSellPint(props.selectedsake.id);
  }

  function handleSellGrowler(){
    props.onSellGrowler(props.selectedsake.id);
  }

  function handleCloseModal(){
    props.onCloseModal()
  }

  if(props.selectedsake.remaining < 11){
    return(
      <div>
        <div>
          <button onClick={handleCloseModal} >Close</button>
          <h2>sake Details</h2>
          <h1>{props.selectedsake.name} - {props.selectedsake.brewer}</h1>
          <h2>{props.selectedsake.details}</h2>
          <h4><em>{props.selectedsake.remaining}</em></h4>
          <hr/>
          <button  onClick={handleSellPint}>Sell Pint</button>
          <button  onClick={handleSellGrowler}>Sell Growler</button>
        </div>
      </div>

    );
  } else if (props.selectedsake.remaining < 50 && props.selectedsake.remaining > 10){
    return(
      <div>
        <div>
          <button onClick={handleCloseModal} >Close</button>
          <h2>sake Details</h2>
          <h1>{props.selectedsake.name} - {props.selectedsake.brewer}</h1>
          <h2>{props.selectedsake.details}</h2>
          <h4><em>{props.selectedsake.remaining}</em></h4>
          <hr/>
          <button onClick={handleSellPint}>Sell Pint</button>
          <button  onClick={handleSellGrowler}>Sell Growler</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <button onClick={handleCloseModal}>Close</button>
          <h2>sake Details</h2>
          <h1>{props.selectedsake.name} - {props.selectedsake.brewer}</h1>
          <h2>{props.selectedsake.details}</h2>
          <h4><em>{props.selectedsake.remaining}</em></h4>
          <hr/>
          <button onClick={handleSellPint}>Sell Pint</button>
          <button onClick={handleSellGrowler}>Sell Growler</button>
        </div>
      </div>
    );
  }
}

sakeDetail.propTypes = {
  selectedsake: PropTypes.object,
  onSellPint: PropTypes.func,
  onSellGrowler: PropTypes.func,
  onCloseModal: PropTypes.func
};

export default Sake
