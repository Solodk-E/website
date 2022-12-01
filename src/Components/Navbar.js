import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <section id="navBar">
      <div id="homeLogo">
        <Link to="#page0" className="navLink2">
          <img id="logo" src="logo.png" alt="Elton Solodki Logo" />
        </Link>
      </div>
      <div id="blocDroitNav">
        <ol id="blocLignes">
          <li className="ligneSommaire">
            <Link
              to="#page1"
              className="navLink"
              style={{ textDecoration: "none" }}
            >
              <span className="buttonMenu">1.</span>A propos de moi
            </Link>
          </li>
          <li className="ligneSommaire">
            <Link to="#page2" className="navLink">
              <span className="buttonMenu">2.</span> Experience
            </Link>
          </li>
          <li className="ligneSommaire">
            <Link to="#page3" className="navLink">
              <span className="buttonMenu">3.</span> Réalisations
            </Link>
          </li>
          <li className="ligneSommaire">
            <Link to="#page4" className="navLink">
              <span className="buttonMenu">4.</span> Etudes
            </Link>
          </li>
          <li className="ligneSommaire">
            <Link to="#page5" className="navLink">
              <span className="buttonMenu">5.</span> Contact
            </Link>
          </li>
        </ol>
        <a
          id="resume"
          href="/CV-Elton Solodki-Dev.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          En resumé
        </a>
      </div>
    </section>
  );
}

export default Navbar;
