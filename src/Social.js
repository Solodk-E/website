import React from 'react'
import {FiGithub, FiLinkedin} from"react-icons/fi"


function Social() {
  return (
    <section id="social">
      <a><FiGithub className="icon"/></a>
       <a><FiLinkedin className="icon"/></a>
       <div id="finbarre"></div>
    </section>
  )
}

export default Social