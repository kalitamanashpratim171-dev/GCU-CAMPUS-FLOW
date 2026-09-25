import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    CalendarDays,
    MapPin,
    Users,
    Settings,
    LogOut,
    Award,
    MessageSquare,
    Bell
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

    const commonLinks = [
        { name: 'Dashboard', path: `/${role}`, icon: LayoutDashboard },
        { name: 'Events', path: `/${role}/events`, icon: CalendarDays },
        { name: 'Certificates', path: `/${role}/certificates`, icon: Award },
        { name: 'Notifications', path: `/${role}/notifications`, icon: Bell },
    ];

    const adminLinks = [
        { name: 'Venues', path: '/admin/venues', icon: MapPin },
        { name: 'Users', path: '/admin/users', icon: Users },
    ];

    const organizerLinks = [
        { name: 'My Events', path: '/organizer/my-events', icon: CalendarDays },
        { name: 'Feedback', path: '/organizer/feedback', icon: MessageSquare },
    ];

    let links = [...commonLinks];
    if (role === 'admin') links = [...links, ...adminLinks];
    if (role === 'organizer') links = [...links, ...organizerLinks];

    return (
        <div className="w-64 h-screen bg-black border-r border-neutral-800 flex flex-col p-4">
            {/* Brand */}
            <div className="flex items-center gap-2 px-2 py-4 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CF</span>
                </div>
                <span className="text-white font-bold text-lg tracking-tight">Campus Flow</span>
            </div>

            {/* Navigation */}
            <div className="flex-1 space-y-1 overflow-y-auto">
                {links.map((link) => {
                    const isActive = location.pathname === link.path || location.pathname.startsWith(link.path + '/');
                    const Icon = link.icon;
                    return (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${isActive
                                    ? 'bg-purple-500/10 text-purple-400 font-medium'
                                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            {link.name}
                        </Link>
                    );
                })}
            </div>

            {/* User Area & Logout */}
            <div className="mt-auto pt-4 border-t border-neutral-800 space-y-2">
                <div className="px-3 py-2">
                    <p className="text-sm font-medium text-neutral-200 truncate">{user?.name || 'Loading...'}</p>
                    <p className="text-xs text-neutral-500 capitalize">{role}</p>
                </div>

                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    Logout
                </button>
            </div>
        </div>
    );
}
