import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setJobs(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <main>
      <Header />
      <Content jobs={jobs} />
    </main>
  );
}

export default App;
