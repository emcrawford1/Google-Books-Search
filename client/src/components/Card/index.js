import React from "react";


function Card(props) {
  return (
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={props.image} class="card-img" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
        <p class="card-text"><small class="text-muted">{props.authors}</small></p>
        <p class="card-text"><small class="text-muted">{props.link}</small></p>
      </div>
    </div>
  </div>
</div>
  );
}


export default Card;