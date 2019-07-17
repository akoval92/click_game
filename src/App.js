import React, { Component } from "react";
import images from "./images.json";
import Wrapper from "./components/Wrapper";
import ImageCard from "./components/ImageCard";
import Score from "./components/Score";

class App extends Component{
  state = {
    images
  };

  render() {
    return ( 
      <div>
      <Score />
      <Wrapper>
        {this.state.images.map(images => (
          <ImageCard
            image={images.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;