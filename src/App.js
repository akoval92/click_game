import React, { Component } from "react";
import images from "./images.json";




class App extends Component{

  state = {
    images
  };

  render() {
    return ( 
    
      <div className="card">
      <div className="img-container">
    <div>
    {this.state.images.map(image => (
      <img src={image.image} key={image.id}/>
        ))}
        </div>
        </div>
        </div>
    )
  }
}

export default App;
