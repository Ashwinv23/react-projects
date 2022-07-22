import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Content = ({ jobs }) => {
  const [index, setIndex] = useState(0);
  const { id, order, title, dates, duties, company } = jobs[index];

  return (
    <section>
      <div className="btn-container">
        {jobs.map((job) => (
          <button key={job.id} className={`job-btn`}>
            {job.company}
          </button>
        ))}
      </div>
      <div className="info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <h4>{dates}</h4>
        {duties.map((duty) => {
          return (
            <div className="desc">
              <FaAngleDoubleRight />
              <p>{duty}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Content;
