import { useState } from 'react';
import {
    Users as UsersIcon,
    GraduationCap,
    ShieldCheck,
    Fingerprint,
    Search,
    ChevronDown,
    Download,
    MoreVertical,
    RefreshCw,
    PlusSquare,
    CheckCircle2,
    UserSquare2,
    ShieldAlert,
    Cloud,
    Wifi,
    Star,
    ChevronLeft,
    ChevronRight,
    FileText,
    ScanLine,
    LayoutGrid
} from 'lucide-react';

export default function Users() {
    const usersList = [
        {
            id: 1,
            name: 'Dr. Pranjal Barman', isVerified: true, avatar: 'PB', badge: '',
            uid: 'EMP-2016-894', email: 'pranjal.barman@gcu.ac.in',
            dept: 'Dept. of Computer Science & Eng.', subDept: 'School of Technology', roleExtra: 'Senior Board Member',
            role: 'Faculty Coordinator & HOD', roleColor: 'bg-blue-100 text-blue-800',
            privilege1: '• HSM Token Authorized', privilege2: 'Quota: 5,000 approvals/mo',
            status: 'Active Verified', statusColor: 'bg-emerald-100 text-emerald-800',
            duty: '24 Events Approved (AY 24-25)', progress: 80,
            ssoId: 'SAM-84920', ssoType: 'Biometric Registered', authTime: 'Today, 08:14 AM'
        },
        {
            id: 2,
            name: 'Prof. Debojit Sarma', isVerified: false, avatar: 'DS', badge: '',
            uid: 'EMP-2018-412', email: 'debojit.sarma@gcu.ac.in',
            dept: 'Dept. of EEE & Innovation Cell', subDept: 'Incubation Center Lead', roleExtra: 'Research Council Member',
            role: 'Faculty Coordinator', roleColor: 'bg-blue-100 text-blue-800',
            privilege1: 'Hackathon Lead Faculty', privilegeIcon: Star, privilege2: 'Venue Signatory Privilege',
            status: 'Active Verified', statusColor: 'bg-emerald-100 text-emerald-800',
            duty: '14 Major Tech Meets Lead', progress: 60,
            ssoId: 'SAM-39182', ssoType: 'Biometric Registered', authTime: 'Yesterday, 04:30 PM'
        },
        {
            id: 3,
            name: 'Ananya Sharma', isVerified: false, avatar: 'AS', badge: 'Sem IV',
            uid: 'GCU/2023/BTECH/042', email: 'ananya.s.cse23@gcu.ac.in',
            dept: 'Dept. of Computer Science', subDept: 'B.Tech Batch 2023-2027', roleExtra: 'Section Alpha',
            role: 'Student / Delegate', roleColor: 'bg-slate-100 text-slate-700',
            privilege1: 'Duty Leaves: 16 hrs Credited', privilege2: 'Gate QR: Active Dynamic Token',
            status: 'Active Verified', statusColor: 'bg-emerald-100 text-emerald-800',
            duty: '8 Events Registered (AY 24-25)', progress: 95, extraStat: '95% Gate Attendance',
            ssoId: 'STU-23042', ssoType: 'App Token Linked', authTime: 'Today, 09:20 AM'
        },
        {
            id: 4,
            name: 'Rahul Debnath', isVerified: false, avatar: 'RD', badge: 'Sem VI',
            uid: 'GCU/2022/BTECH/1102', email: 'rahul.d.me22@gcu.ac.in',
            dept: 'Dept. of Mechanical Eng.', subDept: 'B.Tech Batch 2022-2026', roleExtra: 'Robotics Society President',
            role: 'Student Volunteer & Lead', roleColor: 'bg-indigo-100 text-indigo-800',
            privilege1: 'Gate Marshall Rights Authorized', privilege2: 'Badge: Level 2 Dispatcher',
            status: 'Active Verified', statusColor: 'bg-emerald-100 text-emerald-800',
            duty: '12 Events Managed (AY 24-25)', progress: 100,
            ssoId: 'STU-221102', ssoType: 'App Token Linked (Android)', authTime: 'Today, 07:15 AM'
        },
        {
            id: 5,
            name: 'Dr. Rupali Dutta', isVerified: true, avatar: 'RD', badge: '',
            uid: 'EMP-2015-201', email: 'rupali.dutta@gcu.ac.in',
            dept: 'School of Pharmaceutical Sciences', subDept: 'Pharmacology Division', roleExtra: 'IRB Ethics Chairperson',
            role: 'Faculty HOD & Research Coordinator', roleColor: 'bg-blue-100 text-blue-800',
            privilege1: 'Conclave Signatory & Budget Lead', privilege2: 'Lab Safety Officer Authority',
            status: 'Active Verified', statusColor: 'bg-emerald-100 text-emerald-800',
            duty: '9 Symposia Approved (AY 24-25)', progress: 40,
            ssoId: 'SAM-00192', ssoType: 'Biometric Registered', authTime: 'Oct 24, 02:40 PM'
        },
        {
            id: 6,
            name: 'Bikramjit Choudhury', isVerified: false, avatar: 'BC', badge: '',
            uid: 'EMP-SEC-019', email: 'security.gateb@gcu.ac.in',
            dept: 'Campus Safety & Security', subDept: 'Physical Estate Division', roleExtra: 'Shift Beta (08:00 - 16:00)',
            role: 'Terminal Scanner Operator', roleColor: 'bg-slate-200 text-slate-800',
            privilege1: 'Assigned Gate: Central Aud. Gate B', privilege2: 'Device: Handheld POS #04',
            status: 'Online / Active Device', statusColor: 'bg-teal-100 text-teal-800', statusIcon: true,
            duty: '1,840 Scans processed this week', progress: 100, progressColor: 'bg-teal-600',
            ssoId: 'SEC-880', ssoType: 'Terminal Token: AF', authTime: 'Active Session 4h'
        }
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] mx-auto mt-2 space-y-6">

            {/* Top Breadcrumb Context */}
            <div className="flex justify-between items-center bg-transparent px-1 py-1 text-[10px] font-bold">
                <div className="flex items-center gap-2 text-slate-500 uppercase tracking-widest">
                    Campus Home &gt; Administration &gt; Campus Directory &gt; <span className="text-primary">User Management</span>
                </div>
            </div>

            {/* Main Header */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6">
                <div>
                    <h1 className="text-[32px] font-bold text-[#0f172a] tracking-tight leading-[1.1] mb-3">
                        Campus Users & Access Control<br />Directory
                    </h1>
                    <p className="text-[14px] text-slate-500 font-medium leading-relaxed max-w-3xl">
                        Institutional directory management for faculty coordinators, student participants, venue managers, and administrative authorities with SAMARTH SSO and role-based permissions.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 w-full xl:w-auto shrink-0">
                    <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors">
                        <RefreshCw className="w-4 h-4 text-slate-400" /> Bulk Import CSV (SAMARTH Sync)
                    </button>
                    <button className="bg-emerald-50 border border-emerald-100 text-emerald-700 hover:bg-emerald-100 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors">
                        <ShieldCheck className="w-4 h-4" /> Role Permissions Matrix
                    </button>
                    <button className="bg-[#0f172a] text-white hover:bg-slate-800 shadow-sm px-5 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors">
                        <UserSquare2 className="w-4 h-4" /> Add New Campus User
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Total Registered<br />Users</h3>
                        <div className="w-8 h-8 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500"><UsersIcon className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-[36px] font-bold text-slate-900 leading-none tracking-tight">8,420</span>
                    </div>
                    <div className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5 pt-1 border-t border-slate-100 mt-3 pt-3">
                        <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-bold uppercase tracking-widest">AY 2024-25</span> 99.2% synced
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Faculty &<br />Coordinators</h3>
                        <div className="w-8 h-8 rounded-md bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600"><GraduationCap className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-[36px] font-bold text-slate-900 leading-none tracking-tight">410</span>
                    </div>
                    <div className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5 pt-1 border-t border-slate-100 mt-3 pt-3">
                        <span className="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold">68 Sign Charters</span> Active HSM
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Enrolled<br />Students</h3>
                        <div className="w-8 h-8 rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500"><ScanLine className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-[36px] font-bold text-slate-900 leading-none tracking-tight">6,940</span>
                    </div>
                    <div className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5 pt-1 border-t border-slate-100 mt-3 pt-3">
                        <strong className="text-primary">5,810 Active QR</strong> Pass Holders
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Admin & Security<br />Staff</h3>
                        <div className="w-8 h-8 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600"><ShieldCheck className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-[36px] font-bold text-slate-900 leading-none tracking-tight">70</span>
                    </div>
                    <div className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5 pt-1 border-t border-slate-100 mt-3 pt-3">
                        <span className="bg-blue-50 text-blue-600 border border-blue-100 px-1.5 py-0.5 rounded font-bold">24 Gate Operators</span> Active Shifts
                    </div>
                </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="bg-white p-4 rounded-[16px] border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="text" placeholder="Search users by name, roll number, employee code, university email, or department..." className="w-full bg-slate-50 md:bg-white md:border md:border-slate-200 rounded-[12px] pl-11 pr-4 py-3 text-[13px] font-medium text-slate-900 outline-none focus:border-primary shadow-inner md:shadow-sm" />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1">
                        <span className="bg-slate-100 text-slate-400 text-[10px] px-1.5 py-0.5 rounded font-bold mono">⌘ K</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 px-1">Role Privilege</label>
                        <button className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-[8px] text-[12px] font-bold text-slate-700 flex items-center justify-between hover:bg-slate-100">
                            All Roles <ChevronDown className="w-4 h-4 text-slate-400" />
                        </button>
                    </div>
                    <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 px-1">Academic School / Unit</label>
                        <button className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-[8px] text-[12px] font-medium text-slate-600 flex items-center justify-between hover:bg-slate-100">
                            All Departments <ChevronDown className="w-4 h-4 text-slate-400" />
                        </button>
                    </div>
                    <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 px-1">SSO Status</label>
                        <button className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-[8px] text-[12px] font-medium text-slate-600 flex items-center justify-between hover:bg-slate-100">
                            All Statuses <ChevronDown className="w-4 h-4 text-slate-400" />
                        </button>
                    </div>
                    <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 px-1">Batch / Cohort</label>
                        <button className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-[8px] text-[12px] font-medium text-slate-600 flex items-center justify-between hover:bg-slate-100">
                            All Cohorts <ChevronDown className="w-4 h-4 text-slate-400" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center pt-3 border-t border-slate-100 mt-1 gap-4">
                    <div className="text-[11px] font-medium text-slate-500">
                        Displaying <strong className="text-slate-800">6</strong> of <strong className="text-slate-800">8,420</strong> campus accounts <span className="mx-2">•</span>
                        Live SAMARTH Node: <span className="text-primary font-bold">Assam Higher Ed Cluster-02</span>
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto">
                        <button className="text-[12px] font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-[6px] shadow-sm">
                            <RefreshCw className="w-3.5 h-3.5" /> Reset Filters
                        </button>
                        <button className="text-[12px] font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-[6px] shadow-sm flex items-center gap-1.5">
                            <Download className="w-3.5 h-3.5" /> Export Ledger
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Users Table */}
            <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm overflow-hidden flex flex-col">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px]">
                        <thead className="bg-slate-50 border-b border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            <tr>
                                <th className="px-6 py-4">User Details & Institutional ID</th>
                                <th className="px-4 py-4">Department / School</th>
                                <th className="px-4 py-4">Role & Privileges</th>
                                <th className="px-4 py-4">Event Duty & Auth Status</th>
                                <th className="px-6 py-4">SAMARTH SSO Biometric</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {usersList.map((usr, idx) => (
                                <tr key={usr.id} className="hover:bg-slate-50/50 transition-colors">

                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            {/* Mock avatars */}
                                            <div className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center font-bold text-white text-[12px] shadow-inner ${idx === 0 || idx === 1 ? 'bg-[url(https://i.pravatar.cc/100?img=11)] bg-cover' : idx === 2 ? 'bg-[url(https://i.pravatar.cc/100?img=5)] bg-cover' : idx === 3 ? 'bg-[url(https://i.pravatar.cc/100?img=12)] bg-cover' : idx === 4 ? 'bg-[url(https://i.pravatar.cc/100?img=9)] bg-cover' : 'bg-slate-800'}`}>
                                                {!['https://i.pravatar.cc'].some(x => true) && usr.avatar}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-1.5 mb-0.5">
                                                    <span className="font-bold text-[14px] text-slate-900">{usr.name}</span>
                                                    {usr.isVerified && <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />}
                                                    {usr.badge && <span className="bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-[9px] font-bold text-slate-600 block">{usr.badge}</span>}
                                                </div>
                                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">{usr.uid}</div>
                                                <div className="text-[11px] text-slate-500">{usr.email}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-4 py-4 align-top pt-5">
                                        <div className="text-[12px] font-bold text-slate-800 leading-tight mb-1">{usr.dept}</div>
                                        <div className="text-[11px] font-medium text-slate-600 leading-tight mb-1">{usr.subDept}</div>
                                        <div className="text-[11px] text-slate-500">{usr.roleExtra}</div>
                                    </td>

                                    <td className="px-4 py-4 align-top pt-5">
                                        <span className={`inline-block px-2.5 py-1 rounded-[6px] text-[10px] font-bold mb-2 ${usr.roleColor}`}>
                                            {usr.role}
                                        </span>
                                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600 leading-tight mb-1">
                                            {usr.privilegeIcon ? <usr.privilegeIcon className="w-3 h-3 text-slate-400" /> : <div className="w-1.5 h-1.5 bg-slate-300 rounded-full shrink-0"></div>}
                                            {usr.privilege1}
                                        </div>
                                        <div className="text-[11px] text-slate-500 font-medium pl-3">{usr.privilege2}</div>
                                    </td>

                                    <td className="px-4 py-4 align-top pt-5">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1.5 ${usr.statusColor}`}>
                                                {usr.statusIcon && <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></div>}
                                                {usr.status}
                                            </span>
                                            {usr.extraStat && <span className="text-[10px] font-bold text-slate-600 leading-tight">{usr.extraStat}</span>}
                                        </div>
                                        <div className="text-[11px] font-medium text-slate-600 leading-tight mb-1">{usr.duty}</div>

                                        <div className="w-[120px] bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1.5">
                                            <div className={`h-full rounded-full ${usr.progressColor || 'bg-[#0f172a]'}`} style={{ width: `${usr.progress}%` }}></div>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 align-top pt-5">
                                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 mb-1">
                                            <Cloud className="w-3.5 h-3.5 text-teal-600" /> SSO ID: {usr.ssoId}
                                        </div>
                                        <div className="text-[10px] font-medium text-slate-500 leading-tight mb-1">{usr.ssoType}</div>
                                        <div className="text-[9px] text-slate-400 mt-1 uppercase tracking-widest">Last Auth: {usr.authTime}</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                        <span className="text-[11px] text-slate-500 font-medium">Rows per ledger page:</span>
                        <select className="bg-white border border-slate-200 rounded-[6px] px-2 py-1 text-[11px] font-bold text-slate-700 outline-none shadow-sm cursor-pointer">
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                        <span className="text-[11px] text-slate-500 font-medium ml-2">Showing 1 to 6 of 8,420 entries</span>
                    </div>
                    <div className="flex gap-1">
                        <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-white border border-slate-200 rounded-[6px] shadow-sm"><ChevronLeft className="w-4 h-4" /></button>
                        <button className="w-8 h-8 flex items-center justify-center text-white bg-[#0f172a] font-bold text-[12px] rounded-[6px] shadow-sm">1</button>
                        <button className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-100 border border-slate-200 bg-white font-bold text-[12px] rounded-[6px] shadow-sm">2</button>
                        <button className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-100 border border-slate-200 bg-white font-bold text-[12px] rounded-[6px] shadow-sm">3</button>
                        <span className="w-8 h-8 flex items-center justify-center text-slate-400 text-[12px]">...</span>
                        <button className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-100 border border-slate-200 bg-white font-bold text-[12px] rounded-[6px] shadow-sm">337</button>
                        <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-white border border-slate-200 rounded-[6px] shadow-sm"><ChevronRight className="w-4 h-4" /></button>
                    </div>
                </div>
            </div>

            {/* Bottom Information Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm p-6 overflow-hidden relative">
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <h3 className="text-[14px] font-bold text-slate-900 flex items-center gap-2"><div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div> SAMARTH SSO Integration</h3>
                        <span className="bg-emerald-300/30 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold">Healthy</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-5 relative z-10">
                        Synchronized 14 mins ago from National Nodal Server (Govt of India Higher Education Cluster).
                    </p>
                    <div className="space-y-3 relative z-10 max-w-[280px]">
                        <div className="flex justify-between text-[11px]">
                            <span className="text-slate-500">Last Scheduled Sync Batch</span>
                            <span className="font-mono font-bold text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded">SYN-2025-0218-09</span>
                        </div>
                        <div className="flex justify-between text-[11px]">
                            <span className="text-slate-500">Identity Payload Hash</span>
                            <span className="font-mono text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-1">SHA256: d9f82...8c01</span>
                        </div>
                        <div className="flex justify-between text-[11px]">
                            <span className="text-slate-500">Auto-Reconciliation Frequency</span>
                            <span className="font-bold text-slate-800">Every 30 mins</span>
                        </div>
                    </div>
                    {/* background graphic */}
                    <Cloud className="absolute -right-6 -bottom-6 w-32 h-32 text-slate-50/50" />
                </div>

                <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm p-6 overflow-hidden relative">
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <h3 className="text-[14px] font-bold text-slate-900 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-blue-600" /> RBAC Compliance & Bylaws</h3>
                        <span className="bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded text-[10px] font-bold">Audited</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-8 relative z-10">
                        Role-Based Access Control (RBAC) Governance: Privileged administrative overrides are logged under GCU IT Security Bylaws 2024.
                    </p>
                    <div className="flex justify-between items-end relative z-10 border-t border-slate-100 pt-3 mt-auto">
                        <div>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">HSM Security Level</span>
                            <span className="text-[14px] font-bold text-slate-900">FIPS 140-2 Level 3</span>
                        </div>
                        <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Audit Ledger (IT Cell)</span>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-[14px] font-bold text-slate-900 flex items-center gap-2"><Fingerprint className="w-5 h-5 text-slate-400" /> Active Terminal<br />Devices</h3>
                        <span className="text-[10px] font-bold text-slate-500 text-right">24 Gate Scanners<br />Online</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-5 flex-1">
                        Real-time biometric validation and NFC credentialing active for Campus Conclave '25 registration gates.
                    </p>
                    <div className="flex gap-2">
                        <div className="flex-1 bg-slate-50 border border-slate-200 rounded-[8px] p-3 shadow-sm">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Gate B Gateways</span>
                            <span className="text-[12px] font-bold text-slate-900">Auditorium (8/8)</span>
                        </div>
                        <div className="flex-1 bg-white border border-slate-200 rounded-[8px] p-3 shadow-sm">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Gate D Fast-Track</span>
                            <span className="text-[12px] font-bold text-slate-900">Sports Complex (4/4)</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
