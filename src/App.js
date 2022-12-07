import "../src/Design/App.css";
import "../src/Design/Responsive-1400.css";
import "../src/Design/Responsive-400.css";
import "../src/Design/Responsive-300.css";
import Navbar from "../src/Components/Navbar";
import Social from "../src/Components/Social";
import Mail from "../src/Components/Mail";
import Accroche from "../src/Pages/Accroche";
import APropos from "./Pages/APropos";
import Experience from "../src/Pages/Experience";
import Contact from "../src/Pages/Contact";
import Studies from "../src/Pages/Studies";
import Realisations from "../src/Pages/Realisations";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <section className="nextSection">
          <Accroche />
          <APropos />
          <Experience />
          <Realisations />
          <Studies />
          <Contact />
        </section>
        <Mail />
        <Social />
      </div>
        
    </BrowserRouter>
  );
}

export default App;
