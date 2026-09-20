import "./App.css";

function Assistant() {
  return (
    <div className="page">
      <h1>🤖 LifeOS Assistant</h1>
      <p className="page-subtitle">
  Get smart productivity assistance anytime.
</p>

      <div className="card">
        <div className="chat-message user">
          <p>What tasks do I have today?</p>
        </div>

        <div className="chat-message bot">
          <p>
            You have DBMS Assignment, Environmental Science Revision,
            and Project Meeting today.
          </p>
        </div>
      </div>

      <div className="card">
        <textarea
          className="notes-box"
          placeholder="Ask LifeOS anything..."
          rows="4"
        ></textarea>

        <button className="primary-btn">
          Send
        </button>
      </div>

      <div className="card">
        <h2>Quick Suggestions</h2>

        <div className="suggestion-card">📚 Create Study Plan</div>
<div className="suggestion-card">⏰ Show Reminders</div>
<div className="suggestion-card">🔥 Habit Statistics</div>
<div className="suggestion-card">📅 Today's Schedule</div>
      </div>
    </div>
  );
}

export default Assistant;

