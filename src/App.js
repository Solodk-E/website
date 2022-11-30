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
import Studies from './Studies';
import Realisations from './Realisations';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
        <Navbar/>
    
      <section className="nextSection">
        <Accroche/>
        <APropos/>
        <Experience/>
        <Realisations/>
       <Studies/>
       <Contact/>
      </section>
      <Mail/>
      <Social/>
    </div>
    </BrowserRouter>
  );
}

export default App;
