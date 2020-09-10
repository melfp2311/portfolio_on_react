import React from "react";
import "./styles.css"


function AndMe(){
    return (
<div className="container">
  <div className="row">
      <div className="col-lg-3 col-sm-0"></div>
      <div className="col-lg-6 col-sm-12">
      <img src="../../assets/Images/and me.png" className="img-fluid" alt="and-me-title"/> 
      <div className="col-lg-3 col-sm-0"></div>
    </div>
    </div>
    <div className="row" >
      <div className="col-3"></div>
      <div className="col-lg-6 col-sm-12" className="text-center" className="mx-auto">
        <p>I’m a Cuban living in Mexico City in the continuos search of new things to learn while taking calculated risks.</p>
        <p>I have: 3 vigorous cats that eat whatever they stumble upon, 6 very eclectic friends, a continuous flow of never ending work and a not so secret obsession for The Beatles.</p>
        <p>I’m also in love with wine, music, rain, lipstick dancing and coffee; in no particular order.</p>
      </div>
      <div className="col-3"></div>
    </div>
</div>
    )
}

export default AndMe;