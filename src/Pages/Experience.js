import React, {useState } from "react";
import XPButton from "../Components/XPButton";
import JobCard from "../Components/JobCard";

var dataJobs = [
  {
    name: "job1",
    description:
      "Affecté à la maintenance évolutive et corrective de Sirence.fr, ainsi qu'à la mise en route d'Osprey, application d'administation interne",
    titre: "Developpeur",
    task: ["Corrections et ajouts de nouvelles fonctionnalités sur Sirene.fr. Tâches aussi bien front-end en HTML/CSS/Javascript que back-end en Java (framwork Struts 2).", "Poursuite du versan Front-end projet Osprey, application interne d'administrartion, en React.", "Tout le prcessus fonctionne selon les règles de l'agilité: utilisation d'un Kanban, daily de l'équipe, réunions bi-hebdomadaires avec le métier"],
    entreprise: "INSEE",
    date: "sept 2020 - ",
  },
  {
    name: "job2",
    description: "Lorsfsdffdfs",
    titre: "Gestionnaire financier",
    task: ["task3", "task4"],
    entreprise: "Ministère de l'Education Nationale",
    date: "mar 2018 - mai 2020",
  },
  {
    name: "job3",
    description: "",
    titre: "Gestionnaire financier",
    task: ["task5", "task6"],
    entreprise: "INSEE",
    date: "sept 2010 - fev 2018",
  },
];

function Experience(props) {
  const [jobs, setJobs] = useState(dataJobs);
  const [jobActive, setJobActive] = useState(
    dataJobs[0]
  );

  var affichActiveJob = (
    name,
    entreprise,
    description,
    titre,
    date,
    task,
  ) => {setJobActive({
          name: name,
          entreprise: entreprise,
          description: description,
          titre: titre,
          date: date,
          task: task,
        });
        };

  var setJobsButtons = jobs.map((element) => {
    
    var buttonStyle;
    element.name === jobActive.name ? (buttonStyle = "xpFocus") : (buttonStyle = "xpButton");

    return (
      <XPButton
        propButton={affichActiveJob}
        propName={element.name}
        propDescription={element.description}
        propTitre={element.titre}
        propEntreprise={element.entreprise}
        propDate={element.date}
        propTask={element.task}
        propStyle={buttonStyle}
      />
    );
  });

  return (
    <div id="page2" className="page">
      <div className="title">
        <span className="spanNumber">2.</span>Parcours professionnel
        <div className="titleLine"></div>
      </div>
      <div id="blocParcours">
        <div id="menuXP">{setJobsButtons}</div>
        <div id="affichXP">
          <JobCard
            propName={jobActive.name}
            propDesc={jobActive.description}
            propTitre={jobActive.titre}
            propDate={jobActive.date}
            propEntreprise={jobActive.entreprise}
            propTasks={jobActive.task}
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
