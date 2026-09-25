import { useState } from 'react';
import {
    Download,
    Settings,
    ShieldCheck,
    ChevronDown,
    Users,
    LineChart,
    CalendarClock,
    Stamp,
    Activity,
    FileText,
    FolderLock,
    FileCheck,
    BarChart,
    PieChart,
    CheckCircle2,
    Eye,
    Repeat2,
    Copy
} from 'lucide-react';

export default function Reports() {
    const dossiers = [
        {
            id: 1,
            title: 'TechVenture 2025',
            code: 'GCU-ENG-2025-01 • Main Auditorium',
            date: 'Apr 5-6, 2025 • Day 1 Operational',
            enrolled: '340',
            cap: '500 cap',
            enrolledColor: 'text-slate-900',
            checkIn: '78.8%',
            checkInDesc: 'Live Gate Sensor',
            leaves: '128 Eligible',
            leavesType: 'active',
            grant: '₹1,25,000',
            grantDesc: 'Settled • Dean Grant',
            status: 'In Progress (Live)',
            statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        },
        {
            id: 2,
            title: 'Deep Learning Workshop',
            code: 'GCU-CS-2025-11 • Advanced AI Lab',
            date: 'Mar 28, 2025 • Post-Session Archive',
            enrolled: '68',
            cap: '80 cap',
            enrolledColor: 'text-slate-900',
            checkIn: 'Reconciling',
            checkInDesc: 'Attendance closed',
            checkInSize: 'text-[11px]',
            leaves: 'Pre-Approved',
            leavesType: 'pending',
            grant: '₹35,000',
            grantDesc: 'CSE Dept Budget',
            status: 'Dossier Drafted',
            statusColor: 'bg-white text-slate-700 border-slate-300'
        },
        {
            id: 3,
            title: 'Assam Biodiversity Hackathon',
            code: 'GCU-HACK-2025-02 • University Annex Hall',
            date: 'Mar 24-25, 2025 • 36h Endurance Event',
            enrolled: '150',
            cap: '150 (100%)',
            enrolledColor: 'text-emerald-700 font-bold',
            checkIn: '96.0%',
            checkInDesc: 'Biometric Sealed',
            leaves: '150 Granted',
            leavesType: 'sealed',
            grant: '₹75,000',
            grantDesc: 'Settled • Govt Co-Sponsor',
            status: 'Audited & Sealed ✓',
            statusColor: 'bg-blue-50 text-blue-700 border-blue-200'
        },
        {
            id: 4,
            title: 'Machine Learning Diagnostic Symposium',
            code: 'GCU-ML-2025-01 • Seminar Complex Room 102',
            date: 'Mar 14, 2025 • Keynote Series',
            enrolled: '130',
            cap: '130 (100%)',
            enrolledColor: 'text-emerald-700 font-bold',
            checkIn: '94.6%',
            checkInDesc: 'Verified Archive',
            leaves: '124 Granted',
            leavesType: 'sealed',
            grant: '₹40,000',
            grantDesc: 'Settled • TEQIP Fund',
            status: 'Audited & Sealed ✓',
            statusColor: 'bg-blue-50 text-blue-700 border-blue-200'
        }
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] mx-auto">

            {/* Header */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-6 mt-2">
                <div>
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-[10px] tracking-widest uppercase mb-3">
                        GCU Campus &gt; Faculty Coordinator Portal &gt; Verification & Records &gt; <span className="text-secondary">Operational & Compliance Reports</span>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-[6px] text-[11px] font-bold border border-blue-100 tracking-wider">STATUTORY RECORDS</span>
                        <span className="text-slate-500 text-[12px] font-medium px-1">Academic Session 2024-25 • NAAC Cycle-2 Dossier Archive</span>
                    </div>
                    <h1 className="text-[28px] font-bold text-slate-900 tracking-tight leading-tight">Academic Event Analytics &<br />Accreditation Reports</h1>
                    <p className="text-slate-500 mt-2 text-[13px] max-w-2xl leading-relaxed">
                        Comprehensive participation metrics, UGC compliance reconciliations, department attendance distribution, and NAAC/NIRF audit dossiers compiled under CSE Deanery administration.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 w-full xl:w-auto items-end">
                    <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Reporting Period</span>
                        <button className="bg-white text-slate-700 border border-slate-300 px-4 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-slate-50 transition-colors shadow-sm flex items-center justify-between min-w-[180px]">
                            Spring Semester 2025 <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Affiliation Scope</span>
                        <button className="bg-white text-slate-700 border border-slate-300 px-4 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-slate-50 transition-colors shadow-sm flex items-center justify-between min-w-[180px]">
                            All Engineering Depts <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        </button>
                    </div>
                    <button className="bg-white text-slate-700 border border-slate-300 px-4 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2">
                        <Download className="w-4 h-4 text-slate-400" /> Download CSV
                    </button>
                    <button className="bg-primary text-white border border-primary px-3 py-2.5 rounded-[8px] font-bold hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center">
                        <Settings className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* UGC Sync Alert Bar */}
            <div className="bg-emerald-50/50 border border-emerald-200 rounded-[12px] p-4 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-[8px] bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-200">
                        <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-[13px] font-bold text-slate-900 mb-0.5 flex items-center gap-2">
                            Official UGC/NAAC Cell Synchronization Active
                            <span className="bg-emerald-100 text-emerald-700 text-[9px] px-2 py-0.5 rounded tracking-widest uppercase border border-emerald-200">STATUS: RECONCILED</span>
                        </h3>
                        <p className="text-[11px] text-slate-500 font-medium">
                            Duty leave manifests and bio-metric gate passes for CSE, ECE, and ME are mirrored dynamically into the University ERP Core (SAMARTH v.3.8). Next statutory audit submission deadline: <strong className="text-slate-700">14 April 2025, 17:00 IST</strong>.
                        </p>
                    </div>
                </div>
                <div className="bg-white border border-slate-200 px-3 py-2 rounded-[8px] shadow-sm flex items-center gap-3 shrink-0">
                    <div className="text-right">
                        <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest">ERP Audit Hash</span>
                        <span className="block text-[10px] font-mono font-bold text-slate-700">#GCU-ERP-2025-09B2-CSE</span>
                    </div>
                    <Copy className="w-3.5 h-3.5 text-slate-400 cursor-pointer hover:text-slate-600" />
                </div>
            </div>

            {/* 4 Top Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between h-[140px]">
                    <div className="flex justify-between items-start">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Total Co-Curricular<br />Footfall</h3>
                        <div className="w-7 h-7 rounded-[6px] bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100"><Users className="w-4 h-4" /></div>
                    </div>
                    <div>
                        <p className="text-[36px] font-bold text-slate-900 leading-none mb-3">2,410 <span className="text-[13px] text-slate-500 font-medium">Students</span></p>
                        <div className="flex justify-between items-end border-t border-slate-100 pt-2">
                            <p className="text-[10px] font-bold text-emerald-600 flex items-center gap-1.5"><Activity className="w-3 h-3" /> +24.2% YoY Growth</p>
                            <p className="text-[10px] font-medium text-slate-500 text-right leading-tight">14 Events<br />Hosted</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between h-[140px]">
                    <div className="flex justify-between items-start">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Average Turnout<br />Rate</h3>
                        <div className="w-7 h-7 rounded-[6px] bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100"><LineChart className="w-4 h-4" /></div>
                    </div>
                    <div>
                        <p className="text-[36px] font-bold text-slate-900 leading-none mb-3">91.4% <span className="text-[13px] text-slate-500 font-medium">Gate<br />Conversion</span></p>
                        <div className="flex justify-between items-end border-t border-slate-100 pt-2">
                            <p className="text-[10px] font-bold text-slate-700 flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> QR Verified</p>
                            <p className="text-[10px] font-medium text-slate-500 text-right">2,636 Registered</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between h-[140px]">
                    <div className="flex justify-between items-start">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Duty Leaves<br />Reconciled</h3>
                        <div className="w-7 h-7 rounded-[6px] bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-100"><CalendarClock className="w-4 h-4" /></div>
                    </div>
                    <div>
                        <p className="text-[36px] font-bold text-slate-900 leading-none mb-3">1,980 <span className="text-[13px] text-slate-500 font-medium">Academic<br />Hours</span></p>
                        <div className="flex justify-between items-end border-t border-slate-100 pt-2">
                            <p className="text-[10px] font-bold text-slate-700 flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> SAMARTH ERP Synced</p>
                            <p className="text-[10px] font-medium text-slate-500 text-right leading-tight">100%<br />Academic Roll</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-[12px] border-2 border-emerald-400 shadow-[0_4px_15px_rgba(16,185,129,0.1)] relative overflow-hidden flex flex-col justify-between h-[140px]">
                    <div className="flex justify-between items-start">
                        <h3 className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest leading-tight">UGC / NAAC<br />Compliance</h3>
                        <div className="w-7 h-7 rounded-[6px] bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-200"><Stamp className="w-4 h-4" /></div>
                    </div>
                    <div>
                        <p className="text-[36px] font-bold text-emerald-600 leading-none mb-3">98.6% <span className="text-[13px] text-emerald-800/70 font-medium">Grade A++<br />Level</span></p>
                        <div className="flex justify-between items-end border-t border-emerald-100 pt-2">
                            <p className="text-[10px] font-medium text-emerald-800">All Dossiers &lt;48h</p>
                            <p className="text-[10px] font-medium text-emerald-800 text-right leading-tight">Criteria 5.3.3<br />Reconciled</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

                {/* Bar Chart Mockup */}
                <div className="bg-white border border-slate-200 rounded-[16px] p-6 shadow-sm flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-[15px] font-bold text-slate-900 mb-1">Event Participation & Attendance Velocity</h3>
                            <p className="text-[11px] text-slate-500 font-medium max-w-[80%]">Comparative volume of portal registration tickets vs bio-metric turnstile gate check-ins.</p>
                        </div>
                        <div className="flex items-center gap-4 text-[10px] font-bold">
                            <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded">Spring 2025</span>
                            <div className="flex items-center gap-1.5 text-slate-500"><div className="w-2.5 h-2.5 bg-slate-200 rounded-sm"></div> Registrations</div>
                            <div className="flex items-center gap-1.5 text-slate-900"><div className="w-2.5 h-2.5 bg-primary rounded-sm"></div> Actual Check-ins</div>
                        </div>
                    </div>

                    <div className="flex-1 relative min-h-[220px]">
                        {/* Y Axis */}
                        <div className="absolute left-0 top-0 bottom-6 w-10 flex flex-col justify-between text-[10px] font-medium text-slate-400 text-right pr-2 border-r border-slate-100">
                            <span>1,000</span>
                            <span>750</span>
                            <span>500</span>
                            <span>250</span>
                            <span>0</span>
                        </div>
                        {/* Grid Lines */}
                        <div className="absolute left-10 right-0 top-1 bottom-6 flex flex-col justify-between">
                            <div className="w-full h-px border-t border-slate-100 border-dashed"></div>
                            <div className="w-full h-px border-t border-slate-100 border-dashed"></div>
                            <div className="w-full h-px border-t border-slate-100 border-dashed"></div>
                            <div className="w-full h-px border-t border-slate-100 border-dashed"></div>
                            <div className="w-full h-px border-t border-slate-200"></div>
                        </div>
                        {/* Bars */}
                        <div className="absolute left-10 right-0 top-0 bottom-0 flex justify-around items-end pb-6 px-4">
                            {/* Jan */}
                            <div className="flex gap-1.5 items-end h-[48%] relative group">
                                <div className="w-6 bg-slate-200 rounded-t h-full"></div>
                                <div className="w-6 bg-primary rounded-t h-[91.2%] relative"><span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-600 bg-white px-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">438</span></div>
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center w-[120px]">
                                    <span className="block text-[11px] font-bold text-slate-700">Jan 2025</span>
                                    <span className="block text-[9px] text-slate-500 font-medium">91.2% rate</span>
                                </div>
                            </div>
                            {/* Feb */}
                            <div className="flex gap-1.5 items-end h-[64%] relative group">
                                <div className="w-6 bg-slate-200 rounded-t h-full"></div>
                                <div className="w-6 bg-primary rounded-t h-[92.1%] relative"><span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-600 bg-white px-1 rounded shadow-sm">590</span></div>
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center w-[120px]">
                                    <span className="block text-[11px] font-bold text-slate-700">Feb 2025</span>
                                    <span className="block text-[9px] text-slate-500 font-medium">92.1% rate</span>
                                </div>
                            </div>
                            {/* Mar (Peak) */}
                            <div className="flex gap-1.5 items-end h-[96%] relative group z-10">
                                <div className="w-6 bg-slate-300 rounded-t h-full"></div>
                                <div className="w-6 bg-primary rounded-t h-[93.6%] relative shadow-[0_0_15px_rgba(30,58,138,0.3)]">
                                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center justify-center whitespace-nowrap after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-emerald-500">Peak</div>
                                    <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] font-bold text-white">890</span>
                                </div>
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center w-[120px]">
                                    <span className="block text-[11px] font-bold text-slate-900">Mar 2025</span>
                                    <span className="block text-[9px] text-primary font-bold">93.6% rate</span>
                                </div>
                            </div>
                            {/* Apr */}
                            <div className="flex gap-1.5 items-end h-[64%] relative group opacity-60">
                                <div className="w-6 bg-slate-200 rounded-t h-full"></div>
                                <div className="w-6 bg-emerald-700 rounded-t h-[76%] stripe-pattern relative"><span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-600 bg-white px-1 rounded shadow-sm">492</span></div>
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center w-[120px]">
                                    <span className="block text-[11px] font-bold text-slate-700">Apr (Est.)</span>
                                    <span className="block text-[9px] text-slate-400 font-medium italic">Ongoing live</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-slate-50 border border-slate-200 rounded-[8px] p-3 flex justify-between items-center text-[10px] font-bold text-slate-600">
                        <span className="flex items-center gap-2"><Activity className="w-3.5 h-3.5 text-primary" /> Average Verification Speed: 1.4 seconds per gate scanner at Main Auditorium & Tech Block 2.</span>
                        <button className="bg-white border border-slate-200 px-3 py-1.5 rounded-[6px] hover:bg-slate-100 transition-colors">Inspect Sensor Telemetry</button>
                    </div>
                </div>

                {/* Department Breakdown */}
                <div className="bg-white border border-slate-200 rounded-[16px] p-6 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-[15px] font-bold text-slate-900 mb-1">Department Attendance Share</h3>
                                <p className="text-[11px] text-slate-500 font-medium">Validated student attendance by academic stream.</p>
                            </div>
                            <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">N=2,410</span>
                        </div>

                        <div className="space-y-4">
                            {[{ n: 'Computer Science & Engineering', v: 1012, p: 42.0, w: 'w-[42%]' },
                            { n: 'Electronics & Comm. (ECE)', v: 530, p: 22.0, w: 'w-[22%]' },
                            { n: 'Mechanical Engineering', v: 434, p: 18.0, w: 'w-[18%]' },
                            { n: 'Civil, Bio-Tech & Applied Sciences', v: 434, p: 18.0, w: 'w-[18%]' }
                            ].map((d, i) => (
                                <div key={i}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[12px] font-bold text-slate-700 flex items-center gap-2"><div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary' : 'bg-slate-400'}`}></div> {d.n}</span>
                                        <span className="text-[12px] font-bold text-slate-900">{d.v.toLocaleString()} <span className="text-slate-400 font-medium text-[10px]">({d.p.toFixed(1)}%)</span></span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                                        <div className={`h-full ${i === 0 ? 'bg-primary' : i === 1 ? 'bg-slate-600' : 'bg-slate-400'} rounded-full ${d.w}`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 border-t border-slate-100 pt-6 flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full border-[6px] border-slate-100 border-r-primary border-t-primary border-l-slate-700 flex items-center justify-center shrink-0">
                            <span className="text-[14px] font-bold text-slate-900">14</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-[12px] font-bold text-slate-900 mb-2">Event Taxonomy Index</h4>
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="block text-[10px] text-slate-500 font-medium whitespace-nowrap">Symposia</span>
                                    <span className="text-[14px] font-bold text-slate-900">45%</span>
                                </div>
                                <div className="w-px h-8 bg-slate-200"></div>
                                <div>
                                    <span className="block text-[10px] text-slate-500 font-medium whitespace-nowrap">Workshops</span>
                                    <span className="text-[14px] font-bold text-slate-900">30%</span>
                                </div>
                                <div className="w-px h-8 bg-slate-200"></div>
                                <div>
                                    <span className="block text-[10px] text-slate-500 font-medium whitespace-nowrap flex items-center gap-1">Hackathons <PieChart className="w-3 h-3" /></span>
                                    <span className="text-[14px] font-bold text-slate-900">15%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Main Table Layer */}
            <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm mb-6 overflow-hidden">
                <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-50/50">
                    <div>
                        <h3 className="text-[16px] font-bold text-slate-900 flex items-center gap-2 mb-1">
                            Statutory Compliance & NAAC Audit Dossiers
                            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest ml-2">4 Active Files</span>
                        </h3>
                        <p className="text-[12px] text-slate-500 font-medium">Individual session rosters, verified physical check-in logs, and finance settlement files prepared for Dean (Academic Affairs) review.</p>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
                        <button className="bg-white border border-slate-200 text-slate-400 px-3 py-2.5 rounded-[8px] text-[12px] font-medium flex items-center justify-between w-full sm:w-48 shadow-sm">
                            <span className="flex items-center gap-2"><Settings className="w-4 h-4" /> Filter dossiers by code...</span>
                        </button>
                        <button className="bg-white text-slate-700 border border-slate-200 px-4 py-2 rounded-[8px] text-[12px] font-bold hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2 h-[42px]">
                            Batch Export (.ZIP) <Download className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-bold text-slate-500 tracking-widest uppercase">
                                <th className="p-4 pl-6 font-bold">Event Code & Title</th>
                                <th className="p-4 font-bold">Session Date</th>
                                <th className="p-4 font-bold">Enrolled</th>
                                <th className="p-4 font-bold">Check-in Rate</th>
                                <th className="p-4 font-bold">Duty Leaves</th>
                                <th className="p-4 font-bold">Financial Grant</th>
                                <th className="p-4 font-bold">Audit Dossier Status</th>
                                <th className="p-4 pr-6 text-right font-bold w-[120px]">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {dossiers.map(row => (
                                <tr key={row.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="p-4 pl-6">
                                        <div className="flex gap-2">
                                            <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${row.status.includes('Sealed') ? 'bg-primary' : 'bg-emerald-500'}`}></div>
                                            <div>
                                                <p className="text-[13px] font-bold text-slate-900 mb-0.5 max-w-[180px] leading-tight">{row.title}</p>
                                                <p className="text-[10px] text-slate-500 font-mono tracking-tight max-w-[180px] truncate">{row.code}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <p className="text-[12px] font-bold text-slate-700 max-w-[140px] leading-tight">{row.date.split(' • ')[0]}</p>
                                        <p className="text-[10px] text-slate-500 font-medium">{row.date.split(' • ')[1]}</p>
                                    </td>
                                    <td className="p-4">
                                        <p className={`text-[13px] font-bold ${row.enrolledColor}`}>{row.enrolled}</p>
                                        <p className="text-[10px] text-slate-500 font-medium">{row.cap}</p>
                                    </td>
                                    <td className="p-4">
                                        <p className={`font-bold ${row.checkInSize || 'text-[13px]'} text-slate-700`}>{row.checkIn}</p>
                                        <p className="text-[10px] text-slate-500 font-medium">{row.checkInDesc}</p>
                                    </td>
                                    <td className="p-4">
                                        <span className={`inline-block px-2 py-1 rounded text-[10px] font-bold tracking-wide 
                                     ${row.leavesType === 'active' ? 'bg-blue-50 text-blue-700 border border-blue-100' :
                                                row.leavesType === 'pending' ? 'bg-slate-100 text-slate-600' :
                                                    'bg-primary text-white'}`
                                        }>
                                            {row.leaves}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <p className="text-[13px] font-bold text-slate-800">{row.grant}</p>
                                        <p className="text-[10px] text-slate-500 font-medium max-w-[120px] truncate">{row.grantDesc}</p>
                                    </td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-[11px] font-bold border shadow-sm ${row.statusColor}`}>
                                            {row.status.includes('Drafted') && <FileText className="w-3.5 h-3.5 opacity-60" />}
                                            {row.status.includes('Live') && <Activity className="w-3.5 h-3.5 opacity-60" />}
                                            {row.status.includes('Sealed') && <FileCheck className="w-3.5 h-3.5 opacity-60" />}
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="p-4 pr-6 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                            <button className="w-7 h-7 bg-white rounded border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary shadow-sm transition-colors" title="View Dossier"><Eye className="w-3.5 h-3.5" /></button>
                                            <button className="w-7 h-7 bg-white rounded border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary shadow-sm transition-colors" title="Download Ledger"><Download className="w-3.5 h-3.5" /></button>
                                            <button className="w-7 h-7 bg-white rounded border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary shadow-sm transition-colors" title="Sync Status"><Repeat2 className="w-3.5 h-3.5" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-emerald-100 flex items-center justify-center text-emerald-600"><CheckCircle2 className="w-3.5 h-3.5" /></div>
                        <p className="text-[11px] font-medium text-slate-600">Authorized by: <strong className="text-slate-900">Dr. Pranjal Barman (HOD, CSE)</strong> • Counter-signed: <strong className="text-slate-900">Dean of Academic Affairs</strong></p>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="text-[11px] text-slate-500 font-medium">Showing 4 of 14 Completed Events</span>
                        <button className="text-[11px] font-bold text-primary hover:underline flex items-center gap-1"><FolderLock className="w-3.5 h-3.5" /> View Archived Semesters (2022-2024)</button>
                    </div>
                </div>
            </div>

            {/* Footer Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm relative pt-12">
                    <div className="absolute top-4 left-5 right-5 flex justify-between items-center">
                        <h4 className="text-[11px] font-bold text-primary uppercase tracking-widest flex items-center gap-2"><BarChart className="w-4 h-4 text-primary" /> NIRF Parameter 3 (TLR)</h4>
                    </div>
                    <p className="text-[11px] text-slate-600 font-medium leading-relaxed mb-4">
                        Co-curricular student-faculty contact hours logged for 2,410 unique attendees exceed NIRF minimum requirements by 38.4 hours/student.
                    </p>
                    <div className="flex justify-between items-center">
                        <span className="text-[11px] font-bold text-slate-700">100% Metric Target Reached</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm relative pt-12">
                    <div className="absolute top-4 left-5 right-5 flex justify-between items-center">
                        <h4 className="text-[11px] font-bold text-secondary uppercase tracking-widest flex items-center gap-2"><Activity className="w-4 h-4 text-secondary" /> UGC Mandate Notification 2023</h4>
                    </div>
                    <p className="text-[11px] text-slate-600 font-medium leading-relaxed mb-4">
                        Biometric timestamp records verify zero overlap with statutory regular theory lecture slots across participating semesters.
                    </p>
                    <div className="flex justify-between items-center">
                        <span className="text-[11px] font-bold text-slate-700">No Timetable Clashes Found</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm relative pt-12">
                    <div className="absolute top-4 left-5 right-5 flex justify-between items-center">
                        <h4 className="text-[11px] font-bold text-slate-700 uppercase tracking-widest flex items-center gap-2"><FileText className="w-4 h-4 text-slate-500" /> Deanery Grant Reconciliation</h4>
                    </div>
                    <p className="text-[11px] text-slate-600 font-medium leading-relaxed mb-4">
                        All financial vouchers up to ₹2.75L processed via State Bank of India GCU University Account with complete GST invoicing.
                    </p>
                    <div className="flex justify-between items-center">
                        <span className="text-[11px] font-bold text-slate-700">Audited by Finance Comptroller</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                </div>

            </div>

        </div>
    );
}
