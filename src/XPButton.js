import React from 'react'

function XPButton(props) {

    var activateJob=(name, enterprise, description, titre, date, task)=>{
        props.propButton(name, enterprise, description, titre, date, task)
        // console.log(props.propTask)
      
    }


  return (
    <div id="xpButton" onClick={()=>activateJob(props.propName, props.propEnterprise, props.propDescription, props.propTitre, props.propDate, props.propTask)}>{props.propName}</div>
  )
}

export default XPButton