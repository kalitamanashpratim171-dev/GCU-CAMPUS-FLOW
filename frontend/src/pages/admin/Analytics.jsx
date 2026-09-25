import { useState } from 'react';
import {
    BarChart3,
    Download,
    FileText,
    RefreshCw,
    Users,
    ShieldCheck,
    ClipboardCheck,
    Wallet,
    CheckCircle2,
    AlertTriangle,
    FolderOpen,
    Save,
    Search,
    ChevronDown,
    TrendingUp,
    Activity,
    Award
} from 'lucide-react';

export default function Analytics() {

    const chartData = [
        { month: 'AUG', reg: 40, scan: 30 },
        { month: 'SEP', reg: 55, scan: 45 },
        { month: 'OCT', reg: 85, scan: 70 },
        { month: 'NOV', reg: 90, scan: 65 },
        { month: 'DEC', reg: 45, scan: 35 },
        { month: 'JAN', reg: 100, scan: 85 },
        { month: 'FEB', reg: 110, scan: 95 },
        { month: 'MAR (94%)', reg: 120, scan: 115, highlight: true },
        { month: 'APR', reg: 80, scan: 65 },
    ];

    const deptData = [
        { name: 'Computer Science & Eng.', pct: '30.0%', code: 'CSE-01', footfall: '7,420', grant: '₹4.50', scan: '94.5%' },
        { name: 'School of Pharmacy', pct: '20.0%', code: 'PHARM-04', footfall: '4,950', grant: '₹4.00', scan: '92.1%' },
        { name: 'Mechanical & Civil Eng.', pct: '17.0%', code: 'MECH-CIVIL', footfall: '4,200', grant: '₹3.00', scan: '91.0%' },
        { name: 'Electronics & Comm.', pct: '16.5%', code: 'ECE-02', footfall: '4,120', grant: '₹3.20', scan: '89.8%' },
        { name: 'Management & Cells', pct: '16.5%', code: 'MGMT-CELL', footfall: '4,160', grant: '₹3.90', scan: '88.5%' },
    ];

    const tableData = [
        { title: 'TechVenture 2025', meta: 'GCU-EV-2025-019 • Flagship', school: 'Faculty of Eng. & Tech', duration: '14-16 Mar (3d)', footfall: '3,420', leaves: '2,150 hrs', grant: '₹2.80L', hash: '0x8F4E...91A2' },
        { title: 'Intl. Pharmacovigilance Summit', meta: 'GCU-EV-2025-024 • Academic', school: 'School of Pharm. Sciences', duration: '22-23 Feb (2d)', footfall: '1,890', leaves: '1,240 hrs', grant: '₹1.90L', hash: '0x3D1C...45E8' },
        { title: 'Deep Learning & AI Colloquium', meta: 'GCU-EV-2025-031 • FDP / Student', school: 'Dept. of Computer Science', duration: '08-09 Jan (2d)', footfall: '1,220', leaves: '960 hrs', grant: '₹1.15L', hash: '0x9984...F120' },
        { title: 'Assam Biodiversity Hackathon', meta: 'GCU-EV-2024-088 • Inter-Varsity', school: 'School of Life & Env. Sciences', duration: '19-21 Nov (3d)', footfall: '2,110', leaves: '1,820 hrs', grant: '₹2.10L', hash: '0x62A0...07BC' },
        { title: 'National Energy Conclave', meta: 'GCU-EV-2024-072 • Research', school: 'Mechanical & Civil Dept.', duration: '11-12 Oct (2d)', footfall: '1,480', leaves: '910 hrs', grant: '₹1.45L', hash: '0x44CE...8159' }
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] mx-auto mt-2 space-y-6">

            {/* Top Breadcrumb Context */}
            <div className="flex justify-between items-center bg-transparent px-1 py-1 text-[10px] font-bold">
                <div className="flex items-center gap-2 text-slate-500 uppercase tracking-widest flex-wrap">
                    Campus Home &gt; Administration &gt; Institutional Research &gt; <span className="text-primary">Analytics & Accreditation Reports</span>
                </div>
            </div>

            {/* Main Header */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-2">
                <div className="max-w-4xl">
                    <h1 className="text-[32px] font-bold text-[#0f172a] tracking-tight leading-[1.1] mb-3">
                        University Event Analytics & NIRF<br />Dossiers
                    </h1>
                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed max-w-3xl">
                        Institutional footfall intelligence, NAAC Criterion 5 student progression indices, SAMARTH ERP duty leave reconciliations, and Deanery grant audit ledgers.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 w-full xl:w-auto shrink-0 mt-4 xl:mt-0">
                    <button className="bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors">
                        <RefreshCw className="w-4 h-4 text-slate-400" /> Sync SAMARTH Node
                    </button>
                    <button className="bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors">
                        <FileText className="w-4 h-4 text-slate-400" /> Export CSV
                    </button>
                    <button className="bg-[#0f172a] text-white hover:bg-slate-800 shadow-sm px-5 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors">
                        <Download className="w-4 h-4" /> Download NIRF Summary
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Total Event Footfall</h3>
                            <div className="w-8 h-8 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500"><Users className="w-4 h-4" /></div>
                        </div>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-[32px] font-bold text-slate-900 leading-none tracking-tight">24,850</span>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-slate-500 font-medium">
                        <span className="bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.5 rounded flex items-center gap-1 border border-emerald-100"><TrendingUp className="w-3 h-3" /> +28.4%</span> YoY across 48 accredited events
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">NAAC Criterion 5.3.3<br />Score</h3>
                            <div className="w-8 h-8 rounded-md bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600"><ShieldCheck className="w-4 h-4" /></div>
                        </div>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-[32px] font-bold text-slate-900 leading-none tracking-tight text-teal-700">3.94</span>
                            <span className="text-[14px] font-bold text-slate-400">/ 4.00</span>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-slate-500 font-medium">
                        <span className="bg-teal-100 text-teal-800 font-bold px-1.5 py-0.5 rounded">A++ Ready</span> 100% verified co-curricular logs
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Duty Leaves<br />Reconciled</h3>
                            <div className="w-8 h-8 rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500"><ClipboardCheck className="w-4 h-4" /></div>
                        </div>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-[32px] font-bold text-slate-900 leading-none tracking-tight text-[#0f172a]">14,280</span>
                            <span className="text-[14px] font-bold text-slate-500">hrs</span>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-slate-500 font-medium">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> SAMARTH ERP synchronized (0 default)
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Deanery Grant<br />Utilization</h3>
                            <div className="w-8 h-8 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600"><Wallet className="w-4 h-4" /></div>
                        </div>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-[32px] font-bold text-slate-900 leading-none tracking-tight">₹18.60L</span>
                            <span className="text-[14px] font-bold text-slate-400">/ 24.50L</span>
                        </div>
                    </div>
                    <div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-1.5">
                            <div className="h-full bg-[#0f172a] w-[75.9%]"></div>
                        </div>
                        <div className="text-[10px] font-bold text-slate-700 text-right">
                            75.9% <span className="text-slate-400 font-medium">(₹5.90L reserve)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Analytics Section (2 Cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Chart Section */}
                <div className="lg:col-span-2 bg-white border border-slate-200 rounded-[16px] shadow-sm p-6 flex flex-col">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <div>
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Footfall Intelligence</h3>
                            <h2 className="text-[16px] font-bold text-slate-900 leading-tight">Monthly Student Ingress & Attendance Velocity</h2>
                            <p className="text-[11px] text-slate-500 font-medium mt-1">Registered RSVPs vs Biometrically Verified Gate Scans (AY 2024-25)</p>
                        </div>
                        <div className="flex items-center gap-3 text-[10px] font-bold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-[8px] border border-slate-100">
                            <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div> Registered</span>
                            <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-teal-600"></div> Actual Scan</span>
                        </div>
                    </div>

                    {/* Mock Bar Chart */}
                    <div className="flex-1 flex items-end gap-2 sm:gap-4 lg:gap-6 justify-between h-[200px] mt-4 pb-4 border-b border-slate-100">
                        {chartData.map((d, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 group flex-1">
                                <div className="flex items-end justify-center w-full h-[150px] gap-1 relative">
                                    {/* Hover tooltip simulated */}
                                    <div className="absolute -top-8 bg-slate-800 text-white text-[9px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                        Reg: {d.reg}k | Scan: {d.scan}k
                                    </div>
                                    <div className="w-1/2 max-w-[12px] bg-slate-300 rounded-t-sm transition-all duration-500 group-hover:bg-slate-400" style={{ height: `${(d.reg / 120) * 100}%` }}></div>
                                    <div className="w-1/2 max-w-[12px] bg-teal-600 rounded-t-sm transition-all duration-500 group-hover:bg-teal-500" style={{ height: `${(d.scan / 120) * 100}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-2 sm:gap-4 lg:gap-6 justify-between pt-3">
                        {chartData.map((d, i) => (
                            <div key={i} className="flex-1 text-center">
                                <span className={`text-[9px] font-bold uppercase ${d.highlight ? 'text-teal-700 bg-teal-50 px-1 py-0.5 rounded' : 'text-slate-400'}`}>{d.month}</span>
                            </div>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <div className="mt-6 bg-blue-50/50 border border-blue-100 rounded-[8px] p-3 flex items-start sm:items-center gap-3">
                        <Activity className="w-4 h-4 text-blue-500 shrink-0 mt-0.5 sm:mt-0" />
                        <p className="text-[11px] text-slate-600 font-medium leading-relaxed flex-1">
                            Annual Fest & Conclave turnout registered a record <strong className="text-slate-900">94.2% gate convergence</strong> in March 2025.
                        </p>
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded hidden sm:block">Automated gate sensor data validated</span>
                    </div>
                </div>

                {/* Donut Chart / Stats Section */}
                <div className="lg:col-span-1 bg-white border border-slate-200 rounded-[16px] shadow-sm p-6 flex flex-col">
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Accreditation Readiness</h3>
                    <h2 className="text-[16px] font-bold text-slate-900 leading-tight">Statutory Verification Index</h2>
                    <p className="text-[11px] text-slate-500 font-medium mt-1 mb-8">UGC Mandatory Standard & NAD Integration</p>

                    <div className="flex-1 flex flex-col items-center justify-center mb-8 relative">
                        {/* CSS Donut Chart Mockup */}
                        <div className="w-40 h-40 rounded-full border-[12px] border-[#0f172a] shadow-inner relative flex items-center justify-center">
                            <div className="absolute inset-[-12px] rounded-full border-[12px] border-teal-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0)' }}></div>
                            <div className="absolute inset-[-12px] rounded-full border-[12px] border-emerald-400" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 50% 0)' }}></div>
                            <div className="absolute inset-[-20px] rounded-full border-[20px] border-transparent border-t-[#0f172a]" style={{ transform: 'rotate(45deg)' }}></div>

                            <div className="text-center z-10 bg-white w-full h-full rounded-full flex flex-col items-center justify-center">
                                <span className="text-[28px] font-bold text-[#0f172a] leading-none mb-1">98.8%</span>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Overall Sync</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-[11px] font-medium text-slate-600 bg-slate-50 px-3 py-2 rounded-[6px] border border-slate-100">
                            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600" /> Biometric / QR Gate Attendance</span>
                            <span className="font-bold text-slate-800">100.0%</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px] font-medium text-slate-600 bg-slate-50 px-3 py-2 rounded-[6px] border border-slate-100">
                            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Faculty Deanery Endorsements</span>
                            <span className="font-bold text-slate-800">98.6%</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px] font-medium text-slate-600 bg-slate-50 px-3 py-2 rounded-[6px] border border-slate-100">
                            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" /> DigiLocker / NAD Hash Anchors</span>
                            <span className="font-bold text-slate-800">96.2%</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px] font-medium text-slate-600 bg-emerald-50 px-3 py-2 rounded-[6px] border border-emerald-100 text-emerald-800">
                            <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5" /> UGC Core Timetable Clashes</span>
                            <span className="font-bold">0 Clashes</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Resource Governance section */}
            <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div>
                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Resource Governance</h3>
                        <h2 className="text-[16px] font-bold text-[#0f172a] leading-tight">Departmental Co-Curricular Footfall Share & Budget Ledger</h2>
                        <p className="text-[11px] text-slate-500 font-medium mt-1">Allocated institutional funding, verified check-in rates, and engagement ratios by School.</p>
                    </div>
                    <div className="text-[11px] font-bold text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-[8px]">
                        Academic Session: <span className="text-[#0f172a]">2024-2025 Regular</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {deptData.map((d, i) => (
                        <div key={i} className={`bg-slate-50/50 border border-slate-100 rounded-[12px] p-4 flex flex-col border-b-[4px] ${i === 0 ? 'border-b-[#0f172a]' : i === 1 ? 'border-b-blue-600' : i === 2 ? 'border-b-teal-500' : i === 3 ? 'border-b-indigo-500' : 'border-b-slate-400'}`}>
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-bold text-slate-700">{d.pct} <span className="text-slate-400 uppercase tracking-widest">Footfall</span></span>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{d.code}</span>
                            </div>
                            <h4 className="text-[14px] font-bold text-slate-900 leading-tight mb-4 pr-4">{d.name}</h4>

                            <div className="space-y-2.5 mt-auto">
                                <div className="flex justify-between items-end border-b border-slate-200/60 pb-1">
                                    <span className="text-[11px] text-slate-500 font-medium">Footfall</span>
                                    <span className="text-[13px] font-bold text-slate-800">{d.footfall} <span className="text-[9px] font-medium text-slate-400">students</span></span>
                                </div>
                                <div className="flex justify-between items-end border-b border-slate-200/60 pb-1">
                                    <span className="text-[11px] text-slate-500 font-medium flex flex-col leading-tight pb-0.5"><span>Grant</span><span>Disbursed</span></span>
                                    <span className="text-[13px] font-bold text-slate-800">{d.grant} <span className="text-[9px] font-medium text-slate-400">Lakhs</span></span>
                                </div>
                                <div className="flex justify-between items-end">
                                    <span className="text-[11px] text-slate-500 font-medium flex flex-col leading-tight"><span>Scan</span><span>Efficacy</span></span>
                                    <span className="text-[13px] font-bold text-teal-700 bg-teal-50 px-1 py-0.5 rounded">{d.scan} <span className="text-[9px] font-bold text-teal-600 uppercase tracking-widest">check-in</span></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Statutory Dossier Table */}
            <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm overflow-hidden flex flex-col">
                <div className="p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Institutional Repository</h3>
                        <h2 className="text-[16px] font-bold text-[#0f172a] leading-tight mt-1">Statutory Dossier Repository (NAAC / NIRF / UGC Cycle 2024-25)</h2>
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                            <input type="text" placeholder="Filter by dossier hash, event..." className="w-full bg-slate-50 border border-slate-200 rounded-[6px] pl-8 pr-3 py-1.5 text-[12px] font-medium text-slate-700 outline-none focus:border-primary shadow-sm" />
                        </div>
                        <button className="bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-[6px] text-[12px] font-bold flex items-center justify-between min-w-[160px] shadow-sm">
                            All Criterion Portfolios <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px]">
                        <thead className="bg-slate-50 border-y border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            <tr>
                                <th className="px-5 py-3">Event Code & Title</th>
                                <th className="px-3 py-3">Organizing School</th>
                                <th className="px-3 py-3">Duration</th>
                                <th className="px-3 py-3">Footfall</th>
                                <th className="px-3 py-3">Duty Leaves</th>
                                <th className="px-3 py-3">Grant</th>
                                <th className="px-3 py-3">Deanery Status</th>
                                <th className="px-3 py-3">Cryptographic Hash</th>
                                <th className="px-5 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {tableData.map((row, idx) => (
                                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-5 py-4">
                                        <h4 className="text-[13px] font-bold text-slate-800 leading-tight mb-1">{row.title}</h4>
                                        <span className="text-[10px] text-slate-500 font-medium tracking-tight">{row.meta}</span>
                                    </td>
                                    <td className="px-3 py-4 text-[11px] font-bold text-slate-600 leading-tight break-words max-w-[120px]">{row.school}</td>
                                    <td className="px-3 py-4 text-[11px] text-slate-600 font-medium whitespace-nowrap">{row.duration}</td>
                                    <td className="px-3 py-4 text-[13px] font-bold text-slate-800 whitespace-nowrap">{row.footfall}</td>
                                    <td className="px-3 py-4">
                                        <div className="flex flex-col text-[11px] text-teal-700 font-bold whitespace-nowrap leading-tight">
                                            {row.leaves.split(' ')[0]} <span className="text-slate-400 font-medium text-[10px]">{row.leaves.split(' ')[1]}</span>
                                        </div>
                                    </td>
                                    <td className="px-3 py-4 text-[12px] font-bold text-slate-800 whitespace-nowrap">{row.grant}</td>
                                    <td className="px-3 py-4">
                                        <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap leading-tight block w-max flex flex-col items-center">
                                            {row.status || 'NAAC Sealed'}
                                        </span>
                                    </td>
                                    <td className="px-3 py-4">
                                        <span className="font-mono text-[10px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-2 py-1 rounded whitespace-nowrap">
                                            {row.hash}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4 text-right">
                                        <div className="flex justify-end gap-2 text-slate-400">
                                            <button className="hover:text-primary transition-colors"><FolderOpen className="w-4 h-4" /></button>
                                            <button className="hover:text-primary transition-colors"><Save className="w-4 h-4" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 bg-white flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-slate-100 text-[11px]">
                    <span className="text-slate-500 font-medium text-center sm:text-left">Showing 5 of 48 statutory event dossiers for SSR Submission Cycle 2</span>
                    <div className="flex items-center gap-1">
                        <button className="px-3 py-1.5 text-slate-400 bg-slate-50 border border-slate-100 rounded-[6px] font-bold cursor-not-allowed">Previous</button>
                        <span className="px-3 font-bold text-slate-700">Page 1 of 10</span>
                        <button className="px-3 py-1.5 text-primary bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors rounded-[6px] font-bold">Next</button>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Notice block */}
            <div className="bg-white border text-[#0f172a] border-emerald-100 rounded-[16px] shadow-sm p-6 flex flex-col lg:flex-row items-center gap-6 relative overflow-hidden">
                {/* subtle bg accent */}
                <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-emerald-50 to-transparent pointer-events-none"></div>

                <div className="w-12 h-12 rounded-[10px] bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 z-10 shadow-sm text-blue-600">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="flex-1 text-center lg:text-left z-10">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 mb-2">
                        <h3 className="text-[14px] font-bold text-slate-900">NAAC Peer Team Inspection Notice</h3>
                        <span className="bg-teal-500 text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-widest shadow-sm">ED25519 Signed</span>
                    </div>
                    <p className="text-[12px] text-slate-500 font-medium leading-relaxed max-w-4xl">
                        All duty leave adjustments and co-curricular credit increments represented above are anchored on the GCU Private Subnet ledger and cross-mirrored with the SAMARTH Academic Bank of Credits (ABC) repository under Registrar seal ID: <span className="font-mono text-slate-400">GCU-REG-2025-AC-0922</span>.
                    </p>
                </div>
                <div className="text-[11px] font-bold text-slate-500 shrink-0 z-10 flex items-center gap-2">
                    National Institutional Ranking Framework (NIRF) 2025 Ready <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
                </div>
            </div>

        </div>
    );
}
