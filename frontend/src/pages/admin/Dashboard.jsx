import { useState, useEffect } from 'react';
import {
    Users, CalendarDays, CheckCircle2, Download,
    Building2, Banknote, Fingerprint, ChevronRight,
    TrendingUp, XOctagon, Clock, MapPin, ExternalLink,
    ShieldCheck, Zap, Filter, Search, RefreshCw, Loader2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '../../lib/api';

export default function AdminDashboard() {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [pendingEvents, setPendingEvents] = useState([]);
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [evRes, userRes] = await Promise.all([
                    api.get('/events'),
                    api.get('/auth/me'), // just to verify admin session
                ]);
                const allEvents = evRes.data.events || [];
                setEvents(allEvents);
                setPendingEvents(allEvents.filter(e => e.status === 'DRAFT' || e.status === 'PENDING'));
            } catch (e) {
                console.error('Admin dashboard fetch error:', e);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const approvedEvents = events.filter(e => e.status === 'PUBLISHED' || e.status === 'APPROVED');

    const timeline = [
        { event: 'Admin Portal Initialized', detail: 'GCU Campus Flow system is online and connected to MongoDB', time: 'Just now', type: 'primary' },
        { event: 'Admin Account Created', detail: 'admin@gcu.ac.in seeded with full administrative privileges', time: 'Today', type: 'emerald' },
        { event: 'Backend API Online', detail: 'All 10 REST endpoints confirmed active on port 5000', time: 'Today', type: 'primary' },
    ];

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            </div>
        );
    }

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] flex gap-6 mt-2">

            {/* Main Flow */}
            <div className="flex-1 space-y-6 min-w-0">

                {/* Header */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-slate-500 font-bold text-[10px] tracking-widest uppercase mb-3">
                            GCU Campus &gt; University Administration &gt; <span className="text-primary">Executive Overview</span>
                        </div>
                        <h1 className="text-[28px] font-bold text-slate-900 tracking-tight leading-tight">Institutional Operations &<br />Event Governance</h1>
                        <p className="text-slate-500 mt-2 text-[13px] max-w-2xl leading-relaxed">
                            Girijananda Chowdhury University · Spring 2025 Academic Session ·<br />Real-time campus event oversight, compliance verification, and venue utilization.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-white text-slate-700 border border-slate-300 px-4 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-slate-50 transition-colors shadow-sm flex items-center justify-center gap-2">
                            <Download className="w-4 h-4" /> Export Semester Report
                        </button>
                        <button className="bg-primary text-white border border-primary px-4 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-slate-900 transition-colors shadow-sm flex items-center justify-center gap-2">
                            <ShieldCheck className="w-4 h-4" /> Institute Notice & Policy
                        </button>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white border border-slate-200 rounded-[12px] p-5 flex flex-col justify-between shadow-sm">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Total Events<br />in System</h3>
                            <div className="w-8 h-8 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100"><CalendarDays className="w-4 h-4" /></div>
                        </div>
                        <h2 className="text-[32px] font-bold text-slate-900 leading-none mb-2">{events.length}</h2>
                        <div className="text-[11px] font-medium text-slate-500">{approvedEvents.length} published · {pendingEvents.length} pending</div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-[12px] p-5 flex flex-col justify-between shadow-sm">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Active<br />Campus Population</h3>
                            <div className="w-8 h-8 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100"><Users className="w-4 h-4" /></div>
                        </div>
                        <h2 className="text-[32px] font-bold text-slate-900 leading-none mb-2">8,420</h2>
                        <div className="flex gap-2 items-center text-[11px] font-medium text-slate-500">
                            <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded font-bold"><TrendingUp className="w-3 h-3" /> +14.2%</span>
                            <span className="font-bold text-slate-400">vs Fall '24</span>
                        </div>
                    </div>

                    <div className={`bg-white border rounded-[12px] p-5 flex flex-col justify-between shadow-sm ${pendingEvents.length > 0 ? 'border-red-200 ring-1 ring-red-100' : 'border-slate-200'}`}>
                        <div className="flex justify-between items-start mb-3">
                            <h3 className={`text-[10px] font-bold uppercase tracking-widest leading-tight ${pendingEvents.length > 0 ? 'text-red-500' : 'text-slate-500'}`}>Pending<br />Approvals</h3>
                            <div className="w-8 h-8 rounded-md bg-red-50 text-red-600 flex items-center justify-center border border-red-100"><XOctagon className="w-4 h-4 opacity-70" /></div>
                        </div>
                        <h2 className={`text-[32px] font-bold leading-none mb-2 ${pendingEvents.length > 0 ? 'text-red-600' : 'text-slate-900'}`}>{pendingEvents.length}</h2>
                        <button onClick={() => navigate('/admin/approvals')} className="text-[10px] text-primary font-bold flex items-center gap-0.5 hover:underline w-fit">View Queue <ChevronRight className="w-3 h-3" /></button>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-[12px] p-5 flex flex-col justify-between shadow-sm">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Published &<br />Active Events</h3>
                            <div className="w-8 h-8 rounded-md bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100"><Zap className="w-4 h-4" /></div>
                        </div>
                        <h2 className="text-[32px] font-bold text-slate-900 leading-none mb-2">{approvedEvents.length}</h2>
                        <div className="text-[11px] font-medium text-slate-500">Fully sanctioned & visible</div>
                    </div>
                </div>

                {/* Stat Strip */}
                <div className="flex gap-4 overflow-x-auto no-scrollbar">
                    <div className="bg-white border border-slate-200 px-5 py-3 rounded-[10px] flex items-center gap-3 shrink-0 shadow-sm">
                        <Building2 className="w-5 h-5 text-slate-400" />
                        <div><span className="text-[13px] font-bold text-slate-900 block">14 Departments</span><span className="text-[10px] text-slate-500 font-medium">Active in Spring '25</span></div>
                    </div>
                    <div className="bg-white border border-slate-200 px-5 py-3 rounded-[10px] flex items-center gap-3 shrink-0 shadow-sm">
                        <MapPin className="w-5 h-5 text-slate-400" />
                        <div><span className="text-[13px] font-bold text-slate-900 block">28 Campus Venues</span><span className="text-[10px] text-slate-500 font-medium">76% Weekend Peak Rate</span></div>
                    </div>
                    <div className="bg-white border border-slate-200 px-5 py-3 rounded-[10px] flex items-center gap-3 shrink-0 shadow-sm">
                        <Banknote className="w-5 h-5 text-emerald-500" />
                        <div><span className="text-[13px] font-bold text-slate-900 block">₹4.85 Lakhs</span><span className="text-[10px] text-slate-500 font-medium">Co-curricular Grants Approved</span></div>
                    </div>
                    <div className="bg-white border border-slate-200 px-5 py-3 rounded-[10px] flex items-center gap-3 shrink-0 shadow-sm flex-1">
                        <Fingerprint className="w-5 h-5 text-primary" />
                        <div><span className="text-[13px] font-bold text-slate-900 block">99.4% Gate Sync</span><span className="text-[10px] text-slate-500 font-medium">Biometric & QR Auth Rate</span></div>
                    </div>
                </div>

                {/* Pending Urgent Approvals */}
                <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                        <h3 className="text-[14px] font-bold text-slate-900 flex items-center gap-2">
                            {pendingEvents.length > 0 && <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />}
                            {pendingEvents.length > 0 ? `Urgent Action Required: ${pendingEvents.length} Pending Event Proposals` : 'No Pending Approvals'}
                        </h3>
                        <button onClick={() => navigate('/admin/approvals')} className="text-[11px] font-bold text-slate-500 hover:text-primary flex items-center gap-1">
                            View All <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                    <div className="p-5 space-y-4">
                        {pendingEvents.length === 0 ? (
                            <div className="text-center py-8 text-slate-400">
                                <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-emerald-400" />
                                <p className="text-[14px] font-bold text-slate-600">All caught up!</p>
                                <p className="text-[12px] font-medium text-slate-400 mt-1">No event proposals awaiting approval.</p>
                            </div>
                        ) : (
                            pendingEvents.slice(0, 3).map(ev => (
                                <div key={ev._id} className="bg-slate-50/50 border border-slate-200 rounded-[12px] p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <div className="flex gap-2 mb-2">
                                            <span className="bg-blue-50 text-primary border border-blue-100 px-2 py-0.5 rounded text-[10px] font-bold tracking-widest">{ev.category}</span>
                                            <span className="bg-orange-50 text-orange-700 border border-orange-200 px-2 py-0.5 rounded text-[10px] font-bold tracking-widest">{ev.status}</span>
                                        </div>
                                        <h4 className="text-[15px] font-bold text-slate-900 mb-1 leading-tight">{ev.title}</h4>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-medium text-slate-500">
                                            <span className="flex items-center gap-1.5"><CalendarDays className="w-3 h-3 text-emerald-600" />{new Date(ev.date).toLocaleDateString()}</span>
                                            <span className="flex items-center gap-1.5"><Users className="w-3 h-3 text-slate-400" />Cap: {ev.maxParticipants}</span>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-auto shrink-0 flex flex-col gap-2">
                                        <button className="w-full md:w-36 bg-primary text-white text-[12px] font-bold px-4 py-2 rounded-[6px] hover:bg-slate-900 transition-colors shadow-sm text-center">
                                            Review & Verify
                                        </button>
                                        <button className="w-full md:w-36 bg-white text-slate-600 text-[12px] font-bold px-4 py-2 rounded-[6px] border border-slate-200 hover:bg-slate-50 transition-colors text-center">
                                            Audit Details
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Recent Events table */}
                <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm overflow-hidden flex flex-col">
                    <div className="p-5 border-b border-slate-100 flex justify-between items-center gap-4">
                        <div>
                            <h3 className="text-[15px] font-bold text-slate-900 mb-0.5">All Events in System</h3>
                            <p className="text-[11px] font-medium text-slate-500">Complete event registry from all organizers</p>
                        </div>
                        <button onClick={() => navigate('/admin/events')} className="bg-white border border-slate-200 px-3 py-1.5 flex items-center rounded-[6px] text-slate-500 text-[11px] font-bold hover:text-slate-900 shadow-sm gap-1.5">
                            <Filter className="w-3.5 h-3.5" /> Manage All
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        {events.length === 0 ? (
                            <div className="text-center py-10 text-slate-400">
                                <CalendarDays className="w-10 h-10 mx-auto mb-3 opacity-30" />
                                <p className="text-[13px] font-medium">No events created yet.</p>
                                <p className="text-[12px] mt-1">Organizers can create events from their portal.</p>
                            </div>
                        ) : (
                            <table className="w-full text-left text-[12px]">
                                <thead className="bg-slate-50 border-b border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                    <tr>
                                        <th className="px-5 py-3">Event Title & Category</th>
                                        <th className="px-5 py-3">Status</th>
                                        <th className="px-5 py-3">Date</th>
                                        <th className="px-5 py-3 text-right">Capacity</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {events.slice(0, 8).map(ev => (
                                        <tr key={ev._id} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-5 py-3">
                                                <p className="font-bold text-slate-900 max-w-[200px] leading-tight mb-0.5">{ev.title}</p>
                                                <p className="text-[10px] font-medium text-slate-500">{ev.category}</p>
                                            </td>
                                            <td className="px-5 py-3">
                                                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${ev.status === 'PUBLISHED' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : ev.status === 'DRAFT' ? 'bg-slate-100 text-slate-600' : 'bg-orange-50 text-orange-700 border border-orange-100'}`}>
                                                    {ev.status}
                                                </span>
                                            </td>
                                            <td className="px-5 py-3 font-bold text-slate-700">{new Date(ev.date).toLocaleDateString()}</td>
                                            <td className="px-5 py-3 text-right font-bold text-slate-800">{ev.currentParticipants || 0} / {ev.maxParticipants}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-[320px] shrink-0 space-y-6 hidden lg:flex flex-col">
                {/* Activity Log */}
                <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm flex flex-col">
                    <div className="p-4 border-b border-slate-100 flex justify-between items-center shrink-0">
                        <h3 className="text-[15px] font-bold text-slate-900">System Activity</h3>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Immutable Log</span>
                    </div>
                    <div className="p-5 overflow-y-auto flex-1">
                        <div className="relative border-l border-slate-100 ml-1.5 space-y-5 pb-4">
                            {timeline.map((item, i) => (
                                <div key={i} className="relative pl-5">
                                    <div className={`absolute top-1.5 -left-[5px] w-2.5 h-2.5 rounded-full ring-4 ring-white ${item.type === 'emerald' ? 'bg-emerald-500' : 'bg-primary'}`} />
                                    <h4 className="text-[12px] font-bold text-slate-900 mb-0.5 leading-tight">{item.event}</h4>
                                    <p className="text-[10px] font-medium text-slate-500 leading-relaxed mb-1">{item.detail}</p>
                                    <p className="text-[9px] font-bold text-slate-400">{item.time}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Compliance CTA Card */}
                <div className="bg-[#1e3a8a] rounded-[16px] p-5 shadow-sm text-white overflow-hidden relative">
                    <div className="relative z-10">
                        <h4 className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-1.5 flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> COMPLIANCE AUDIT ACTIVE</h4>
                        <h3 className="text-[16px] font-bold mb-2">UGC Norm Compliance 2025</h3>
                        <p className="text-[11px] font-medium text-blue-100 mb-4 leading-relaxed opacity-90">All events require student welfare and fire safety approvals at least 72 hours prior to start.</p>
                        <button className="text-[12px] font-bold flex items-center gap-2 hover:text-blue-200 transition-colors">
                            Read Regulatory Guidelines <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                    </div>
                    <div className="absolute right-[-20%] bottom-[-20%] opacity-10"><ShieldCheck className="w-48 h-48" /></div>
                </div>

                {/* Admin Quick Actions */}
                <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm p-5">
                    <h3 className="text-[14px] font-bold text-slate-900 mb-4">Quick Actions</h3>
                    <div className="space-y-2">
                        {[
                            { label: 'Manage Users', path: '/admin/users', icon: Users },
                            { label: 'Review Approvals', path: '/admin/approvals', icon: CheckCircle2 },
                            { label: 'Manage Events', path: '/admin/events', icon: CalendarDays },
                            { label: 'Venues & Facilities', path: '/admin/venues', icon: MapPin },
                            { label: 'Analytics Report', path: '/admin/analytics', icon: TrendingUp },
                        ].map(({ label, path, icon: Icon }) => (
                            <button key={path} onClick={() => navigate(path)}
                                className="w-full flex items-center gap-3 px-4 py-2.5 bg-slate-50 hover:bg-slate-100 rounded-[8px] text-[13px] font-bold text-slate-700 transition-colors text-left border border-slate-100">
                                <Icon className="w-4 h-4 text-slate-400" /> {label}
                                <ChevronRight className="w-3.5 h-3.5 ml-auto text-slate-300" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
