import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardLayout from './components/layout/DashboardLayout';
import StudentDashboard from './pages/student/Dashboard';
import Registrations from './pages/student/Registrations';
import EventDiscovery from './pages/student/EventDiscovery';
import Ticket from './pages/student/Ticket';
import OrganizerDashboard from './pages/organizer/Dashboard';
import MyEvents from './pages/organizer/MyEvents';
import CreateEvent from './pages/organizer/CreateEvent';
import QrAttendance from './pages/organizer/QrAttendance';
import Certificates from './pages/organizer/Certificates';
import Reports from './pages/organizer/Reports';
import Settings from './pages/organizer/Settings';
import AdminDashboard from './pages/admin/Dashboard';
import Approvals from './pages/admin/Approvals';
import EventsManagement from './pages/admin/EventsManagement';
import Users from './pages/admin/Users';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes Wrapper */}
        <Route element={<DashboardLayout allowedRoles={['student', 'organizer', 'admin']} />}>

          {/* Student Routes */}
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/registrations" element={<Registrations />} />
          <Route path="/student/events" element={<EventDiscovery />} />
          <Route path="/student/ticket/:id" element={<Ticket />} />

          {/* Organizer Routes */}
          <Route path="/organizer" element={<OrganizerDashboard />} />
          <Route path="/organizer/my-events" element={<MyEvents />} />
          <Route path="/organizer/create-event" element={<CreateEvent />} />
          <Route path="/organizer/qr-attendance" element={<QrAttendance />} />
          <Route path="/organizer/certificates" element={<Certificates />} />
          <Route path="/organizer/reports" element={<Reports />} />
          <Route path="/organizer/settings" element={<Settings />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/approvals" element={<Approvals />} />
          <Route path="/admin/events" element={<EventsManagement />} />
          <Route path="/admin/users" element={<Users />} />

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
