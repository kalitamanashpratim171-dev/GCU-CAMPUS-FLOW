import { useState } from 'react';
import {
    Download,
    FileText,
    ShieldCheck,
    Clock,
    Trophy,
    Target,
    TrendingUp,
    CheckCircle2,
    FileSignature,
    Search,
    ChevronDown,
    RefreshCw,
    Cpu,
    ShieldAlert,
    Snowflake,
    Leaf,
    Factory,
    ArrowRight,
    Landmark,
    ExternalLink,
    ChevronLeft,
    ChevronRight,
    LogIn,
    LogOut
} from 'lucide-react';

export default function StudentHistory() {

    const historyData = [
        {
            id: 1, icon: Cpu, iconBg: 'bg-indigo-50 border-indigo-100 text-indigo-600',
            title: 'Machine Learning & Healthcare Diagnostics Workshop',
            desc: 'Dept. of Computer Science & Engineering - Faculty Series',
            date: 'Mar 14, 2025', venue: 'Pharmacy Auditorium B',
            inTime: '09:42:18 AM', inGate: 'Gate B Turnstile',
            outTime: '05:15:30 PM', outGate: 'Gate B Turnstile',
            dwell: '7h 33m', compliancePct: 96,
            leavesGranted: '8 Hours Granted', signedBy: 'Dr. Pranjal Barman'
        },
        {
            id: 2, icon: ShieldCheck, iconBg: 'bg-blue-50 border-blue-100 text-blue-600',
            title: 'Cybersecurity Vulnerability Assessment Lab',
            desc: 'Assam State Cyber Cell & GCU InfoSec Club',
            date: 'Feb 28, 2025', venue: 'CS Lab 2 (Block C)',
            inTime: '01:48:02 PM', inGate: 'CS Smart Door 2',
            outTime: '05:30:11 PM', outGate: 'CS Smart Door 2',
            dwell: '3h 42m', compliancePct: 92,
            leavesGranted: '4 Hours Granted', signedBy: 'Prof. N. Kalita'
        },
        {
            id: 3, icon: Snowflake, iconBg: 'bg-sky-50 border-sky-100 text-sky-600',
            title: 'Deep Learning & AI Colloquium 2025',
            desc: 'GCU Center for AI Research - 2-Day National Symposium',
            date: 'Jan 08-09, 2025', venue: 'Seminar Hall 1 (Admin Block)',
            inTime: '09:15:40 AM', inGate: 'Hall 1 Main Door',
            outTime: '05:00:15 PM', outGate: '2-day aggregated',
            dwell: '15h 45m', compliancePct: 98,
            leavesGranted: '16 Hours Granted', signedBy: 'Dr. D. Sharma'
        },
        {
            id: 4, icon: Leaf, iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
            title: 'Assam Biodiversity & Green Tech Hackathon',
            desc: 'GCU Incubation Cell - 36h Sprint',
            date: 'Nov 21-22, 2024', venue: 'Innovation Hub Hall 3',
            inTime: '08:50:00 AM', inGate: 'Incubator Scan',
            outTime: '09:10:00 PM', outGate: 'Sprint Day 2 Checkout',
            dwell: '36h Sprint Checkin', compliancePct: 100,
            leavesGranted: '8 Hours Granted', signedBy: 'Dean Student Welfare'
        },
        {
            id: 5, icon: Factory, iconBg: 'bg-slate-50 border-slate-200 text-slate-600',
            title: 'National Energy Conclave 2024',
            desc: 'Mechanical Engineering & Renewable Systems',
            date: 'Oct 11, 2024', venue: 'Mechanical Seminar Hall',
            inTime: '10:00:22 AM', inGate: 'Mech North Entry',
            outTime: '04:30:45 PM', outGate: 'Mech North Entry',
            dwell: '6h 30m', compliancePct: 93,
            leavesGranted: '6 Hours Granted', signedBy: 'Dr. S. K. Roy'
        }
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] mx-auto mt-2 space-y-6">

            {/* Top Breadcrumb Context */}
            <div className="flex justify-between items-center bg-transparent px-1 py-1 text-[10px] font-bold">
                <div className="flex items-center gap-2 text-slate-500 uppercase tracking-widest flex-wrap">
                    GCU Campus &gt; Student Portal &gt; Participation &gt; <span className="text-primary">Event History & Duty Leaves</span>
                </div>
            </div>

            {/* Main Header */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-2">
                <div className="max-w-3xl">
                    <h1 className="text-[28px] md:text-[32px] font-bold text-[#0f172a] tracking-tight leading-[1.1] mb-3">
                        Event History & Duty Leaves Ledger
                    </h1>
                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed max-w-2xl">
                        Complete chronological log of attended events, biometrically verified gate check-in/out timestamps, duty leave sanctions, and academic attendance credit reconciliations.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto shrink-0 mt-4 xl:mt-0">
                    <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center justify-center gap-2 transition-colors">
                        <FileSignature className="w-4 h-4 text-slate-400" /> Export Transcript (.CSV)
                    </button>
                    <button className="bg-[#0f172a] text-white hover:bg-slate-800 shadow-sm px-5 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center justify-center gap-2 transition-colors">
                        <Download className="w-4 h-4" /> Download Duty Leave Slip (.PDF)
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sessions Attended</h3>
                        <div className="w-8 h-8 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600"><FileText className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-[32px] md:text-[36px] font-bold text-slate-900 leading-none tracking-tight">18</span>
                        <span className="text-[14px] font-bold text-slate-400">Sessions</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight mb-4 min-h-[28px]">Academic workshops & co-curricular summits</p>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold pt-3 border-t border-slate-100 text-teal-600">
                        <CheckCircle2 className="w-3.5 h-3.5" /> 100% Verified attendance
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sanctioned Duty Leaves</h3>
                        <div className="w-8 h-8 rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600"><Target className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-[32px] md:text-[36px] font-bold text-slate-900 leading-none tracking-tight">36</span>
                        <span className="text-[14px] font-bold text-slate-400">Academic Hours</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight mb-4 min-h-[28px]">100% endorsed by HOD CSE.<br />0 pending.</p>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold pt-3 border-t border-slate-100 text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Reconciled in Spring 2025 Ledger
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Gate Scan Fidelity</h3>
                        <div className="w-8 h-8 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600"><Clock className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-[32px] md:text-[36px] font-bold text-slate-900 leading-none tracking-tight">95.8%</span>
                        <span className="text-[14px] font-bold text-slate-400">Optimal</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight mb-4 min-h-[28px]">Dwell-time against scheduled length</p>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold pt-3 border-t border-slate-100 text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" /> Above mandatory 80% threshold
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Attendance Boost</h3>
                        <div className="w-8 h-8 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600"><TrendingUp className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-[32px] md:text-[36px] font-bold text-emerald-600 leading-none tracking-tight">+4.2%</span>
                        <span className="text-[14px] font-bold flex flex-col leading-tight"><span className="text-slate-400">Class</span><span className="text-slate-400">Weighted</span></span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight mb-4 min-h-[28px]">Exempted absence credit into SAMARTH ERP</p>
                    <div className="flex items-start justify-between text-[10px] font-bold pt-3 border-t border-slate-100 text-slate-600">
                        <span className="flex items-center gap-1.5"><Landmark className="w-3.5 h-3.5 text-slate-400" /> Eligible for Semester End Exams</span>
                    </div>
                </div>
            </div>

            {/* Notification Card */}
            <div className="bg-white border-l-4 border-l-blue-600 border-y border-r border-slate-200 rounded-[12px] shadow-sm p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-[8px] bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm mt-1">
                        <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                            <h3 className="text-[15px] font-bold text-slate-900 leading-tight">SAMARTH ERP Class Attendance Reconciled</h3>
                            <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Active & Endorsed</span>
                            <span className="bg-slate-50 text-slate-500 border border-slate-200 px-2 py-0.5 rounded text-[9px] font-bold font-mono tracking-widest uppercase">Batch #GCU-ERP-2025-042B</span>
                        </div>
                        <p className="text-[12px] text-slate-500 font-medium leading-relaxed max-w-4xl mt-2 text-justify md:text-left">
                            36 sanctioned duty leave hours have been credited directly to Spring 2025 class rosters for <strong className="text-slate-700 font-bold">CSE-401 (OS)</strong>, <strong className="text-slate-700 font-bold">CSE-403 (DBMS)</strong>, and <strong className="text-slate-700 font-bold">CSE-405 (Formal Languages)</strong>, exempting absence markers during official events. Approved by Dean of Academic Affairs.
                        </p>
                    </div>
                </div>
                <button className="shrink-0 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-4 py-2 text-[12px] font-bold rounded-[8px] transition-colors shadow-sm w-full md:w-auto">
                    Audit Log
                </button>
            </div>

            {/* Main Ledger Table */}
            <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm overflow-hidden flex flex-col">

                <div className="p-5 border-b border-slate-100 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div>
                        <h2 className="text-[16px] font-bold text-slate-900 leading-tight mb-1">Chronological Participation & Gate Ingress Ledger</h2>
                        <p className="text-[12px] text-slate-500 font-medium">Detailed timeline of authenticated event entry/exit timestamps and leave attestations.</p>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap items-center gap-3 w-full lg:w-auto">
                        <div className="relative w-full md:w-64 shrink-0">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input type="text" placeholder="Filter by event or faculty..." className="w-full bg-slate-50 border border-slate-200 rounded-[8px] pl-9 pr-4 py-2 text-[12px] font-medium text-slate-700 outline-none focus:border-primary transition-colors h-9" />
                        </div>

                        <div className="relative flex-1 md:w-44 shrink-0">
                            <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-[8px] px-3 py-2 h-9 text-[11px] font-bold text-slate-600 outline-none cursor-pointer shadow-sm">
                                <option>Spring 2025 (Current)</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                        </div>

                        <div className="relative flex-1 md:w-36 shrink-0">
                            <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-[8px] px-3 py-2 h-9 text-[11px] font-bold text-slate-600 outline-none cursor-pointer shadow-sm">
                                <option>All Leave Statuses</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                        </div>

                        <button className="w-9 h-9 shrink-0 flex items-center justify-center bg-white border border-slate-200 rounded-[8px] text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
                            <RefreshCw className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto w-full">
                    <table className="w-full text-left border-collapse min-w-[900px]">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                <th className="px-6 py-4 font-bold">Event & Session Profile</th>
                                <th className="px-6 py-4 font-bold">Date & Venue</th>
                                <th className="px-6 py-4 font-bold">Gate Timestamps (NFC/Biometric)</th>
                                <th className="px-6 py-4 font-bold">Dwell / Compliance</th>
                                <th className="px-6 py-4 font-bold">Duty Leaves</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-[12px]">
                            {historyData.map((row) => (
                                <tr key={row.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-5 align-top">
                                        <div className="flex gap-4 items-start">
                                            <div className={`w-8 h-8 rounded-[6px] border flex items-center justify-center shrink-0 shadow-sm mt-0.5 ${row.iconBg}`}>
                                                <row.icon className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <h4 className="text-[13px] font-bold text-slate-900 leading-tight mb-1 max-w-[240px] pr-4 group-hover:text-primary transition-colors">{row.title}</h4>
                                                <p className="text-[10px] text-slate-500 font-medium leading-relaxed max-w-[200px]">{row.desc}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 align-top">
                                        <div className="text-[11px] font-bold text-slate-800 mb-1">{row.date}</div>
                                        <div className="text-[10px] text-slate-500 font-medium line-clamp-2 max-w-[140px] leading-tight">{row.venue}</div>
                                    </td>
                                    <td className="px-6 py-5 align-top">
                                        <div className="flex flex-col gap-1.5 font-mono text-[10px]">
                                            <div className="flex items-center gap-1.5">
                                                <LogIn className="w-3.5 h-3.5 text-emerald-500" />
                                                <span className="font-bold text-slate-700">{row.inTime}</span>
                                                <span className="text-slate-400 font-sans tracking-tight">({row.inGate})</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <LogOut className="w-3.5 h-3.5 text-slate-400" />
                                                <span className="font-bold text-slate-700">{row.outTime}</span>
                                                <span className="text-slate-400 font-sans tracking-tight">({row.outGate})</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 align-top">
                                        <div className="flex justify-between items-end mb-1.5">
                                            <span className="text-[11px] font-bold text-slate-800">{row.dwell}</span>
                                            <span className="text-[10px] font-bold text-teal-600">{row.compliancePct}%</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-teal-600 rounded-full" style={{ width: `${row.compliancePct}%` }}></div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 align-top">
                                        <div className="text-[11px] font-bold text-slate-800 mb-1">{row.leavesGranted}</div>
                                        <div className="text-[10px] text-slate-500 font-medium whitespace-nowrap">Signed: <span className="text-slate-600 font-bold">{row.signedBy}</span></div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Footer */}
                <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50">
                    <div className="text-[11px] text-slate-500 font-medium">
                        Showing 1 to 5 of 18 total attendance records across 3 academic semesters
                    </div>
                    <div className="flex gap-1">
                        <button className="w-8 h-8 flex items-center justify-center rounded-[6px] text-slate-400 hover:bg-slate-200 transition-colors bg-slate-100"><ChevronLeft className="w-4 h-4" /></button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-[6px] text-white font-bold text-[11px] bg-[#0f172a] shadow-sm">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-[6px] text-slate-600 font-bold text-[11px] hover:bg-slate-200 transition-colors bg-slate-100">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-[6px] text-slate-600 font-bold text-[11px] hover:bg-slate-200 transition-colors bg-slate-100">3</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-[6px] text-slate-600 hover:bg-slate-200 transition-colors bg-slate-100"><ChevronRight className="w-4 h-4" /></button>
                    </div>
                </div>
            </div>

            {/* Bottom Analytics & Quota Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Chart Block */}
                <div className="lg:col-span-2 bg-white border border-slate-200 rounded-[16px] shadow-sm p-6 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-[15px] font-bold text-slate-900 leading-tight mb-1">Duty Leave Ingress Distribution</h3>
                            <p className="text-[11px] text-slate-500 font-medium">Monthly accumulated duty hours vs. regular lecture waivers</p>
                        </div>
                        <div className="flex items-center gap-4 text-[10px] font-bold text-slate-600">
                            <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-blue-300 rounded-[2px]"></div> Workshop Hours</div>
                            <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-teal-700 rounded-[2px]"></div> ERP Sanctioned</div>
                        </div>
                    </div>

                    {/* Fake Bar Chart */}
                    <div className="flex-1 min-h-[160px] flex items-end justify-between gap-2 md:gap-6 px-2 md:px-8 pt-4 pb-2 border-b border-slate-100">
                        {/* Oct */}
                        <div className="flex flex-col items-center gap-2 group w-full relative">
                            <div className="flex items-end gap-1 w-full justify-center h-32 relative">
                                <div className="w-4 md:w-8 bg-blue-300 rounded-t-[4px] h-[40%] group-hover:bg-blue-400 transition-colors"></div>
                                <div className="w-4 md:w-8 bg-teal-700 rounded-t-[4px] h-[40%] group-hover:bg-teal-600 transition-colors"></div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-500">Oct '24</span>
                        </div>
                        {/* Nov */}
                        <div className="flex flex-col items-center gap-2 group w-full relative">
                            <div className="flex items-end gap-1 w-full justify-center h-32 relative">
                                <div className="w-4 md:w-8 bg-blue-300 rounded-t-[4px] h-[50%] group-hover:bg-blue-400 transition-colors"></div>
                                <div className="w-4 md:w-8 bg-teal-700 rounded-t-[4px] h-[50%] group-hover:bg-teal-600 transition-colors"></div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-500">Nov '24</span>
                        </div>
                        {/* Dec */}
                        <div className="flex flex-col items-center gap-2 group w-full relative">
                            <div className="flex items-end gap-1 w-full justify-center h-32 relative">
                                <div className="w-4 md:w-8 bg-blue-300 rounded-t-[4px] h-[20%] group-hover:bg-blue-400 transition-colors"></div>
                                <div className="w-4 md:w-8 bg-teal-700 rounded-t-[4px] h-[20%] group-hover:bg-teal-600 transition-colors"></div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-500">Dec '24</span>
                        </div>
                        {/* Jan */}
                        <div className="flex flex-col items-center gap-2 group w-full relative">
                            <div className="flex items-end gap-1 w-full justify-center h-32 relative">
                                <div className="w-4 md:w-8 bg-blue-300 rounded-t-[4px] h-[90%] group-hover:bg-blue-400 transition-colors"></div>
                                <div className="w-4 md:w-8 bg-teal-700 rounded-t-[4px] h-[90%] group-hover:bg-teal-600 transition-colors"></div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-500">Jan '25</span>
                        </div>
                        {/* Feb */}
                        <div className="flex flex-col items-center gap-2 group w-full relative">
                            <div className="flex items-end gap-1 w-full justify-center h-32 relative">
                                <div className="w-4 md:w-8 bg-blue-300 rounded-t-[4px] h-[35%] group-hover:bg-blue-400 transition-colors"></div>
                                <div className="w-4 md:w-8 bg-teal-700 rounded-t-[4px] h-[35%] group-hover:bg-teal-600 transition-colors"></div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-500">Feb '25</span>
                        </div>
                        {/* Mar */}
                        <div className="flex flex-col items-center gap-2 group w-full relative">
                            <div className="flex items-end gap-1 w-full justify-center h-32 relative">
                                <div className="w-4 md:w-8 bg-blue-300 rounded-t-[4px] h-[55%] group-hover:bg-blue-400 transition-colors"></div>
                                <div className="w-4 md:w-8 bg-teal-700 rounded-t-[4px] h-[55%] group-hover:bg-teal-600 transition-colors"></div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">Mar '25</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 pt-4 px-2">
                        <span>Average monthly duty leave entitlement: 7.2 Hours</span>
                        <span>Auto-synced via GCU Cloud Gateway</span>
                    </div>
                </div>

                {/* Gauge Widget Block */}
                <div className="bg-white border text-center border-slate-200 rounded-[16px] shadow-sm p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-4 text-left">
                        <h3 className="text-[15px] font-bold text-slate-900 leading-tight">Absence Waiver Quota</h3>
                        <span className="bg-blue-50 text-blue-700 px-2 py-1 flex flex-col text-center justify-center leading-tight rounded-[6px] text-[10px] font-bold">Semester<br />Cap</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium mb-6 text-left leading-relaxed pr-8">
                        Maximum sanctioned duty hours allowed per academic semester under University Council rules.
                    </p>

                    {/* SVG Circular Gauge Mock */}
                    <div className="relative w-32 h-32 mx-auto mb-6">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            {/* Background circle */}
                            <circle cx="50" cy="50" r="40" stroke="#f1f5f9" strokeWidth="12" fill="none" />
                            {/* Progress circle (60% i.e 36/60) */}
                            <circle cx="50" cy="50" r="40" stroke="#0f172a" strokeWidth="12" fill="none" strokeDasharray="251" strokeDashoffset="100" className="transition-all duration-1000 ease-out" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-[26px] font-bold text-slate-900 leading-none">36<span className="text-[16px] text-slate-400">/60</span></span>
                            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Hours Used</span>
                        </div>
                    </div>

                    <div className="space-y-2 mb-6">
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="font-bold text-slate-500">Remaining Buffer Allowance:</span>
                            <span className="font-bold text-slate-900">24 Hours</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="font-bold text-slate-500">Punctuality Rate:</span>
                            <span className="font-bold text-slate-900">90% on-time gate scans</span>
                        </div>
                    </div>

                    <button className="w-full border border-slate-200 text-blue-600 bg-blue-50/50 hover:bg-blue-50 font-bold text-[12px] py-3 rounded-[8px] flex items-center justify-center gap-2 transition-colors">
                        Apply for Special Activity Waiver <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>

            {/* Footer Disclaimer */}
            <div className="bg-slate-50 border border-slate-200 rounded-[12px] p-5 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-4 mt-2">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 shadow-sm md:mt-1">
                    <Landmark className="w-5 h-5" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-[12px] font-bold text-slate-900 uppercase tracking-widest mb-1.5 flex items-center justify-center md:justify-start gap-2">
                        GCU Academic Ordinance §18(b) - Co-Curricular Duty Leave Policy
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed max-w-5xl">
                        Automatic duty leave endorsement requires a minimum dwell-time of <strong className="text-slate-700 font-bold">80%</strong> inside the registered geo-fenced event venue verified via smart turnstile badge scans or biometric checkpoints. Sanctioned hours are directly integrated into the university-wide <strong className="text-slate-700 font-bold">SAMARTH ERP</strong> database within 48 hours of event completion.
                    </p>
                </div>
                <button className="shrink-0 text-slate-700 hover:text-blue-700 text-[11px] font-bold flex flex-row items-center gap-1.5 transition-colors pt-2 md:pt-1">
                    View Academic Ordinance <ExternalLink className="w-3 h-3" />
                </button>
            </div>

        </div>
    );
}
