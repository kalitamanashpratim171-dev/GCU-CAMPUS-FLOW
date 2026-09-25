import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardLayout from './components/layout/DashboardLayout';
import StudentDashboard from './pages/student/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Student Routes */}
        <Route element={<DashboardLayout allowedRoles={['student', 'organizer', 'admin']} />}>
          <Route path="/student" element={<StudentDashboard />} />
          {/* Add more student routes here later */}
        </Route>

        {/* Organizer Routes */}
        <Route element={<DashboardLayout allowedRoles={['organizer', 'admin']} />}>
          <Route path="/organizer" element={
            <div className="text-white">
              <h1 className="text-3xl font-bold mb-4">Organizer Dashboard (Coming Soon)</h1>
              <p className="text-neutral-400">Control your events and manage attendees from here.</p>
            </div>
          } />
          {/* Add more organizer routes here later */}
        </Route>

        {/* Admin Routes */}
        <Route element={<DashboardLayout allowedRoles={['admin']} />}>
          <Route path="/admin" element={
            <div className="text-white">
              <h1 className="text-3xl font-bold mb-4">Admin Dashboard (Coming Soon)</h1>
              <p className="text-neutral-400">Global system overview and user management.</p>
            </div>
          } />
          {/* Add more admin routes here later */}
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
