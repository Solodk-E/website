import React, {useState } from "react";
import XPButton from "../Components/XPButton";
import JobCard from "../Components/JobCard";

var dataJobs = [
  {
    name: "job1",
    description:
      "Deserunt deserunt et mollit cupidatat labore aliqua excepteur tempor. Consectetur non adipisicing enim ut sunt. Amet ad in et tempor culpa nostrud. Tempor velit aliqua consectetur eu voluptate amet consectetur aliqua amet velit officia. Ullamco qui in amet cupidatat ad esse cupidatat et laboris. Pariatur dolore quis in qui voluptate sit sunt fugiat tempor aliquip aute. Officia non do duis exercitation et.",
    titre: "dev",
    task: ["task1", "task2"],
    entreprise: "Insee",
    date: "2022",
  },
  {
    name: "job2",
    description: "Lorsfsdffdfs",
    titre: "dev2",
    task: ["task3", "task4"],
    entreprise: "Insee",
    date: "2022",
  },
  {
    name: "job3",
    description: "sdfsdffdsfdfs",
    titre: "dev3",
    task: ["task5", "task6"],
    entreprise: "Educ",
    date: "2022",
  },
];

function Experience(props) {
  const [jobs, setJobs] = useState(dataJobs);
  const [jobActive, setJobActive] = useState({
    name: "job1",
    description: "Loremdfsdfdsfdfs",
    titre: "dev",
    task: ["task1", "task2"],
    entreprise: "Insee",
    date: "2022",
  });

  var affichActiveJob = (
    name,
    entreprise,
    description,
    titre,
    date,
    task,
    style
  ) => {
    setJobActive({
      name: name,
      entreprise: entreprise,
      description: description,
      titre: titre,
      date: date,
      task: task,
      style: "xpFocus",
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
        <span className="spanNumber">2.</span>Experience
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
