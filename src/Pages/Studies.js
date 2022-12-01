import React, { useState } from "react";
import Diplome from "../Components/Diplome";

var dataDip = [
  { date: "xxxxxxxx", nom: "ssssssss", lieu: "qsdsqdqsdsqd" },
  { date: "xxxxxxxx", nom: "ssssssss", lieu: "qsdsqdqsdsqd" },
  { date: "xxxxxxxx", nom: "ssssssss", lieu: "qsdsqdqsdsqd" },
  { date: "xxxxxxxx", nom: "ssssssss", lieu: "qsdsqdqsdsqd" },
];

function Studies() {
  const [dip, setDip] = useState(dataDip);

  var affichDip = dip.map((element) => {
    return (
      <Diplome
        propDate={element.date}
        propNom={element.nom}
        propLieu={element.lieu}
      />
    );
  });

  return (
    <div id="page4" className="page">
      <div className="title">
        <span className="spanNumber">4.</span>Scolarité
        <div className="titleLine"></div>
      </div>

      <div id="scol">{affichDip}</div>
    </div>
  );
}

export default Studies;
