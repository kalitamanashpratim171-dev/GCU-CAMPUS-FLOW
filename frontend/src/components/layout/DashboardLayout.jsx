import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function DashboardLayout({ allowedRoles }) {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    // Check authentication
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Check authorization constraints if they are passed in
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="flex h-screen bg-neutral-950 font-sans text-neutral-200">
            <Sidebar />
            <div className="flex-1 overflow-y-auto">
                {/* Main Content Area */}
                <main className="p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
