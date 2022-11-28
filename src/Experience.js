import React, { useEffect, useState } from 'react'
import XPButton from './XPButton'
import Tasks from './Tasks';

function Experience() {

    const [jobs, setJobs]=useState([{active: false, name:"job1", description:"Loremdfsdfdsfdfs",titre:"dev", task:[{point:"tack1"},{point:"task2"}],entreprise: "Insee", date: "2022" }, 
                                    {active: false, name:"job2", description:"Loremdfsdfdsfdfs",titre:"dev", task:[{point:"tack2"},{point:"task3"}],entreprise: "Insee", date: "2022"}, 
                                    {active: false,  name:"job3", description:"Loremdfsdfdsfdfs",titre:"dev", task:[{point:"tack4"},{point:"task4"}],entreprise: "Insee", date: "2022"}])

    const [jobActive, setJobActive]=useState({});

    const [tasks, setTasks]=useState([]);


    var affichActiveJob = (name, enterprise, description, titre, date, task) =>{
        // setJobActive({name:"job1", description:"Loremdfsdfdsfdfs",titre:"dev", entreprise: "Insee", date: "2022" })
       
        setJobActive({name:name, enterprise:enterprise, description:description, titre:titre, date:date, task:task});
        setTasks()
        setTasks([jobActive.task])
        console.log(tasks)   
    }

    useEffect(()=>{
        affichActiveJob()
        
    },[])

    // var affichSelectedJob=jobActive.map(element=>{
    //     return(
    //         <div>
    //             <div id="titreXP">{element.name}</div>
    //             <div id="periodeXP">{element.date}</div>
    //             <div id="descriptionXP">{element.description}</div>
    //         </div>
    //     )
    // })

    var affTasks= tasks.map(element=>{
        return(
            <Tasks propPoint={element.point}/>

        )
    })
    

    var setJobsButtons = jobs.map(element=>{
        return (
            <div>
            <XPButton 
            propButton={affichActiveJob}
            propActive={element.active}
            propName={element.name}
            propDescription={element.description}
            propTitre={element.titre}
            propEntreprise={element.entreprise}
            propDate={element.date}
            propTask={element.task}
                    />
            <Tasks
                propDesc={element.task}/>
            </div>
        )
    })

    var affichTask=jobActive.task.map(element=>{
        return(
            <div>
                <Tasks/>    

            </div>
        )

    })


  return (
    <div id="page2" className="page">
        <div className="title"><span className='spanNumber'>2.</span>Experience<div className="titleLine"></div></div>
        <div id="blocParcours">
            <div id="menuXP">
                {setJobsButtons}
            </div>
            <div id="affichXP">
                <div>
                    {jobActive.description}
                </div>
                <div>
                {affichTask}                  </div>
            </div>


        </div>
    </div>
  )
}

export default Experience