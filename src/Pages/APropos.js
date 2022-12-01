import React from "react";

function APropos() {
  return (
    <div id="page1" className="page">
      <div id="apropos">
        <div className="title">
          <span className="spanNumber">1.</span> Qui suis-je?
          <div className="titleLine"></div>
        </div>
        <div id="corpus">
          <div id="leftCorpus">
            <div id="description">
              <p>
              Animé par la passion du code et des nouvelles technologies, je mets le cap vers vers de nouveaux horizons: ceux de développement web et mobile.
              </p>

              <p>
              Je vous aiderai à concrétiser vos projets en mettant à votre services mes compétences en Javascript, React, React Native ou bien encore Node JS.
              </p>

              <p>
              Ensemble, nous pourrons créer et innover.
              </p>
            </div>
          </div>
          <div id="rightCorpus">
            <img
              id="photoProfil2"
              src="photoProfil.png"
              alt="Elton Solodki dev fullstack Node-React-React Native"
            />
            <div id="cadre"></div>
          </div>
        </div>
        <div id="stackTechnique">
          <div className="colTech">
            <ul className="colList">
              <li>Javascript</li>
              <li>HTML / CSS</li>
              <li>Boostrap / Ant Design</li>
            </ul>
          </div>
          <div>
            <div className="colTech">
              <ul className="colList">
                <li>React JS</li>
                <li>React Native</li>
                <li>Node JS </li>
              </ul>
            </div>
          </div>
          <div className="colTech">
            <ul className="colList">
              <li>MongoDB</li>
              <li>Git / Github / Gitlab</li>
              <li>Agilité (Kanban, daily etc)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default APropos;
