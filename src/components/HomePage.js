import { useEffect, useState } from "react";

function HomePage({ getQuestions }) {
  const [formData, setFormData] = useState({
    number: 1,
    category: "",
    typeOfQuiz: "",
  });
  const [isNotFilled, setIsNotFilled] = useState(false);

  const warning = (
    <div className="bg-gray-300 md:w-2/5 rounded font-semibold self-center p-1 text-center text-red-500 border-2 border-orange-300">
      Please fill all the fields to start the quiz
    </div>
  );

  const handleSubmit = function (e) {
    e.preventDefault();
    if (formData.number && formData.category && formData.typeOfQuiz) {
      setIsNotFilled(false);
      getQuestions(formData.number, formData.category, formData.typeOfQuiz);
    } else {
      setIsNotFilled(true);
    }
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
    <form className="h-full flex flex-col">
      <h1 className="p-3 text-xl">Let's have a Quiz!</h1>
      <div className="mt-5 mb-5">
        <p className="text-xl mb-1">Select how many questions?</p>
        <input
          type="number"
          max="15"
          min="1"
          value={formData.number}
          onChange={handleForm}
          name="number"
          placeholder=" Enter a number up to 15"
          className="placeholder:italic placeholder:text-slate-400 md:w-1/4 w-full border rounded p-2 "
        />
      </div>
      <div className="mb-5">
        <p className="text-xl mb-1">Select category</p>
        <select
          value={formData.category}
          onChange={handleForm}
          name="category"
          className="md:w-1/4 w-full border rounded p-2 "
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
        <p className="text-xl mb-1">Select multiple choice or True/False</p>
        <select
          value={formData.typeOfQuiz}
          onChange={handleForm}
          name="typeOfQuiz"
          className="md:w-1/4 w-full border rounded p-2"
        >
          <option value="">--Choose</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True/False</option>
        </select>
      </div>
      {isNotFilled && warning}
      <button
        className="font-medium p-3 px-5 m-2 text-2xl bg-blue-300 border-2 border-slate-500 hover:bg-blue-400 hover:border-slate-400 bottom-5 mb-0 w-4/5 self-center"
        onClick={handleSubmit}
      >
        Start Quiz
      </button>
    </form>
  );
}

export default HomePage;
