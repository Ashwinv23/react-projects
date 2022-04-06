import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ id, title, info }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={() => setShowMore((state) => !state)}>
          {showMore ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p className="para">{showMore ? info : null}</p>
    </article>
  );
};

export default Question;
