import React from "react";

// const cardStyle = {
//   // maxWidth: "1000px"
// }

function Card(props) {
  return (
    
  <div className="row no-gutters">
    <div className="col-md-2">
      <img src={props.image} className="card-img" alt="..." />
    </div>
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text"><small className="text-muted">{props.authors}</small></p>
        <p className="card-text"><small className="text-muted"><a href={props.link}>{props.link}</a></small></p>
      </div>
    </div>
  </div>
  
  );
}


export default Card;