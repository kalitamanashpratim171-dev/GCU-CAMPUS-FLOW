import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../lib/api';
import {
    CalendarDays,
    Users,
    ShieldCheck,
    Download,
    Plus,
    Activity,
    RefreshCw,
    QrCode,
    CheckSquare,
    MoreHorizontal,
    FileText,
    Radio,
    ChevronRight,
    Award,
    AlertCircle,
    MapPin,
    History,
    Maximize2
} from 'lucide-react';

export default function OrganizerDashboard() {
    const [events, setEvents] = useState([]);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const u = JSON.parse(localStorage.getItem('user') || '{}');
        setUser(u);
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await api.get('/events');
            // For demo purposes, assuming all returned events are organizer's
            setEvents(res.data.events || []);
        } catch (error) {
            console.error('Error fetching event data', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center py-20">
                <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-12 w-full max-w-[1440px] mx-auto">

            {/* Header Profile Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-6">
                <div>
                    <h1 className="text-[32px] font-bold text-slate-900 tracking-tight leading-tight flex items-center gap-3">
                        Good morning, {user.name || 'Organizer'}
                        <span className="bg-primary/10 text-primary border border-primary/20 text-[10px] uppercase font-bold px-2 py-0.5 rounded-[4px]">AY 2024-25</span>
                    </h1>
                    <p className="text-slate-500 mt-1.5 text-[14px] flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Department of Computer Science & Engineering • Faculty Coordinator Portal • Azara Campus
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-4 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-slate-50 transition-colors shadow-sm">
                        <Download className="w-4 h-4" /> Export Semester Report
                    </button>
                    <button
                        onClick={() => navigate('/organizer/create-event')}
                        className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-primary-container transition-colors shadow-[0_2px_10px_rgba(30,58,138,0.15)]"
                    >
                        <Plus className="w-4 h-4" /> New Event Proposal
                    </button>
                </div>
            </div>

            {/* Top Value Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Total Managed Events</h3>
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100"><CalendarDays className="w-4 h-4 text-primary" /></div>
                    </div>
                    <p className="text-[32px] font-bold text-slate-900 leading-none mb-3">14 <span className="text-[14px] font-medium text-slate-500 ml-1">recorded</span></p>
                    <p className="text-[12px] text-slate-500 font-medium">
                        <span className="text-primary font-bold">6 this semester</span> • 8 archived dossiers
                    </p>
                </div>

                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Upcoming & Live Events</h3>
                        <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20"><Radio className="w-4 h-4 text-secondary" /></div>
                    </div>
                    <p className="text-[32px] font-bold text-slate-900 leading-none mb-3 flex items-center gap-2">
                        3 <span className="text-[10px] font-bold text-secondary uppercase bg-secondary/10 px-1.5 py-0.5 rounded-[4px]">1 Live</span>
                    </p>
                    <p className="text-[12px] text-slate-500 font-medium">
                        <span className="text-secondary font-bold flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>1 happening today</span> • 2 in approval flow
                    </p>
                </div>

                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Registered Participants</h3>
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100"><Users className="w-4 h-4 text-primary" /></div>
                    </div>
                    <p className="text-[32px] font-bold text-slate-900 leading-none mb-3">
                        1,248 <span className="text-[12px] font-bold text-emerald-600 ml-1">~+18%</span>
                    </p>
                    <p className="text-[12px] text-slate-500 font-medium">
                        vs last cycle • <span className="text-slate-600 font-bold">94% student turnout</span>
                    </p>
                </div>

                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Overall Attendance Rate</h3>
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100"><ShieldCheck className="w-4 h-4 text-primary" /></div>
                    </div>
                    <p className="text-[32px] font-bold text-slate-900 leading-none mb-3">
                        91.4% <span className="text-[14px] font-medium text-slate-500 ml-1">Nominal</span>
                    </p>
                    <p className="text-[12px] text-slate-500 font-medium flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Verified via Gate QR Scanner logs
                    </p>
                </div>
            </div>

            {/* Operational Dispatch Shortcuts */}
            <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm mb-8 flex flex-col md:flex-row items-center gap-6">
                <div className="flex items-center gap-2 text-primary whitespace-nowrap min-w-max">
                    <Activity className="w-5 h-5 shrink-0" />
                    <h3 className="text-[13px] font-bold uppercase tracking-widest">Operational Dispatch Shortcuts</h3>
                </div>
                <div className="w-full h-px bg-slate-100 hidden md:block"></div>

                <div className="flex flex-wrap gap-3 w-full lg:w-auto">
                    <button className="flex-1 md:flex-none flex items-center gap-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-4 py-2.5 rounded-[8px] transition-colors text-left min-w-[200px]">
                        <div className="w-8 h-8 rounded-[6px] bg-primary text-white flex items-center justify-center shrink-0"><CheckSquare className="w-4 h-4" /></div>
                        <div>
                            <p className="text-[12px] font-bold text-slate-900 leading-tight">Create Event</p>
                            <p className="text-[11px] text-slate-500">Launch 9-step clearance...</p>
                        </div>
                    </button>
                    <button className="flex-1 md:flex-none flex items-center gap-3 bg-secondary-container/30 hover:bg-secondary-container border border-secondary-fixed px-4 py-2.5 rounded-[8px] transition-colors text-left min-w-[200px]">
                        <div className="w-8 h-8 rounded-[6px] bg-secondary text-white flex items-center justify-center shrink-0"><Users className="w-4 h-4" /></div>
                        <div>
                            <p className="text-[12px] font-bold text-slate-900 leading-tight">Manage Participants</p>
                            <p className="text-[11px] text-slate-500">1,248 registered records...</p>
                        </div>
                    </button>
                    <button className="flex-1 md:flex-none flex items-center gap-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-4 py-2.5 rounded-[8px] transition-colors text-left min-w-[200px]">
                        <div className="w-8 h-8 rounded-[6px] bg-emerald-600 text-white flex items-center justify-center shrink-0"><QrCode className="w-4 h-4" /></div>
                        <div>
                            <p className="text-[12px] font-bold text-slate-900 leading-tight">Take QR Attendance</p>
                            <p className="text-[11px] text-slate-600 font-medium">Live Gate Terminal (Audi...</p>
                        </div>
                    </button>
                    <button className="flex-1 md:flex-none flex items-center gap-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-4 py-2.5 rounded-[8px] transition-colors text-left min-w-[200px]">
                        <div className="w-8 h-8 rounded-[6px] bg-slate-200 text-slate-600 flex items-center justify-center shrink-0"><Award className="w-4 h-4" /></div>
                        <div>
                            <p className="text-[12px] font-bold text-slate-900 leading-tight">Generate Certificates</p>
                            <p className="text-[11px] text-slate-500">340 ready for batch sign...</p>
                        </div>
                    </button>
                </div>

                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap hidden lg:block ml-auto">Spring 2025 Fast Actions</span>
            </div>


            {/* Main Grid Splite */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT COLUMN: Events List (2 spans) */}
                <div className="lg:col-span-2 space-y-3">
                    <div className="flex justify-between items-end mb-4 pr-1">
                        <div>
                            <h2 className="text-[20px] font-bold text-slate-900">Active & Upcoming Events</h2>
                            <p className="text-[13px] text-slate-500 mt-1">Direct oversight across physical venue allocations, verification gates, and roster limits.</p>
                        </div>
                        <div className="flex gap-4 text-[13px] font-bold border-b-2 border-slate-200 pb-1 translate-y-1 relative">
                            <span className="text-primary border-b-2 border-primary absolute -bottom-0.5 left-0 pb-1">All (3)</span>
                            <span className="text-slate-400 ml-12">Active</span>
                            <span className="text-slate-400">Pending Clearance</span>
                        </div>
                    </div>

                    {/* Live Today Event Card */}
                    <div className="bg-white border border-slate-200 p-6 rounded-[16px] shadow-sm flex flex-col relative overflow-hidden group hover:border-slate-300 transition-colors">
                        <div className="absolute top-0 left-0 w-full h-1 bg-secondary hidden sm:block"></div>
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex gap-3 items-center">
                                <span className="bg-secondary-container/50 text-secondary border border-secondary/20 px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5"><Radio className="w-3 h-3" /> LIVE TODAY - CHECK-IN ACTIVE</span>
                                <span className="text-[11px] font-mono text-slate-400 uppercase">Code: GCU-ENG-2025-04</span>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Venue Occupancy</p>
                                <p className="text-[20px] font-bold text-slate-900 leading-tight">68%</p>
                            </div>
                        </div>

                        <h3 className="text-[20px] font-bold text-slate-900 leading-tight mb-2 pr-20">TechVenture 2025: Annual National Flagship Fest & Robotics Symposium</h3>
                        <div className="text-[13px] font-medium text-slate-600 mb-6 space-y-1">
                            <p className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-slate-400" /> Apr 05 – 06, 2025 (Day 1 in progress)</p>
                            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /> Central Auditorium (Capacity 500)</p>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-[12px] p-5 mb-6">
                            <div className="flex justify-between items-end mb-2">
                                <div>
                                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Registration Cap</p>
                                    <p className="text-[13px] font-bold text-slate-900">340 / 500 Seats</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[11px] font-bold text-primary uppercase tracking-widest mb-0.5">Gate B Attendance Turnout</p>
                                    <p className="text-[13px] font-bold text-primary">142 / 180 Checked In (78.8%)</p>
                                </div>
                            </div>

                            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden flex mb-3">
                                <div className="h-full bg-slate-400" style={{ width: '68%' }}></div>
                                <div className="h-full bg-primary" style={{ width: '25%' }}></div>
                            </div>

                            <div className="flex justify-between text-[11px] font-medium text-slate-500">
                                <span>160 seats available for walk-in spot desk</span>
                                <span className="flex items-center gap-1.5"><RefreshCw className="w-3 h-3 text-primary animate-spin-slow" /> Gate biometric & badge scanner sync online</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="bg-primary text-white border border-primary px-5 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-primary-container transition-colors shadow-sm flex items-center gap-2">
                                <QrCode className="w-4 h-4" /> Open Gate Scanner
                            </button>
                            <button className="bg-white text-slate-700 border border-slate-300 px-4 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-slate-50 transition-colors flex items-center gap-2">
                                <Users className="w-4 h-4 text-slate-500" /> View Participants
                            </button>
                            <button className="text-primary text-[13px] font-bold hover:underline ml-auto flex items-center gap-1">Manage Event Dossier <ChevronRight className="w-4 h-4" /></button>
                        </div>
                    </div>

                    {/* Upcoming Standard Event Card */}
                    <div className="bg-white border border-slate-200 p-6 rounded-[16px] shadow-sm flex flex-col relative overflow-hidden mt-4 group hover:border-slate-300 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex gap-3 items-center">
                                <span className="bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5"><ShieldCheck className="w-3 h-3" /> REGISTRATIONS OPEN</span>
                                <span className="text-[11px] font-medium text-slate-400">Hands-on Faculty & PG Workshop</span>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Capacity Status</p>
                                <p className="text-[14px] font-bold text-red-600 leading-tight">Almost Full (85%)</p>
                            </div>
                        </div>

                        <h3 className="text-[18px] font-bold text-slate-900 leading-tight mb-2 pr-10">Deep Learning & Computer Vision with PyTorch</h3>
                        <div className="text-[13px] font-medium text-slate-500 mb-6 space-y-1">
                            <p className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-slate-400" /> Fri, Mar 28 • 10:00 AM – 01:30 PM</p>
                            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /> Advanced Computing Lab (Block C, 3rd Fl)</p>
                        </div>

                        <div className="bg-slate-50/50 border border-slate-200 rounded-[12px] p-5 mb-6">
                            <div className="flex justify-between items-end mb-2">
                                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Enrolled Students / Scholars</p>
                                <p className="text-[13px] font-bold text-slate-900">68 / 80 Seats Filled</p>
                            </div>
                            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden mb-3">
                                <div className="h-full bg-primary" style={{ width: '85%' }}></div>
                            </div>
                            <div className="flex justify-between text-[11px] font-medium text-slate-500">
                                <span>12 lab terminal slots remaining</span>
                                <span>Closes: Mar 26, 11:59 PM</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-[13px] font-bold text-slate-700">
                            <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors text-slate-500"><Users className="w-4 h-4" /> Manage Roster</button>
                            <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors text-slate-500"><FileText className="w-4 h-4" /> Edit Details</button>
                            <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors text-primary ml-auto"><Download className="w-4 h-4" /> Share Portal Registration Link</button>
                        </div>
                    </div>

                    {/* Pending Clearance Card */}
                    <div className="bg-white border border-slate-200 p-6 rounded-[16px] shadow-sm flex flex-col relative overflow-hidden mt-4 group hover:border-slate-300 transition-colors opacity-90">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex gap-3 items-center">
                                <span className="bg-orange-50 text-orange-700 border border-orange-200 px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5"><AlertCircle className="w-3 h-3" /> PENDING DEAN & SAFETY CLEARANCE</span>
                            </div>
                            <div className="text-right">
                                <p className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-[4px]">Stage 2 of 4 Sign-offs</p>
                            </div>
                        </div>

                        <span className="text-[11px] font-medium text-slate-400 mb-1 block">Inter-Collegiate Hackathon</span>
                        <h3 className="text-[18px] font-bold text-slate-900 leading-tight mb-2 pr-10">Assam Regional Biodiversity & Green Tech Hackathon</h3>
                        <div className="text-[13px] font-medium text-slate-500 mb-6 space-y-1">
                            <p className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-slate-400" /> Mar 24 – 25, 2025 (36h Residential)</p>
                            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /> GCU Incubation Lab & Block B Studios</p>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-[12px] p-5 mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Institutional Clearance Checklist</p>
                                <span className="text-[10px] font-medium text-slate-400">Updated 3h ago</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[12px] font-bold">
                                <div className="flex items-center gap-2 text-emerald-700"><CheckSquare className="w-4 h-4" /> HOD Endorsement (CSE)</div>
                                <div className="flex items-center gap-2 text-emerald-700"><CheckSquare className="w-4 h-4" /> IT Infrastructure Bandwidth Allotment</div>
                                <div className="flex items-center gap-2 text-orange-600"><AlertCircle className="w-4 h-4" /> Estate Fire & Overnight Security Clearance</div>
                                <div className="flex items-center gap-2 text-slate-400"><div className="w-4 h-4 shrink-0 rounded-sm border-2 border-slate-300"></div> Chief Warden (Boys & Girls Hostels)</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-[13px] font-bold text-slate-700">
                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors text-slate-600"><FileText className="w-4 h-4" /> View Dossier PDF</button>
                            <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors text-slate-500"><History className="w-4 h-4" /> Track Routing Log</button>
                            <button className="text-slate-500 hover:text-primary ml-auto transition-colors">Resend Dean Notification</button>
                        </div>
                    </div>

                </div>


                {/* RIGHT COLUMN: Telemetry & Automation (1 span) */}
                <div className="space-y-6">

                    {/* Live Gate Telemetry Component */}
                    <div className="bg-white border text-center md:text-left border-slate-200 rounded-[16px] shadow-sm overflow-hidden flex flex-col relative h-[440px]">
                        <div className="p-6 border-b border-slate-100 relative">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-[16px] font-bold text-slate-900 flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></div> Live Gate Telemetry
                                </h3>
                                <span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200 uppercase">Gate B • Central Aud</span>
                            </div>
                            <p className="text-[12px] font-medium text-slate-500 leading-relaxed max-w-[90%] text-left">Streaming live student pass scans for TechVenture 2025.</p>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-slate-50/50">
                            {[
                                { name: 'Ananya Sharma', id: 'B.Tech CSE (Sem 6) • GCU/22/0481', time: '09:42 AM', initials: 'AS', gate: 'B-1' },
                                { name: 'Rahul Debnath', id: 'B.Tech Mechanical • GCU/23/1102', time: '09:41 AM', initials: 'RD', gate: 'B-2' },
                                { name: 'Priyashree Das', id: 'B.Tech EE (Sem 4) • GCU/23/0890', time: '09:40 AM', initials: 'PD', gate: 'B-1' },
                                { name: 'Kushal Kalita', id: 'M.Tech AI • GCU/PG/0014', time: '09:38 AM', initials: 'KK', gate: 'B-2' },
                            ].map((log, i) => (
                                <div key={i} className="bg-white p-3 rounded-[8px] border border-slate-100 flex items-center justify-between shadow-sm animate-in fade-in slide-in-from-top-1">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[11px] shrink-0 border border-primary/15">{log.initials}</div>
                                        <div className="text-left">
                                            <p className="text-[12px] font-bold text-slate-900 leading-tight">{log.name}</p>
                                            <p className="text-[10px] font-medium text-slate-500">{log.id}</p>
                                        </div>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <p className="text-[11px] font-bold text-slate-700">{log.time}</p>
                                        <p className="text-[9px] font-bold text-slate-400 uppercase">Gate {log.gate}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 border-t border-slate-100 bg-white">
                            <button className="w-full bg-primary/10 text-primary hover:bg-primary/15 border border-primary/20 py-2.5 rounded-[8px] font-bold text-[12px] flex items-center justify-center gap-2 transition-colors">
                                <Maximize2 className="w-3.5 h-3.5" /> Open Fullscreen Gate Terminal
                            </button>
                        </div>
                    </div>

                    {/* Credential Automation Component */}
                    <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm overflow-hidden flex flex-col p-6">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5"><ShieldCheck className="w-3 h-3" /> Credential Automation</h3>
                                <p className="text-[16px] font-bold text-slate-900 leading-tight">Certificate Issuance Readiness</p>
                            </div>
                        </div>

                        <div className="border border-slate-200 rounded-[12px] p-4 bg-slate-50 hover:bg-white transition-colors cursor-pointer group mb-5">
                            <div className="flex justify-between items-center mb-3">
                                <p className="text-[12px] font-bold text-slate-900 truncate pr-2">ML Diagnostic Worksh...</p>
                                <span className="text-[10px] font-bold text-slate-500 shrink-0">Completed Mar 14</span>
                            </div>
                            <p className="text-[11px] text-slate-600 font-medium leading-relaxed mb-4">
                                130 attendees crossed minimum 85% attendance criteria and passed lab assessment rubric.
                            </p>
                            <div className="flex justify-between items-center text-[12px] font-bold pt-3 border-t border-slate-200">
                                <span className="text-primary flex items-center gap-1.5"><CheckSquare className="w-3.5 h-3.5" /> 130 Verified Eligible</span>
                                <span className="text-slate-500">Templates & Keys Ready</span>
                            </div>
                        </div>

                        <button className="w-full bg-primary text-white border border-primary py-3 rounded-[8px] font-bold text-[13px] flex items-center justify-center gap-2 transition-colors shadow-sm hover:bg-primary-container">
                            <Download className="w-4 h-4" /> Issue 130 Certificates (Batch Sign)
                        </button>
                    </div>

                    {/* Notice Block */}
                    <div className="bg-slate-50 border border-slate-200 rounded-[16px] shadow-sm overflow-hidden p-6 relative">
                        <div className="flex items-center gap-2 mb-4">
                            <AlertCircle className="w-4 h-4 text-primary shrink-0" />
                            <h4 className="text-[11px] font-bold text-primary uppercase tracking-widest">Dean Academic Affairs Notice</h4>
                        </div>
                        <p className="text-[12px] text-slate-700 font-medium leading-relaxed mb-4">
                            All event budget reconciliations for Q1 must be submitted with student duty leave attendance logs within <strong className="text-slate-900">48 hours</strong> of event completion. Incomplete dossiers will delay co-curricular grade credits.
                        </p>
                        <div className="flex justify-between items-center text-[11px] font-bold text-slate-500">
                            <span>Ref: GCU/DEAN-AA/2025/CIR-09</span>
                            <button className="text-primary hover:underline">View Circular</button>
                        </div>

                        <div className="mt-6 pt-5 border-t border-slate-200">
                            <div className="flex justify-between items-center mb-3">
                                <h4 className="text-[11px] font-bold text-slate-900 uppercase">Campus Facilities Reference</h4>
                                <span className="text-[10px] text-slate-400">Azara Campus</span>
                            </div>
                            <div className="space-y-2 text-[11px] font-medium text-slate-600">
                                <div className="flex justify-between bg-white px-2 py-1.5 rounded border border-slate-100"><span>Central Auditorium</span> <span className="text-slate-400 font-bold">Occupied (TechVenture)</span></div>
                                <div className="flex justify-between bg-white px-2 py-1.5 rounded border border-slate-100"><span>Advanced Computing Lab</span> <span className="text-slate-800 font-bold">Booked for Mar 28</span></div>
                                <div className="flex justify-between bg-white px-2 py-1.5 rounded border border-slate-100"><span>Seminar Hall 2 (Block A)</span> <span className="text-secondary font-bold">Available</span></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
