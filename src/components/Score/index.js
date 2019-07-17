import React from "react";

class Score extends React.Component {

  state = {
    score: 0
  };


// - IF user already clicked on the image
// - reset score to 0
// - display image already clicked message
// - ELSE user hasn't clicked that image yet
// - increase score
// - IF score > top Score, increase the top score too
// - update array for clicked image
// - shuffle the images array

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };

  handleDecrement = () => {
    this.setState({ score: this.state.score - 1 });
  };


  render() {
    return (
        <div className="container">
        <div className="row">
        <div className="card-body">
        <h2 className="game-text">Clicky Game</h2>
        <h4 className="game-text">Click each smiley only once to score a point.</h4>
        <h4 className="game-text">Click an image twice and your score drops back to 0!</h4>
        <div className="row">
        <h2 id="score">Score: {this.state.score} </h2>
        <h2 id="high-score">High Score: </h2>
        </div>
        </div>
        </div>
        </div>
    );
  }
}

export default Score;