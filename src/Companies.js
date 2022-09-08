function Companies({ jobs, activeJob, updateActiveJob }) {
  return (
    <div className="btn-container">
      {jobs.map((job) => {
        const { id, company } = job;
        return (
          <button
            key={id}
            className={`job-btn ${activeJob === id && "active-btn"}`}
            onClick={() => updateActiveJob(id)}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
}

export default Companies;
