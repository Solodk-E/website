import React from 'react'

function Navbar() {
  return (
    <section id="navBar">
        <div id="homeLogo"></div>
        <ol>
            <li className="ligneSommaire"><span>1.</span> A propos de moi</li>
            <li className="ligneSommaire"><span>2.</span> Experience</li>
            <li className="ligneSommaire"><span>3.</span> Réalisations</li>
            <li className="ligneSommaire"><span>4.</span> Etudes</li>
            <li className="ligneSommaire"><span>5.</span> Contact</li>
        </ol>
        <div id="resume">En resumé</div>
    </section>
  )
}

export default Navbar