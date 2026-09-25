import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../lib/api';
import { QRCodeSVG } from 'qrcode.react';
import { CalendarCheck, ShieldCheck, Download, GraduationCap, Clock, CheckCircle2, TrendingUp, Sparkles, MapPin, Maximize2, AlertCircle, FileText, ArrowRight } from 'lucide-react';

export default function StudentDashboard() {
    const [registrations, setRegistrations] = useState([]);
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
            const [regRes, evRes] = await Promise.all([
                api.get('/registrations/my-registrations'),
                api.get('/events')
            ]);
            setRegistrations(regRes.data.registrations || []);
            setEvents(evRes.data.events || []);
        } catch (error) {
            console.error('Error fetching dashboard data', error);
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

    const upcomingRegs = registrations.filter(r => new Date(r.event.date) >= new Date() && r.status !== 'CANCELLED');
    const pastRegs = registrations.filter(r => new Date(r.event.date) < new Date() || r.status === 'ATTENDED');
    const activeTicket = upcomingRegs[0] || null;

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-12 w-full max-w-[1440px] mx-auto">

            {/* Header Profile Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-6">
                <div>
                    <div className="flex items-center gap-2 text-primary font-bold text-[11px] tracking-widest uppercase mb-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        Academic Session 2024–25
                    </div>
                    <h1 className="text-[36px] font-bold text-slate-900 tracking-tight leading-tight">Good morning, {user.name?.split(' ')[0] || 'Scholar'}!</h1>
                    <p className="text-slate-500 mt-1.5 text-[14px]">Spring 2025 Semester • Dept. of Computer Science & Engineering • GCU Guwahati Campus</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-slate-100 transition-colors">
                        <Download className="w-4 h-4" /> Semester Summary
                    </button>
                    <button
                        onClick={() => navigate('/student/events')}
                        className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-primary-container transition-colors shadow-[0_2px_10px_rgba(30,58,138,0.15)]"
                    >
                        <Sparkles className="w-4 h-4" /> Browse All Events
                    </button>
                </div>
            </div>

            {/* Top Value Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Registered Events</h3>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><CalendarCheck className="w-4 h-4 text-primary" /></div>
                    </div>
                    <p className="text-[32px] font-bold text-slate-900 leading-none mb-3">{registrations.length}</p>
                    <p className="text-[12px] text-slate-500 font-medium flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-secondary" /> {upcomingRegs.length} happening this week
                    </p>
                </div>

                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Upcoming Events</h3>
                        <div className="w-8 h-8 rounded-full bg-secondary-container/50 flex items-center justify-center"><CalendarCheck className="w-4 h-4 text-secondary-container-on" /></div>
                    </div>
                    <p className="text-[32px] font-bold text-slate-900 leading-none mb-3">{upcomingRegs.length}</p>
                    <p className="text-[12px] text-slate-500 font-medium truncate">
                        <span className="text-slate-400">Next:</span> {upcomingRegs[0]?.event.title || 'None Scheduled'}
                    </p>
                </div>

                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Events Attended</h3>
                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-emerald-600" /></div>
                    </div>
                    <p className="text-[32px] font-bold text-slate-900 leading-none mb-3">18</p>
                    <p className="text-[12px] text-emerald-700 font-bold flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5" /> 92% completion rate
                    </p>
                </div>

                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Verified Certificates</h3>
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><ShieldCheck className="w-4 h-4 text-blue-600" /></div>
                    </div>
                    <p className="text-[32px] font-bold text-slate-900 leading-none mb-3">12</p>
                    <p className="text-[12px] text-slate-500 font-medium flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-slate-400" /> On-chain hash verified
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT COLUMN: Main Feature Area (2 spans) */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Featured Event Card */}
                    <div className="bg-white border text-center md:text-left border-slate-200 rounded-[16px] shadow-sm overflow-hidden flex flex-col md:flex-row relative">
                        <div className="md:w-[280px] h-48 md:h-auto bg-slate-100 relative shrink-0">
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-slate-700 uppercase tracking-widest rounded-md z-10 shadow-sm">Registrations Closing Soon</div>
                            {/* Photo placeholder connecting to unspash */}
                            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop" alt="Auditorium" className="w-full h-full object-cover" />
                        </div>

                        <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                            <div>
                                <p className="text-[11px] font-bold text-primary uppercase tracking-widest mb-1.5">Institutional Symposium <span className="text-slate-300 mx-1">•</span> <span className="text-slate-500 font-medium">Dept. of Computer Science & Robotics</span></p>
                                <h2 className="text-[22px] font-bold text-slate-900 mb-2 leading-tight">TechVenture 2025: National AI & Robotics Symposium</h2>
                                <p className="text-[13px] text-slate-600 line-clamp-2 md:line-clamp-none leading-relaxed">
                                    Two-day symposium featuring keynote talks from national research labs, autonomous systems demonstrations, and a project design exhibition with 4 academic activity points.
                                </p>
                            </div>

                            <div className="mt-6">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-[8px] mb-6 border border-slate-100">
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Dates</p>
                                        <p className="text-[12px] font-bold text-slate-900">Mar 28-29, 2025</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Schedule</p>
                                        <p className="text-[12px] font-bold text-slate-900 leading-tight">09:30 AM –<br />05:00 PM</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Venue</p>
                                        <p className="text-[12px] font-bold text-slate-900 truncate">Auditorium (Blo...</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-0.5">Availability</p>
                                        <p className="text-[12px] font-bold text-primary">42 Spots Left</p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <p className="text-[13px] font-bold text-slate-700 flex items-center gap-1.5"><span className="text-secondary text-[16px]">★ 4.8</span> <span className="text-slate-500 font-medium">(180 registered students)</span></p>
                                    <div className="flex items-center gap-2">
                                        <button className="text-slate-500 text-[12px] font-bold border border-slate-200 px-3 py-2 rounded-[6px] hover:bg-slate-50 transition-colors flex items-center gap-1.5"><CalendarCheck className="w-3.5 h-3.5" /> Add to Calendar</button>
                                        <button onClick={() => navigate('/student/events')} className="bg-primary text-white text-[13px] font-bold px-4 py-2 rounded-[6px] hover:bg-primary-container transition-colors shadow-sm flex items-center gap-1.5">View Details & Register <ArrowRight className="w-3.5 h-3.5" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Registered Events List */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-[18px] font-bold text-slate-900 flex items-center gap-2"><MapPin className="w-5 h-5 text-slate-400" /> Your Upcoming Registered Events</h3>
                            <button onClick={() => navigate('/student/registrations')} className="text-[12px] font-bold text-slate-500 hover:text-primary transition-colors flex items-center gap-1">View all ({upcomingRegs.length}) <ArrowRight className="w-3 h-3" /></button>
                        </div>

                        <div className="space-y-3">
                            {upcomingRegs.slice(0, 2).map((reg) => (
                                <div key={reg._id} className="bg-white border border-slate-200 p-4 rounded-[12px] flex items-center justify-between group hover:border-slate-300 shadow-sm transition-all">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 rounded-[8px] bg-slate-50 border border-slate-200 flex flex-col items-center justify-center shrink-0">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{new Date(reg.event.date).toLocaleDateString(undefined, { month: 'short' })}</span>
                                            <span className="text-[20px] font-bold text-primary leading-none mt-0.5">{new Date(reg.event.date).getDate()}</span>
                                        </div>

                                        <div>
                                            <p className="flex items-center gap-2 mb-1">
                                                <span className="text-[10px] bg-accent/30 text-primary px-1.5 py-0.5 rounded-[4px] font-bold uppercase tracking-wider border border-accent">Registered ✓</span>
                                                <span className="text-[11px] font-medium text-slate-500">{reg.event.category || 'Academic Department'}</span>
                                            </p>
                                            <h4 className="text-[15px] font-bold text-slate-900 leading-tight mb-1">{reg.event.title}</h4>
                                            <p className="text-[12px] font-medium text-slate-500 flex items-center gap-3">
                                                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" /> {reg.event.time || '10:00 AM (3 hours)'}</span>
                                                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {reg.event.venue?.name || 'TBA'}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <button onClick={() => navigate(`/student/ticket/${reg._id}`)} className="hidden md:flex bg-slate-100 text-slate-700 hover:bg-primary hover:text-white border border-slate-200 px-4 py-2 rounded-[6px] text-[12px] font-bold transition-colors items-center gap-2">
                                        <Maximize2 className="w-3.5 h-3.5" /> View QR Pass
                                    </button>
                                </div>
                            ))}

                            {upcomingRegs.length === 0 && (
                                <div className="p-8 text-center bg-slate-50 border border-slate-200 border-dashed rounded-[12px]">
                                    <p className="text-slate-500 font-medium text-[14px]">You have no upcoming registered events.</p>
                                    <button onClick={() => navigate('/student/events')} className="text-primary text-[13px] font-bold mt-2">Browse the calendar</button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Recommended For You */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-[18px] font-bold text-slate-900 flex items-center gap-2"><Sparkles className="w-5 h-5 text-secondary" /> Recommended for You</h3>
                            <span className="text-[12px] font-medium text-slate-500">Curated based on 4th Semester CSE Curriculum</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {events.slice(0, 2).map((ev, i) => (
                                <div key={i} className="bg-white border border-slate-200 p-5 rounded-[12px] shadow-sm flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="text-[10px] font-bold bg-slate-50 text-slate-600 uppercase tracking-widest px-2 py-0.5 rounded-[4px] border border-slate-200">{ev.category || 'TECHNICAL'}</span>
                                        <span className="text-[11px] font-bold text-slate-500">{new Date(ev.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                    <h4 className="text-[15px] font-bold text-slate-900 leading-tight mb-2">{ev.title}</h4>
                                    <p className="text-[12px] text-slate-500 line-clamp-3 leading-relaxed mb-4 flex-1">
                                        {ev.description || "Modern memory safety fundamentals with hands-on exercises targeting browser runtime deployment."}
                                    </p>
                                    <div className="flex items-center gap-3 text-[12px] font-medium text-slate-500 mb-6">
                                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {ev.venue?.name || 'TBA'}</span>
                                        <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-slate-400" /> {ev.maxParticipants > 0 ? `${Math.max(0, ev.maxParticipants - ev.currentParticipants)} Seats Free` : 'Open'}</span>
                                    </div>

                                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                                        <span className="text-[13px] font-bold text-secondary">Free for CSE Students</span>
                                        <button onClick={() => navigate('/student/events')} className="bg-accent/40 text-primary border border-accent hover:bg-accent hover:border-primary/30 px-4 py-1.5 rounded-[6px] text-[12px] font-bold transition-all shadow-sm">Register</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Leave Notice Box */}
                    <div className="bg-slate-50 border border-slate-200 rounded-[12px] p-5 flex items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-[8px] bg-white border border-slate-200 flex items-center justify-center shrink-0">
                                <FileText className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-[14px] font-bold text-slate-900">Need an official sanction letter for events?</h4>
                                <p className="text-[12px] text-slate-600 font-medium">Download official duty leave approvals validated directly by Dean of Academic Affairs.</p>
                            </div>
                        </div>
                        <button className="hidden sm:block bg-white text-slate-700 border border-slate-300 font-bold text-[13px] px-4 py-2 rounded-[6px] shadow-sm whitespace-nowrap hover:bg-slate-100 transition-colors">Request Leave Approval</button>
                    </div>

                </div>


                {/* RIGHT COLUMN: Scanners & Timeslines (1 span) */}
                <div className="space-y-6">

                    {/* Fast Gate Check-In Profile Box */}
                    {activeTicket && (
                        <div className="bg-white border border-slate-200 rounded-[16px] p-6 shadow-sm relative">
                            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-secondary"></div>
                            <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-6">Fast Gate Check-In</h3>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center mb-6">
                                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 mb-4 mix-blend-multiply">
                                    <QRCodeSVG
                                        value={activeTicket.qrToken}
                                        size={140}
                                        level="H"
                                        includeMargin={false}
                                        fgColor="#00236f" // Academic Primary
                                        bgColor="#ffffff"
                                    />
                                </div>
                                <p className="text-[14px] font-bold text-slate-900 text-center">{user.name}</p>
                                <p className="text-[12px] text-slate-500 font-medium font-mono text-center mb-4">{user.studentId || 'GCU/2023/BTECH/042'}</p>

                                <button onClick={() => navigate(`/student/ticket/${activeTicket._id}`)} className="w-full bg-white text-primary border border-slate-200 font-bold text-[12px] flex items-center justify-center gap-2 py-2 rounded-[8px] shadow-sm hover:bg-slate-50 transition-colors">
                                    <Maximize2 className="w-3.5 h-3.5" /> Open Fullscreen QR for Gate
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Recent Activity Timeline */}
                    <div className="bg-white border border-slate-200 rounded-[16px] p-6 shadow-sm">
                        <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                            <h3 className="text-[16px] font-bold text-slate-900">Recent Activity</h3>
                            <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">Live Timeline</span>
                        </div>

                        <div className="space-y-6">
                            {/* Timeline Item 1 */}
                            <div className="relative pl-6">
                                <span className="absolute left-0 top-0.5 w-3 h-3 rounded-full bg-white border-2 border-primary z-10"></span>
                                <span className="absolute left-[5px] top-3 w-px h-12 bg-slate-200"></span>
                                <p className="text-[13px] font-bold text-slate-900 mb-0.5">Attendance Marked</p>
                                <p className="text-[13px] font-semibold text-slate-600 mb-1">Machine Learning Symposium</p>
                                <p className="text-[11px] font-medium text-slate-400">Yesterday, 02:15 PM • Block B</p>
                            </div>

                            {/* Timeline Item 2 */}
                            <div className="relative pl-6">
                                <span className="absolute left-0 top-0.5 w-3 h-3 rounded-full bg-white border-2 border-secondary z-10 flex items-center justify-center"></span>
                                <span className="absolute left-[5px] top-3 w-px h-12 bg-slate-200"></span>
                                <div className="flex justify-between items-start mb-0.5">
                                    <p className="text-[13px] font-bold text-slate-900">Certificate Issued</p>
                                    <span className="text-[9px] font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded uppercase tracking-wider">PDF ↓</span>
                                </div>
                                <p className="text-[13px] font-semibold text-slate-600 mb-1">Cybersecurity BootCamp</p>
                                <p className="text-[11px] font-medium text-slate-400">March 15, 2025 • Credential #GCU-CS-8921</p>
                            </div>

                            {/* Timeline Item 3 */}
                            <div className="relative pl-6">
                                <span className="absolute left-0 top-0.5 w-3 h-3 rounded-full bg-white border-2 border-slate-300 z-10"></span>
                                <span className="absolute left-[5px] top-3 w-px h-12 bg-slate-200"></span>
                                <p className="text-[13px] font-bold text-slate-900 mb-0.5">Registered</p>
                                <p className="text-[13px] font-semibold text-slate-600 mb-1">Assam Biodiversity Hackathon</p>
                                <p className="text-[11px] font-medium text-slate-400">March 12, 2025 • Confirmed</p>
                            </div>

                            {/* Timeline Item 4 */}
                            <div className="relative pl-6">
                                <span className="absolute left-0 top-0.5 w-3 h-3 rounded-full bg-white border-2 border-slate-300 z-10"></span>
                                <p className="text-[13px] font-bold text-slate-900 mb-0.5">Feedback Submitted</p>
                                <p className="text-[13px] font-semibold text-slate-600 mb-1">Quantum Computing Seminar</p>
                                <p className="text-[11px] font-medium text-slate-400">March 10, 2025 • 5 Stars Rated</p>
                            </div>
                        </div>

                        <button className="w-full bg-slate-50 text-slate-600 border border-slate-200 rounded-[8px] py-2 text-[12px] font-bold mt-6 hover:bg-slate-100 transition-colors">
                            View Full Activity Log
                        </button>
                    </div>

                    {/* Notice */}
                    <div className="bg-primary/5 rounded-[12px] p-5 border border-primary/20">
                        <div className="flex items-start gap-2 mb-2">
                            <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <h4 className="text-[13px] font-bold text-primary">Important Campus Notice</h4>
                        </div>
                        <p className="text-[12px] text-slate-600 font-medium leading-relaxed pl-6 mb-3">
                            Academic event attendance credit requires a minimum 80% active session presence verified through both entry QR check-in and exit checkout scanners.
                        </p>
                        <button className="text-primary text-[11px] font-bold uppercase tracking-widest pl-6 hover:underline flex items-center gap-1">View Attendance Bylaws 2024-25 <ArrowRight className="w-3 h-3" /></button>
                    </div>

                </div>

            </div>
        </div>
    );
}

// Ensure lucide icon 'Users' exists - adding here to suppress linter if undefined above although not strictly react format to redeclare. (It is imported above).
import { Users } from 'lucide-react';
