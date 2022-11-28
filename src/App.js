import './App.css';
import { useEffect, useRef } from 'react';
import { gsap} from 'gsap';
import Navbar from './Navbar';
import Social from './Social';
import Mail from './Mail';
import Accroche from './Accroche';
import APropos from './APropos';
import Experience from './Experience';

function App() {
  return (
    <div className="App">
      
        <Navbar/>
    
      <section className="nextSection">
        <Accroche/>
        <APropos/>
        <Experience/>
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
      <Mail/>
      <Social/>
    </div>
  );
}

export default App;
