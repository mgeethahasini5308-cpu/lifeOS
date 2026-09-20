import "./App.css";

function ScanCenter() {
  return (
    <div className="page">
      <h1>📷 Scan Center</h1>

      <p className="page-subtitle">
        Scan, save and organize important documents.
      </p>

      <div className="card">
        <h2>📷 Upload Document</h2>

        <div className="upload-box">
          <p>📄 Drag & Drop Files Here</p>
          <p>or</p>

          <button className="primary-btn">
            Choose File
          </button>
        </div>
      </div>

      <div className="card">
        <h2>📂 Recent Scans</h2>

        <ul>
          <li>📄 DBMS Assignment.pdf</li>
          <li>📄 Hall Ticket.pdf</li>
          <li>📄 Fee Receipt.pdf</li>
        </ul>
      </div>

      <div className="card">
        <h2>Extracted Text</h2>

        <p>
          Your scanned notice content will appear here...
        </p>
      </div>

      <div className="card">
        <h2>Quick Actions</h2>

        <button className="primary-btn">
          📚 Save to Notes
        </button>

        <button className="primary-btn">
          🤖 Generate Summary
        </button>
      </div>
    </div>
  );
}

export default ScanCenter;
