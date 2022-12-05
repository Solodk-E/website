import React from 'react'
import { FiGithub } from "react-icons/fi";
import { BsFolderSymlink } from "react-icons/bs";

function Slide(props) {
  return (
    <div id="reaAff">
    <div id="cadreIll">
      <img id="photoRea" src={props.propImage} alt={props.propAlt}/>
    </div>
    <div id="reaDoc">
      <div id="reaFirst">
        <div id="reaTitle">{props.propTitle}</div>
        <div id="reaLinks">
          <a id="git" href={props.propGit} target="_blank" rel="noopener noreferrer">
            <FiGithub className="icon" />
          </a>
          <a id="lin" href={props.propWebLink} target="_blank" rel="noopener noreferrer">
            <BsFolderSymlink className="icon" />
          </a>
        </div>
      </div>
      <div id="reaText">
        {props.propDescription} 
      </div>
      <div id="reaTech">
        <div id="realines">
          <div>
          <div className="reaTechLine">
            Langages: <span className="reatechPoint">{props.propLangages}</span>
          </div>
          <div className="reaTechLine">
            Front End: <span className="reatechPoint">{props.propFront}</span>
          </div>
          </div>
          <div>
          <div className="reaTechLine">
            Back End: <span className="reatechPoint">{props.propBack}</span>
          </div>
          <div className="reaTechLine">
            Librairies: <span className="reatechPoint">{props.propLib}</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Slide