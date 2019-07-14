import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img className ="button" className="btn btn-outline-secondary" alt={props.id} src={props.image} />
      </div>
    </div>
  );
}

export default ImageCard;
