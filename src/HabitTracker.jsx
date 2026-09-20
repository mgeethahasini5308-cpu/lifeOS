import "./App.css";

function HabitTracker() {
  return (
    <div className="page">
      <h1>🔥 Habit Tracker</h1>
      <p className="page-subtitle">
  Build consistency and maintain streaks.
</p>

      <div className="stats-row">
        <div className="stat-card">
          <h3>🔥 Streak</h3>
          <p>12 Days</p>
        </div>

        <div className="stat-card">
          <h3>✅ Completed</h3>
          <p>18</p>
        </div>

        <div className="stat-card">
          <h3>📊 Success</h3>
          <p>85%</p>
        </div>
      </div>

      <div className="streak-banner">
  🔥 Current Streak: 12 Days
</div>

      <div className="card">
  <h2>📚 Study Habit</h2>

  <div className="progress-bar">
    <div
      className="progress-fill"
      style={{ width: "80%" }}
    ></div>
  </div>

  <p>80% Completed</p>
</div>

<div className="card">
  <h2>🏃 Exercise Habit</h2>

  <div className="progress-bar">
    <div
      className="progress-fill"
      style={{ width: "60%" }}
    ></div>
  </div>

  <p>60% Completed</p>
</div>

      <div className="card">
        <h2>Weekly Habits</h2>

        <table className="habit-table">
          <thead>
            <tr>
              <th>Habit</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>📚 Study</td>
              <td>✓</td>
              <td>✓</td>
              <td>✗</td>
              <td>✓</td>
              <td>✓</td>
            </tr>

            <tr>
              <td>🏃 Exercise</td>
              <td>✓</td>
              <td>✗</td>
              <td>✓</td>
              <td>✓</td>
              <td>✗</td>
            </tr>

            <tr>
              <td>💧 Water</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <h2>📈 Monthly Progress</h2>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <p>85% Goal Completion</p>
      </div>
    </div>
  );
}

export default HabitTracker;

