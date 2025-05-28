import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuestionPage = () => {
  const navigate = useNavigate();
  const questions = [
    "What is your favorite language?",
    "Best frontend framework?",
    "Best worker?"
  ];

  const handleQuestionClick = (index: number) => {
    navigate(`/results/${index}`);
  };

  return (
    <div className="question-page">
      <h1>Опитування</h1>
      <div className="questions-list">
        {questions.map((question, index) => (
          <button
            key={index}
            className="question-button"
            onClick={() => handleQuestionClick(index)}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionPage;
