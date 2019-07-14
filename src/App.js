import React, { Component } from "react";
import images from "./images.json";
import "./components/ImageCard/index";



class App extends Component{

  state = {
    images
  };

  render() {
    return ( 
      
      
      <div className="card">
        <h1 className="instructions">Click Game:</h1>
        <h2 className="instructions">Score points by clicking an image only once. Click twice and you lose!</h2>
        <h1 id="score">Score:</h1>
      <div className="image">
    <button className="btn btn-primary">
    {this.state.images.map(image => (
      <img src={image.image} key={image.id}/>
        ))}
        </button>
    <button className="btn btn-primary">
    {this.state.images.map(image => (
      <img src={image.image} key={image.id}/>
        ))}
        </button>
        </div>
        </div>
    )
  }
}

export default App;
