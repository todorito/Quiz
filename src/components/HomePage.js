import { useEffect, useState } from "react";

function HomePage({ getQuestions }) {
  const [formData, setFormData] = useState({
    number: 1,
    category: "",
    typeOfQuiz: "",
  });

  const handleSubmit = function (e) {
    e.preventDefault();
    getQuestions(formData.number, formData.category, formData.typeOfQuiz);
  };

  const handleForm = function (e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div>
      <h1>Let's have a Quiz!</h1>
      <form>
        <div>
          <p>Select how many questions?</p>
          <input
            type="number"
            max="15"
            min="1"
            value={formData.number}
            onChange={handleForm}
            name="number"
          />
        </div>
        <div>
          <p>Select category</p>
          <select
            value={formData.category}
            onChange={handleForm}
            name="category"
          >
            <option value="">--Choose</option>
            <option value={9}>General Knowledge</option>
            <option value={11}>Films</option>
            <option value={12}>Music</option>
            <option value={17}>Science and Nature</option>
            <option value={27}>Animals</option>
            <option value={15}>VideoGames</option>
            <option value={14}>Television</option>
          </select>
        </div>
        <div>
          <p>Select multiple choice or True/False</p>
          <select
            value={formData.typeOfQuiz}
            onChange={handleForm}
            name="typeOfQuiz"
          >
            <option value="">--Choose</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True/False</option>
          </select>
        </div>
        <button onClick={handleSubmit}>Start Quiz</button>
      </form>
    </div>
  );
}

export default HomePage;
