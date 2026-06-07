import React, { Component } from "react";

class Question extends Component {
  render() {
    return (
      <div>
        <h2>Question {this.props.questionNumber}</h2>

        <h3>{this.props.questionData.question}</h3>

        {this.props.questionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => this.props.handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

export default Question;