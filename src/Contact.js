import React from 'react'

function Contact() {
    const email="solodk-e-dev@gmail.com"
  return (
    <div id="page5" className="page">
        <div className="title2"><span className='spanNumber'>5.</span>Contact<div className="titleLine"></div></div>
         <div id="messageAccroche">Message</div>
         <div id="texteContact">Ipsum veniam enim adipisicing fugiat cillum dolore non. Laborum non aliquip cillum officia ex aliquip officia. Nisi ea enim sint est elit proident cupidatat eu pariatur esse. Culpa cillum excepteur sint sint ad magna veniam id. Eiusmod anim ipsum amet proident et adipisicing in ut anim consectetur amet aliquip duis tempor. Elit id ex ullamco sit mollit dolor nisi in anim ullamco culpa ullamco deserunt occaecat.</div>
         <div id="cadreButton">
         <a id="resume2" href={`mailto:${email}`}>En resumé</a>
         </div>
    </div>
  )
}

export default Contact