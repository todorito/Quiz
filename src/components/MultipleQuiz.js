function MultipleQuiz({
  question,
  answers,
  selectAnswer,
  correctAnswer,
  currentQuestion,
  numQuizs,
  selectedAnswer,
}) {
  const defaultClass =
    "p-3 m-2 rounded-lg text-xl bg-yellow-500 border-2 border-emerald-400 hover:bg-yellow-400 basis-2/4";
  const buttons = answers.map((answer) => {
    let cls;

    if (selectedAnswer == null) {
      cls = defaultClass;
    } else if (selectedAnswer === answer) {
      if (selectedAnswer === correctAnswer) {
        cls =
          "p-3 m-2 rounded-lg text-xl bg-lime-500 border-2 border-emerald-400 hover:bg-lime-500 basis-2/4";
      } else if (selectedAnswer !== correctAnswer) {
        cls =
          "p-3 m-2 rounded-lg text-xl bg-red-500 border-2 border-red-500 hover:bg-red-500 basis-2/4";
      }
    } else {
      if (answer === correctAnswer) {
        cls =
          "p-3 m-2 rounded-lg text-xl bg-lime-500 border-2 border-emerald-400 hover:bg-lime-500 basis-2/4";
      } else {
        cls = defaultClass;
      }
    }

    return (
      <button
        className={cls}
        onClick={selectAnswer}
        dangerouslySetInnerHTML={{ __html: `${answer}` }}
      ></button>
    );
  });

  return (
    <div className="place-content-center">
      <div>
        Question {currentQuestion + 1} out of {numQuizs}:
      </div>
      <h2
        className="text-2xl mb-2"
        dangerouslySetInnerHTML={{ __html: `${question}` }}
      ></h2>
      <div className="flex justify-center flex-wrap">{buttons}</div>
    </div>
  );
}

export default MultipleQuiz;
