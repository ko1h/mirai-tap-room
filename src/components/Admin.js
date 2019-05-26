import React from 'react';
import PropTypes from 'prop-types';
import SakeList from './SakeList';
import Sake from './Sake';
import { Link } from 'react-router-dom';


function Admin(props){

  let optionalSelectedSakeContent = null;

  if(props.selectedSake !== null){
    optionalSelectedSakeContent = <SakeDetail
      selectedSake ={props.sakeList[props.selectedSake.sakeId]}
      onSellGlass={props.onSellGlass}
      onSellBottle={props.onSellBottle}
      onCloseItem={props.onCloseItem}
    />;
  }

  return(
    <div >
      <h2>Admin</h2>
      <Link to='newsake'><button>Tap New Sake</button></Link>
      {optionalSelectedSakeContent}
      <SakeList
        currentRouterPath={props.currentRouterPath}
        sakeList={props.sakeList}
        onNewSakeCreation={props.onNewSakeCreation}
        onChangeSelectedSake={props.onChangeSelectedSake}
        selectedSake={props.selectedSake} />
    </div>
  );
}

Admin.propTypes = {
  sakeList: PropTypes.object,
  onNewSakeCreation: PropTypes.func,
  onChangeSelectedSake: PropTypes.func,
  currentRouterPath: PropTypes.string.isRequired,
  selectedSake: PropTypes.object,
  onSellGlass: PropTypes.func,
  onSellBottle: PropTypes.func,
  onCloseItem: PropTypes.func
};
export default Admin;
