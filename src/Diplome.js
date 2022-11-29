import React from 'react'

function Diplome(props) {
  return (
    <div className='dip'>
                <div className='dipDate'>{props.propDate}</div>
                <div className='dipLieu'>{props.propLieu}</div>
                <div className='dipText'>{props.propNom}</div>
                
    </div>
  )
}

export default Diplome