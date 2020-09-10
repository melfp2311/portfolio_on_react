import React from "react";
import "./styles.css"


function ContactInfo(){
    return (
<div className="container">
<div class="row">
      <div class="col-lg-6 col-sm-12">
      <img src="../../assets/Images/contact.png" class="img-fluid" alt="Responsive image"/>
    </div>
    </div>      
    
  <div class="row">
    <div class="col-lg-6 col-sm-12">
          <h5>email.</h5>
          <a href="mailto:mel.floresp@gmail.com">mel.floresp@gmail.com</a>
          <a href="https://www.linkedin.com/in/melissa-flores-prieto-08573b109/">LinkedIn</a>
          <a href="https://github.com/melfp2311">GitHub profile</a>
          {/* <!-- //QUOTE HERE --> */}
    </div>

    <div class="col-lg-6 col-sm-12">
      <ul class="list-unstyled">
        <h5>snail mail.</h5>
        <li>Melissa Flores</li>
        <li>Varsovia 36, Colonia Juárez</li>
        <li>Del. Cuauhtemoc</li>
        <li>Mexico City, Mexico</li>
        <li>PC 52900</li>
      </ul>
</div>

  </div>  
</div>
    )
}

export default ContactInfo;