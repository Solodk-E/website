import React from "react";

function XPButton(props) {
  
  var activateJob = (name, service, entreprise, description, titre, date, task) => {
    props.propButton(name, service, entreprise, description, titre, date, task);
  };

  return (
    <div
      id={props.propStyle}
      onClick={() => activateJob(
          props.propName,
          props.propService,
          props.propEntreprise,
          props.propDescription,
          props.propTitre,
          props.propDate,
          props.propTask,
        )
      }
    >
      {props.propName}
    </div>
  );
}

export default XPButton;
