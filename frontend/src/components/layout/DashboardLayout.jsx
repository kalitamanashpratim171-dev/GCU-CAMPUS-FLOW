import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { HelpCircle, Bell, ChevronRight } from 'lucide-react';

export default function DashboardLayout({ allowedRoles }) {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="flex h-screen bg-background font-sans text-foreground">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

                {/* Top Header Bar */}
                <header className="h-[60px] bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
                    <div className="flex items-center text-[13px] font-medium text-slate-500 gap-2">
                        <span className="hover:text-primary cursor-pointer transition-colors">GCU Campus</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                        <span className="text-primary font-semibold">Event Management Platform</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 text-[12px] font-semibold text-slate-600">
                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            Spring 2025 Semester
                        </div>
                        <div className="w-px h-6 bg-slate-200 mx-1"></div>
                        <button className="text-slate-400 hover:text-primary transition-colors">
                            <HelpCircle className="w-5 h-5" />
                        </button>
                        <button className="text-slate-400 hover:text-primary transition-colors relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[9px] font-bold flex items-center justify-center border border-white">3</span>
                        </button>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto p-6 md:p-8">
                    <div className="max-w-[1440px] mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}
