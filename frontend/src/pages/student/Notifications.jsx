import { useState } from 'react';
import {
    Bell,
    CheckCircle2,
    Settings,
    Download,
    AlertCircle,
    ShieldCheck,
    Award,
    Megaphone,
    Search,
    ChevronDown,
    QrCode,
    Lock,
    Users,
    Wifi,
    Phone,
    Building,
    Mail,
    ExternalLink,
    History,
    RefreshCw
} from 'lucide-react';

export default function StudentNotifications() {

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] mx-auto mt-2 space-y-6">

            {/* Top Breadcrumb Context */}
            <div className="flex justify-between items-center bg-transparent px-1 py-1 text-[10px] font-bold">
                <div className="flex items-center gap-2 text-slate-500 uppercase tracking-widest flex-wrap">
                    GCU Campus &gt; Student Portal &gt; Community & Alerts &gt; <span className="text-primary">Notifications & Academic Dispatches</span>
                </div>
            </div>

            {/* Main Header */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-2">
                <div className="max-w-3xl">
                    <h1 className="text-[28px] md:text-[32px] font-bold text-[#0f172a] tracking-tight leading-[1.1] mb-3 flex items-center gap-3">
                        Notifications & Academic Dispatches
                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-[6px] text-[10px] font-bold tracking-widest uppercase flex flex-col items-center leading-none mt-2"><span>SPRING</span><span>2025</span></span>
                    </h1>
                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed max-w-2xl">
                        Real-time institutional notices, gate entry verifications, duty leave endorsements, certificate releases, and urgent campus advisories.
                    </p>
                </div>
                <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full xl:w-auto shrink-0 mt-4 xl:mt-0">
                    <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center justify-center gap-2 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Mark All as Read
                    </button>
                    <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center justify-center gap-2 transition-colors">
                        <Settings className="w-4 h-4 text-slate-400" /> Notification Preferences
                    </button>
                    <button className="bg-[#0f172a] text-white hover:bg-slate-800 shadow-sm px-5 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center justify-center gap-2 transition-colors w-full sm:w-auto">
                        <Download className="w-4 h-4" /> Export Notice Archive (.PDF)
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm relative">
                    <div className="absolute top-4 right-4 bg-red-50 text-red-600 border border-red-100 px-2 py-0.5 rounded text-[9px] font-bold">Action Required: 1</div>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Unread Alerts</h3>
                        <div className="w-8 h-8 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 relative">
                            <Bell className="w-4 h-4" />
                            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2 pt-2">
                        <span className="text-[32px] md:text-[36px] font-bold text-slate-900 leading-none tracking-tight">3</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 pt-4 border-t border-slate-100 mt-2">
                        <span>2 academic, 1 gate pass update</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm relative">
                    <div className="absolute top-4 right-4 bg-teal-50 text-teal-700 border border-teal-100 px-2 py-0.5 rounded text-[9px] font-bold">100% Endorsed</div>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Duty Leaves</h3>
                        <div className="w-8 h-8 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 relative">
                            <ShieldCheck className="w-4 h-4" />
                            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white"></div>
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2 pt-2">
                        <span className="text-[32px] md:text-[36px] font-bold text-slate-900 leading-none tracking-tight">5</span>
                        <span className="text-[16px] font-bold text-slate-400">New</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 pt-4 border-t border-slate-100 mt-2">
                        <span>36 sanctioned hrs in SAMARTH</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm relative">
                    <div className="absolute top-4 right-4 bg-amber-50 text-amber-700 border border-amber-100 px-2 py-0.5 rounded text-[9px] font-bold flex flex-col items-end leading-tight"><span>On-Chain</span><span>Verified</span></div>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Credentials</h3>
                        <div className="w-8 h-8 rounded-md bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 relative">
                            <Award className="w-4 h-4" />
                            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-white"></div>
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2 pt-2">
                        <span className="text-[32px] md:text-[36px] font-bold text-slate-900 leading-none tracking-tight">2</span>
                        <span className="text-[16px] font-bold text-slate-400">Issued</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 pt-4 border-t border-slate-100 mt-2">
                        <span>TechVenture & Biodiversity</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm relative">
                    <div className="absolute top-4 right-4 bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded text-[9px] font-bold flex flex-col items-end leading-tight"><span>All</span><span>Clear</span></div>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Broadcasts</h3>
                        <div className="w-8 h-8 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
                            <Megaphone className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2 pt-2">
                        <span className="text-[32px] md:text-[36px] font-bold text-slate-900 leading-none tracking-tight">0</span>
                        <span className="text-[16px] font-bold text-slate-400">Active</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 pt-4 border-t border-slate-100 mt-2">
                        <span>No emergency weather advisories</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap lg:flex-nowrap justify-between gap-3 items-center py-2">
                <div className="flex gap-2 p-1 bg-white border border-slate-200 rounded-full shadow-sm w-full lg:w-auto overflow-x-auto hide-scrollbar">
                    <button className="bg-[#0f172a] text-white px-4 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap">All Notifications (14)</button>
                    <button className="bg-slate-50 hover:bg-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Unread (3)</button>
                    <button className="bg-slate-50 hover:bg-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap transition-colors">Duty Leaves & Attendance</button>
                </div>

                <div className="flex items-center gap-2 w-full lg:w-auto">
                    <div className="relative w-full lg:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="text" placeholder="Search notices, codes, faculty..." className="w-full bg-white border border-slate-200 rounded-full pl-9 pr-4 py-1.5 text-[11px] font-medium text-slate-700 outline-none focus:border-primary shadow-sm h-8" />
                    </div>
                    <div className="relative shrink-0 hidden sm:block">
                        <select className="appearance-none bg-white border border-slate-200 rounded-full px-4 py-1.5 pr-8 text-[11px] font-bold text-slate-600 outline-none cursor-pointer shadow-sm h-8">
                            <option>Urgency: All</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                    </div>
                    <div className="relative shrink-0 hidden sm:block">
                        <select className="appearance-none bg-white border border-slate-200 rounded-full px-4 py-1.5 pr-8 text-[11px] font-bold text-slate-600 outline-none cursor-pointer shadow-sm h-8">
                            <option>Spring 2025</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">

                {/* Main Feed */}
                <div className="w-full lg:flex-1 space-y-6">

                    {/* Group Today */}
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5"><div className="w-2 h-2 bg-[#0f172a] rounded-full"></div> TODAY • MARCH 15, 2025</h4>
                            <span className="text-[10px] text-slate-400 font-medium">3 unread dispatches</span>
                        </div>

                        <div className="space-y-4">
                            {/* Card 1: QR Pass */}
                            <div className="bg-white/60 hover:bg-white border-2 border-blue-200 rounded-[12px] p-5 shadow-sm transition-all group">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-[8px] bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                                        <QrCode className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2 border-b border-transparent group-hover:border-slate-100 pb-2">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="bg-red-50 text-red-600 border border-red-100 px-1.5 py-[1px] rounded text-[9px] font-bold uppercase tracking-wider">HIGH PRIORITY</span>
                                                    <span className="bg-blue-50 text-blue-700 border border-blue-100 px-1.5 py-[1px] rounded text-[9px] font-bold uppercase tracking-wider">GATE INGRESS READY</span>
                                                    <span className="text-[10px] text-slate-400 font-medium">• 12 mins ago</span>
                                                </div>
                                                <div className="text-[10px] font-bold text-slate-500">Central Gate B Turnstiles & Event Desk • Terminal Node 04</div>
                                            </div>
                                            <div className="w-2 h-2 rounded-full bg-blue-600 mt-1"></div>
                                        </div>
                                        <h3 className="text-[15px] font-bold text-slate-900 leading-tight mb-2">Dynamic QR Pass Activated for Tomorrow's Workshop on Next-Gen Renewable Microgrids</h3>
                                        <p className="text-[12px] text-slate-600 font-medium leading-relaxed mb-4">
                                            Your entry token has been validated for Seminar Hall 2, Block C. Reporting time is 09:30 AM. Timetable cross-check cleared: No conflicting CSE-401 lecture scheduled. Venue biometric check-in is mandatory for the 3 sanctioned duty leave hours.
                                        </p>
                                        <div className="bg-slate-50 rounded-[8px] p-3 flex gap-4 text-[10px] font-bold mb-4 border border-slate-100">
                                            <div className="flex-1">
                                                <div className="text-slate-400 font-medium mb-0.5 uppercase tracking-widest text-[9px]">ALLOCATED HALL</div>
                                                <div className="text-slate-800">Block C, Hall 02</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-slate-400 font-medium mb-0.5 uppercase tracking-widest text-[9px]">BIOMETRIC WINDOW</div>
                                                <div className="text-slate-800">09:15 - 09:45 AM</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-slate-400 font-medium mb-0.5 uppercase tracking-widest text-[9px]">DUTY LEAVE CREDIT</div>
                                                <div className="text-blue-600">+3 Academic Hours</div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center text-[11px] font-bold">
                                            <div className="flex gap-2">
                                                <button className="bg-[#0f172a] text-white px-4 py-2 rounded-[6px] hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-1.5"><QrCode className="w-3.5 h-3.5" /> View QR Gate Pass</button>
                                                <button className="bg-white text-slate-600 border border-slate-200 px-4 py-2 rounded-[6px] hover:bg-slate-50 transition-colors flex items-center gap-1.5"><Download className="w-3.5 h-3.5" /> Download Pass Offline</button>
                                            </div>
                                            <button className="text-slate-400 hover:text-slate-600 transition-colors">Dismiss</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Duty Leave */}
                            <div className="bg-white/60 hover:bg-white border-2 border-emerald-200 rounded-[12px] p-5 shadow-sm transition-all group">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-[8px] bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                                        <ShieldCheck className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2 border-b border-transparent group-hover:border-slate-100 pb-2">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="bg-teal-50 text-teal-700 border border-teal-100 px-1.5 py-[1px] rounded text-[9px] font-bold uppercase tracking-wider">DUTY LEAVE CREDITED</span>
                                                    <span className="text-[10px] text-slate-400 font-medium">• 2 hours ago</span>
                                                </div>
                                                <div className="text-[10px] font-bold text-slate-500">Office of the Dean of Academic Affairs • Dr. Pranjal Barman (Dean Academics)</div>
                                            </div>
                                            <div className="w-2 h-2 rounded-full bg-teal-600 mt-1"></div>
                                        </div>
                                        <h3 className="text-[15px] font-bold text-slate-900 leading-tight mb-2">8 Hours Duty Leave Sanctioned for Machine Learning & Healthcare Diagnostics Workshop</h3>
                                        <p className="text-[12px] text-slate-600 font-medium leading-relaxed mb-3">
                                            Duty leave claim batch <strong className="font-bold text-slate-800">#GCU-ERP-2025-042B</strong> has been officially reconciled with SAMARTH ERP for attendance dates Mar 14, 2025. Attendance credit added directly to <strong className="font-bold text-slate-800">CSE-403 (DBMS)</strong> and <strong className="font-bold text-slate-800">CSE-405 (Formal Languages)</strong>.
                                        </p>
                                        <div className="flex items-center gap-4 text-[11px] font-bold text-slate-500 mb-4 bg-slate-50 py-1.5 px-3 rounded inline-block w-auto border border-slate-100 flex-wrap">
                                            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> CSE-403: 4 hrs reconciled</span>
                                            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> CSE-405: 4 hrs reconciled</span>
                                        </div>
                                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-4">
                                            ERP Ref: SAMARTH-GCU-DL-9821
                                        </div>
                                        <div className="flex justify-between items-center text-[11px] font-bold pt-2">
                                            <div className="flex gap-4 items-center">
                                                <button className="bg-white text-slate-700 border border-slate-200 px-4 py-2 rounded-[6px] hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-1.5"><Download className="w-3.5 h-3.5 text-slate-400" /> Download Signed Duty Slip (.PDF)</button>
                                                <button className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1">View ERP Attendance Roster <ExternalLink className="w-3 h-3" /></button>
                                            </div>
                                            <button className="text-slate-400 hover:text-slate-600 transition-colors">Dismiss</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Credential */}
                            <div className="bg-white/60 hover:bg-white border-2 border-amber-200 rounded-[12px] p-5 shadow-sm transition-all group">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-[8px] bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                                        <Award className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2 border-b border-transparent group-hover:border-slate-100 pb-2">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-[1px] rounded text-[9px] font-bold uppercase tracking-wider">CREDENTIAL VERIFIED</span>
                                                    <span className="text-[10px] text-slate-400 font-medium">• 5 hours ago</span>
                                                </div>
                                                <div className="text-[10px] font-bold text-slate-500">GCU Controller of Examinations & Student Affairs Directorate</div>
                                            </div>
                                            <div className="w-2 h-2 rounded-full bg-amber-500 mt-1"></div>
                                        </div>
                                        <h3 className="text-[15px] font-bold text-slate-900 leading-tight mb-2">Certificate of Merit Available: TechVenture 2024 (1st Runner Up)</h3>
                                        <p className="text-[12px] text-slate-600 font-medium leading-relaxed mb-3">
                                            Your cryptographic credential (Block #821094, SHA-256 anchored) is now available for download and auto-synchronized with DigiLocker ID <span className="font-mono text-slate-800">NAD-GCU-23-9812</span>. 1.5 Co-Curricular Activity credits awarded toward degree audit.
                                        </p>
                                        <div className="bg-slate-50 border border-slate-200 rounded-[6px] px-3 py-2 flex items-center justify-between text-[10px] font-bold font-mono mb-4 max-w-lg">
                                            <span className="flex items-center gap-1.5 text-slate-500"><Lock className="w-3.5 h-3.5 text-slate-400" /> SHA256: 8f4e2b...199aef38c117d</span>
                                            <span className="flex items-center gap-1 text-teal-600"><CheckCircle2 className="w-3.5 h-3.5" /> Validated</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[11px] font-bold pt-2">
                                            <div className="flex gap-2 items-center">
                                                <button className="bg-white text-slate-700 border border-slate-200 px-4 py-2 rounded-[6px] hover:bg-slate-50 transition-colors flex items-center gap-1.5 shadow-sm"><Award className="w-3.5 h-3.5 text-slate-400" /> Preview Certificate</button>
                                                <button className="bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-[6px] hover:bg-blue-100 transition-colors flex items-center gap-1.5 shadow-sm"><RefreshCw className="w-3.5 h-3.5" /> Push to DigiLocker</button>
                                            </div>
                                            <button className="text-slate-400 hover:text-slate-600 transition-colors">Dismiss</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Group Earlier */}
                    <div className="mt-8">
                        <div className="flex justify-between items-center mb-3">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5"><div className="w-2 h-2 bg-slate-300 rounded-full"></div> EARLIER THIS WEEK</h4>
                            <span className="text-[10px] text-slate-400 font-medium">Read institutional records</span>
                        </div>

                        <div className="space-y-4">
                            {/* Card 4 */}
                            <div className="bg-white border text-slate-500 border-slate-200 rounded-[12px] p-5 shadow-sm">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-[8px] bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                                        <Users className="w-5 h-5 text-slate-500" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="bg-slate-100 text-slate-600 px-1.5 py-[1px] rounded text-[9px] font-bold uppercase tracking-wider">REGISTRATION CONFIRMED</span>
                                                    <span className="text-[10px] text-slate-400 font-medium">• 2 days ago</span>
                                                </div>
                                                <div className="text-[10px] font-bold text-slate-400">GCU Incubation Cell & Dept. of Civil Eng. • Hackathon Secretariat</div>
                                            </div>
                                            <span className="text-[10px] font-bold flex flex-row gap-1 items-center justify-center text-slate-400"><CheckCircle2 className="w-3 h-3" /> Read</span>
                                        </div>
                                        <h3 className="text-[15px] font-bold text-slate-800 leading-tight mb-2">Team 'NeuralAssam' Confirmed for 36h Assam Biodiversity Hackathon</h3>
                                        <p className="text-[12px] text-slate-500 font-medium leading-relaxed mb-3">
                                            Your team slot (4 members, Team ID <strong className="font-mono text-slate-700">#BIO-2025-08</strong>) has been verified. Lab 3 workstations, high-compute GPU access tokens, and overnight campus meal passes have been allocated. Mentorship briefing on Mar 24 at 08:30 AM.
                                        </p>
                                        <button className="text-blue-600 hover:text-blue-800 text-[11px] font-bold transition-colors flex items-center gap-1">View Team Roster & Resource Allocation <ExternalLink className="w-3 h-3" /></button>
                                    </div>
                                </div>
                            </div>

                            {/* Card 5 */}
                            <div className="bg-white border text-slate-500 border-slate-200 rounded-[12px] p-5 shadow-sm">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-[8px] bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                                        <Megaphone className="w-5 h-5 text-slate-500" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="bg-slate-100 text-slate-600 px-1.5 py-[1px] rounded text-[9px] font-bold uppercase tracking-wider">ACADEMIC CIRCULAR #GCU/ACAD/2025/11</span>
                                                    <span className="text-[10px] text-slate-400 font-medium">• 4 days ago</span>
                                                </div>
                                                <div className="text-[10px] font-bold text-slate-400">Office of the Registrar • Girijananda Chowdhury University</div>
                                            </div>
                                            <span className="text-[10px] font-bold flex flex-row gap-1 items-center justify-center text-slate-400"><CheckCircle2 className="w-3 h-3" /> Read</span>
                                        </div>
                                        <h3 className="text-[15px] font-bold text-slate-800 leading-tight mb-2">Notice: Mid-Semester Exam Blackout Window (Mar 24 - 28, 2025)</h3>
                                        <p className="text-[12px] text-slate-500 font-medium leading-relaxed mb-3">
                                            In accordance with UGC Ordinance §18(b), no co-curricular hackathons, cultural fests, or student council competitions may be scheduled during mid-term assessments. All departmental faculty will strictly enforce attendance protocols.
                                        </p>
                                        <button className="text-blue-600 hover:text-blue-800 text-[11px] font-bold transition-colors flex items-center gap-1">Read Full Ordinance & Exam Schedule (.PDF) <ExternalLink className="w-3 h-3" /></button>
                                    </div>
                                </div>
                            </div>

                            {/* Card 6 */}
                            <div className="bg-white border text-slate-500 border-slate-200 rounded-[12px] p-5 shadow-sm">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-[8px] bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                                        <Wifi className="w-5 h-5 text-slate-500" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="bg-slate-100 text-slate-600 px-1.5 py-[1px] rounded text-[9px] font-bold uppercase tracking-wider">SAMARTHERP SYNC</span>
                                                    <span className="text-[10px] text-slate-400 font-medium">• 5 days ago</span>
                                                </div>
                                                <div className="text-[10px] font-bold text-slate-400">Campus IT Services & Biometric Desk • Central Helpdesk</div>
                                            </div>
                                            <span className="text-[10px] font-bold flex flex-row gap-1 items-center justify-center text-slate-400"><CheckCircle2 className="w-3 h-3" /> Read</span>
                                        </div>
                                        <h3 className="text-[15px] font-bold text-slate-800 leading-tight mb-2">Student NFC Identity Card Re-linked to Mobile Pass Wallet</h3>
                                        <p className="text-[12px] text-slate-500 font-medium leading-relaxed">
                                            Your physical student smartcard UID has been synced with dynamic mobile QR tokens. Turnstile gate latency reduced to 14ms across Azara campus entry nodes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button className="w-full bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 py-3 rounded-[12px] text-[12px] font-bold flex items-center justify-center gap-2 transition-colors shadow-sm">
                            <History className="w-4 h-4" /> Load Archived Academic Notices (32 earlier records)
                        </button>
                    </div>

                </div>


                {/* Right Sidebar */}
                <div className="w-full lg:w-[320px] shrink-0 space-y-6">

                    {/* Alert Subscriptions */}
                    <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm flex flex-col overflow-hidden">
                        <div className="p-5 border-b border-slate-100 flex justify-between items-center">
                            <h3 className="text-[14px] font-bold text-slate-900 leading-tight flex items-center gap-2"><Wifi className="w-4 h-4 text-slate-400" /> Alert Subscriptions</h3>
                            <span className="bg-teal-100 text-teal-800 px-2 py-0.5 rounded-[4px] text-[9px] font-bold tracking-widest uppercase">ACTIVE</span>
                        </div>
                        <div className="p-5 text-[11px] font-medium text-slate-500 bg-slate-50/50 leading-relaxed">
                            Fine-tune immediate dispatches routed to your registered handheld terminal and institutional inbox.
                        </div>
                        <div className="flex flex-col p-2 space-y-1">
                            {/* Sub 1 */}
                            <div className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-[8px] transition-colors">
                                <div>
                                    <h4 className="text-[12px] font-bold text-slate-800 leading-tight mb-0.5">SMS & WhatsApp Urgent Alerts</h4>
                                    <p className="text-[10px] text-slate-400 font-medium">+9198640 ***** (Active)</p>
                                </div>
                                <div className="w-9 h-5 bg-[#0f172a] rounded-full relative cursor-pointer shadow-inner">
                                    <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
                                </div>
                            </div>
                            {/* Sub 2 */}
                            <div className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-[8px] transition-colors">
                                <div>
                                    <h4 className="text-[12px] font-bold text-slate-800 leading-tight mb-0.5">SAMARTH Portal In-App Push</h4>
                                    <p className="text-[10px] text-slate-400 font-medium">Instant browser push notices</p>
                                </div>
                                <div className="w-9 h-5 bg-[#0f172a] rounded-full relative cursor-pointer shadow-inner">
                                    <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
                                </div>
                            </div>
                            {/* Sub 3 */}
                            <div className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-[8px] transition-colors">
                                <div>
                                    <h4 className="text-[12px] font-bold text-slate-800 leading-tight mb-0.5">Duty Leave Endorsement Emails</h4>
                                    <p className="text-[10px] text-slate-400 font-medium">ananya.s@gcu.ac.in</p>
                                </div>
                                <div className="w-9 h-5 bg-[#0f172a] rounded-full relative cursor-pointer shadow-inner">
                                    <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
                                </div>
                            </div>
                            {/* Sub 4 */}
                            <div className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-[8px] transition-colors">
                                <div>
                                    <h4 className="text-[12px] font-bold text-slate-800 leading-tight mb-0.5">Club & Flagship Event Digests</h4>
                                    <p className="text-[10px] text-slate-400 font-medium">Weekly Friday summary</p>
                                </div>
                                <div className="w-9 h-5 bg-[#0f172a] rounded-full relative cursor-pointer shadow-inner">
                                    <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 p-4 border-t border-slate-200 mt-2 text-[9px] font-bold text-slate-500 leading-relaxed font-mono text-center mx-4 mb-4 rounded-[8px]">
                            Delivery Node: <strong className="text-slate-800">Assam Higher Ed Cloud Gateway #02</strong><br />
                            Latency: <strong className="text-slate-800">18ms</strong> • Protocol: WebSocket TLS 1.3
                        </div>
                    </div>

                    {/* Attendance Quorum */}
                    <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm flex flex-col p-5">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-[14px] font-bold text-slate-900 leading-tight">Attendance Quorum</h3>
                            <span className="text-[11px] font-bold text-slate-900">88.4% Net</span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-6">
                            Duty leave adjustments reconciled this semester prevent attendance shortage in all 5 theory lectures.
                        </p>

                        <div className="flex justify-between items-end mb-2">
                            <span className="text-[10px] font-bold text-slate-500 flex flex-col"><span>Mandatory Statutory Minimum:</span><span>75%</span></span>
                            <span className="text-[10px] font-bold text-teal-600 flex flex-col items-end"><span>Safe</span><span>(+13.4%)</span></span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full mb-3 flex overflow-hidden">
                            <div className="h-full bg-slate-300 border-r border-white/50" style={{ width: '75%' }}></div>
                            <div className="h-full bg-teal-500" style={{ width: '13.4%' }}></div>
                        </div>
                        <div className="flex justify-between items-center text-[9px] font-bold text-slate-400">
                            <span>Theory: 142/160 Hrs</span>
                            <span>Duty Leaves: +36 Hrs Credited</span>
                        </div>
                    </div>

                    {/* Emergency Contacts */}
                    <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm flex flex-col p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <AlertCircle className="w-4 h-4 text-slate-400" />
                            <h3 className="text-[14px] font-bold text-slate-900 leading-tight">Emergency Contacts</h3>
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-4">
                            In case of scheduling conflicts, gate access discrepancies, or urgent medical dispensations:
                        </p>
                        <div className="space-y-2">
                            <div className="bg-slate-50 border border-slate-100 rounded-[8px] p-3 flex gap-3 items-center hover:bg-blue-50 transition-colors group cursor-pointer">
                                <Phone className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                                <div>
                                    <div className="text-[11px] font-bold text-slate-700 leading-tight mb-0.5 group-hover:text-blue-800">Dean of Student Welfare (DSW)</div>
                                    <div className="text-[9px] font-bold text-slate-500 font-mono">+91 361 284 3000 • Ext: 108</div>
                                </div>
                            </div>
                            <div className="bg-slate-50 border border-slate-100 rounded-[8px] p-3 flex gap-3 items-center hover:bg-blue-50 transition-colors group cursor-pointer">
                                <Building className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                                <div>
                                    <div className="text-[11px] font-bold text-slate-700 leading-tight mb-0.5 group-hover:text-blue-800">Proctorial Office (Azara Campus)</div>
                                    <div className="text-[9px] font-bold text-slate-500">Administrative Block A, Room 104</div>
                                </div>
                            </div>
                            <div className="bg-slate-50 border border-slate-100 rounded-[8px] p-3 flex gap-3 items-center hover:bg-blue-50 transition-colors group cursor-pointer">
                                <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                                <div>
                                    <div className="text-[11px] font-bold text-slate-700 leading-tight mb-0.5 group-hover:text-blue-800">Academic Redressal Cell</div>
                                    <div className="text-[9px] font-bold text-slate-500">grievance@gcu.ac.in</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
}
