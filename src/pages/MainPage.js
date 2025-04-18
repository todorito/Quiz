import { useState } from "react";
import BooleanQuiz from "../components/BooleanQuiz";
import MultipleQuiz from "../components/MultipleQuiz";
import SuccessSound from "../assets/success.mp3";
import FailureSound from "../assets/failure.mp3";

function playSuccessSound() {
  const audio = new Audio(SuccessSound);
  audio.play();
}

function playFailureSound() {
  const audio = new Audio(FailureSound);
  audio.play();
}

function MainPage({ setPage, quizData, setPoints }) {
  const returnToHomepage = function () {
    setPoints(0);
    setPage("HomePage");
  };

  const [quizNum, setQuizNum] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const selectAnswer = function (e) {
    const el = e.target;
    setSelectedAnswer(el.textContent);
    if (quizData[quizNum].correctAnswer === el.textContent) {
      setPoints((prevPoint) => prevPoint + 1);
      !isMute && playSuccessSound();
    } else {
      !isMute && playFailureSound();
    }
    setTimeout(() => {
      setSelectedAnswer(null);
      if (quizNum === quizData.length - 1) {
        setPage("FinalPage");
      } else {
        setQuizNum((prevQuizNum) => prevQuizNum + 1);
      }
    }, 1000);
  };
  const [isMute, setIsMute] = useState(false);
  const toggleSound = function () {
    setIsMute(!isMute);
  };
  return (
    <div className="h-full flex flex-col">
      <div className="t-0 text-4xl" onClick={toggleSound}>
        {isMute ? "🔇" : "🔊"}
      </div>
      {quizData[quizNum].type === "boolean" && (
        <BooleanQuiz
          currentQuestion={quizNum}
          numQuizs={quizData.length}
          question={quizData[quizNum].question}
          selectAnswer={selectAnswer}
          selectedAnswer={selectedAnswer}
          correctAnswer={quizData[quizNum].correctAnswer}
        />
      )}
      {quizData[quizNum].type === "multiple" && (
        <MultipleQuiz
          currentQuestion={quizNum}
          numQuizs={quizData.length}
          question={quizData[quizNum].question}
          answers={quizData[quizNum].answers}
          correctAnswer={quizData[quizNum].correctAnswer}
          selectAnswer={selectAnswer}
          selectedAnswer={selectedAnswer}
        />
      )}
      <button
        className="font-normal p-3 px-5 m-2 text-xl bg-blue-300 border-2 border-slate-500 hover:font-semibold hover:bg-blue-400 hover:border-slate-400 md:mt-auto mb-0 md:w-2/5 self-start"
        onClick={returnToHomepage}
      >
        Start New Quiz!
      </button>
    </div>
  );
}
export default MainPage;
