import { useState } from 'react';
import {
    Clock,
    AlertTriangle,
    CalendarCheck,
    SlidersHorizontal,
    Search,
    ChevronDown,
    FileText,
    CheckCircle2,
    XOctagon,
    Download,
    Building2,
    Users,
    CalendarDays,
    MapPin,
    FileCheck,
    ShieldAlert,
    ShieldCheck,
    Eye,
    History,
    Send,
    MessageSquare,
    CheckSquare,
    Check,
    AlertCircle,
    ExternalLink
} from 'lucide-react';

export default function Approvals() {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] mx-auto mt-2">

            {/* Header */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-6">
                <div>
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-[10px] tracking-widest uppercase mb-3 px-1">
                        Campus Home &gt; Administration &gt; Event Governance &gt; <span className="text-primary">Pending Approvals</span>
                    </div>
                    <h1 className="text-[28px] font-bold text-slate-900 tracking-tight leading-tight">Pending Event Proposals & Clearance<br />Queue</h1>
                    <p className="text-slate-500 mt-2 text-[13px] max-w-3xl leading-relaxed">
                        Review institutional event submissions for regulatory compliance, UGC syllabus alignment, estate safety clearances, venue occupancy, and financial budget disbursement.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 w-full xl:w-auto">
                    <button className="flex-1 xl:flex-none items-center justify-center gap-2 bg-white text-slate-700 border border-slate-300 px-4 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-slate-50 transition-colors shadow-sm flex">
                        <History className="w-4 h-4" /> Audit Logs
                    </button>
                    <button className="flex-1 xl:flex-none items-center justify-center gap-2 bg-[#0f172a] text-white border border-[#0f172a] px-6 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-slate-800 transition-colors shadow-sm flex">
                        <CheckSquare className="w-4 h-4" /> Batch Sign (2)
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Avg Turnaround Time</h3>
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500"><Clock className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-[32px] font-bold text-slate-900 leading-none">18.4</span>
                        <span className="text-[14px] font-bold text-slate-500">Hours</span>
                    </div>
                    <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1.5 bg-emerald-50 self-start px-2 py-0.5 rounded border border-emerald-100">
                        <ZapIcon className="w-3 h-3" /> UGC Target: &lt;48h
                    </div>
                </div>

                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Pending In Queue</h3>
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500"><AlertTriangle className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-[32px] font-bold text-slate-900 leading-none">4</span>
                        <span className="text-[14px] font-bold text-slate-500">Proposals</span>
                    </div>
                    <div className="text-[11px] font-bold text-red-600 flex items-center gap-1.5 self-start px-1 py-0.5">
                        <span className="text-red-600">!</span> 2 Flagged High Urgency
                    </div>
                </div>

                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Approved This Month</h3>
                        <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-500"><CalendarCheck className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-[32px] font-bold text-slate-900 leading-none">32</span>
                        <span className="text-[14px] font-bold text-slate-500">Events</span>
                    </div>
                    <div className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5 self-start px-1 py-0.5">
                        <TrendingIcon className="w-3 h-3 text-emerald-500" /> +14% vs Last Month
                    </div>
                </div>

                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Revision Rate</h3>
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500"><SlidersHorizontal className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-[32px] font-bold text-slate-900 leading-none">6.2%</span>
                        <span className="text-[14px] font-bold text-slate-500">Rate</span>
                    </div>
                    <div className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5 self-start px-1 py-0.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" /> High Quality Compliance
                    </div>
                </div>
            </div>

            {/* Filter Tabs & Bar */}
            <div className="flex flex-col gap-4 mb-6">
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
                    <button className="bg-[#0f172a] text-white px-4 py-2 rounded-full text-[12px] font-bold whitespace-nowrap shadow-sm shadow-black/10 flex items-center gap-2">All Pending <span className="bg-white/20 px-1.5 py-0.5 rounded text-[10px]">4</span></button>
                    <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-full text-[12px] font-bold hover:bg-slate-50 transition-colors whitespace-nowrap shadow-sm flex items-center gap-2">Requires Dean Signature <span className="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[10px]">2</span></button>
                    <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-full text-[12px] font-bold hover:bg-slate-50 transition-colors whitespace-nowrap shadow-sm flex items-center gap-2">Venue / Safety Clearance <span className="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[10px]">1</span></button>
                    <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-full text-[12px] font-bold hover:bg-slate-50 transition-colors whitespace-nowrap shadow-sm flex items-center gap-2">Budget Review <span className="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[10px]">1</span></button>
                    <button className="bg-slate-50 border border-slate-200 text-slate-500 px-4 py-2 rounded-full text-[12px] font-bold hover:bg-slate-100 transition-colors whitespace-nowrap flex items-center gap-2 ml-auto"><FileCheck className="w-3.5 h-3.5" /> Archived / Resolved (28)</button>
                </div>

                <div className="bg-white p-3 rounded-[12px] border border-slate-200 shadow-sm flex flex-col lg:flex-row gap-3">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="text" placeholder="Search proposal by event title, faculty coordinator..." className="w-full bg-slate-50 border border-slate-200 rounded-[8px] pl-9 pr-4 py-2.5 text-[13px] font-medium text-slate-900 outline-none focus:border-primary shadow-sm" />
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-[8px] text-[13px] font-bold text-slate-600 flex items-center justify-between min-w-[160px] hover:bg-slate-100">
                            All Departments <ChevronDown className="w-4 h-4 text-slate-400" />
                        </button>
                        <button className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-[8px] text-[13px] font-bold text-slate-600 flex items-center justify-between min-w-[160px] hover:bg-slate-100">
                            All Venues <ChevronDown className="w-4 h-4 text-slate-400" />
                        </button>
                        <button className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-[8px] text-[13px] font-bold text-slate-700 flex items-center justify-between min-w-[180px] hover:bg-slate-100">
                            Urgency: High First <FilterIcon className="w-4 h-4 text-slate-400 ml-2" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Approval Queue */}
            <div className="space-y-6">

                {/* CARD 1: High Priority */}
                <div className="bg-white border-t-4 border-t-teal-600 border border-slate-200 rounded-b-[16px] shadow-sm relative pt-6 overflow-hidden pb-4">

                    <div className="px-6 flex flex-col lg:flex-row justify-between items-start gap-4 mb-4 border-b border-slate-100 pb-5">
                        <div>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className="bg-red-50 text-red-600 border border-red-200 px-2.5 py-1 rounded-[6px] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5"><AlertTriangle className="w-3 h-3" /> Priority Clearance</span>
                                <span className="bg-blue-50 text-primary border border-blue-100 px-2.5 py-1 rounded-[6px] text-[10px] font-bold tracking-widest">Ref: #EVT-2025-089</span>
                                <span className="bg-slate-100 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-[6px] text-[10px] font-bold">Symposium & Flagship Hackfest</span>
                                <span className="bg-teal-50 text-teal-700 border border-teal-200 px-2.5 py-1 rounded-[6px] text-[10px] font-bold">Submitted 2 days ago</span>
                            </div>
                            <h2 className="text-[24px] font-bold text-slate-900 leading-tight mb-3">TechVenture 2025: Annual National Flagship Fest & Robotics Symposium</h2>

                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] font-medium text-slate-600">
                                <span className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-600 border border-slate-300">PB</div> Dr. Pranjal Barman (Associate Professor & HOD, Dept. of CSE) <div className="w-1 h-1 bg-slate-300 rounded-full ml-4"></div></span>
                                <span className="flex items-center gap-2"><Users className="w-3.5 h-3.5" /> Co-organizer: GCU Robotics & Coding Club <div className="w-1 h-1 bg-slate-300 rounded-full ml-4"></div></span>
                                <span className="flex items-center gap-1.5 text-primary font-bold"><ShieldAlert className="w-3.5 h-3.5" /> Dean Academic Signature Pending</span>
                            </div>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 p-4 rounded-[12px] text-right shrink-0 min-w-[200px]">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Grant Requisition</span>
                            <span className="text-[24px] font-bold text-slate-900 block mb-0.5 leading-none">₹1,25,000</span>
                            <span className="text-[10px] text-slate-500 font-medium">GCU Student Activity Fund</span>
                        </div>
                    </div>

                    <div className="px-6 grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                        <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Event Schedule</span>
                            <p className="text-[14px] font-bold text-slate-900 flex items-center gap-2 mb-1"><CalendarDays className="w-4 h-4 text-slate-400" /> April 05 – 06, 2025</p>
                            <p className="text-[12px] text-slate-500 font-medium">2 Full Days (09:00 - 18:30)</p>
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Requested Venue</span>
                            <p className="text-[14px] font-bold text-slate-900 flex items-center gap-2 mb-1"><Building2 className="w-4 h-4 text-slate-400" /> Central Auditorium</p>
                            <p className="text-[12px] text-slate-500 font-medium">& GF Engineering Foyer</p>
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Expected Footfall</span>
                            <p className="text-[14px] font-bold text-slate-900 flex items-center gap-2 mb-1"><Users className="w-4 h-4 text-slate-400" /> 500 Delegates</p>
                            <p className="text-[12px] text-slate-500 font-medium">350 Internal + 150 External</p>
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Academic Duty Leaves</span>
                            <p className="text-[14px] font-bold text-slate-900 flex items-center gap-2 mb-1"><FileCheck className="w-4 h-4 text-slate-400" /> 42 Student Volunteers</p>
                            <p className="text-[12px] text-slate-500 font-medium">CSE, EEE & Mech. Depts</p>
                        </div>
                    </div>

                    <div className="px-6 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 pt-6 border-t border-slate-100">
                        <div className="lg:col-span-2">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">Multi-Point Compliance Checklist</span>
                            <div className="space-y-4">
                                <div className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                    <p className="text-[12px] text-slate-600 font-medium leading-relaxed"><strong className="text-slate-800">Syllabus & Curriculum Alignment:</strong> Approved under UGC Skill Enhancement & Technical Immersion Program.</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                    <p className="text-[12px] text-slate-600 font-medium leading-relaxed"><strong className="text-slate-800">Venue Clearance:</strong> Verified unoccupied with GCU Central Estate Registry. Acoustic & stage team pre-assigned.</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                    <p className="text-[12px] text-slate-600 font-medium leading-relaxed"><strong className="text-slate-800">External Resource Validation:</strong> Background credentials verified for keynote speakers from IIT Guwahati & ISRO Regional Centre.</p>
                                </div>
                                <div className="flex gap-3 items-start bg-red-50/50 p-3 rounded-[8px] border border-red-100">
                                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                    <p className="text-[12px] text-red-800 font-medium leading-relaxed"><strong className="text-red-900">Fire & Estate Safety Inspection:</strong> Pending physical site sign-off for secondary robotics high-voltage power conduit lines.</p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center gap-2 text-[11px] font-bold text-slate-600">
                                <ShieldCheck className="w-4 h-4 text-slate-400" /> All university safety bylaws apply automatically upon sign-off
                            </div>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="bg-slate-50 border border-slate-200 rounded-[12px] p-4 h-full">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-4">Accompanying Documentation (3)</span>
                                <div className="space-y-3">
                                    <div className="bg-white border border-slate-200 p-3 rounded-[8px] flex items-center justify-between group cursor-pointer shadow-sm">
                                        <div className="flex gap-3 items-center overflow-hidden">
                                            <FileText className="w-5 h-5 text-red-500 shrink-0" />
                                            <div className="truncate">
                                                <p className="text-[12px] font-bold text-slate-800 truncate">TechVenture_2025_Itinerary_v2.pdf</p>
                                                <p className="text-[10px] text-slate-500 font-medium">2.4 MB · Academic Brochure</p>
                                            </div>
                                        </div>
                                        <Download className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors shrink-0 ml-2" />
                                    </div>
                                    <div className="bg-white border border-slate-200 p-3 rounded-[8px] flex items-center justify-between group cursor-pointer shadow-sm">
                                        <div className="flex gap-3 items-center overflow-hidden">
                                            <FileText className="w-5 h-5 text-emerald-600 shrink-0" />
                                            <div className="truncate">
                                                <p className="text-[12px] font-bold text-slate-800 truncate">Itemized_Expenditure_Breakdown.pdf</p>
                                                <p className="text-[10px] text-slate-500 font-medium">840 KB · Quotations verified</p>
                                            </div>
                                        </div>
                                        <Download className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors shrink-0 ml-2" />
                                    </div>
                                    <div className="bg-white border border-slate-200 p-3 rounded-[8px] flex items-center justify-between group cursor-pointer shadow-sm">
                                        <div className="flex gap-3 items-center overflow-hidden">
                                            <FileText className="w-5 h-5 text-blue-500 shrink-0" />
                                            <div className="truncate">
                                                <p className="text-[12px] font-bold text-slate-800 truncate">Duty_Leave_42_Students_CSE_EEE.pdf</p>
                                                <p className="text-[10px] text-slate-500 font-medium">410 KB · HOD Endorsed</p>
                                            </div>
                                        </div>
                                        <Download className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors shrink-0 ml-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Bar */}
                    <div className="px-6 pt-4 pb-2 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-end bg-slate-50/50">
                        <button className="text-[13px] font-bold text-slate-600 hover:text-slate-900 flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-[8px] shadow-sm"><Eye className="w-4 h-4 text-slate-400" /> View Dossier</button>
                        <button className="text-[13px] font-bold text-slate-600 hover:text-primary flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-[8px] shadow-sm"><MessageSquare className="w-4 h-4 text-slate-400" /> Request Revisions</button>
                        <div className="w-px h-6 bg-slate-200 mx-1"></div>
                        <button className="text-[13px] font-bold text-red-500 hover:text-red-700 hover:bg-red-50 flex items-center gap-2 px-4 py-2 transition-colors rounded-[8px]"><XOctagon className="w-4 h-4" /> Decline Proposal</button>
                        <button className="bg-[#0f172a] text-white text-[14px] font-bold px-6 py-2.5 rounded-[8px] hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" /> Approve & Grant Clearance
                        </button>
                    </div>
                </div>

                {/* CARD 2: Standard Hackathon */}
                <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm relative pt-5 overflow-hidden pb-4">
                    <div className="px-5 flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                        <div>
                            <div className="flex gap-2 mb-3">
                                <span className="bg-blue-50 border border-blue-100 text-primary px-2.5 py-1 rounded-[6px] text-[10px] font-bold tracking-widest">Ref: #EVT-2025-092</span>
                                <span className="bg-slate-100 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-[6px] text-[10px] font-bold">36h Overnight Hackathon</span>
                                <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-2.5 py-1 rounded-[6px] text-[10px] font-bold">Submitted Yesterday</span>
                            </div>
                            <h2 className="text-[20px] font-bold text-slate-900 leading-tight mb-2">Assam Regional Biodiversity & Green Tech Hackathon</h2>

                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] font-medium text-slate-600">
                                <span className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[8px] font-bold text-emerald-700 border border-emerald-200 shadow-sm">DS</div> Prof. Debojit Sarma (Coordinator, GCU Innovation & Incubation Cell) <div className="w-1 h-1 bg-slate-300 rounded-full ml-2"></div></span>
                                <span>Depts of Electrical & Civil Engineering</span>
                            </div>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 p-3 rounded-[10px] text-right shrink-0 min-w-[160px]">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Budget Allocated</span>
                            <span className="text-[20px] font-bold text-slate-900 block mb-0.5 leading-none">₹75,000</span>
                            <span className="text-[10px] text-slate-500 font-medium">Assam Bio-Tech Co-Sponsor</span>
                        </div>
                    </div>

                    <div className="px-5 grid grid-cols-1 md:grid-cols-3 gap-4 mb-5 pb-5 border-b border-slate-100">
                        <div className="bg-slate-50/50 p-3 rounded-[8px]">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Duration & Format</span>
                            <p className="text-[13px] font-bold text-slate-900 mb-0.5">March 24 – 25, 2025</p>
                            <p className="text-[11px] text-slate-500 font-medium">Continuous 36-hr Residential Hackathon</p>
                        </div>
                        <div className="bg-slate-50/50 p-3 rounded-[8px]">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Location Assigned</span>
                            <p className="text-[13px] font-bold text-slate-900 mb-0.5">GCU Incubation Lab & Block B Hall</p>
                            <p className="text-[11px] text-slate-500 font-medium">Dedicated Fiber Wi-Fi & Generator Backup</p>
                        </div>
                        <div className="bg-slate-50/50 p-3 rounded-[8px]">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Registered Capacity</span>
                            <p className="text-[13px] font-bold text-slate-900 mb-0.5">150 Students (30 Teams)</p>
                            <p className="text-[11px] text-slate-500 font-medium">Hostel Warden Night Protocol Verified</p>
                        </div>
                    </div>

                    <div className="px-5 grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                        <div className="flex gap-2 items-center text-[11px] font-bold text-slate-700 bg-white border border-slate-200 p-2.5 rounded-[8px] shadow-sm"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Overnight Hosteller Consent forms signed</div>
                        <div className="flex gap-2 items-center text-[11px] font-bold text-slate-700 bg-white border border-slate-200 p-2.5 rounded-[8px] shadow-sm"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Campus Security Patrol chief briefed</div>
                        <div className="flex gap-2 items-center text-[11px] font-bold text-slate-700 bg-white border border-slate-200 p-2.5 rounded-[8px] shadow-sm"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Assam Bio-Tech Mentors list vetted</div>
                    </div>

                    <div className="px-5 mb-5">
                        <p className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 text-slate-400" /> Attached: Hackathon_Schedule.pdf, Security_Night_Permission.pdf</p>
                    </div>

                    {/* Action Bar */}
                    <div className="px-5 flex gap-3 items-center pt-1">
                        <button className="bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-slate-100 transition-colors shadow-sm">Request Details</button>
                        <button className="bg-white text-red-500 border border-slate-200 px-4 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-red-50 transition-colors shadow-sm">Reject with Note</button>
                        <button className="bg-[#0f172a] text-white px-5 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2"><Check className="w-3.5 h-3.5" /> Approve Event</button>
                    </div>
                </div>


                {/* 2 Grid Layout for smaller ones */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm p-5 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex gap-2">
                                    <span className="bg-blue-50 text-primary border border-blue-100 px-2 py-0.5 rounded text-[9px] font-bold">#EVT-2025-095</span>
                                    <span className="bg-slate-50 text-slate-600 border border-slate-200 px-2 py-0.5 rounded text-[9px] font-bold">Guest Lecture</span>
                                </div>
                                <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100"><CheckCircle2 className="w-3 h-3" /> All Clearances Verified</span>
                            </div>
                            <h3 className="text-[15px] font-bold text-slate-900 leading-tight mb-2">Semiconductor Fabrication & Cleanroom Protocols: Industrial Horizons</h3>
                            <p className="text-[11px] text-slate-600 font-medium mb-4">Resource Speaker: <strong className="text-slate-800">Dr. A. K. Nath</strong> (Senior Scientist, Semi-Conductor Laboratory Chandigarh)</p>

                            <div className="space-y-2 mb-6 bg-slate-50/50 p-3 rounded-[8px]">
                                <div className="flex justify-between text-[11px]">
                                    <span className="text-slate-500 font-medium">Target Audience:</span>
                                    <span className="font-bold text-slate-800">Mech. & EEE Final Year (100 Seats)</span>
                                </div>
                                <div className="flex justify-between text-[11px]">
                                    <span className="text-slate-500 font-medium">Date & Slot:</span>
                                    <span className="font-bold text-slate-800 text-right">April 17, 2025 (11:00 AM – 01:00 PM)</span>
                                </div>
                                <div className="flex justify-between text-[11px]">
                                    <span className="text-slate-500 font-medium">Venue Requested:</span>
                                    <span className="font-bold text-slate-800 text-right">Mechanical Seminar Hall 1</span>
                                </div>
                                <div className="flex justify-between text-[11px]">
                                    <span className="text-slate-500 font-medium">Honorarium:</span>
                                    <span className="font-bold text-slate-800">₹15,000 (Departmental Fund)</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
                            <button className="text-[11px] font-bold text-red-500 hover:text-red-700">Reject</button>
                            <div className="flex gap-2">
                                <button className="text-[11px] font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded shadow-sm">View Abstract</button>
                                <button className="bg-[#0f172a] text-white text-[11px] font-bold px-4 py-1.5 rounded shadow-sm hover:bg-slate-800 flex items-center gap-1.5"><Check className="w-3 h-3" /> Approve</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm p-5 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex gap-2 items-center flex-wrap">
                                    <span className="bg-blue-50 text-primary border border-blue-100 px-2 py-0.5 rounded text-[9px] font-bold">#EVT-2025-098</span>
                                    <span className="bg-slate-50 text-slate-600 border border-slate-200 px-2 py-0.5 rounded text-[9px] font-bold">Literary Championship</span>
                                </div>
                                <span className="text-[10px] font-bold text-amber-700 flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 shrink-0"><AlertCircle className="w-3 h-3" /> Budget Revision Requested</span>
                            </div>
                            <h3 className="text-[15px] font-bold text-slate-900 leading-tight mb-2">Brahmaputra Parliamentary Debate Championship 2025</h3>
                            <p className="text-[11px] text-slate-600 font-medium mb-4">Convenor: <strong className="text-slate-800">GCU Literary & Debating Society</strong> · Advisory: Humanities Dept.</p>

                            <div className="space-y-2 mb-6 bg-slate-50/50 p-3 rounded-[8px]">
                                <div className="flex justify-between text-[11px]">
                                    <span className="text-slate-500 font-medium">Proposed Window:</span>
                                    <span className="font-bold text-slate-800">May 02 – 03, 2025</span>
                                </div>
                                <div className="flex justify-between text-[11px]">
                                    <span className="text-slate-500 font-medium">Venues:</span>
                                    <span className="font-bold text-slate-800 text-right">Conference Hall A + 4 Breakouts</span>
                                </div>
                                <div className="flex justify-between text-[11px]">
                                    <span className="text-slate-500 font-medium">Audit Note:</span>
                                    <span className="font-bold text-red-500 text-right">Awaiting updated trophy & cash prize breakdown</span>
                                </div>
                                <div className="flex justify-between text-[11px]">
                                    <span className="text-slate-500 font-medium">Last Faculty Response:</span>
                                    <span className="font-bold text-slate-800">3 days ago</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
                            <button className="text-[11px] font-bold text-slate-500 hover:text-slate-700 flex items-center gap-1.5"><History className="w-3 h-3" /> Revision History</button>
                            <div className="flex gap-2">
                                <button className="text-[11px] font-bold text-slate-600 hover:text-primary flex items-center gap-1 bg-white border border-slate-200 px-3 py-1.5 rounded shadow-sm transition-colors border-primary/20"><Send className="w-3 h-3" /> Send Reminder</button>
                                <button className="bg-blue-50 text-primary border border-blue-100 text-[11px] font-bold px-3 py-1.5 rounded hover:bg-blue-100 shadow-sm transition-colors">Update Query</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer Banner */}
            <div className="bg-slate-50 border border-slate-200 rounded-[12px] p-5 mt-6 flex flex-col sm:flex-row items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shrink-0 flex items-center justify-center shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                    <h4 className="text-[13px] font-bold text-slate-900 mb-1">Statutory Institutional Governance Guideline</h4>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed max-w-4xl">
                        Per UGC & GCU Academic Charter Rule 14-B: Rejected event proposals require an academic cause recorded within the university repository and grant the applicant a 7-day revision grace period before archive.
                    </p>
                </div>
                <button className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5 py-1 px-3 bg-white border border-slate-200 rounded shadow-sm hover:bg-slate-50 shrink-0">Read Event Charter 2024-25 <ExternalLink className="w-3 h-3" /></button>
            </div>

        </div>
    );
}

const ZapIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
)

const TrendingIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
)

const FilterIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="4" x2="14" y2="4"></line><line x1="10" y1="4" x2="3" y2="4"></line><line x1="21" y1="12" x2="12" y2="12"></line><line x1="8" y1="12" x2="3" y2="12"></line><line x1="21" y1="20" x2="16" y2="20"></line><line x1="12" y1="20" x2="3" y2="20"></line><line x1="14" y1="2" x2="14" y2="6"></line><line x1="8" y1="10" x2="8" y2="14"></line><line x1="16" y1="18" x2="16" y2="22"></line></svg>
)
