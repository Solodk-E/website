import React, {useState } from "react";
import XPButton from "../Components/XPButton";
import JobCard from "../Components/JobCard";

var dataJobs = [
  {
    name: "Insee",
    service:"SNDIP",
    description:
      "Affecté à la maintenance évolutive et corrective de Sirence.fr, ainsi qu'à la mise en route d'Osprey, application interne d'administation.",
    titre: "Developpeur",
    task: ["Corrections et ajouts de nouvelles fonctionnalités sur Sirene.fr. Tâches aussi bien front-end en HTML/CSS/Javascript que back-end en Java (framwork Struts 2)."
          , "Poursuite de la partie Front-end du projet Osprey, application interne d'administration, en React."
          , "Versioning et partage du code grâce à Git et Gitlab"
          , "Tout le processus fonctionne selon les règles de l'agilité: utilisation d'un Kanban, daily de l'équipe, réunions bi-hebdomadaires avec le métier, sprints, etc"],
    entreprise: "INSEE",
    date: "septembre 2020 - "
  },
  {
    name: "MEN",
    service:"MCSPD",
    description: "Au service des dépenses et des moyens, je m'occupais de passer commande auprès des fournisseurs et d'effectuer les demandes de mises en paiement",
    titre: "Gestionnaire financier",
    task: ["Je m'occupais d'une partie des dépenses du ministère relatives à l'informatique: matériel, formation, licences, etc"
          , "Le montant de l'ensemble de mes portefeuilles avoisinnait les 60 millions d'euros"
          , " J'étais en contact avec les fournisseurs et les services informatiques" ],
    entreprise: "Ministère de l'Education Nationale",
    date: "mars 2018 - mai 2020",
  },
  {
    name: "Insee",
    service:"CSP",
    description: "Au sein du service des dépenses je passais commande auprès des fournisseurs et j'effectuais les demandes de mise en paiement",
    titre: "Gestionnaire financier",
    task: ["Portefeuille regroupant les locations de véhicule dans le cadre du recensement de la population"
          , "Reporting, travail d'équipe"],
    entreprise: "INSEE",
    date: "septembre 2010 - février 2018",
  },
];

function Experience(props) {
  const [jobs, setJobs] = useState(dataJobs);
  const [jobActive, setJobActive] = useState(
    dataJobs[0]
  );

  var affichActiveJob = (
    name,
    service,
    entreprise,
    description,
    titre,
    date,
    task,
  ) => {setJobActive({
          name: name,
          service:service,
          entreprise: entreprise,
          description: description,
          titre: titre,
          date: date,
          task: task,
        });
        };

  var setJobsButtons = jobs.map((element) => {
    
    var buttonStyle;
    element.name === jobActive.name && element.service === jobActive.service ? (buttonStyle = "xpFocus") : (buttonStyle = "xpButton");

    return (
      <XPButton
        propButton={affichActiveJob}
        propName={element.name}
        propService={element.service}
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
