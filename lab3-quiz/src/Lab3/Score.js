import React, { Component } from "react";

class Score extends Component {
  render() {
    return (
      <div>
        <h1>Quiz Finished</h1>

        <h2>
          Your Score: {this.props.score} / {this.props.totalQuestions}
        </h2>

        <button onClick={this.props.restartQuiz}>
          Replay
        </button>
      </div>
    );
  }
}

export default Score;