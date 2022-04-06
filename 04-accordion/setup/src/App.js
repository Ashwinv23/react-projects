import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  return (
    <main>
      <div className="container">
        <div className="left">
          <h3>Questions And Answers About Login</h3>
        </div>
        <section>
          {data.map((question) => {
            return <SingleQuestion {...question} key={question.id} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
