import { useState } from 'react';
import {
    Users,
    CalendarDays,
    CheckCircle2,
    Download,
    Info,
    Building2,
    Banknote,
    Fingerprint,
    ChevronRight,
    TrendingUp,
    XOctagon,
    Clock,
    MapPin,
    ExternalLink,
    ShieldCheck,
    Zap,
    Activity,
    Filter,
    Search,
    ChevronDown
} from 'lucide-react';

export default function AdminDashboard() {
    const pendingApprovals = [
        {
            id: 1,
            type: 'National Symposium',
            status: 'Dean Review Required',
            statusType: 'danger',
            subCode: 'Submission #EV-2025-089',
            title: 'TechVenture 2025: National AI & Robotics Symposi...',
            dept: 'Dept. of CSE & Robotics Club',
            coordinator: 'Prof. Pranjal Barman',
            date: 'Apr 05 - 06, 2025',
            venue: 'Central Auditorium (500 Pax)'
        },
        {
            id: 2,
            type: 'Regional Hackathon',
            status: 'Safety Clearance Pending',
            statusType: 'warning',
            subCode: 'Submission #EV-2025-092',
            title: 'Assam Regional Biodiversity & Green Tech Hackath...',
            dept: 'Innovation & Incubation Cell',
            coordinator: 'Dr. Anita Kalita',
            date: 'Mar 24 - 25, 2025',
            venue: 'Incubation Center (150 Pax)'
        }
    ];

    const approvedEvents = [
        { id: 1, title: 'International Pharmacovigilance Summit', cat: 'Academic Colloquium - Hybrid', dept: 'Dept. of Pharmaceutical Sciences', date: 'Mar 18, 2025', venue: 'Pharmacy Block Hall 1', fill: 90, enrolled: '180/200' },
        { id: 2, title: 'Annual Inter-College Parliamentary Debate', cat: 'Student Affairs - In-Person', dept: 'Literary & Debating Society', date: 'Mar 22, 2025', venue: 'Senate Chambers', fill: 100, enrolled: '120/120' },
        { id: 3, title: 'Machine Learning Research Poster Day', cat: 'Deanery of R&D - Exhibition', dept: 'Center for Data Intelligence', date: 'Mar 29, 2025', venue: 'Central Library Foyer', fill: 65, enrolled: '130/200' },
        { id: 4, title: 'Civil Infrastructure Resilience Workshop', cat: 'Faculty Development - Lab Intensive', dept: 'Civil Engineering Dept.', date: 'Apr 02, 2025', venue: 'Concrete Tech Lab', fill: 48, enrolled: '24/50' },
    ];

    const venues = [
        { name: 'Central Auditorium', cap: '800 Seats', status: 'Busy: Morning Session', statusColor: 'bg-primary text-white border-primary', checkedIn: 142, desc: 'TechVenture Stage & AV Rigging', progress: 18 },
        { name: 'Seminar Hall 2 (Block C)', cap: '120 Seats', status: 'In Progress (95% full)', statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200', checkedIn: 114, desc: 'Smart Microgrids Guest Lecture', progress: 95 },
        { name: 'Software Lab 3 (IT Center)', cap: '60 Terminals', status: 'Reserved: 02:00 PM', statusColor: 'bg-blue-50 text-blue-700 border-blue-200', checkedIn: 0, desc: 'Coding Club Qualifier', progress: 0 },
        { name: 'Open Air Amphitheatre', cap: '400 Standing/Seated', status: 'Available', statusColor: 'bg-white text-slate-500 border-slate-300', checkedIn: 0, desc: 'Cleaned & Ready', progress: 0 }
    ];

    const timeline = [
        { event: 'Dean signed approval for PyTorch Workshop', detail: 'Official seal applied with cryptographic certificate ID #GCU-25-881', time: '10 mins ago', type: 'primary' },
        { event: 'Venue Clash Resolved Automatically', detail: 'Seminar Hall 1 conflict adjusted for Dept. of Management Studies', time: '35 mins ago', type: 'emerald' },
        { event: 'Deanery issued 18 event credentials', detail: 'Dispatched to verified participant wallets via university portal', time: '2 hrs ago', type: 'primary' },
        { event: 'Department Head Onboarded', detail: 'Dr. M. K. Sharma designated as HOD Mechanical Engineering', time: 'Yesterday', type: 'slate' }
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] flex gap-6 mt-2">

            {/* Main Flow (Left/Center) */}
            <div className="flex-1 space-y-6">

                {/* Header */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-slate-500 font-bold text-[10px] tracking-widest uppercase mb-3">
                            GCU Campus &gt; University Administration &gt; <span className="text-primary">Executive Overview</span>
                        </div>
                        <h1 className="text-[28px] font-bold text-slate-900 tracking-tight leading-tight">Institutional Operations & Event<br />Governance</h1>
                        <p className="text-slate-500 mt-2 text-[13px] max-w-2xl leading-relaxed">
                            Girijananda Chowdhury University · Spring 2025 Academic Session ·<br />Real-time campus event oversight, compliance verification, and venue utilization.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-white text-slate-700 border border-slate-300 px-4 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-slate-50 transition-colors shadow-sm flex items-center justify-center gap-2">
                            <Download className="w-4 h-4" /> Export Semester Report
                        </button>
                        <button className="bg-primary text-white border border-primary px-4 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-2">
                            <ShieldCheck className="w-4 h-4" /> Institute Notice & Policy
                        </button>
                    </div>
                </div>

                {/* Top 4 KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    <div className="bg-white border border-slate-200 rounded-[12px] p-5 flex flex-col justify-between h-[150px] shadow-sm relative overflow-hidden">
                        <div className="flex justify-between items-start">
                            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Active Campus<br />Population</h3>
                            <div className="w-8 h-8 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100"><Users className="w-4 h-4" /></div>
                        </div>
                        <div>
                            <h2 className="text-[32px] font-bold text-slate-900 leading-none mb-3">8,420</h2>
                            <div className="flex gap-2 items-center text-[11px] font-medium text-slate-500">
                                <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded font-bold"><TrendingUp className="w-3 h-3" /> +14.2%</span> <span className="font-bold text-slate-400">vs Fall '24</span>
                            </div>
                            <p className="text-[10px] text-slate-400 font-medium mt-1">6,940 Students · 410 Faculty...</p>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-[12px] p-5 flex flex-col justify-between h-[150px] shadow-sm relative overflow-hidden">
                        <div className="flex justify-between items-start">
                            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Active & Scheduled<br />Events</h3>
                            <div className="w-8 h-8 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100"><CalendarDays className="w-4 h-4" /></div>
                        </div>
                        <div>
                            <h2 className="text-[32px] font-bold text-slate-900 leading-none mb-3">48</h2>
                            <div className="flex gap-2 items-center text-[11px] font-medium text-slate-500">
                                <span className="text-secondary bg-secondary/10 border border-secondary/20 px-1.5 py-0.5 rounded font-bold">100% Policy Compliant</span>
                            </div>
                            <p className="text-[10px] text-slate-400 font-medium mt-1">12 This Week · 4 Institutional...</p>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-[12px] p-5 flex flex-col justify-between h-[150px] shadow-[0_4px_15px_rgba(239,68,68,0.1)] relative overflow-hidden ring-1 ring-red-100">
                        <div className="flex justify-between items-start">
                            <h3 className="text-[10px] font-bold text-red-500 uppercase tracking-widest leading-tight">Pending Approvals</h3>
                            <div className="w-8 h-8 rounded-md bg-red-50 text-red-600 flex items-center justify-center border border-red-100"><XOctagon className="w-4 h-4 opacity-50" /></div>
                        </div>
                        <div>
                            <h2 className="text-[32px] font-bold text-red-600 leading-none mb-3">4</h2>
                            <div className="flex justify-between items-center text-[10px] font-medium text-slate-500">
                                <span className="text-primary bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded font-bold flex items-center gap-1">Requires Dean ...</span>
                                <span className="text-slate-900 font-bold hover:underline cursor-pointer flex items-center gap-0.5">Queue <ChevronRight className="w-3 h-3" /></span>
                            </div>
                            <p className="text-[10px] text-slate-400 font-medium mt-1">2 Symposia · 1 Bu...</p>
                        </div>
                        <div className="absolute right-0 top-10 bottom-0 w-24 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-[0.03] pointer-events-none"></div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-[12px] p-5 flex flex-col justify-between h-[150px] shadow-sm relative overflow-hidden">
                        <div className="flex justify-between items-start">
                            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Seat Registrations</h3>
                            <div className="w-8 h-8 rounded-md bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100"><Zap className="w-4 h-4" /></div>
                        </div>
                        <div>
                            <h2 className="text-[32px] font-bold text-slate-900 leading-none mb-3">14,890</h2>

                            <div className="w-full bg-slate-100 h-1.5 rounded-full mb-2 overflow-hidden flex relative">
                                <div className="bg-primary h-full w-[84.6%]"></div>
                            </div>
                            <div className="flex justify-between text-[9px] font-medium text-slate-500 leading-tight">
                                <span><strong className="text-slate-700">84.6%</strong> Gate<br />Check-in Turnout</span>
                                <span className="text-right"><strong className="text-emerald-600">98.2%</strong> Certs<br />Delivered</span>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Small Stat Strip */}
                <div className="flex gap-4 mb-2 overflow-x-auto no-scrollbar">
                    <div className="bg-white border border-slate-200 px-5 py-3 rounded-[10px] flex items-center gap-3 shrink-0 shadow-sm">
                        <div className="text-slate-400"><Building2 className="w-5 h-5" /></div>
                        <div className="flex flex-col justify-center leading-tight">
                            <span className="text-[13px] font-bold text-slate-900">14 Departments</span>
                            <span className="text-[10px] text-slate-500 font-medium">Active in Spring '25 Cycle</span>
                        </div>
                    </div>
                    <div className="bg-white border border-slate-200 px-5 py-3 rounded-[10px] flex items-center gap-3 shrink-0 shadow-sm">
                        <div className="text-slate-400"><MapPin className="w-5 h-5" /></div>
                        <div className="flex flex-col justify-center leading-tight">
                            <span className="text-[13px] font-bold text-slate-900">28 Campus Venues</span>
                            <span className="text-[10px] text-slate-500 font-medium">76% Weekend Peak Rate</span>
                        </div>
                    </div>
                    <div className="bg-white border border-slate-200 px-5 py-3 rounded-[10px] flex items-center gap-3 shrink-0 shadow-sm">
                        <div className="text-emerald-500 bg-emerald-50 p-1 rounded border border-emerald-100"><Banknote className="w-4 h-4" /></div>
                        <div className="flex flex-col justify-center leading-tight">
                            <span className="text-[13px] font-bold text-slate-900">₹4.85 Lakhs</span>
                            <span className="text-[10px] text-slate-500 font-medium">Co-curricular Grants Approved</span>
                        </div>
                    </div>
                    <div className="bg-white border border-slate-200 px-5 py-3 rounded-[10px] flex items-center gap-3 shrink-0 shadow-sm w-full">
                        <div className="text-primary"><Fingerprint className="w-5 h-5" /></div>
                        <div className="flex flex-col justify-center leading-tight">
                            <span className="text-[13px] font-bold text-slate-900">99.4% Gate Sync</span>
                            <span className="text-[10px] text-slate-500 font-medium">Biometric & QR Auth Rate</span>
                        </div>
                    </div>
                </div>

                {/* Pending Urgent Approvals */}
                <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm overflow-hidden mb-6">
                    <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                        <h3 className="text-[14px] font-bold text-slate-900 flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            Urgent Action Required: Pending Event Proposals (4)
                        </h3>
                        <button className="text-[11px] font-bold text-slate-500 hover:text-primary flex items-center gap-1 transition-colors">
                            View All Approvals <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    <div className="p-5 space-y-4">
                        {pendingApprovals.map(approval => (
                            <div key={approval.id} className="bg-slate-50/50 border border-slate-200 rounded-[12px] p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-primary/30 transition-colors group">
                                <div>
                                    <div className="flex gap-2 mb-2">
                                        <span className="bg-blue-50 text-primary border border-blue-100 px-2 py-0.5 rounded text-[10px] font-bold tracking-widest">{approval.type}</span>
                                        <span className={`border px-2 py-0.5 rounded text-[10px] font-bold tracking-widest ${approval.statusType === 'danger' ? 'bg-red-50 text-red-600 border-red-200' : 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                                            {approval.status}
                                        </span>
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-400 font-mono tracking-tight mb-1">{approval.subCode}</p>
                                    <h4 className="text-[15px] font-bold text-slate-900 mb-1.5 leading-tight">{approval.title}</h4>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-medium text-slate-500">
                                        <span className="flex items-center gap-1.5"><Building2 className="w-3 h-3 text-slate-400" /> {approval.dept}</span>
                                        <span className="flex items-center gap-1.5"><Users className="w-3 h-3 text-slate-400" /> {approval.coordinator}</span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-bold text-slate-700 mt-1">
                                        <span className="flex items-center gap-1.5"><CalendarDays className="w-3 h-3 text-emerald-600" /> {approval.date}</span>
                                        <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-blue-600" /> {approval.venue}</span>
                                    </div>
                                </div>
                                <div className="w-full md:w-auto shrink-0 flex flex-col gap-2">
                                    <button className="w-full md:w-36 bg-primary text-white text-[12px] font-bold px-4 py-2 rounded-[6px] hover:bg-primary-container transition-colors shadow-sm text-center">
                                        Review & Verify
                                    </button>
                                    <button className="w-full md:w-36 bg-white text-slate-600 text-[12px] font-bold px-4 py-2 rounded-[6px] border border-slate-200 hover:bg-slate-50 transition-colors text-center">
                                        Audit Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Approved Table */}
                <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm overflow-hidden flex flex-col mb-4">
                    <div className="p-5 border-b border-slate-100 flex justify-between items-center gap-4">
                        <div>
                            <h3 className="text-[15px] font-bold text-slate-900 mb-0.5">Recent Approved University Events</h3>
                            <p className="text-[11px] font-medium text-slate-500">Officially sanctioned activities running under GCU Co-curricular Protocols</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-[6px] text-primary text-[10px] font-bold shrink-0 uppercase tracking-widest shadow-sm">Live<br />Register</button>
                            <button className="bg-white border border-slate-200 px-3 py-1.5 flex items-center justify-center rounded-[6px] text-slate-500 text-[11px] font-bold uppercase tracking-widest hover:text-slate-900 shadow-sm gap-1.5">
                                <Filter className="w-3.5 h-3.5" /> Filter
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-[12px]">
                            <thead className="bg-slate-50 border-b border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                <tr>
                                    <th className="px-5 py-3 font-bold">Event Title & Category</th>
                                    <th className="px-5 py-3 font-bold">Department</th>
                                    <th className="px-5 py-3 font-bold">Target Date</th>
                                    <th className="px-5 py-3 font-bold">Venue</th>
                                    <th className="px-5 py-3 font-bold text-right">Capacity Filled</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {approvedEvents.map(event => (
                                    <tr key={event.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-5 py-3">
                                            <p className="font-bold text-slate-900 max-w-[180px] leading-tight mb-0.5">{event.title}</p>
                                            <p className="text-[10px] font-medium text-slate-500">{event.cat}</p>
                                        </td>
                                        <td className="px-5 py-3">
                                            <p className="text-[11px] font-medium text-slate-600 max-w-[120px] leading-tight">{event.dept}</p>
                                        </td>
                                        <td className="px-5 py-3 font-bold text-slate-700">{event.date}</td>
                                        <td className="px-5 py-3">
                                            <p className="text-[11px] font-bold text-slate-800 max-w-[100px] leading-tight">{event.venue}</p>
                                        </td>
                                        <td className="px-5 py-3 text-right">
                                            <div className="flex flex-col items-end gap-1 w-24 ml-auto">
                                                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                                    <div className="h-full rounded-full bg-[#0f172a]" style={{ width: `${event.fill}%` }}></div>
                                                </div>
                                                <span className="text-[10px] font-bold text-slate-600">{event.enrolled}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            {/* Right Sidebar (Analytics Column) */}
            <div className="w-[340px] shrink-0 space-y-6 flex flex-col hidden lg:flex">

                {/* Venue Utilization */}
                <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm flex flex-col">
                    <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                        <div>
                            <h3 className="text-[14px] font-bold text-slate-900 flex items-center gap-2">Venue Utilization Today <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span></h3>
                            <p className="text-[10px] text-slate-500 font-medium mt-0.5">Live telemetry from GCU Facilities</p>
                        </div>
                        <button className="text-[11px] font-bold text-slate-500 hover:text-primary transition-colors">Manage</button>
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                        {venues.map((venue, i) => (
                            <div key={i} className="border border-slate-100 rounded-[8px] p-3 hover:border-slate-300 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="pr-2">
                                        <h4 className="text-[12px] font-bold text-slate-900 leading-tight mb-0.5">{venue.name}</h4>
                                        <p className="text-[10px] font-medium text-slate-400">Cap: {venue.cap}</p>
                                    </div>
                                    <span className={`px-2 py-1 rounded text-[9px] font-bold tracking-widest uppercase border shrink-0 text-center leading-tight shadow-sm ${venue.statusColor}`}>
                                        {venue.status.split(':').map((line, j) => <span key={j} className="block">{line}</span>)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-end border-t border-slate-100 pt-2 pb-1 relative">
                                    <span className="text-[10px] font-medium text-slate-500 italic max-w-[160px] truncate">{venue.desc}</span>
                                    {venue.checkedIn > 0 && <span className="text-[10px] font-bold text-slate-800 text-right shrink-0">{venue.checkedIn} Checked In</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Activity Log */}
                <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm flex flex-col flex-1 h-full max-h-[500px]">
                    <div className="p-4 border-b border-slate-100 flex justify-between items-center shrink-0">
                        <h3 className="text-[15px] font-bold text-slate-900 leading-tight">System Activity<br />Stream</h3>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right leading-tight">Immutable<br />Log</span>
                    </div>
                    <div className="p-5 overflow-y-auto flex-1 h-full pl-6">
                        <div className="relative border-l border-slate-100 ml-1.5 space-y-5 pb-4">
                            {timeline.map((item, i) => (
                                <div key={i} className="relative pl-5">
                                    <div className={`absolute top-1.5 -left-[5px] w-2.5 h-2.5 rounded-full ring-4 ring-white ${item.type === 'emerald' ? 'bg-emerald-500' :
                                            item.type === 'primary' ? 'bg-primary' :
                                                'bg-slate-400'
                                        }`}></div>
                                    <h4 className={`text-[12px] font-bold mb-0.5 leading-tight ${item.type === 'slate' ? 'text-slate-700' : 'text-slate-900'}`}>{item.event}</h4>
                                    <p className="text-[10px] font-medium text-slate-500 leading-relaxed mb-1">{item.detail}</p>
                                    <p className="text-[9px] font-bold text-slate-400">{item.time}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to action card */}
                <div className="bg-[#1e3a8a] rounded-[16px] p-5 shadow-sm text-white overflow-hidden relative shadow-[0_4px_20px_rgba(30,58,138,0.3)]">
                    <div className="relative z-10">
                        <h4 className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-1.5 flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> COMPLIANCE AUDIT ACTIVE</h4>
                        <h3 className="text-[16px] font-bold mb-2">UGC Norm Compliance 2025</h3>
                        <p className="text-[11px] font-medium text-blue-100 mb-4 leading-relaxed opacity-90">All events require student welfare and fire safety approvals at least 72 hours prior to start.</p>

                        <button className="text-[12px] font-bold flex items-center gap-2 hover:text-blue-200 transition-colors">
                            Read Regulatory Guidelines <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                    </div>
                    <div className="absolute right-[-20%] bottom-[-20%] opacity-10">
                        <ShieldCheck className="w-48 h-48" />
                    </div>
                </div>

            </div>

        </div>
    );
}
