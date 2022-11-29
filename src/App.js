import './App.css';
import { useEffect, useRef } from 'react';
import { gsap} from 'gsap';
import Navbar from './Navbar';
import Social from './Social';
import Mail from './Mail';
import Accroche from './Accroche';
import APropos from './APropos';
import Experience from './Experience';
import Contact from './Contact';
import Studies from './Studies'

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
       <Studies/>
       <Contact/>
      </section>
      <Mail/>
      <Social/>
    </div>
  );
}

export default App;
