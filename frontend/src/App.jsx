import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardLayout from './components/layout/DashboardLayout';

// Student Pages
import StudentDashboard from './pages/student/Dashboard';
import Registrations from './pages/student/Registrations';
import EventDiscovery from './pages/student/EventDiscovery';
import Ticket from './pages/student/Ticket';
import StudentCertificates from './pages/student/Certificates';
import StudentCalendar from './pages/student/Calendar';
import StudentHistory from './pages/student/History';
import StudentNotifications from './pages/student/Notifications';
import StudentQrAttendance from './pages/student/QrAttendance';

// Organizer Pages
import OrganizerDashboard from './pages/organizer/Dashboard';
import Participants from './pages/organizer/Participants';
import MyEvents from './pages/organizer/MyEvents';
import CreateEvent from './pages/organizer/CreateEvent';
import QrAttendance from './pages/organizer/QrAttendance';
import Certificates from './pages/organizer/Certificates';
import Reports from './pages/organizer/Reports';
import Settings from './pages/organizer/Settings';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import Approvals from './pages/admin/Approvals';
import EventsManagement from './pages/admin/EventsManagement';
import Users from './pages/admin/Users';
import Departments from './pages/admin/Departments';
import Analytics from './pages/admin/Analytics';
import AdminSettings from './pages/admin/Settings';
import Venues from './pages/admin/Venues';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Role Shortcut Redirects */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />

        {/* All Protected Routes under one DashboardLayout */}
        <Route element={<DashboardLayout allowedRoles={['student', 'organizer', 'admin']} />}>

          {/* Student Routes */}
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/registrations" element={<Registrations />} />
          <Route path="/student/events" element={<EventDiscovery />} />
          <Route path="/student/ticket/:id" element={<Ticket />} />
          <Route path="/student/certificates" element={<StudentCertificates />} />
          <Route path="/student/calendar" element={<StudentCalendar />} />
          <Route path="/student/history" element={<StudentHistory />} />
          <Route path="/student/notifications" element={<StudentNotifications />} />
          <Route path="/student/qr-attendance" element={<StudentQrAttendance />} />

          {/* Organizer Routes */}
          <Route path="/organizer" element={<OrganizerDashboard />} />
          <Route path="/organizer/dashboard" element={<OrganizerDashboard />} />
          <Route path="/organizer/participants" element={<Participants />} />
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
          <Route path="/admin/departments" element={<Departments />} />
          <Route path="/admin/venues" element={<Venues />} />
          <Route path="/admin/analytics" element={<Analytics />} />
          <Route path="/admin/settings" element={<AdminSettings />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
