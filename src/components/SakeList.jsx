import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'

function SakeList(props) {
  return (
    <div>
      {props.sakeList.map((card, index) =>
        <Card image={card.image}
          name={card.name}
          position={card.position}
          details={card.details}
          key={index}/>
      )}
    </div>
  )
}

SakeList.propTypes = {
  sakeList: PropTypes.array
}

export default SakeList
