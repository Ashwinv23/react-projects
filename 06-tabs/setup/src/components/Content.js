import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Content = ({ jobs }) => {
  const [index, setIndex] = useState(0);
  const { id, order, title, dates, duties, company } = jobs[index];

  return (
    <section>
      <div className="btn-container">
        {jobs.map((job) => (
          <button
            key={job.id}
            className={`job-btn`}
            onClick={() => {
              if (job.id === "recAGJfiU4CeaV0HL") setIndex(0);
              if (job.id === "recIL6mJNfWObonls") setIndex(1);
              if (job.id === "rec61x18GVY99hQq5") setIndex(2);
            }}
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
