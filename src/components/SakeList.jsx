import React from 'react'
import SakeInfo from './SakeInfo'
import PropTypes from 'prop-types'

function SakeList(props) {
  return (
    <div className='mainContainer'>
      <style jsx>{`
          .mainContainer{
            align-items: center;
            width: 100%;
            height: 100%;
            background-color: #394D59;
            text-align: center;
          }
          .sakeCard{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
          h1 {
            margin: 0;
            color: white;
          }
         `}</style>
       <h1>Our sake</h1>
       <div className='sakeCard'>
        {Object.keys(props.sakeList).map(function(sakeId)
        {
          let sake = props.sakeList[sakeId]
          return <SakeInfo
            name = {sake.name}
            brand = {sake.brand}
            description = {sake.description}
            price = {sake.price}
            abv = {sake.abv}
            remaining = {sake.remaining}
            key = {sakeId}
            sakeId = {sakeId}
            currentRouterPath={props.currentRouterPath}
            onChangeSelectedSake={props.onChangeSelectedSake} />
        })}
      </div>
    </div>
  )
}

SakeList.propTypes = {
  sakeList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onChangeSelectedSake: PropTypes.func
}

export default SakeList
