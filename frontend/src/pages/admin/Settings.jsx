import { useState } from 'react';
import {
    Save,
    Download,
    CalendarDays,
    Network,
    ShieldCheck,
    Wifi,
    Key,
    BellRing,
    TerminalSquare,
    ChevronDown,
    Plus,
    Ban,
    Flag,
    RotateCw,
    Eye,
    RefreshCw,
    Check,
    CheckSquare,
    CheckCircle2,
    Lock,
    Stamp
} from 'lucide-react';

export default function AdminSettings() {

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] mx-auto mt-2">

            {/* Top Breadcrumb Context */}
            <div className="flex justify-between items-center bg-transparent px-1 py-1 text-[10px] font-bold mb-4">
                <div className="flex items-center gap-2 text-slate-500 uppercase tracking-widest flex-wrap">
                    Campus Home &gt; Administration &gt; Governance &gt; <span className="text-primary">System Settings & Configurations</span>
                </div>
            </div>

            {/* Main Header */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-8 border-b border-slate-200/60 pb-6">
                <div className="max-w-3xl">
                    <h1 className="text-[32px] font-bold text-[#0f172a] tracking-tight leading-[1.1] mb-3">
                        Admin System Settings &<br />Master Controls
                    </h1>
                    <span className="bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-[4px] text-[10px] font-bold tracking-widest mb-4 inline-block">PROD_NODE_AS-01</span>
                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed max-w-2xl">
                        Configure university academic calendars, SAMARTH ERP Single Sign-On, RBAC access policies, automated duty leave rules, and cryptographic HSM signing keys.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 w-full xl:w-auto shrink-0 mt-2 xl:mt-0">
                    <button className="text-slate-600 hover:text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors">
                        <Download className="w-4 h-4 text-slate-400" /> Export Audit Ledger (.JSON)
                    </button>
                    <button className="text-slate-500 hover:text-slate-800 text-[12px] font-bold px-2 py-2 transition-colors">
                        Discard Changes
                    </button>
                    <button className="bg-[#0f172a] text-white hover:bg-slate-800 shadow-sm px-5 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors">
                        <Save className="w-4 h-4" /> Save Master Configuration
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">

                {/* Left Configuration Rail */}
                <div className="w-full lg:w-[280px] shrink-0">
                    <div className="bg-white border border-slate-200 rounded-[12px] shadow-sm overflow-hidden flex flex-col h-full lg:min-h-[600px]">
                        <div className="p-4 border-b border-slate-100">
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Configuration Rail</h3>
                        </div>
                        <div className="p-2 space-y-1 flex-1">
                            <button className="w-full text-left bg-[#0f172a] text-white px-4 py-3 rounded-[8px] text-[12px] font-bold flex items-center justify-between shadow-sm">
                                <span className="flex items-center gap-3"><CalendarDays className="w-4 h-4" /> Academic Calendar & T...</span>
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            </button>

                            <button className="w-full text-left bg-transparent text-slate-600 hover:bg-slate-50 px-4 py-3 rounded-[8px] text-[12px] font-bold flex items-center justify-between transition-colors">
                                <span className="flex items-center gap-3"><Network className="w-4 h-4 text-slate-400" /> SAMARTH SSO & ...</span>
                                <span className="bg-blue-50 text-blue-600 border border-blue-100 text-[9px] px-1.5 py-0.5 rounded leading-tight text-center font-bold">Sync<br />OK</span>
                            </button>

                            <button className="w-full text-left bg-transparent text-slate-600 hover:bg-slate-50 px-4 py-3 rounded-[8px] text-[12px] font-bold flex items-center justify-between transition-colors">
                                <span className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-slate-400" /> RBAC & Approval...</span>
                                <span className="bg-blue-50 text-blue-600 border border-blue-100 text-[9px] px-1.5 py-0.5 rounded leading-tight text-center font-bold">4<br />Rules</span>
                            </button>

                            <button className="w-full text-left bg-transparent text-slate-600 hover:bg-slate-50 px-4 py-3 rounded-[8px] text-[12px] font-bold flex items-center gap-3 transition-colors">
                                <Wifi className="w-4 h-4 text-slate-400" /> Attendance & Gate Tele...
                            </button>

                            <button className="w-full text-left bg-transparent text-slate-600 hover:bg-slate-50 px-4 py-3 rounded-[8px] text-[12px] font-bold flex items-center justify-between transition-colors">
                                <span className="flex items-center gap-3"><Key className="w-4 h-4 text-slate-400" /> Certificates & HSM Keys</span>
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                            </button>

                            <button className="w-full text-left bg-transparent text-slate-600 hover:bg-slate-50 px-4 py-3 rounded-[8px] text-[12px] font-bold flex items-center gap-3 transition-colors">
                                <BellRing className="w-4 h-4 text-slate-400" /> Notification Webhooks
                            </button>

                            <button className="w-full text-left bg-transparent text-slate-600 hover:bg-slate-50 px-4 py-3 rounded-[8px] text-[12px] font-bold flex items-center gap-3 transition-colors">
                                <TerminalSquare className="w-4 h-4 text-slate-400" /> System Maintenance Logs
                            </button>
                        </div>

                        <div className="bg-slate-50 border-t border-slate-200 p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-[11px] font-bold text-teal-700 leading-tight">HSM Core Latency 4ms <span className="text-slate-500 font-medium">(Optimal)</span></span>
                            </div>
                            <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                                Last authenticated by VC Security Sec on Jan 24, 2025 09:42 IST.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Main Content Sections */}
                <div className="flex-1 space-y-6">

                    {/* SECTION 1: Calendar */}
                    <div className="bg-white border border-slate-200 rounded-[12px] shadow-sm overflow-hidden flex flex-col p-6 relative">
                        <div className="flex justify-between items-start mb-6 align-top">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-[8px] bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 shadow-sm text-indigo-600">
                                    <CalendarDays className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-[16px] font-bold text-slate-900 leading-tight mb-1">Academic Session & Master Calendar Configuration</h2>
                                    <p className="text-[12px] text-slate-500 font-medium">Set institutional calendar cycles, active terms, and embargo windows.</p>
                                </div>
                            </div>
                            <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-1 rounded-[6px] text-[10px] font-bold flex items-center gap-1.5 shrink-0">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div> Active Term
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="text-[11px] font-bold text-slate-700 block mb-2">Current Academic Year</label>
                                <div className="relative">
                                    <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-[8px] px-4 py-2.5 text-[13px] font-bold text-slate-800 outline-none focus:border-primary pr-10 cursor-pointer shadow-sm">
                                        <option>AY 2024-25</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                </div>
                                <p className="text-[10px] text-slate-400 font-medium mt-1.5">Synchronized across NIRF metrics & UGC portal</p>
                            </div>
                            <div>
                                <label className="text-[11px] font-bold text-slate-700 block mb-2">Active Academic Term & Duration</label>
                                <input type="text" value="Spring 2025 Semester (Jan 06 - Jun 15, 2025)" readOnly className="w-full bg-slate-50 border border-slate-200 rounded-[8px] px-4 py-2.5 text-[13px] font-medium text-slate-600 outline-none shadow-sm cursor-default" />
                                <p className="text-[10px] text-slate-400 font-medium mt-1.5">162 instruction days scheduled (Meets UGC Norms)</p>
                            </div>
                        </div>

                        <div className="mb-6 border border-slate-100 rounded-[10px] overflow-hidden">
                            <div className="flex justify-between items-center bg-slate-50 p-4 border-b border-slate-100">
                                <div>
                                    <h3 className="text-[13px] font-bold text-slate-800 mb-0.5">Event Scheduling Blackout Dates</h3>
                                    <p className="text-[11px] text-slate-500 font-medium max-w-xl">No co-curricular, club, or external symposium events can be scheduled without explicit Vice-Chancellor override during these windows.</p>
                                </div>
                                <button className="text-[11px] font-bold text-primary flex items-center gap-1 hover:text-blue-700">
                                    <Plus className="w-3.5 h-3.5" /> Add Restriction
                                </button>
                            </div>

                            <table className="w-full text-left text-[11px]">
                                <thead className="bg-slate-50 border-b border-slate-100 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                                    <tr>
                                        <th className="px-4 py-2.5">Event Restriction Category</th>
                                        <th className="px-4 py-2.5">Date Range</th>
                                        <th className="px-4 py-2.5">Scope & Impact</th>
                                        <th className="px-4 py-2.5 text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white">
                                    <tr>
                                        <td className="px-4 py-3 flex items-start gap-2">
                                            <Ban className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                                            <span className="font-bold text-slate-800">Mid-Semester Examinations</span>
                                        </td>
                                        <td className="px-4 py-3 font-mono font-medium text-slate-600 text-[10px]">Feb 24 - Mar<br />03, 2025</td>
                                        <td className="px-4 py-3 text-slate-600 leading-tight">All UG/PG Programs<br />(Campus-wide)</td>
                                        <td className="px-4 py-3 text-right">
                                            <span className="bg-red-50 text-red-600 font-bold px-2 py-0.5 rounded flex flex-col items-center w-max ml-auto leading-tight">Strict<br />Lock</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 flex items-start gap-2">
                                            <Ban className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                                            <span className="font-bold text-slate-800">End-Semester Practical & Vivas</span>
                                        </td>
                                        <td className="px-4 py-3 font-mono font-medium text-slate-600 text-[10px]">May 19 - May<br />30, 2025</td>
                                        <td className="px-4 py-3 text-slate-600 leading-tight">Engineering &<br />Pharmaceutical Labs</td>
                                        <td className="px-4 py-3 text-right">
                                            <span className="bg-red-50 text-red-600 font-bold px-2 py-0.5 rounded flex flex-col items-center w-max ml-auto leading-tight">Strict<br />Lock</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 flex items-start gap-2">
                                            <Flag className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                                            <span className="font-bold text-slate-800">State & National Gazetted Holidays</span>
                                        </td>
                                        <td className="px-4 py-3 font-mono font-medium text-slate-600 text-[10px]">14 Calendar<br />Dates Total</td>
                                        <td className="px-4 py-3 text-slate-600 leading-tight">Bihu, Republic Day, Good<br />Friday, etc.</td>
                                        <td className="px-4 py-3 text-right">
                                            <span className="bg-blue-50 text-blue-600 font-bold px-2 py-0.5 rounded flex flex-col items-center w-max ml-auto leading-tight">Auto-<br />Flagged</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-blue-50/50 border border-blue-100 rounded-[10px] p-4 flex gap-4 items-center justify-between mt-auto">
                            <div className="flex gap-3 items-start">
                                <RotateCw className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-[12px] font-bold text-slate-800 mb-0.5">Automated Semester Rollover Protocol</h4>
                                    <p className="text-[11px] text-slate-500 font-medium">Enables system-wide grade locking, promotion calculation, and room reallocation upon final academic council approval.</p>
                                </div>
                            </div>
                            <div className="w-10 h-6 bg-[#0f172a] rounded-full relative cursor-pointer shrink-0">
                                <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div>
                            </div>
                        </div>
                    </div>


                    {/* SECTION 2: SAMARTH SSO */}
                    <div className="bg-white border border-slate-200 rounded-[12px] shadow-sm overflow-hidden flex flex-col p-6 relative">
                        <div className="flex justify-between items-start mb-6 align-top">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-[8px] bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 shadow-sm text-teal-600">
                                    <Network className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-[16px] font-bold text-slate-900 leading-tight mb-1">SAMARTH National ERP Integration & Single Sign-On</h2>
                                    <p className="text-[12px] text-slate-500 font-medium">Unified identity layer federated with Ministry of Education SAMARTH Stack.</p>
                                </div>
                            </div>
                            <span className="bg-blue-50 text-blue-700 border border-blue-100 px-2 py-1 rounded-[6px] text-[10px] font-bold flex flex-col leading-tight shrink-0">
                                TLS 1.3 Strict Mutual<br />Auth
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="text-[11px] font-bold text-slate-700 block mb-2">SAMARTH Cluster Node</label>
                                <input type="text" defaultValue="Assam Higher Ed Cluster Node #02 (National...)" className="w-full bg-slate-50 border border-slate-200 rounded-[8px] px-4 py-2.5 text-[13px] font-medium text-slate-600 outline-none shadow-sm cursor-text" />
                            </div>
                            <div>
                                <label className="text-[11px] font-bold text-slate-700 block mb-2">Sync Frequency</label>
                                <div className="relative">
                                    <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-[8px] px-4 py-2.5 text-[13px] font-medium text-slate-800 outline-none focus:border-primary pr-10 cursor-pointer shadow-sm">
                                        <option>Every 30 Minutes</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-[11px] font-bold text-slate-700">OAuth2 Client ID & Secret Key</label>
                                <button className="text-[10px] font-bold text-primary flex items-center gap-1 hover:text-blue-700">
                                    <RefreshCw className="w-3 h-3" /> Regenerate API Token
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" readOnly value="gcu-prod-auth-client-assam-0091" className="w-full bg-slate-50 border border-slate-200 rounded-[8px] px-4 py-2 text-[12px] font-mono text-slate-600 outline-none shadow-sm" />
                                <div className="relative w-full">
                                    <input type="password" readOnly value="supersecretkeyabcdefg12345" className="w-full bg-slate-50 border border-slate-200 rounded-[8px] pl-4 pr-10 py-2 text-[13px] tracking-[3px] font-mono text-slate-800 outline-none shadow-sm" />
                                    <Eye className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-700" />
                                </div>
                            </div>
                        </div>

                        <div className="border border-slate-200 rounded-[10px] p-4">
                            <div className="flex gap-4 items-start justify-between mb-3">
                                <div>
                                    <h4 className="text-[13px] font-bold text-slate-800 mb-0.5">Automatic Roster Ingestion</h4>
                                    <p className="text-[11px] text-slate-500 font-medium">Auto-sync student batch admissions & faculty appointments directly from SAMARTH ERP database.</p>
                                </div>
                                <div className="w-10 h-6 bg-[#0f172a] rounded-full relative cursor-pointer shrink-0 mt-1">
                                    <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div>
                                </div>
                            </div>

                            <div className="flex gap-2 items-center text-[10px] text-slate-500 font-medium pt-2 border-t border-slate-100">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Last Successful Sync: <strong className="text-slate-800">12 mins ago</strong> (8,420 user identities reconciled, 0 errors, 14 faculty duty entries updated)
                            </div>
                        </div>
                    </div>


                    {/* SECTION 3: RBAC & Approval Gates */}
                    <div className="bg-white border border-slate-200 rounded-[12px] shadow-sm overflow-hidden flex flex-col p-6 relative">
                        <div className="flex justify-between items-start mb-6 align-top">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-[8px] bg-[#0f172a] border border-slate-800 flex items-center justify-center shrink-0 shadow-sm text-white">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-[16px] font-bold text-slate-900 leading-tight mb-1">Institutional Clearance & Multi-Stage Approval Rules</h2>
                                    <p className="text-[12px] text-slate-500 font-medium">Enforce governance gates for financial disbursements, venue bookings, and attendee limits.</p>
                                </div>
                            </div>
                            <span className="bg-slate-50 text-slate-600 border border-slate-200 px-2 py-1 rounded-[6px] text-[10px] font-bold flex flex-col leading-tight shrink-0">
                                Statutory GCU Act<br />§14(b)
                            </span>
                        </div>

                        <div className="space-y-3">

                            {/* Rule 1 */}
                            <div className="bg-blue-50/40 border border-blue-100 rounded-[10px] p-4 flex gap-4 items-start">
                                <CheckSquare className="w-4 h-4 text-primary shrink-0 mt-0.5 cursor-pointer fill-blue-50" />
                                <div className="flex-1">
                                    <h4 className="text-[12px] font-bold text-slate-800 mb-0.5">Department Level: HOD Endorsement Mandatory</h4>
                                    <p className="text-[11px] text-slate-500 font-medium">All student club, technical fest, and guest lecturer proposals must first be ratified by the respective Department Head.</p>
                                </div>
                            </div>

                            {/* Rule 2 (Complex) */}
                            <div className="bg-blue-50/40 border border-blue-100 rounded-[10px] p-4 flex gap-4 items-start">
                                <CheckSquare className="w-4 h-4 text-primary shrink-0 mt-0.5 cursor-pointer fill-blue-50" />
                                <div className="flex-1">
                                    <h4 className="text-[12px] font-bold text-slate-800 mb-0.5 flex items-center gap-1.5"><Network className="w-3.5 h-3.5 text-slate-400" /> Deanery Level Financial & Audience Thresholds</h4>
                                    <p className="text-[11px] text-slate-500 font-medium mb-4">Automatic routing to Dean of Academic Affairs or Dean of Student Welfare when criteria exceed baselines.</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white border border-slate-200 rounded-[8px] p-4">
                                        <div>
                                            <div className="flex justify-between text-[10px] font-bold text-slate-700 mb-2">
                                                <span>Disbursement Ceiling</span>
                                                <span className="text-slate-900">₹ 50,000</span>
                                            </div>
                                            <div className="w-full bg-slate-200 h-1.5 rounded-full relative mb-3">
                                                <div className="absolute left-0 top-0 h-full w-[40%] bg-[#0f172a] rounded-full"></div>
                                                <div className="w-3 h-3 bg-[#0f172a] border-2 border-white rounded-full absolute top-1/2 -translate-y-1/2 left-[40%] shadow-sm cursor-col-resize"></div>
                                            </div>
                                            <p className="text-[9px] font-medium text-slate-500">Grants exceeding this require Dean's clearance.</p>
                                        </div>

                                        <div>
                                            <div className="flex justify-between text-[10px] font-bold text-slate-700 mb-2">
                                                <span>Attendee Capacity Threshold</span>
                                                <span className="text-slate-900">&gt; 200 Students</span>
                                            </div>
                                            <div className="w-full bg-slate-200 h-1.5 rounded-full relative mb-3">
                                                <div className="absolute left-0 top-0 h-full w-[60%] bg-[#0f172a] rounded-full"></div>
                                                <div className="w-3 h-3 bg-[#0f172a] border-2 border-white rounded-full absolute top-1/2 -translate-y-1/2 left-[60%] shadow-sm cursor-col-resize"></div>
                                            </div>
                                            <p className="text-[9px] font-medium text-slate-500">Triggers security roster validation.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Rule 3 */}
                            <div className="bg-blue-50/40 border border-blue-100 rounded-[10px] p-4 flex gap-4 items-start">
                                <CheckSquare className="w-4 h-4 text-primary shrink-0 mt-0.5 cursor-pointer fill-blue-50" />
                                <div className="flex-1">
                                    <h4 className="text-[12px] font-bold text-slate-800 mb-0.5 flex items-center gap-1.5"><Flag className="w-3.5 h-3.5 text-slate-400" /> Estate & Fire Safety Statutory Clearance</h4>
                                    <p className="text-[11px] text-slate-500 font-medium">Mandatory verification for outdoor grounds or &gt;300 capacity main auditorium usage.</p>
                                </div>
                            </div>

                            {/* Rule 4 */}
                            <div className="bg-blue-50/40 border border-blue-100 rounded-[10px] p-4 flex gap-4 items-start">
                                <CheckSquare className="w-4 h-4 text-primary shrink-0 mt-0.5 cursor-pointer fill-blue-50" />
                                <div className="flex-1">
                                    <h4 className="text-[12px] font-bold text-slate-800 mb-0.5 flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5 text-slate-400" /> Overnight & Hackathon Accommodations Counter-Signature</h4>
                                    <p className="text-[11px] text-slate-500 font-medium">Requires Dean of Student Welfare (DSW) and Chief Proctor explicit dual countersignatures.</p>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* SECTION 4: Cryptography & Keys */}
                    <div className="bg-white border border-slate-200 rounded-[12px] shadow-sm overflow-hidden flex flex-col p-6 relative">
                        <div className="flex justify-between items-start mb-6 align-top">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-[8px] bg-[#0f172a] border border-slate-800 flex items-center justify-center shrink-0 shadow-sm text-white">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <div className="max-w-xl">
                                    <h2 className="text-[16px] font-bold text-slate-900 leading-tight mb-1">Cryptographic Certificate Authority & HSM Signing Tokens</h2>
                                    <p className="text-[12px] text-slate-500 font-medium">FIPS-compliant hardware tokens for e-transcripts, degree certificates, and National Academic Depository (NAD).</p>
                                </div>
                            </div>
                            <span className="bg-teal-100 text-teal-800 border border-teal-200 px-3 py-1.5 rounded-[6px] text-[10px] font-bold flex flex-col leading-tight shrink-0 items-center justify-center">
                                <CheckCircle2 className="w-3 h-3 mb-0.5" /> Active &<br />Synced
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="border border-slate-200 rounded-[10px] p-4 bg-slate-50/50">
                                <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Root Certificate</h4>
                                <h3 className="text-[15px] font-bold text-slate-900 leading-tight mb-0.5">GCU-ROOT-CA-2024 <span className="text-[12px] font-medium text-slate-500">(Ed25519)</span></h3>
                                <p className="text-[10px] font-mono text-slate-500 font-medium mb-3">Fingerprint: 8F:3A:C2:59:E1:92:48:DC:01:8A</p>
                                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-[10px] font-bold">Valid through Dec 2034</span>
                            </div>
                            <div className="border border-slate-200 rounded-[10px] p-4 bg-slate-50/50">
                                <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Hardware Module Status</h4>
                                <h3 className="text-[15px] font-bold text-slate-900 leading-tight mb-1 flex items-center gap-2">FIPS 140-2 Level 3 HSM <div className="w-2 h-2 bg-emerald-500 rounded-full"></div></h3>
                                <p className="text-[11px] text-slate-600 font-medium mb-2 leading-relaxed">Online & tamper-sensor verified. Average latency: 4ms.</p>
                                <p className="text-[10px] font-bold text-slate-500">Key Health: <span className="text-emerald-600">100% OK</span> <span className="mx-1">•</span> 48,192 signatures issued</p>
                            </div>
                        </div>

                        <div>
                            <label className="text-[11px] font-bold text-slate-700 block mb-2">DigiLocker & National Academic Depository (NAD) Webhook Endpoint</label>
                            <div className="flex gap-2">
                                <input type="text" readOnly value="https://nad.gov.in/api/v2/gcu-credentials" className="w-full bg-slate-50 border border-slate-200 rounded-[8px] px-4 py-2.5 text-[13px] font-mono text-slate-600 outline-none shadow-sm cursor-text" />
                                <button className="bg-slate-100 border border-slate-200 text-slate-600 font-bold text-[12px] px-4 py-2.5 rounded-[8px] hover:bg-slate-200 transition-colors shadow-sm">Ping Test</button>
                            </div>
                            <p className="text-[10px] text-slate-400 font-medium mt-1.5">Direct API bridge for instant student credential deposition.</p>
                        </div>
                    </div>


                    {/* Footer Notice */}
                    <div className="bg-slate-50 border border-slate-200 rounded-[12px] p-5 flex flex-col md:flex-row items-center gap-6 mt-6 shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-blue-600">
                            <Stamp className="w-5 h-5" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-[13px] font-bold text-slate-900 mb-1">Statutory Compliance & Non-Repudiation Notice</h3>
                            <p className="text-[11px] text-slate-500 font-medium leading-relaxed max-w-4xl">
                                In accordance with the <strong className="text-slate-700">Information Technology Act, 2000</strong> and <strong className="text-slate-700">UGC e-Governance Framework (2023)</strong>, all administrative alterations made to master calendar parameters, SAMARTH credentials, and approval routing are committed to an immutable cryptographically chained SHA-256 audit ledger with administrator identity counter-stamping.
                            </p>
                        </div>
                        <div className="text-[10px] font-bold text-slate-600 shrink-0 bg-white border border-slate-200 px-3 py-1.5 rounded-[6px] shadow-sm flex items-center gap-2">
                            <span className="uppercase text-slate-400 tracking-widest text-[9px]">Hash:</span> e7d9...4a01
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}
