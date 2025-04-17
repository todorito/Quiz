function BooleanQuiz({
  question,
  selectAnswer,
  currentQuestion,
  numQuizs,
  correctAnswer,
  selectedAnswer,
}) {
  const getClassNames = (answer) => {
    const defaultCls =
      "p-3 m-2 text-xl rounded-lg bg-yellow-500 border-2 border-emerald-400 hover:bg-yellow-400 basis-1/4";
    const correctCls =
      "p-3 m-2 text-xl rounded-lg bg-lime-500 border-2 border-emerald-400 hover:bg-lime-500 basis-1/4";
    const wrongCls =
      "p-3 m-2 text-xl rounded-lg bg-red-500 border-2 border-red-500 hover:bg-red-500 basis-1/4";
    if (selectedAnswer === null) return defaultCls;
    if (selectedAnswer === correctAnswer && answer === selectedAnswer) {
      return correctCls;
    } else if (selectedAnswer !== correctAnswer && answer === selectedAnswer) {
      return wrongCls;
    } else {
      return defaultCls;
    }
  };

  return (
    <>
      <div className=" place-content-center">
        Question {currentQuestion + 1} out of {numQuizs}:
      </div>
      <h2
        className="text-2xl mb-[25%] md:m-[10%]"
        dangerouslySetInnerHTML={{ __html: `${question}` }}
      ></h2>
      <div className="flex justify-center">
        <button className={getClassNames("True")} onClick={selectAnswer}>
          True
        </button>
        <button className={getClassNames("False")} onClick={selectAnswer}>
          False
        </button>
      </div>
    </>
  );
}

export default BooleanQuiz;
