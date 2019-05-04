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

      {Object.keys(props.sakeList).map(function(sakeId, index){
        let sake = props.sakeList[sakeId]
        return <Sake image={sake.image}
            name={sake.name}
            brand={sake.brand}
            details={sake.details}
            id={sake.id}
            key={index}/>
      }
      )}
    </div>
  )
}

SakeList.propTypes = {
  sakeList: PropTypes.object
}

export default SakeList
