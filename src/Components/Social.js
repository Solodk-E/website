import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function Social() {
  return (
    <section id="social">
      <a href="https://github.com/Solodk-E" target="_blank" rel="noopener noreferrer">
        <FiGithub className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/elton-solodki-5b56a5219/" target="_blank" rel="noopener noreferrer">
        <FiLinkedin className="icon" />
      </a>
      <div className="finbarre"></div>
    </section>
  );
}

export default Social;
