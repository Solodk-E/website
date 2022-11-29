import React,{ useEffect, useState } from "react"


function XPButton(props) {

  const [statut,setStatut]=useState(false)

  const [style, setStyle]=useState("xpButton")

    var activateJob=(active, name, entreprise, description, titre, date, task, style)=>{
        props.propButton(active, name, entreprise, description, titre, date, task, style)
        setStyle("xpFocus")
      
      
    }

        


    
    
  return (
    <div id={props.propStyle} onClick={()=>activateJob(props.propActive, props.propName, props.propEntreprise, props.propDescription, props.propTitre, props.propDate, props.propTask, props.propStyle)}>{props.propName}</div>
  )
}

export default XPButton