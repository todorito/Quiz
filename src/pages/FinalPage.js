function FinalPage({ setPage, points, setPoints, numberQuizs }) {
  const changePage = function () {
    setPage("HomePage");
    setPoints(0);
  };

  let percentage = (points * 100) / numberQuizs;
  return (
    <div className="h-full flex flex-col min-h-[50vh]">
      <h1 className="p-3 text-2xl bg-gray-200 w-full md:w-1/3 md:self-start rounded text-center">
        Your Score is: {points}, you got {Math.round(percentage)}% right
      </h1>
      <div className="text-xl md:mt-12 mt-[20%] text-center">
        {percentage > 80 && percentage == 80 && (
          <div>
            Wow! You're an expert!<span className="text-4xl"> 😎</span>
          </div>
        )}
        {percentage > 50 && percentage < 80 && (
          <div>
            Well Done! <span className="text-4xl"> 😉</span>
          </div>
        )}
        {percentage < 50 && percentage == 50 && (
          <div>
            I guess you could do better.. Better luck next time!
            <span className="text-4xl"> 🤯</span>
          </div>
        )}
      </div>
      <button
        className="font-medium p-3 px-5 m-2 text-2xl bg-orange-400 border-2 border-yellow-500 hover:bg-orange-300 hover:border-x-4 mt-auto mb-0 md:w-2/5 self-center"
        onClick={changePage}
      >
        Try again
      </button>
    </div>
  );
}

export default FinalPage;
