import React from "react";
import { FiGithub } from "react-icons/fi";
import { BsFolderSymlink } from "react-icons/bs";

function Realisations() {
  return (
    <div id="page3" className="page">
      <div className="title" id="titleRea">
        <span className="spanNumber">3.</span>Réalisations
        <div className="titleLine"></div>
      </div>
      <div id="reaAff">
        <div id="cadreIll">
          <img id="photoRea" src="./imagePortfolio.png" alt="Elton Solodki portfolio screenschot"/>
        </div>
        <div id="reaDoc">
          <div id="reaFirst">
            <div id="reaTitle">PORTFOLIO</div>
            <div id="reaLinks">
              <a id="git" href="https://github.com/Solodk-E/website" target="_blank" rel="noopener noreferrer">
                <FiGithub className="icon" />
              </a>
              <a id="lin" href="http://www.eltonsolodki.com" target="_blank" rel="noopener noreferrer">
                <BsFolderSymlink className="icon" />
              </a>
            </div>
          </div>
          <div id="reaText">
            J'ai réalisé ce portfolio en m'inspirant de celui de Brittany Chiang, que je trouvais très esthétique. Les technologies employées sont toutefois différentes. Ainsi, je n'ai pas utiliser les styled-components. J'ai repris peu d'éléments du code-source, principalement des proportions et des valeurs. 
          </div>
          <div id="reaTech">
            <div id="realines">
              <div>
              <div className="reaTechLine">
                Langages: <span className="reatechPoint">Javascript, html</span>
              </div>
              <div className="reaTechLine">
                Front End: <span className="reatechPoint">React, css vanilla</span>
              </div>
              </div>
              <div>
              <div className="reaTechLine">
                Back End: <span className="reatechPoint">Pas de backend</span>
              </div>
              <div className="reaTechLine">
                Librairies: <span className="reatechPoint">React-routeur-dom, react icons</span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Realisations;
