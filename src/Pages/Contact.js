import React from "react";

function Contact() {
  const email = "elton.solodki@gmail.com";
  return (
    <div id="page5" className="page">
      <div className="title2">
        <span className="spanNumber">5.</span>Contact
        <div className="titleLine"></div>
      </div>
      <div id="messageAccroche">
      <p>  
      Pour mettre en place une future collaboration ou simplement pour discuter, vous pouvez toujours me contacter!
      </p>
      <p>
      A bientôt!
      </p>  
        
      </div>
      
      <div id="cadreButton">
        <a id="resume2" href={`mailto:${email}`}>
        Envoyer un message
        </a>
      </div>
    </div>
  );
}

export default Contact;
