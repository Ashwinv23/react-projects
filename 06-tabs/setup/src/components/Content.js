import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Content = ({ jobs }) => {
  const [value, setValue] = useState(0);
  const { title, dates, duties, company } = jobs[value];

  return (
    <section>
      <div className="btn-container">
        {jobs.map((job, index) => (
          <button
            key={job.id}
            className={`job-btn ${index === value && "active"}`}
            onClick={() => setValue(index)}
          >
            {job.company}
          </button>
        ))}
      </div>
      <div className="info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <h4>{dates}</h4>
        {duties.map((duty, index) => {
          return (
            <div key={index} className="desc">
              <FaAngleDoubleRight style={{ color: "green" }} />
              <p>{duty}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Content;
