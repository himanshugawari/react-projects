import React from 'react';

const Question = ({ id, title, info }) => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="section">
      <div className="header">
        <h2>{title}</h2>
        <button onClick={() => setShow((p) => !p)} className="btn">
          {show ? '-' : '+'}
        </button>
      </div>
      {show ? <p>{info}</p> : null}
    </div>
  );
};

export default Question;
