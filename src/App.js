import { useEffect, useState } from "react";
import Companies from "./Companies";
import Job from "./Job";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [activeJob, setActiveJob] = useState("");

  async function getJobs() {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setJobs(data);
      setActiveJob(data[0].id);
    } catch (error) {
      console.log(error);
    }
  }

  console.log("jobs", jobs);
  console.log("active", activeJob);

  useEffect(() => {
    getJobs();
  }, []);

  if (jobs.length === 0) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <Companies
          jobs={jobs}
          activeJob={activeJob}
          updateActiveJob={(id) => setActiveJob(id)}
        />
        <Job job={jobs.find((j) => j.id === activeJob)} />
      </div>
    </section>
  );
}

export default App;
