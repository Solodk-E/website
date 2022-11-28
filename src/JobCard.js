import React from 'react'
import Tasks from './Tasks'

function JobCard(props) {

    

   
   
    var affichTasks= props.propTasks.map(element=>{
        return (
            <div>
            <Tasks 
              propATask={element}  
            />
            </div>
        )
    })

 

    return (



    <div>
      <div id="xpDesc">
        <div id="xpHeader">
        <div id="xpTitle">
        <div>{props.propTitre}</div>
        <div id="xpEnt">@{props.propEntreprise}</div>
        </div>
        <div id="xpDate">{props.propDate}</div>
        </div>
        <div id="xpPresentation">{props.propDesc}</div>
        
        
      </div> 
        <div id="xpTasks">{affichTasks}</div>
        
      



    </div>
  )
}

export default JobCard