import { useState } from "react";
import BooleanQuiz from "./BooleanQuiz";
import MultipleQuiz from "./MultipleQuiz";

function MainPage({ setPage, quizData, setPoints }) {
  const returnToHomepage = function () {
    setPage("HomePage");
  };
  const [quizNum, setQuizNum] = useState(0);
  const selectAnswer = function (e) {
    if (quizData[0].correctAnswer == e.target.textContent) {
      setPoints((prevPoint) => prevPoint + 1);
      console.log("Yeahy!! Correct!");
    }
    if (quizNum === quizData.length - 1) {
      setPage("FinalPage");
    } else {
      setQuizNum((prevQuizNum) => prevQuizNum + 1);
    }
  };

  return (
    <div>
      {quizData[quizNum].type === "boolean" && (
        <BooleanQuiz
          question={quizData[quizNum].question}
          selectAnswer={selectAnswer}
        />
      )}
      {quizData[quizNum].type === "multiple" && (
        <MultipleQuiz
          question={quizData[quizNum].question}
          answers={quizData[quizNum].answers}
          selectAnswer={selectAnswer}
        />
      )}
      <button onClick={returnToHomepage}>Start New Quiz!</button>
    </div>
  );
}
export default MainPage;
