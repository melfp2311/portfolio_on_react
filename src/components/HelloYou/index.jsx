import React from "react";
import "./styles.css"


function HelloYou(){
    return (
<div className="container">
    <div className="row">
      <div className="col-lg-6 col-sm-12">
      <img src="../../assets/Images/hello you..png" className="img-fluid" alt="Responsive image"/>
    </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-sm-12">
        <p> I’m Melissa.</p>
        <p>I started studying communications a couple years ago, freshly graduated from high school and with no idea of what I wanted to do in life (like most of us).</p> 
        <p>After graduation, I worked for various media companies and premium publishers like Expansion, ELLE and Martha Debayle, and I currently work as an Account Manager at Taboola, a content discovery platform.</p> 
        <p>I’ve always had cravings for a project that was 100% mine; and now, after years of being curious,and a little intimidated, I decided to start a coding bootcamp. At first it was all about my strategic master plan, but it quickly turned into something more, and it has been life-changing.</p>
        <p>What started out as a hobby and coding side gig then became a way of connecting with people all around the world. If there's anything amazing about programming, it is the ability to create anything imagined. It's challenging, fulfilling, and of course a major headache yet worth every ounce of effort.</p>
      </div>
      <div className="col-lg-6 col-sm-12">
        <img src="../../assets/Images/about-me-img.png" className="img-fluid" alt="about-me-image"/>
      </div>
    </div>
</div>
    )
}

export default HelloYou;