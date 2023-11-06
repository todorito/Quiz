function MultipleQuiz({ question, answers, selectAnswer }) {
  return (
    <div>
      Question:
      <h2> {question}</h2>
      <button onClick={selectAnswer}>{answers[0]}</button>
      <button onClick={selectAnswer}>{answers[1]}</button>
      <button onClick={selectAnswer}>{answers[2]}</button>
      <button onClick={selectAnswer}>{answers[3]}</button>
    </div>
  );
}

export default MultipleQuiz;
