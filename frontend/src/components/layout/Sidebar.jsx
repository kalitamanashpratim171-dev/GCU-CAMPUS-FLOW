import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    CalendarDays,
    Settings,
    LogOut,
    Award,
    Users,
    Ticket,
    QrCode,
    UserCircle,
    CalendarRange,
    PlusSquare,
    ScanLine,
    ShieldCheck,
    BarChart3,
    MapPin
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Sidebar() {
    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    const role = user?.role || 'student';
    const roleName = user?.name || 'User';

    const defaultLinks = [
        { name: 'Event Discovery', path: '/student/events', icon: CalendarDays },
        { name: 'My Registrations', path: '/student/registrations', icon: Ticket },
        { name: 'QR Gate Pass', path: '/student/qr-pass', icon: QrCode },
        { name: 'My Certificates', path: '/student/certificates', icon: Award },
        { name: 'Profile / Settings', path: '/student/profile', icon: UserCircle },
    ];

    const organizerCategories = [
        {
            title: "EVENT OPERATIONS",
            links: [
                { name: 'Dashboard', path: '/organizer/dashboard', icon: LayoutDashboard },
                { name: 'My Events', path: '/organizer/my-events', icon: CalendarRange },
                { name: 'Create Event', path: '/organizer/create-event', icon: PlusSquare },
                { name: 'Participants', path: '/organizer/participants', icon: Users },
            ]
        },
        {
            title: "VERIFICATION & RECORDS",
            links: [
                { name: 'QR Attendance', path: '/organizer/qr-attendance', icon: ScanLine },
                { name: 'Certificates', path: '/organizer/certificates', icon: ShieldCheck },
                { name: 'Reports', path: '/organizer/reports', icon: BarChart3 },
            ]
        },
        {
            title: "ACCOUNT",
            links: [
                { name: 'Profile / Settings', path: '/organizer/settings', icon: Settings },
            ]
        }
    ];

    const adminCategories = [
        {
            title: "ADMINISTRATIVE OVERSIGHT",
            links: [
                { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
                { name: 'Pending Approvals', path: '/admin/approvals', icon: CalendarRange, badge: '4' },
                { name: 'Events Management', path: '/admin/events', icon: CalendarDays },
            ]
        },
        {
            title: "CAMPUS DIRECTORY",
            links: [
                { name: 'Users', path: '/admin/users', icon: Users },
                { name: 'Departments', path: '/admin/departments', icon: Settings },
                { name: 'Venues', path: '/admin/venues', icon: MapPin },
            ]
        },
        {
            title: "SYSTEM & INTELLIGENCE",
            links: [
                { name: 'Analytics & Reports', path: '/admin/analytics', icon: BarChart3 },
                { name: 'Settings', path: '/admin/settings', icon: Settings },
            ]
        }
    ];

    const handleRoleSwitch = () => {
        // Development helper to toggle between student, organizer, and admin
        let nextRole = 'student';
        if (role === 'student') nextRole = 'organizer';
        else if (role === 'organizer') nextRole = 'admin';
        else if (role === 'admin') nextRole = 'student';

        const nextUser = { role: nextRole, name: nextRole === 'admin' ? 'Prof. Pranjal Barman' : nextRole === 'organizer' ? 'Dr. Pranjal Barman' : 'Dipankar Kalita' };
        localStorage.setItem('user', JSON.stringify(nextUser));
        window.location.href = `/${nextRole}/dashboard`;
    };

    return (
        <div className="w-[260px] h-screen bg-white border-r border-slate-200 flex flex-col hidden md:flex shrink-0 shadow-[1px_0_10px_rgba(0,0,0,0.02)]">
            {/* Brand Header */}
            <div className="p-6 border-b border-slate-100 mb-2">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-[8px] flex items-center justify-center shadow-sm overflow-hidden border border-slate-200">
                        {/* Fake logo image per mockup */}
                        <img src="https://ui-avatars.com/api/?name=GCU&background=1e3a8a&color=fff&rounded=false&bold=true" alt="GCU" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <span className="text-primary font-bold leading-tight block text-[15px]">GCU Campus<br />Flow</span>
                        <span className="text-slate-500 text-[9px] font-medium block">Girijananda<br />Chowdhury Univ.</span>
                    </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-md py-1.5 px-3 flex items-center justify-between text-[11px] font-semibold mt-4">
                    <span className="text-primary flex items-center gap-1.5 font-bold">
                        <div className={`w-1.5 h-1.5 rounded-full ${role === 'admin' ? 'bg-emerald-500' : 'bg-secondary'}`}></div>
                        {role === 'admin' ? 'Admin Portal' : role === 'organizer' ? 'Organizer Portal' : 'Student Portal'}
                    </span>
                    {role === 'admin' ? (
                        <span className="text-slate-400 capitalize hover:text-slate-700 cursor-pointer text-[10px] bg-white border border-slate-200 px-2 rounded font-medium" onClick={handleRoleSwitch}>Privileged</span>
                    ) : (
                        <span className="text-slate-400 capitalize hover:text-slate-700 cursor-pointer text-xs bg-white border border-slate-200 px-2 rounded font-medium" onClick={handleRoleSwitch}>Switch</span>
                    )}
                </div>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto py-2 space-y-1">
                {role === 'organizer' && organizerCategories.map((category, idx) => (
                    <div key={idx} className="mb-4">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-6 mb-2 mt-2">{category.title}</div>
                        {category.links.map((link) => {
                            const isActive = location.pathname === link.path || (location.pathname.startsWith(link.path + '/') && link.path !== `/${role}`);
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`flex items-center justify-between px-6 py-2.5 transition-all text-[13px] font-bold ${isActive
                                        ? 'bg-primary text-white shadow-sm border-l-4 border-emerald-400'
                                        : 'text-slate-600 hover:text-slate-900 border-l-4 border-transparent hover:bg-slate-50'
                                        }`}
                                >
                                    <span className="flex items-center gap-3">{link.name}</span>
                                    {link.badge && <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${isActive ? 'bg-white text-primary' : 'bg-red-500 text-white'}`}>{link.badge}</span>}
                                </Link>
                            );
                        })}
                    </div>
                ))}

                {role === 'admin' && adminCategories.map((category, idx) => (
                    <div key={idx} className="mb-4">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-6 mb-2 mt-2">{category.title}</div>
                        {category.links.map((link) => {
                            const isActive = location.pathname === link.path || (location.pathname.startsWith(link.path + '/') && link.path !== `/${role}`);
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`flex items-center justify-between px-6 py-2.5 transition-all text-[13px] font-bold ${isActive
                                        ? 'bg-primary text-white shadow-sm border-l-4 border-emerald-400'
                                        : 'text-slate-600 hover:text-slate-900 border-l-4 border-transparent hover:bg-slate-50'
                                        }`}
                                >
                                    <span className="flex items-center gap-3">{link.name}</span>
                                    {link.badge && <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${isActive ? 'bg-white text-primary' : 'bg-red-500 text-white'}`}>{link.badge}</span>}
                                </Link>
                            );
                        })}
                    </div>
                ))}

                {role === 'student' && (
                    <>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-2 mb-2 mt-4 px-4">Main Menu</div>
                        <div className="px-4 space-y-1">
                            {defaultLinks.map((link) => {
                                const isActive = location.pathname === link.path || (location.pathname.startsWith(link.path + '/') && link.path !== `/${role}`);
                                const Icon = link.icon;
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-[8px] transition-all text-[14px] font-medium ${isActive
                                            ? 'bg-primary text-white shadow-md shadow-primary/20'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                            }`}
                                    >
                                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>

            {/* User Profile Area & Logout */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 mt-auto">
                <div className="flex items-center gap-3 px-2 mb-4">
                    <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                        {user?.name?.charAt(0) || 'U'}
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <p className="text-[13px] font-bold text-slate-900 truncate">{user?.name || 'Loading...'}</p>
                        <p className="text-[11px] text-slate-500 font-medium truncate uppercase">{user?.studentId || user?.email}</p>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-[6px] text-slate-500 hover:text-red-700 hover:bg-red-50 text-[13px] font-semibold transition-colors border border-slate-200/50 hover:border-red-200"
                >
                    <LogOut className="w-4 h-4" />
                    End Session
                </button>
            </div>
        </div>
    );
}
