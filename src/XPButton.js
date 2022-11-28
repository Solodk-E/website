import React,{ useEffect, useState } from "react"


function XPButton(props) {

  const [style,setStyle]=useState("xpButton")

 

    var activateJob=(active, name, entreprise, description, titre, date, task)=>{
        props.propButton(active, name, entreprise, description, titre, date, task)
        console.log("button"+active)
       
        
  

    }

  
    
    
  return (
    <div id={style} onClick={()=>activateJob(props.propActive, props.propName, props.propEntreprise, props.propDescription, props.propTitre, props.propDate, props.propTask)}>{props.propName}</div>
  )
}

export default XPButton