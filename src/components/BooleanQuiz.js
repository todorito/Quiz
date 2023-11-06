function BooleanQuiz({ question, selectAnswer }) {
  return (
    <div>
      Question:
      <h2> {question}</h2>
      <button onClick={selectAnswer}>True</button>
      <button onClick={selectAnswer}>False</button>
    </div>
  );
}

export default BooleanQuiz;
