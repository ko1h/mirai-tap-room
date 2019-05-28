import React from 'react'
import PropTypes from 'prop-types'
import SakeList from './SakeList'
import SakeDetail from './SakeDetail'
import { Link } from 'react-router-dom'


function Admin(props){

  let optionalSelectedSakeContent = null
  if(props.selectedSake !== null){
    optionalSelectedSakeContent = <SakeDetail
      selectedSake ={props.sakeList[props.selectedSake.sakeId]}
      onSellGlass={props.onSellGlass}
      onSellBottle={props.onSellBottle}
      onCloseItem={props.onCloseItem}
    />
  }

  return(
    <div className='mainContainer'>
      <style jsx>{`
          .mainContainer{
            align-items: center;
            width: 100%;
            height: 100%;
            background-color: #394D59;
            text-align: center;
            border: 1px: red solid
          }
          h2 {
            margin: 0;
          }
          .adminStyle {
            padding: 20px;
          }
         `}</style>
       <div className="adminStyle">
          <h2>Admin</h2>
          <Link to='newsake'><button>Tap New Sake</button></Link>
          {optionalSelectedSakeContent}
      </div>
      <SakeList
        currentRouterPath={props.currentRouterPath}
        sakeList={props.sakeList}
        onNewSakeCreation={props.onNewSakeCreation}
        onChangeSelectedSake={props.onChangeSelectedSake}
        selectedSake={props.selectedSake} />
    </div>
  )
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
}
export default Admin
