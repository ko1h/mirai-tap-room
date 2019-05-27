import React from 'react'
import SakeInfo from './SakeInfo'
import PropTypes from 'prop-types'

function SakeList(props) {
  return (
    <div>
      <h1>Our sake</h1>
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
  )
}

SakeList.propTypes = {
  sakeList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onChangeSelectedSake: PropTypes.func
}

export default SakeList
