function FinalPage({ setPage, points, setPoints }) {
  const changePage = function () {
    setPage("HomePage");
    setPoints(0);
  };
  return (
    <div>
      <h1>Your Score is: {points}</h1>
      <button onClick={changePage}>Try again</button>
    </div>
  );
}

export default FinalPage;
