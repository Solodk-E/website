import React, { useState } from "react";
import Diplome from "../Components/Diplome";

var dataDip = [
  { date: "2021", nom: "Certification Programmeur", lieu: "Ministère de l'Economie et des Finances" },
  { date: "2020", nom: "Titre RNCP niveau 6 (bac +3/+4) de développeur fullstack web/mobile et chef de projet", lieu: "La Capsule, Paris" },
  { date: "2001", nom: "Licence d'Histoire", lieu: "Université de Nantes" },
  { date: "1997", nom: "Bac L", lieu: "Lycée Clemenceau, Nantes" },
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
