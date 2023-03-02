import React, { useState, useEffect } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch("https://quizapi.io/api/v1/questions", {
        headers: {
          "X-Api-Key": "rbUgYGVH0r2KgieM9JiutWo9KSSQG9Rah9EazREB",
        },
      });
      const data = await response.json();
      setQuestions(data);
    }
    fetchQuestions();
  }, []);

  const handlePrevQuestion = () => {
    setCurrentQuestion((prevQuestion) =>
      prevQuestion > 0 ? prevQuestion - 1 : questions.length - 1
    );
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) =>
      prevQuestion < questions.length - 1 ? prevQuestion + 1 : 0
    );
  };

  return (
    <div className="quiz">
      <div className="question-container">
        {questions.length > 0 && (
          <div className="question">{questions[currentQuestion].question}<input type='text'></input></div>
        )}
      </div>
      <div className="toggle-arrows">
      <button>
          Submit
        </button>
        <button className="arrow left-arrow" onClick={handlePrevQuestion}>
          Next
        </button>
        <button className="arrow right-arrow" onClick={handleNextQuestion}>
          Previous
        </button>
      </div>
    </div>
  );
};

export default Quiz;
