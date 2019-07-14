import React, { Component } from "react";
import images from "./images.json";
import Wrapper from "./components/Wrapper";
import ImageCard from "./components/ImageCard";

class App extends Component{
  state = {
    images
  };

  render() {
    return ( 
      <Wrapper>
        {this.state.images.map(images => (
          <ImageCard
            image={images.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
