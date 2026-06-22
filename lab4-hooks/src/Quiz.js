import React, {
  useState,
  useEffect,
  useContext
} from "react";

import { quizData } from "./quizData";
import { QuizContext } from "./QuizContext";

function Quiz() {

  const {
    selectedAnswer,
    setSelectedAnswer
  } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [score, setScore] =
    useState(0);

  const [showResult, setShowResult] =
    useState(false);

  useEffect(() => {
    console.log(
      "Current Question:",
      currentQuestion
    );
  }, [currentQuestion]);

  const handleNext = () => {

    if (
      selectedAnswer ===
      quizData[currentQuestion].correctAnswer
    ) {
      setScore(score + 1);
    }

    setSelectedAnswer("");

    if (
      currentQuestion + 1 <
      quizData.length
    ) {
      setCurrentQuestion(
        currentQuestion + 1
      );
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div>
        <h1>Quiz Completed!</h1>
        <h2>Your score: {score}</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>

      <h2>
        Question {currentQuestion + 1}
      </h2>

      <h3>
        {quizData[currentQuestion].question}
      </h3>

      {
        quizData[currentQuestion].answers.map(
          (answer, index) => (
            <div key={index}>
              <input
                type="radio"
                name="answer"
                value={answer}
                checked={
                  selectedAnswer === answer
                }
                onChange={(e) =>
                  setSelectedAnswer(
                    e.target.value
                  )
                }
              />
              {answer}
            </div>
          )
        )
      }

      <br />

      <button onClick={handleNext}>
        Next
      </button>

    </div>
  );
}

export default Quiz;