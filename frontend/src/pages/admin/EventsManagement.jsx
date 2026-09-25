import { useState } from 'react';
import {
    Building2,
    Download,
    ShieldCheck,
    PlusSquare,
    CalendarDays,
    IndianRupee,
    Users,
    Search,
    TableProperties,
    Calendar,
    FilterX,
    ChevronDown,
    FileText,
    Flag,
    MapPin,
    Bot,
    Brain,
    Leaf,
    Pill,
    Zap,
    MessageSquareQuote,
    TrendingUp,
    CheckCircle2,
    ChevronRight,
    ChevronLeft,
    AlertOctagon,
    Flame,
    UserCheck
} from 'lucide-react';

export default function EventsManagement() {
    const [selectedIds, setSelectedIds] = useState([1, 2]); // Initial mockup state has first 2 selected

    const eventsList = [
        {
            id: 1,
            icon: Bot, iconBg: 'bg-indigo-50 text-indigo-500 border border-indigo-100',
            title: 'TechVenture 2025: National Flagship Fest & Robotics',
            code: 'GCU-ENG-2025-04', type: 'Flagship Level-1',
            dept: 'Dept. of Computer Science & Eng.', lead: 'Dr. Pranjal Barman (Lead)',
            date: 'Apr 05–06, 2025', venue: 'Central University Auditorium',
            enrolled: 340, capacity: 500, percent: 68, fillColor: 'bg-primary',
            budget: '₹1,25,000', budgetSrc: 'UGC/AICTE Fund'
        },
        {
            id: 2,
            icon: Brain, iconBg: 'bg-blue-50 text-blue-500 border border-blue-100',
            title: 'Deep Learning & Computer Vision Workshop',
            code: 'GCU-CS-2025-11', type: 'Faculty Dev Series',
            dept: 'Dept. of Computer Science & Eng.', lead: 'Dr. Pranjal Barman',
            date: 'Mar 28, 2025', venue: 'Advanced Computing Lab 3',
            enrolled: 68, capacity: 80, percent: 85, fillColor: 'bg-[#0f172a]',
            budget: '₹35,000', budgetSrc: 'Departmental'
        },
        {
            id: 3,
            icon: Leaf, iconBg: 'bg-teal-50 text-teal-600 border border-teal-100',
            title: 'Assam Regional Biodiversity & Green Tech Hackathon',
            code: 'GCU-HACK-2025-02', type: 'Inter-Departmental',
            dept: 'Dept. of Civil & Bio-Tech', lead: 'Prof. Debojit Sarma',
            date: 'Mar 24–25, 2025', venue: 'Incubation & Startup Lab',
            enrolled: 150, capacity: 150, percent: 100, fillColor: 'bg-emerald-500', isFull: true,
            budget: '₹75,000', budgetSrc: 'State Sponsored'
        },
        {
            id: 4,
            icon: Pill, iconBg: 'bg-slate-100 text-slate-500 border border-slate-200',
            title: 'International Pharmacovigilance & Clinical Trial Summit',
            code: 'GCU-PHARM-2025-08', type: 'Global Conclave',
            dept: 'School of Pharmaceutical Sciences', lead: 'Dr. Rupali Dutta',
            date: 'Mar 18, 2025', venue: 'Pharmacy Block Hall 1',
            enrolled: 180, capacity: 200, percent: 90, fillColor: 'bg-primary',
            budget: '₹2,10,000', budgetSrc: 'PCI & Pharma Cos.'
        },
        {
            id: 5,
            icon: Zap, iconBg: 'bg-blue-50 text-blue-500 border border-blue-100',
            title: 'National Conf. on Renewable Energy & Smart Grid',
            code: 'GCU-EEE-2025-14', type: 'SERB Sponsored',
            dept: 'Dept. of Electrical & Electronics', lead: 'Dr. Hemanta Kr. Roy',
            date: 'May 14–16, 2025', venue: 'Mechanical Seminar Hall 1',
            enrolled: 95, capacity: 150, percent: 63, fillColor: 'bg-[#0f172a]',
            budget: '₹90,000', budgetSrc: 'DST SERB Grant'
        },
        {
            id: 6,
            icon: MessageSquareQuote, iconBg: 'bg-slate-100 text-slate-500 border border-slate-200',
            title: 'Brahmaputra Inter-Collegiate Literary & Parliamentary Debate',
            code: 'GCU-LIT-2025-03', type: 'Societal Council',
            dept: 'Literary & Debating Society', lead: 'Convenor: Dr. Ananya Kalita',
            date: 'May 02–03, 2025', venue: 'Conference Hall A',
            enrolled: 120, capacity: 120, percent: 100, fillColor: 'bg-emerald-500', isFull: true,
            budget: '₹45,000', budgetSrc: 'Student Affairs'
        }
    ];

    const handleSelectAll = (e) => {
        if (e.target.checked) setSelectedIds(eventsList.map(ev => ev.id));
        else setSelectedIds([]);
    };

    const toggleSelect = (id) => {
        if (selectedIds.includes(id)) setSelectedIds(selectedIds.filter(i => i !== id));
        else setSelectedIds([...selectedIds, id]);
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] mx-auto mt-2 space-y-6">

            {/* Top Breadcrumb Context */}
            <div className="flex justify-between items-center bg-white px-5 py-2.5 rounded-[10px] border border-slate-200 shadow-sm text-[11px] font-bold">
                <div className="flex items-center gap-2 text-slate-500 uppercase tracking-widest">
                    Campus Home &gt; Administration &gt; Event Governance &gt; <span className="text-primary">Master Events Ledger</span>
                </div>
                <div className="flex gap-4 items-center">
                    <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded-[6px] tracking-widest uppercase"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> UGC Compliance Node Active</span>
                    <span className="text-slate-400 font-mono tracking-tight">Ref: GCU-REG-2025/EV-Q2</span>
                </div>
            </div>

            {/* Main Hero Header */}
            <div className="bg-white rounded-[20px] p-8 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="relative z-10 max-w-2xl">
                    <span className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
                        <Building2 className="w-3.5 h-3.5" /> Academic Registrar & Deanery Board
                    </span>
                    <h1 className="text-[36px] font-bold text-[#0f172a] tracking-tight leading-[1.1] mb-4">
                        University Events<br />Management & Master Ledger
                    </h1>
                    <p className="text-[14px] text-slate-500 font-medium leading-relaxed max-w-lg">
                        Comprehensive university-wide event registry, institutional compliance status, venue clash prevention, and deanery oversight across all schools and faculties.
                    </p>
                </div>
                <div className="relative z-10 flex flex-wrap gap-3">
                    <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors">
                        <Download className="w-4 h-4 text-slate-400" /> Export CSV Master
                    </button>
                    <button className="bg-blue-50 border border-blue-100 text-primary hover:bg-blue-100 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors">
                        <ShieldCheck className="w-4 h-4" /> Bulk Compliance Audit
                    </button>
                    <button className="bg-[#0f172a] text-white hover:bg-slate-800 shadow-sm px-5 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors">
                        <PlusSquare className="w-4 h-4" /> Schedule University Event
                    </button>
                </div>
                {/* subtle background graphic */}
                <div className="absolute right-[-5%] bottom-[-20%] w-[400px] h-[400px] bg-slate-50 rounded-full blur-[80px] pointer-events-none"></div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Total Sanctioned<br />Events</h3>
                        <div className="w-8 h-8 rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500"><CalendarDays className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-[32px] font-bold text-slate-900 leading-none">48</span>
                        <span className="text-[11px] font-bold text-slate-500">Active Cycle</span>
                    </div>
                    <p className="text-[11px] font-bold text-slate-600 mb-2">32 Completed / 12 Upcoming / <span className="text-primary pr-1">4 Pipeline</span></p>
                    <div className="w-full h-1.5 rounded-full bg-slate-100 flex overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[66%]"></div>
                        <div className="bg-[#0f172a] h-full w-[25%]"></div>
                        <div className="bg-red-500 h-full w-[9%]"></div>
                    </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Active Academic<br />Grant</h3>
                        <div className="w-8 h-8 rounded-full bg-teal-100 border border-teal-200 flex items-center justify-center text-teal-700"><IndianRupee className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[32px] font-bold text-slate-900 leading-none tracking-tight">₹14.80 L</span>
                        <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-1.5 py-0.5 rounded text-[9px] font-bold">+12.4% YoY</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight mb-2">Allocated across 14 constituent departments</p>
                    <div className="flex justify-between items-center text-[10px]">
                        <span className="text-slate-500">Utilization: <strong className="text-slate-700">71.4%</strong></span>
                        <span className="text-slate-500">₹4.22 L Reserves</span>
                    </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Registered<br />Footfall</h3>
                        <div className="w-8 h-8 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500"><Users className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-[32px] font-bold text-slate-900 leading-none tracking-tight">14,890</span>
                        <span className="text-[11px] font-bold text-emerald-600 leading-tight">84.6%<br />Turnout</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight mb-3">Students, scholars & invited external delegates</p>
                    <div className="text-[10px] font-bold text-teal-700 flex items-center gap-1.5">
                        <TrendingUp className="w-3 h-3" /> Exceeding target capacity by 6.2%
                    </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm relative overflow-hidden">
                    <div className="flex justify-between items-start mb-2 relative z-10">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">UGC Compliance<br />Rate</h3>
                        <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-primary"><ShieldCheck className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-center gap-2 mb-3 relative z-10">
                        <span className="text-[32px] font-bold text-slate-900 leading-none">99.2%</span>
                        <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-1 rounded text-[10px] font-bold flex flex-col uppercase tracking-widest leading-none">Grade A+</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight mb-3 relative z-10">Fully certified & digital dossier archived</p>
                    <div className="text-[10px] font-bold text-slate-500 flex items-center gap-1.5 relative z-10">
                        Pending Dossier: <strong className="text-slate-800">1 NAAC File Ready</strong>
                    </div>
                </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="bg-white p-3 rounded-[12px] border border-slate-200 shadow-sm flex flex-col gap-3">
                <div className="flex flex-col lg:flex-row gap-3 items-center">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="text" placeholder="Search by title, event code, department, lead faculty, or venue..." className="w-full bg-slate-50 border border-slate-100 rounded-[8px] pl-9 pr-4 py-3 text-[13px] font-medium text-slate-900 outline-none focus:border-primary shadow-sm" />
                    </div>
                    <div className="flex gap-2 w-full lg:w-auto">
                        <button className="bg-slate-50 border border-slate-200 text-primary px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors flex-1 justify-center shadow-sm">
                            <TableProperties className="w-4 h-4" /> Table View
                        </button>
                        <button className="bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors flex-1 justify-center shadow-sm">
                            <Calendar className="w-4 h-4" /> Calendar View
                        </button>
                        <button className="bg-white border border-slate-200 text-slate-500 hover:text-red-500 hover:bg-red-50 px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors shrink-0 shadow-sm">
                            <FilterX className="w-4 h-4" /> Clear Filters
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5 px-1">School / Faculty</label>
                        <button className="w-full bg-slate-50 border border-slate-100 px-3 py-2.5 rounded-[8px] text-[12px] font-bold text-slate-700 flex items-center justify-between">
                            School of Technology (Engin... <ChevronDown className="w-4 h-4 text-slate-400" />
                        </button>
                    </div>
                    <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5 px-1">Event Category</label>
                        <button className="w-full bg-slate-50 border border-slate-100 px-3 py-2.5 rounded-[8px] text-[12px] font-medium text-slate-600 flex items-center justify-between">
                            All Event Types <ChevronDown className="w-4 h-4 text-slate-400" />
                        </button>
                    </div>
                    <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5 px-1">Approval & Life Cycle</label>
                        <button className="w-full bg-slate-50 border border-slate-100 px-3 py-2.5 rounded-[8px] text-[12px] font-medium text-slate-600 flex items-center justify-between">
                            All Statuses <ChevronDown className="w-4 h-4 text-slate-400" />
                        </button>
                    </div>
                    <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5 px-1">Academic Term</label>
                        <button className="w-full bg-slate-50 border border-slate-100 px-3 py-2.5 rounded-[8px] text-[12px] font-bold text-slate-700 flex items-center justify-between">
                            Spring 2025 Semester <ChevronDown className="w-4 h-4 text-slate-400" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Events Table Area */}
            <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm overflow-hidden flex flex-col">

                {/* Active Selection Action Bar */}
                {selectedIds.length > 0 && (
                    <div className="bg-[#0f172a] text-white px-5 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-in slide-in-from-top-2 duration-300">
                        <div className="flex items-center gap-3">
                            <span className="bg-primary px-2 py-0.5 rounded text-[12px] font-bold">{selectedIds.length} Selected</span>
                            <span className="text-[12px] font-medium text-slate-300">University Events selected across 2 departments</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <button className="bg-white border border-slate-200 text-slate-900 px-3 py-1.5 rounded-[6px] text-[11px] font-bold flex items-center gap-2 hover:bg-slate-100 transition-colors">
                                <FileText className="w-3.5 h-3.5" /> Export Dossiers (.ZIP)
                            </button>
                            <button className="bg-blue-600 border border-blue-500 text-white px-3 py-1.5 rounded-[6px] text-[11px] font-bold flex items-center gap-2 hover:bg-blue-500 transition-colors shadow-sm">
                                <Flag className="w-3.5 h-3.5" /> Flag for Deanery Inspection
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-3 py-1.5 rounded-[6px] text-[11px] font-bold flex items-center gap-2 transition-colors">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Re-validate Venue Bookings
                            </button>
                        </div>
                    </div>
                )}

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px]">
                        <thead className="bg-slate-50 border-b border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            <tr>
                                <th className="px-5 py-4 w-10">
                                    <input type="checkbox" onChange={handleSelectAll} checked={selectedIds.length === eventsList.length} className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4 cursor-pointer" />
                                </th>
                                <th className="px-3 py-4">Event Code & Title</th>
                                <th className="px-3 py-4">Organizing Dept & Lead</th>
                                <th className="px-3 py-4">Date & Venue</th>
                                <th className="px-3 py-4">Enrolled / Cap</th>
                                <th className="px-5 py-4">Budget Alloc...</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {eventsList.map(event => {
                                const Icon = event.icon;
                                const isSelected = selectedIds.includes(event.id);
                                return (
                                    <tr key={event.id} className={`hover:bg-slate-50 transition-colors ${isSelected ? 'bg-primary/5' : ''}`}>
                                        <td className="px-5 py-4">
                                            <input type="checkbox" checked={isSelected} onChange={() => toggleSelect(event.id)} className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4 cursor-pointer" />
                                        </td>
                                        <td className="px-3 py-4">
                                            <div className="flex gap-4">
                                                <div className={`w-10 h-10 shrink-0 rounded-[10px] flex items-center justify-center shadow-sm ${event.iconBg}`}>
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="text-[14px] font-bold text-slate-800 leading-tight mb-1 max-w-[280px]">{event.title}</h4>
                                                    <div className="flex gap-2 items-center flex-wrap">
                                                        <span className="bg-blue-50 text-primary px-1.5 py-0.5 rounded text-[9px] font-bold border border-blue-100 uppercase tracking-widest">{event.code}</span>
                                                        <span className="text-[10px] text-slate-500 font-medium">{event.type}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-3 py-4 align-top pt-5">
                                            <p className="text-[12px] font-bold text-slate-700 leading-tight mb-1">{event.dept}</p>
                                            <p className="text-[11px] text-slate-500 flex items-center gap-1.5"><UserCheck className="w-3.5 h-3.5 text-slate-400" /> {event.lead}</p>
                                        </td>
                                        <td className="px-3 py-4 align-top pt-5">
                                            <p className="text-[12px] font-bold text-slate-700 leading-tight mb-1 flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5 text-slate-400" /> {event.date}</p>
                                            <p className="text-[11px] text-slate-500 flex items-center gap-1.5 max-w-[160px] truncate"><MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" /> {event.venue}</p>
                                        </td>
                                        <td className="px-3 py-4 align-top pt-5">
                                            <div className="flex items-end justify-between gap-2 max-w-[140px] mb-1">
                                                <span className="text-[13px] font-bold text-slate-800">{event.enrolled}</span>
                                                <span className="text-[10px] text-slate-500 font-medium">/{event.capacity} {event.isFull ? <span className="font-bold text-emerald-600">(Full)</span> : `(${event.percent}%)`}</span>
                                            </div>
                                            <div className="w-full max-w-[140px] bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                                <div className={`h-full rounded-full ${event.fillColor}`} style={{ width: `${event.percent}%` }}></div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 align-top pt-5">
                                            <p className="text-[13px] font-bold text-slate-900 leading-tight mb-0.5">{event.budget}</p>
                                            <p className="text-[10px] text-slate-500 font-medium max-w-[100px] truncate">{event.budgetSrc}</p>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-slate-100 bg-white flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-[12px] font-medium text-slate-500">
                        Showing <strong className="text-slate-900">1-6</strong> of <strong className="text-slate-900">48</strong> university events
                    </span>
                    <div className="flex gap-1">
                        <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-white border border-slate-200 rounded-[6px] shadow-sm"><ChevronLeft className="w-4 h-4" /></button>
                        <button className="w-8 h-8 flex items-center justify-center text-white bg-[#0f172a] font-bold text-[12px] rounded-[6px] shadow-sm">1</button>
                        <button className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-50 border border-slate-200 font-bold text-[12px] rounded-[6px] shadow-sm">2</button>
                        <button className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-50 border border-slate-200 font-bold text-[12px] rounded-[6px] shadow-sm">3</button>
                        <span className="w-8 h-8 flex items-center justify-center text-slate-400 text-[12px]">...</span>
                        <button className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-50 border border-slate-200 font-bold text-[12px] rounded-[6px] shadow-sm">8</button>
                        <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-white border border-slate-200 rounded-[6px] shadow-sm"><ChevronRight className="w-4 h-4" /></button>
                    </div>
                </div>
            </div>

            {/* Bottom Compliance & Analytics Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white border border-slate-200 rounded-[16px] shadow-sm p-6 flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-12 h-12 rounded-[12px] bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 border border-indigo-100 shadow-sm">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-[15px] font-bold text-slate-900 leading-tight">UGC Co-Curricular & Student Welfare<br />Mandate</h3>
                            <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded border border-slate-200 text-[9px] font-bold uppercase tracking-widest shrink-0">Mandatory</span>
                        </div>
                        <p className="text-[12px] text-slate-500 font-medium leading-relaxed mb-5">
                            In pursuant of University Grants Commission (Academic Governance) Guidelines, all events hosting non-affiliated international/national delegates require institutional clearances lodged at least <strong className="text-slate-800">72 hours prior to inauguration</strong>. High-voltage power arrays, robotics arenas, and temporary outdoor pavilions must carry explicit Campus Estate & Fire Officer validation before gate pass release.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-slate-50 border border-slate-100 rounded-[10px] p-3 flex items-center gap-3">
                                <Flame className="w-5 h-5 text-teal-600" />
                                <div>
                                    <p className="text-[11px] font-bold text-slate-700">Estate & Fire Audit</p>
                                    <p className="text-[10px] text-slate-500">42 of 48 venues cleared</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 border border-slate-100 rounded-[10px] p-3 flex items-center gap-3">
                                <UserCheck className="w-5 h-5 text-blue-600" />
                                <div>
                                    <p className="text-[11px] font-bold text-slate-700">External Protocol Registry</p>
                                    <p className="text-[10px] text-slate-500">18 Dignitary security passes issued</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 bg-white border border-slate-200 rounded-[16px] shadow-sm p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-[14px] font-bold text-slate-900 leading-tight max-w-[120px]">Venue Clash Prevention Index</h3>
                        <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold px-2 py-1 rounded text-center leading-tight">0 Clashes<br />Detected</span>
                    </div>

                    <div className="space-y-4 flex-1">
                        <div>
                            <div className="flex justify-between text-[11px] font-bold text-slate-700 mb-1.5">
                                <span>Central Auditorium</span>
                                <span className="text-slate-400">Booked: 24/30 Days</span>
                            </div>
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                <div className="bg-[#0f172a] h-full w-[80%] rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-[11px] font-bold text-slate-700 mb-1.5">
                                <span>Mechanical Seminar Hall 1</span>
                                <span className="text-slate-400">Booked: 18/30 Days</span>
                            </div>
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                <div className="bg-blue-600 h-full w-[60%] rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-[11px] font-bold text-slate-700 mb-1.5">
                                <span>Pharmacy Block Hall 1</span>
                                <span className="text-slate-400">Booked: 12/30 Days</span>
                            </div>
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-full w-[40%] rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    <button className="text-[10px] font-bold text-slate-500 hover:text-slate-900 flex items-center justify-center gap-1.5 w-full mt-6 pt-4 border-t border-slate-100 transition-colors">
                        Open Real-time University Venue Map <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>

        </div>
    );
}
