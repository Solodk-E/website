import './App.css';
import { useEffect, useRef } from 'react';
import { gsap} from 'gsap';


function App() {
  return (
    <div className="App">
      <section id="navBar">
        Navbar
      </section>
      <section className="nextSection">
        <div id="page1" className="page">
          A propos
        </div>
        <div id="page2" className="page">
          Experience
        </div>
        <div id="page3" className="page">
          Réalisations
        </div>
        <div id="page4" className="page">
          Etudes
        </div>
        <div id="page5" className="page">
          Contact
        </div>
      </section>
      <section id="mailLink">
        Lien mail
      </section>
      <section id="social">
        Social
      </section>
    </div>
  );
}

export default App;
