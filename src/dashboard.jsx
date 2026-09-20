import "./App.css";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>LifeOS</h2>

        <ul>
          <li>
            <Link to="/">🏠 Dashboard</Link>
          </li>

          <li>
            <Link to="/activity">📅 Activity Tracker</Link>
          </li>

          <li>
            <Link to="/habits">🔥 Habit Tracker</Link>
          </li>

          <li>
            <Link to="/reminders">⏰ Reminders</Link>
          </li>

          <li>
            <Link to="/notes">📝 Notes</Link>
          </li>

          <li>
            <Link to="/scan">📷 Scan Center</Link>
          </li>

          <li>
            <Link to="/assistant">🤖 AI Assistant</Link>
          </li>
        </ul>

        <div className="sidebar-footer">
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="top-bar">
          <h1>Welcome Back 👋</h1>
          <p>September 19, 2026</p>

          <p className="page-subtitle">
            Manage your tasks, habits and productivity in one place.
          </p>
        </div>

        <div className="motivation-banner">
          🚀 Stay consistent today. Small progress leads to big results.
        </div>

        <div className="stats-row">
          <div className="stat-card">
            <h3>📋 Tasks</h3>
            <p>5</p>
          </div>

          <div className="stat-card">
            <h3>🔥 Habits</h3>
            <p>3/4</p>
          </div>

          <div className="stat-card">
            <h3>⏰ Reminders</h3>
            <p>2</p>
          </div>

          <div className="stat-card">
            <h3>📚 Study Hours</h3>
            <p>4 hrs</p>
          </div>
        </div>

        <div className="quick-actions">
          <button>➕ Add Task</button>
          <button>⏰ Add Reminder</button>
          <button>📷 Scan Notice</button>
        </div>

        <div className="grid">
          <div className="card">
            <h2>📋 Today's Tasks</h2>

            <ul>
              <li>✅ Complete DBMS Assignment</li>
              <li>📚 Revise Environmental Science</li>
              <li>🎨 Finish GDG Poster</li>
              <li>🚀 Prepare Demo Video</li>
            </ul>
          </div>

          <div className="card">
            <h2>🌦 Weather</h2>

            <h1>28°C</h1>

            <p>Partly Cloudy</p>
            <p>Hyderabad, India</p>
          </div>

          <div className="card">
            <h2>⏰ Reminders</h2>

            <p>Hackathon Submission - Sept 22</p>
          </div>

          <div className="card">
            <h2>🔥 Habit Progress</h2>

            <p>3 / 4 Habits Completed</p>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>

          <div className="card">
            <h2>📝 Notes</h2>

            <ul>
              <li>📚 Complete DBMS Assignment</li>
              <li>🎨 Finish GDG Poster</li>
              <li>🚀 Prepare Demo Video</li>
            </ul>
          </div>

          <div className="card">
            <h2>💡 LifeOS Insights</h2>

            <ul>
              <li>🔥 Study streak: 5 days</li>
              <li>📈 Productivity increased by 12%</li>
              <li>💧 Water goal almost completed</li>
              <li>⏰ 2 deadlines this week</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
