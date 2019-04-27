import React from 'react'
import Sake from './Sake'
import PropTypes from 'prop-types'

function SakeList(props) {
  return (
    <div>
      <hr/>
      {props.sakeList.map((sake, index) =>
        <Sake name={sake.name}
          brand={sake.brand}
          details={sake.details}
          key={index}/>
      )}
    </div>
  )
}

SakeList.propTypes = {
  sakeList: PropTypes.array
}

export default SakeList
