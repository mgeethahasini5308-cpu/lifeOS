import "./App.css";

function ActivityTracker() {
  return (
      <div className="page">
  <h1>📅 Activity Tracker</h1>

  <p className="page-subtitle">
    Track your daily schedule and progress.
  </p>

  <div className="stats-row"></div>

      <div className="stats-row">
        <div className="stat-card">
          <h3>📚 Study</h3>
          <p>3 hrs</p>
        </div>

        <div className="stat-card">
          <h3>🏃 Exercise</h3>
          <p>45 min</p>
        </div>

        <div className="stat-card">
          <h3>💧 Water</h3>
          <p>6 / 8 Glasses</p>
        </div>
      </div>

    <div className="card">
  <h2>📌 Today's Timeline</h2>

  <div className="timeline-item">
    <strong>9:00 AM</strong> - DBMS Class
  </div>

  <div className="timeline-item">
    <strong>11:00 AM</strong> - Java Lab
  </div>

  <div className="timeline-item">
    <strong>2:00 PM</strong> - Project Work
  </div>

  <div className="timeline-item">
    <strong>6:00 PM</strong> - Exercise
  </div>
</div>

      <div className="card">
        <h2>📊 Daily Progress</h2>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <p>75% Completed</p>
      </div>
    </div>
  );
}

export default ActivityTracker;


