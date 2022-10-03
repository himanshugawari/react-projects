import React from 'react';
import Question from './Question';

const Questions = ({ questions }) => {
  return (
    <div className="container">
      {questions.map((question, index) => {
        return <Question key={question.id} {...question} />;
      })}
    </div>
  );
};

export default Questions;
