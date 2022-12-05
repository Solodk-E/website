import React, {useEffect, useState} from "react";
import Slide from "../Components/Slide";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";


var dataRea=[
  {
    image:"./imagePortfolio.png",
    alt:"Elton Solodki portfolio screenschot",
    title:"PORTFOLIO",
    githubLink:"https://github.com/Solodk-E/website",
    websiteLink:"http://www.eltonsolodki.com",
    description:"J'ai réalisé ce portfolio en m'inspirant de celui de Brittany Chiang, que je trouvais très esthétique. Les technologies employées sont toutefois différentes. Ainsi, je n'ai pas utiliser les styled-components. J'ai repris peu d'éléments du code-source, principalement des proportions et des valeurs.",
    langages:"Javascript, html",
    frontend:"React, css vanilla",
    backend:"Pas de backend",
    librairies:"React-routeur-dom, react icons"
  },
  {
    image:"./imagePortfolio.png",
    alt:"Elton Solodki portfolio screenschot",
    title:"Exemple2",
    githubLink:"https://github.com/Solodk-E/website",
    websiteLink:"http://www.eltonsolodki.com",
    description:"J'ai réalisé ce portfolio en m'inspirant de celui de Brittany Chiang, que je trouvais très esthétique. Les technologies employées sont toutefois différentes. Ainsi, je n'ai pas utiliser les styled-components. J'ai repris peu d'éléments du code-source, principalement des proportions et des valeurs.",
    langages:"Javascript, html",
    frontend:"React, css vanilla",
    backend:"Pas de backend",
    librairies:"React-routeur-dom, react icons"
  },
  {
    image:"./imagePortfolio.png",
    alt:"Elton Solodki portfolio screenschot",
    title:"Exemple3",
    githubLink:"https://github.com/Solodk-E/website",
    websiteLink:"http://www.eltonsolodki.com",
    description:"J'ai réalisé ce portfolio en m'inspirant de celui de Brittany Chiang, que je trouvais très esthétique. Les technologies employées sont toutefois différentes. Ainsi, je n'ai pas utiliser les styled-components. J'ai repris peu d'éléments du code-source, principalement des proportions et des valeurs.",
    langages:"Javascript, html",
    frontend:"React, css vanilla",
    backend:"Pas de backend",
    librairies:"React-routeur-dom, react icons"
  }
]

function Realisations() {

const [slideRea, setSlideRea]= useState(dataRea);
const [activeRea, setActiveRea]=useState(slideRea[0]);
const [page, setPage]=useState(0)

var nextRea = ()=>{
  page === slideRea.length-1? setPage(0) : setPage(page+1)
}

var previousRea = ()=>{
  page === 0 ? setPage(slideRea.length-1) : setPage(page -1);
}

useEffect(()=>{
  setActiveRea(slideRea[page]);
},[page])


  return (
    <div id="page3" className="page">
      <div className="title" id="titleRea">
        <span className="spanNumber">3.</span>Réalisations
        <div className="titleLine"></div>
      </div>
      <div id="slideshow">
        <div className="cadreArrow">
        <AiOutlineCaretLeft
            className="arrow" onClick={()=>{previousRea()}}
        />
        </div>
        <div>
            <Slide
            propImage={activeRea.image}
            propAlt={activeRea.alt}
            propTitle={activeRea.title}
            propGit={activeRea.githubLink}
            propWebLink={activeRea.websiteLink}
            propDescription={activeRea.description}
            propLangages={activeRea.langages}
            propFront={activeRea.frontend}
            propBack={activeRea.backend}
            propLib={activeRea.librairies}
        />
        </div>
        <div className="cadreArrow">
        <AiOutlineCaretRight
            className="arrow" onClick={()=>{nextRea()}}/>
        </div>
      </div>
    </div>
  );
}

export default Realisations;
