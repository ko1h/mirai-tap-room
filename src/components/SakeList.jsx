import React from 'react'
import Sake from './Sake'
import PropTypes from 'prop-types'

function SakeList(props) {
  return (
    <div className='mainContainer'>
      <style jsx>{`
          .mainContainer{
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          div{
            background-color: #394D59;
            width: 100%;
            height: 100%;
        }
      `}</style>
      <h1>Our sake</h1>
      {Object.keys(props.sakeList).map(function(sakeId) {
        var sake = props.sakeList[sakeId]
        return <Sake name={sake.name}
          name={sake.name}
          brand={sake.brand}
          details={sake.details}
          onDeleteSake={props.onDeleteSake}
          sakeId={sakeId}
          key={sakeId} />;
      })}
    </div>
  )
}

SakeList.propTypes = {
  sakeList: PropTypes.object,
  onDeleteSake: PropTypes.func,
}

export default SakeList
