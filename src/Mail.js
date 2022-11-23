import React from 'react'

function Mail() {

const email="solodk-e-dev@gmail.com"


  return (
    <section id="mailLink">
        <a id="mailRedac" href={`mailto:${email}`}>{email}</a>
        <div className="finbarre"></div>
      </section>
  )
}

export default Mail