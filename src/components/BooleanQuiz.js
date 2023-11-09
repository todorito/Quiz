function BooleanQuiz({ question, selectAnswer, currentQuestion, numQuizs }) {
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
        <button
          className="md:p-3 p-5 m-2 text-xl rounded-lg bg-yellow-500 border-2 border-emerald-400 hover:bg-yellow-400 basis-1/4"
          onClick={selectAnswer}
        >
          True
        </button>
        <button
          className="p-3 m-2 text-xl rounded-lg bg-yellow-500 border-2 border-emerald-400 hover:bg-yellow-400 basis-1/4"
          onClick={selectAnswer}
        >
          False
        </button>
      </div>
    </>
  );
}

export default BooleanQuiz;
