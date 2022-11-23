import React from 'react'

function Navbar() {
  return (
    <section id="navBar">
        <div id="homeLogo">LOGO</div>
        <div id="blocDroitNav">
        <ol id="blocLignes">
            <li className="ligneSommaire"><span className='buttonMenu'>1.</span> A propos de moi</li>
            <li className="ligneSommaire"><span className='buttonMenu'>2.</span> Experience</li>
            <li className="ligneSommaire"><span className='buttonMenu'>3.</span> Réalisations</li>
            <li className="ligneSommaire"><span className='buttonMenu'>4.</span> Etudes</li>
            <li className="ligneSommaire"><span className='buttonMenu'>5.</span> Contact</li>
        </ol>
        <a id="resume" href="/CV-Elton Solodki-Dev.pdf" target="_blank" rel="noopener noreferrer">En resumé</a>
        </div>
    </section>
  )
}

export default Navbar