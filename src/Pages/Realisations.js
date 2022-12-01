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
          <img id="photoRea" src="./imagePortfolio.jpg" alt="Elton Solodki portfolio screenschot"/>
        </div>
        <div id="reaDoc">
          <div id="reaFirst">
            <div id="reaTitle">ezrezrezre</div>
            <div id="reaLinks">
              <a href="https://github.com/Solodk-E" target="_blank" rel="noopener noreferrer">
                <FiGithub className="icon" />
              </a>
              <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                <BsFolderSymlink className="icon" />
              </a>
            </div>
          </div>
          <div id="reaText">
            Deserunonsectetur ex proident aliqua ut laboris ullamco deserunt
            anim. Est elit aute ad aliqua quis elit velit anim adipisicing velit
            velit. Eu cupidatat sunt tempor adipisicing ad sit voluptate eiusmod
            deserunt.
          </div>
          <div id="reaTech">
            <div id="realines">
              <div>
              <div className="reaTechLine">
                Langages: <span className="reatechPoint">dfsdffdsf</span>
              </div>
              <div className="reaTechLine">
                Front End: <span className="reatechPoint">dfsdffdsf</span>
              </div>
              </div>
              <div>
              <div className="reaTechLine">
                Back End: <span className="reatechPoint">dfsdffdsf</span>
              </div>
              <div className="reaTechLine">
                Librairies: <span className="reatechPoint">dfsdffdsf</span>
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
