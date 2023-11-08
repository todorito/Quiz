function MultipleQuiz({
  question,
  answers,
  selectAnswer,
  currentQuestion,
  numQuizs,
}) {
  return (
    <div className="place-content-center">
      <div>
        Question {currentQuestion + 1} out of {numQuizs}:
      </div>
      <h2
        className="text-2xl mb-2"
        dangerouslySetInnerHTML={{ __html: `${question}` }}
      ></h2>
      <div className="flex justify-center flex-wrap">
        <button
          className="p-3 m-2 rounded-lg text-xl bg-yellow-500 border-2 border-emerald-400 hover:bg-yellow-400 hover:border-4 basis-2/4"
          onClick={selectAnswer}
          dangerouslySetInnerHTML={{ __html: `${answers[0]}` }}
        ></button>
        <button
          className="p-3 m-2 rounded-lg text-xl bg-yellow-500 border-2 border-emerald-400 hover:bg-yellow-400 hover:border-4 basis-2/4"
          onClick={selectAnswer}
          dangerouslySetInnerHTML={{ __html: `${answers[1]}` }}
        ></button>
        <button
          className="p-3 m-2 rounded-lg text-xl bg-yellow-500 border-2 border-emerald-400 hover:bg-yellow-400 hover:border-4 basis-2/4"
          onClick={selectAnswer}
          dangerouslySetInnerHTML={{ __html: `${answers[2]}` }}
        ></button>
        <button
          className="p-3 m-2 rounded-lg text-xl bg-yellow-500 border-2 border-emerald-400 hover:bg-yellow-400 hover:border-4 basis-2/4"
          onClick={selectAnswer}
          dangerouslySetInnerHTML={{ __html: `${answers[3]}` }}
        ></button>
      </div>
    </div>
  );
}

export default MultipleQuiz;
