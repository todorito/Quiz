import { useState } from "react";
import FinalPage from "./components/FinalPage";
import HomePage from "./components/HomePage";
import MainPage from "./components/MainPage";
import DoodleImage from "./img/doodles.png";

function App() {
  const [page, setPage] = useState("HomePage");
  const [quizData, setQuizData] = useState({});
  const [points, setPoints] = useState(0);

  const getQuestions = async function (number, category, type) {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${number}&category=${category}&type=${type}`
    );
    const data = await response.json();

    let quizs = [];
    for (let i = 0; i < data.results.length; i++) {
      console.log(
        data.results[i].type,
        data.results[i].question,
        data.results[i].correct_answer,
        data.results[i].incorrect_answers
      );

      quizs.push({
        question: data.results[i].question,
        answers: [
          data.results[i].correct_answer,
          ...data.results[i].incorrect_answers,
        ].sort((a, b) => 0.5 - Math.random()),
        correctAnswer: data.results[i].correct_answer,
        type: data.results[i].type,
      });
    }

    setQuizData(quizs);
    setPage("MainPage");
  };
  document.body.style.backgroundImage = `url(${DoodleImage})`;

  return (
    <div className="w-3/5 m-auto mt-[10%] bg-pink-400 font-mono h-[50vh]">
      <div className="p-[2%] h-full">
        {page === "HomePage" && <HomePage getQuestions={getQuestions} />}
        {page === "MainPage" && (
          <MainPage
            setPage={setPage}
            quizData={quizData}
            setPoints={setPoints}
          />
        )}
        {page === "FinalPage" && (
          <FinalPage
            setPage={setPage}
            points={points}
            numberQuizs={quizData.length}
            setPoints={setPoints}
          />
        )}
      </div>
    </div>
  );
}

export default App;
