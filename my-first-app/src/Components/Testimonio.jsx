import React from "react";
import '../stylesheets/Testimonio.css';

function Testimonio(props){
  return (
    <div className="testimony-container">
        <div className="testimony-content-content">
          <img className="testimonial-image img-loaded" src={require(`../img/testimonio-${props.image}.png`)} alt={props.name} />
          <div className="testimony-content">
            <div className="testimony-info-user">
              <p className="testimony-name">
                <strong>{props.name}</strong> 
                <span> at {props.country}</span>
              </p>
              <p className="testimony-work">
                <span>{props.job} at </span> 
                <strong>{props.company}</strong>
              </p>
            </div>
            <div className="testimony">
              <p className="testimony-description">{props.testimony}"</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Testimonio;