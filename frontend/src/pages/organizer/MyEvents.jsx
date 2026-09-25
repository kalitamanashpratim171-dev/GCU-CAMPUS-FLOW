import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../lib/api';
import {
    ShieldCheck,
    Download,
    Plus,
    CalendarDays,
    AlertCircle,
    Search,
    LayoutGrid,
    List,
    ChevronDown,
    MoreVertical,
    Users,
    MapPin,
    QrCode,
    FileText,
    History,
    Edit3,
    Trash2,
    Settings,
    ArrowRight,
    Radio
} from 'lucide-react';

export default function MyEvents() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('All Events');
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await api.get('/events');
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
                    <div className="flex items-center gap-2 text-primary font-bold text-[11px] tracking-widest uppercase mb-1.5">
                        <ShieldCheck className="w-4 h-4" />
                        DEANERY OF ACADEMIC AFFAIRS • EVENT OPERATIONS REGISTER
                    </div>
                    <h1 className="text-[32px] font-bold text-slate-900 tracking-tight leading-tight">Managed Events & Dossiers</h1>
                    <p className="text-slate-500 mt-1.5 text-[14px]">Monitor institutional clearance workflows, live capacity allocations, real-time gate check-ins, and archived semester records.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-4 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-slate-50 transition-colors shadow-sm">
                        <Download className="w-4 h-4" /> Export Event Records
                    </button>
                    <button
                        onClick={() => navigate('/organizer/create-event')}
                        className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-primary-container transition-colors shadow-[0_2px_10px_rgba(30,58,138,0.15)]"
                    >
                        <Plus className="w-4 h-4 text-white font-bold" /> <span className="font-bold">+ New Event Proposal</span>
                    </button>
                </div>
            </div>

            {/* Top Value Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Active & Published</h3>
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100"><CalendarDays className="w-4 h-4 text-primary" /></div>
                    </div>
                    <p className="text-[32px] font-bold text-slate-900 leading-none mb-3">3 <span className="text-[14px] font-medium text-slate-500 ml-1">Events</span></p>
                    <p className="text-[12px] text-slate-500 font-medium flex items-center gap-1.5">
                        <span className="text-secondary font-bold flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-secondary"></div> 1 Live Today</span> • 2 Scheduled
                    </p>
                </div>

                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">In Approval Pipeline</h3>
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100"><Settings className="w-4 h-4 text-primary" /></div>
                    </div>
                    <p className="text-[32px] font-bold text-slate-900 leading-none mb-3">2 <span className="text-[14px] font-medium text-slate-500 ml-1">Proposals</span></p>
                    <p className="text-[12px] text-slate-500 font-medium">
                        <span className="text-orange-600 font-bold">Stage 2 & Stage 3</span> Clearance <span className="mx-2 text-slate-300">|</span> Deanery Review
                    </p>
                </div>

                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Draft Submissions</h3>
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100"><Edit3 className="w-4 h-4 text-primary" /></div>
                    </div>
                    <p className="text-[32px] font-bold text-slate-900 leading-none mb-3">1 <span className="text-[14px] font-medium text-slate-500 ml-1">In Progress</span></p>
                    <p className="text-[12px] text-slate-500 font-medium">
                        Last: <span className="font-bold text-slate-700">Bio-Robotics Hackathon</span>
                    </p>
                </div>

                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Total Recorded Footfall</h3>
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100"><Users className="w-4 h-4 text-primary" /></div>
                    </div>
                    <p className="text-[32px] font-bold text-slate-900 leading-none mb-3">2,410 <span className="text-[14px] font-medium text-slate-500 ml-1">Students</span></p>
                    <p className="text-[12px] text-slate-500 font-medium">
                        91.4% Avg. Turnout Rate this AY
                    </p>
                </div>
            </div>

            {/* Filter and Tab Section */}
            <div className="bg-white border border-slate-200 rounded-[12px] p-2 mb-6 shadow-sm">
                <div className="flex justify-between items-center border-b border-slate-100 px-3 py-1">
                    <div className="flex gap-4 lg:gap-8 overflow-x-auto no-scrollbar">
                        {[
                            { n: 'All Events', count: 6 },
                            { n: 'Published & Live', count: 2 },
                            { n: 'Pending Clearance', count: 2 },
                            { n: 'Drafts', count: 1 },
                            { n: 'Completed & Archived', count: 1 }
                        ].map(tab => (
                            <button
                                key={tab.n}
                                onClick={() => setActiveTab(tab.n)}
                                className={`flex items-center gap-2 py-3 text-[13px] font-bold border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.n ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
                            >
                                {tab.n} <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === tab.n ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-500'}`}>{tab.count}</span>
                            </button>
                        ))}
                    </div>
                    <div className="hidden lg:flex items-center gap-1 bg-slate-100 p-1 rounded-md">
                        <button className="bg-white shadow-sm p-1.5 rounded-[4px] text-slate-700"><LayoutGrid className="w-4 h-4" /></button>
                        <button className="p-1.5 rounded-[4px] text-slate-400 hover:text-slate-600"><List className="w-4 h-4" /></button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-3 p-3">
                    <div className="relative flex-1">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input type="text" placeholder="Search by title, event code (e.g. GCU-CS-2025), or keyword" className="w-full bg-slate-50 border border-slate-200 rounded-[8px] pl-9 pr-3 py-2 text-[13px] font-medium focus:border-primary outline-none transition-colors" />
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-slate-50 border border-slate-200 text-slate-700 px-3 py-2 rounded-[8px] text-[12px] font-bold flex items-center justify-between min-w-[180px] hover:bg-slate-100 max-w-[200px] truncate">
                            <span className="truncate">Dept: Computer Science & I...</span> <ChevronDown className="w-3.5 h-3.5 shrink-0 ml-2 text-slate-400" />
                        </button>
                        <button className="bg-slate-50 border border-slate-200 text-slate-700 px-3 py-2 rounded-[8px] text-[12px] font-bold flex items-center justify-between min-w-[140px] hover:bg-slate-100">
                            <span>All GCU Venues</span> <ChevronDown className="w-3.5 h-3.5 shrink-0 ml-2 text-slate-400" />
                        </button>
                        <button className="bg-slate-50 border border-slate-200 text-slate-700 px-3 py-2 rounded-[8px] text-[12px] font-bold flex items-center justify-between min-w-[120px] hover:bg-slate-100">
                            <span>AY: Spring 2025</span> <ChevronDown className="w-3.5 h-3.5 shrink-0 ml-2 text-slate-400" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Grid of Events */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

                {/* Live Event */}
                <div className="bg-white border-b-4 border-secondary border border-slate-200 rounded-[12px] shadow-sm p-6 relative group">
                    <div className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 cursor-pointer"><MoreVertical className="w-5 h-5" /></div>

                    <div className="flex gap-2 items-center mb-4">
                        <span className="bg-secondary-container/50 text-secondary border border-secondary/20 px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5"><Radio className="w-3 h-3" /> LIVE TODAY • CHECK-IN ACTIVE</span>
                        <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-[4px]">GCU-SYM-2025-01</span>
                    </div>

                    <h3 className="text-[20px] font-bold text-slate-900 leading-tight mb-2 pr-12">TechVenture 2025: Annual National Flagship Fest & Robotics Symposium</h3>
                    <div className="flex items-start gap-2 mb-6">
                        <Users className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <div><span className="text-[12px] text-slate-500 font-medium">Co-organizers:</span> <span className="text-[12px] font-bold text-slate-700">GCU Robotics & Coding Club, IEEE Student Branch</span></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-[13px] font-medium text-slate-700 mb-6">
                        <p className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-slate-400 shrink-0" /> April 05-06, 2025</p>
                        <p className="flex items-center gap-2"><Settings className="w-4 h-4 text-slate-400 shrink-0" /> 09:00 AM – 06:30 PM IST</p>
                        <p className="flex items-center gap-2 col-span-2"><MapPin className="w-4 h-4 text-slate-400 shrink-0" /> Central Auditorium & GF Engineering Foyer (Azara Campus)</p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-[8px] p-4 mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[12px] font-bold text-slate-700">Registrations Filled: 340 / 500</span>
                            <span className="text-[11px] font-bold text-slate-500">68% Hall Allocated</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden mb-3">
                            <div className="h-full bg-primary" style={{ width: '68%' }}></div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[13px] font-bold text-secondary flex items-center gap-1.5"><QrCode className="w-4 h-4" /> 142 Scanned at Gate</span>
                            <span className="text-[11px] font-bold text-secondary">78.8% Morning Turnout</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="bg-secondary text-white px-5 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-2">
                            <QrCode className="w-4 h-4" /> Live Gate Scanner
                        </button>
                        <button className="bg-white text-slate-700 border border-slate-300 px-4 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-slate-50 transition-colors">
                            View 340 Participants
                        </button>
                        <div className="ml-auto flex items-center gap-2">
                            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Duty Leave</span> <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-bold">Pre-Approved</span>
                        </div>
                    </div>
                </div>

                {/* Open Registration Event */}
                <div className="bg-white border-b-4 border-primary border border-slate-200 rounded-[12px] shadow-sm p-6 relative group">
                    <div className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 cursor-pointer"><MoreVertical className="w-5 h-5" /></div>

                    <div className="flex flex-col mb-4">
                        <div className="flex gap-2 items-center mb-1.5">
                            <span className="bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div> REGISTRATIONS OPEN • CLOSES MAR 26</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-[4px] w-fit">GCU-CS-2025-11</span>
                    </div>

                    <h3 className="text-[20px] font-bold text-slate-900 leading-tight mb-2 pr-12">Deep Learning & Computer Vision with PyTorch: Hands-On Immersion</h3>
                    <div className="flex items-start gap-2 mb-6">
                        <FileText className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <div><span className="text-[12px] text-slate-500 font-medium">Faculty Lead:</span> <span className="text-[12px] font-bold text-slate-700">Dr. Pranjal Barman (CSE Department)</span></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-[13px] font-medium text-slate-700 mb-6 border-b border-slate-100 pb-6">
                        <p className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-slate-400 shrink-0" /> Fri, Mar 28, 2025</p>
                        <p className="flex items-center gap-2"><Settings className="w-4 h-4 text-slate-400 shrink-0" /> 10:00 AM – 01:30 PM</p>
                        <p className="flex items-center gap-2 col-span-2"><MapPin className="w-4 h-4 text-slate-400 shrink-0" /> Advanced Computing Lab (Block C, 3rd Floor) • Max 80 Seats</p>
                    </div>

                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[12px] font-bold text-slate-700">Confirmed Seats: 68 / 80</span>
                            <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-[4px] uppercase tracking-widest border border-red-200">85% Capacity • 12 Seats Left</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-3">
                            <div className="h-full bg-primary" style={{ width: '85%' }}></div>
                        </div>
                        <p className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-primary" /> Duty Leave Approved: 2nd & 3rd Year B.Tech CSE students</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="bg-primary text-white border border-primary px-5 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-primary-container transition-colors shadow-sm text-center">
                            Manage Participants (68)
                        </button>
                        <button className="bg-white text-slate-700 border border-slate-300 px-4 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-slate-50 transition-colors">
                            Edit Details
                        </button>
                        <button className="text-slate-500 text-[12px] font-bold hover:text-slate-900 ml-auto flex items-center gap-1.5"><Settings className="w-3 h-3" /> Share Link</button>
                    </div>
                </div>

                {/* Pending Clearance */}
                <div className="bg-white border-b-4 border-orange-400 border border-slate-200 rounded-[12px] shadow-sm p-6 relative group opacity-95">
                    <div className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 cursor-pointer"><MoreVertical className="w-5 h-5" /></div>

                    <div className="flex flex-col mb-4">
                        <div className="flex gap-2 items-center mb-1.5">
                            <span className="bg-orange-50 text-orange-700 border border-orange-200 px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5"><AlertCircle className="w-3 h-3" /> PENDING CLEARANCE (STAGE 2 OF 4)</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-[4px] w-fit">GCU-HCK-2025-02</span>
                    </div>

                    <h3 className="text-[20px] font-bold text-slate-900 leading-tight mb-2 pr-12">Assam Regional Biodiversity & Green Tech Hackathon</h3>
                    <div className="flex items-start gap-2 mb-6">
                        <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <div><span className="text-[12px] text-slate-500 font-medium">Budget Requisition:</span> <span className="text-[12px] font-bold text-slate-700">₹75,000 UGC Incubation Seed Grant</span></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-[13px] font-medium text-slate-700 mb-6">
                        <p className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-slate-400 shrink-0" /> Mar 24-25, 2025 (36h Residential)</p>
                        <p className="flex items-center gap-2"><Users className="w-4 h-4 text-slate-400 shrink-0" /> Capacity: 150 Delegates</p>
                        <p className="flex items-center gap-2 col-span-2"><MapPin className="w-4 h-4 text-slate-400 shrink-0" /> GCU Incubation Lab & Block B Creative Studios</p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-[8px] p-4 mb-6">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-[12px] font-bold text-slate-700">Compliance Review: 2 of 4 Sign-offs</span>
                            <span className="text-[11px] font-bold text-orange-600">Estate & Security Pending</span>
                        </div>
                        <div className="flex gap-1 h-2 mb-2">
                            <div className="w-1/4 bg-emerald-500 rounded-l-full"></div>
                            <div className="w-1/4 bg-emerald-500"></div>
                            <div className="w-1/4 bg-slate-200"></div>
                            <div className="w-1/4 bg-slate-200 rounded-r-full"></div>
                        </div>
                        <p className="text-[10px] font-medium text-slate-500 truncate">HOD CSE ✓ • IT Net ✓ • Estate Office • Hostel Ward... <span className="text-primary font-bold cursor-pointer ml-1">Nudge Reviewers</span></p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="bg-white text-slate-700 border border-slate-300 px-4 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-slate-50 transition-colors flex items-center gap-2">
                            <History className="w-4 h-4" /> Track Clearance Log
                        </button>
                        <button className="text-slate-600 font-bold text-[13px] hover:text-slate-900 transition-colors">
                            View Dossier PDF
                        </button>
                        <p className="text-[10px] font-medium text-slate-400 ml-auto">Submission: Feb 18, 2025</p>
                    </div>
                </div>

                {/* Draft Mode */}
                <div className="bg-slate-50 border border-slate-200 border-dashed rounded-[12px] shadow-sm p-6 relative group">
                    <div className="absolute top-6 right-6 text-slate-400 hover:text-red-600 cursor-pointer transition-colors"><Trash2 className="w-5 h-5" /></div>

                    <div className="flex flex-col mb-4">
                        <div className="flex gap-2 items-center mb-1.5">
                            <span className="bg-slate-200 text-slate-600 px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5"><Edit3 className="w-3 h-3" /> DRAFT • 70% COMPLETE</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-400 bg-white border border-slate-200 px-2 py-0.5 rounded-[4px] w-fit">DRAFT-2025-99</span>
                    </div>

                    <h3 className="text-[20px] font-bold text-slate-700 leading-tight mb-2 pr-12">State-Level Cloud Security & Ethical Hacking Symposium</h3>
                    <div className="flex items-start gap-2 mb-6">
                        <Users className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <div><span className="text-[12px] text-slate-500 font-medium">Target Audience:</span> <span className="text-[12px] font-bold text-slate-600">Undergrad & Postgrad MCA/M.Tech Scholars</span></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-[13px] font-medium text-slate-600 mb-6 border-b border-slate-200 pb-6">
                        <p className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-slate-400 shrink-0" /> Tentative: May 12, 2025</p>
                        <p className="flex items-center gap-2"><Settings className="w-4 h-4 text-slate-400 shrink-0" /> ~ Expected Footfall: ~200</p>
                        <p className="flex items-center gap-2 col-span-2"><MapPin className="w-4 h-4 text-slate-400 shrink-0" /> Mechanical Seminar Hall 1 (Block D) • Pending Hall Reservation</p>
                    </div>

                    <div className="mb-6">
                        <p className="text-[12px] font-bold text-orange-600 flex items-center gap-1.5 mb-2"><AlertCircle className="w-3.5 h-3.5" /> 2 Missing Mandatory Fields:</p>
                        <ul className="text-[12px] font-medium text-slate-500 ml-5 list-disc space-y-1">
                            <li>Guest Speaker confirmation letter from CERT-In / Industry</li>
                            <li>Deanery budget breakdown estimate breakdown</li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="bg-primary text-white border border-primary px-5 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-primary-container transition-colors shadow-sm flex items-center gap-2">
                            <Edit3 className="w-4 h-4" /> Continue Editing
                        </button>
                        <button className="text-slate-500 text-[13px] font-bold hover:text-slate-900 transition-colors">
                            Discard Draft
                        </button>
                        <p className="text-[10px] font-medium text-slate-400 ml-auto">Modified yesterday, 4:15 PM</p>
                    </div>
                </div>

            </div>

            {/* Footer Info Box */}
            <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-200 rounded-[12px]">
                <div className="flex gap-3 items-center max-w-[70%]">
                    <ShieldCheck className="w-8 h-8 text-primary opacity-50 shrink-0" />
                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
                        <strong className="text-slate-700">UGC & University Ordinance Note:</strong> Events requiring inter-state student accommodation or overnight stays must obtain final endorsement from the Dean of Student Welfare at least 7 working days prior to public registration launch.
                    </p>
                </div>
                <div className="flex items-center gap-4 text-[12px] font-medium text-slate-500">
                    <span>Showing 1-4 of 6 events</span>
                    <div className="flex items-center gap-1">
                        <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-200 text-slate-400">&lt;</button>
                        <button className="w-6 h-6 flex items-center justify-center rounded bg-primary text-white font-bold">1</button>
                        <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-200">2</button>
                        <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-200 text-slate-700">&gt;</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
