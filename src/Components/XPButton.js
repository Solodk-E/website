import React from "react";

function XPButton(props) {
  
  var activateJob = (name, entreprise, description, titre, date, task) => {
    props.propButton(name, entreprise, description, titre, date, task);
  };

  return (
    <div
      id={props.propStyle}
      onClick={() => activateJob(
          props.propName,
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
