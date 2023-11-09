import { useState } from "react";
import FinalPage from "./components/FinalPage";
import HomePage from "./components/HomePage";
import MainPage from "./components/MainPage";
import DoodleImage from "./img/doodles.png";
import DoodleImage2 from "./img/doodles2.jpg";

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

  if (window.innerWidth > 640) {
    document.body.style.backgroundImage = `url(${DoodleImage})`;
  } else {
    document.body.style.backgroundImage = `url(${DoodleImage2})`;
  }

  return (
    <div className="md:w-3/5 m-auto md:mt-[10%] mt-[20%] bg-pink-400 font-mono">
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
