import { useState } from "react";
import Quiz from "./Quiz";
import { QuizContext } from "./QuizContext";

function App() {

  const [selectedAnswer, setSelectedAnswer] =
    useState("");

  return (
    <QuizContext.Provider
      value={{
        selectedAnswer,
        setSelectedAnswer
      }}
    >
      <Quiz />
    </QuizContext.Provider>
  );
}

export default App;