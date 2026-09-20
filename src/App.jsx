import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Dashboard from "./dashboard";
import ActivityTracker from "./ActivityTracker";
import HabitTracker from "./HabitTracker";
import Reminders from "./Reminders";
import Notes from "./Notes";
import ScanCenter from "./ScanCenter";
import Assistant from "./Assistant";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/activity" element={<ActivityTracker />} />
        <Route path="/habits" element={<HabitTracker />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/scan" element={<ScanCenter />} />
        <Route path="/assistant" element={<Assistant />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
