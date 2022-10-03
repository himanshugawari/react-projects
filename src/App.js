import React from 'react';
import './style.css';
import data from './data';
import Questions from './Questions';

export default function App() {
  const [questions, setQuestions] = React.useState(data);
  return (
    <div className="main-container">
      <Questions questions={questions} />
    </div>
  );
}
