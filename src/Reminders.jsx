import "./App.css";

function Reminders() {
  return (
    <div className="page">
      <h1>⏰ Reminders</h1>
      <p className="page-subtitle">
  Never miss important deadlines and events.
</p>

      <div className="card">
        <h2>⏰ Upcoming Reminders</h2>

      <div className="reminder-item">
  <span>📌 DBMS Assignment</span>
  <span className="high-priority">High</span>
</div>

<div className="reminder-item">
  <span>📌 Hackathon Submission</span>
  <span className="medium-priority">Medium</span>
</div>

<div className="reminder-item">
  <span>📌 GDG Meeting</span>
  <span className="low-priority">Low</span>
</div>

        <div className="reminder-item">
          <span>📌 Hackathon Submission</span>
          <span className="badge">3 Days</span>
        </div>

        <div className="reminder-item">
          <span>📌 GDG Meeting</span>
          <span className="badge">5 Days</span>
        </div>
      </div>

      <div className="card">
        <h2>➕ Quick Add</h2>

        <input
          type="text"
          placeholder="Enter reminder..."
          className="notes-box"
        />

        <button className="primary-btn">
          Add Reminder
        </button>
      </div>
    </div>
  );
}

export default Reminders;

