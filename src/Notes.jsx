import "./App.css";

function Notes() {
  return (
    <div className="page">
      <h1>📝 Notes</h1>
      <p className="page-subtitle">
  Capture ideas, plans and important information.
</p>

<div className="card">
  <h2>📌 Recent Notes</h2>

  <ul>
    <li>DBMS Viva Preparation</li>
    <li>GDG Poster Ideas</li>
    <li>Hackathon Features List</li>
    <li>Project Demo Points</li>
  </ul>
</div>


      <div className="card">
        <h2>Quick Notes</h2>

        <textarea
          className="notes-box"
          placeholder="Write your thoughts here..."
          rows="8"
        ></textarea>

        <button className="primary-btn">
          Save Note
        </button>
      </div>

      <div className="card">
  <h2>📚 Recent Notes</h2>

  <div className="note-card">
    <h3>DBMS Revision</h3>
    <p>Practice SQL joins and normalization.</p>
  </div>

  <div className="note-card">
    <h3>Hackathon Ideas</h3>
    <p>LifeOS features and presentation points.</p>
  </div>

  <div className="note-card">
    <h3>GDG Tasks</h3>
    <p>Create poster and event promotion content.</p>
  </div>
</div>
    </div>
  );
}

export default Notes;

