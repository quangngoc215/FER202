import React, { Component } from "react";
import Question from "./Question";
import Score from "./Score";

class QuizApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        {
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          correctAnswer: "Paris",
        },
        {
          question: "What is the largest planet?",
          options: ["Earth", "Mars", "Jupiter", "Venus"],
          correctAnswer: "Jupiter",
        },
        {
          question: "Which language is used for React?",
          options: ["Python", "JavaScript", "C++", "Java"],
          correctAnswer: "JavaScript",
        },
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
    };
  }

  handleAnswer = (selectedAnswer) => {
    const currentQuestionData =
      this.state.questions[this.state.currentQuestion];

    if (selectedAnswer === currentQuestionData.correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }

    const nextQuestion = this.state.currentQuestion + 1;

    if (nextQuestion < this.state.questions.length) {
      this.setState({
        currentQuestion: nextQuestion,
      });
    } else {
      this.setState({
        quizEnd: true,
      });
    }
  };

  restartQuiz = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
    });
  };

  render() {
    const currentQuestionData =
      this.state.questions[this.state.currentQuestion];

    return (
      <div>
        <h1>React Quiz App</h1>

        {this.state.quizEnd ? (
          <Score
            score={this.state.score}
            totalQuestions={this.state.questions.length}
            restartQuiz={this.restartQuiz}
          />
        ) : (
          <Question
            questionData={currentQuestionData}
            questionNumber={this.state.currentQuestion + 1}
            handleAnswer={this.handleAnswer}
          />
        )}
      </div>
    );
  }
}

export default QuizApp;