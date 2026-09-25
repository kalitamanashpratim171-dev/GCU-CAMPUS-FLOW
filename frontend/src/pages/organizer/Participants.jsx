import { useState } from 'react';
import {
    Users,
    Search,
    Filter,
    Download,
    Mail,
    MoreVertical,
    CheckCircle2,
    XCircle,
    Clock,
    ShieldCheck,
    ChevronDown
} from 'lucide-react';

export default function Participants() {
    const [activeTab, setActiveTab] = useState('registered');

    const participants = [
        { id: 'GCU/23/042', name: 'Ananya Sharma', dept: 'CSE (Sem 6)', status: 'checked-in', time: '09:42 AM', type: 'Primary' },
        { id: 'GCU/23/112', name: 'Rahul Debnath', dept: 'Mechanical', status: 'registered', time: '-', type: 'Primary' },
        { id: 'GCU/24/089', name: 'Priyashree Das', dept: 'EE (Sem 4)', status: 'checked-in', time: '09:40 AM', type: 'Waitlist -> Active' },
        { id: 'GCU/PG/014', name: 'Kushal Kalita', dept: 'M.Tech AI', status: 'cancelled', time: '-', type: 'VIP' },
        { id: 'GCU/22/441', name: 'Deepak Singh', dept: 'Civil Engg', status: 'registered', time: '-', type: 'Primary' },
        { id: 'GCU/23/992', name: 'Megha Baruah', dept: 'CSE (Sem 6)', status: 'checked-in', time: '09:35 AM', type: 'Primary' },
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-12 w-full max-w-[1440px] mx-auto">

            {/* Top Breadcrumb Context */}
            <div className="flex justify-between items-center bg-transparent px-1 py-1 text-[10px] font-bold mb-4">
                <div className="flex items-center gap-2 text-slate-500 uppercase tracking-widest flex-wrap">
                    GCU Campus &gt; Organizer Portal &gt; Event Operations &gt; <span className="text-primary">Participant Roster</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-6">
                <div>
                    <h1 className="text-[28px] md:text-[32px] font-bold text-slate-900 tracking-tight leading-tight flex items-center gap-3">
                        Participant Roster Management
                    </h1>
                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed mt-2 max-w-2xl">
                        Manage registrations, oversee waitlists, verify gate check-ins, and dispatch bulk communication to approved attendees.
                    </p>
                </div>
                <div className="flex gap-3 shrink-0">
                    <button className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-4 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-slate-50 transition-colors shadow-sm">
                        <Mail className="w-4 h-4" /> Message All
                    </button>
                    <button className="flex items-center gap-2 bg-[#0f172a] text-white px-5 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-slate-800 transition-colors shadow-sm">
                        <Download className="w-4 h-4" /> Export Roster (.CSV)
                    </button>
                </div>
            </div>

            {/* KPI Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Approved</h3>
                        <Users className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-[24px] font-bold text-slate-900">1,248</p>
                    <p className="text-[11px] font-medium text-slate-500 mt-1"><span className="text-emerald-600 font-bold">+12</span> in last hour</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Checked-In</h3>
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-[24px] font-bold text-slate-900">420</p>
                    <p className="text-[11px] font-medium text-slate-500 mt-1">33.6% Attendance Rate</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Waitlisted</h3>
                        <Clock className="w-4 h-4 text-amber-500" />
                    </div>
                    <p className="text-[24px] font-bold text-slate-900">56</p>
                    <p className="text-[11px] font-medium text-slate-500 mt-1">Pending venue overflow</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Cancellations</h3>
                        <XCircle className="w-4 h-4 text-red-500" />
                    </div>
                    <p className="text-[24px] font-bold text-slate-900">14</p>
                    <p className="text-[11px] font-medium text-slate-500 mt-1">Seats returned to pool</p>
                </div>
            </div>

            {/* Main Table Container */}
            <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm overflow-hidden flex flex-col">

                <div className="p-5 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto hide-scrollbar">
                        <button onClick={() => setActiveTab('registered')} className={`text-[13px] font-bold pb-2 border-b-2 whitespace-nowrap transition-colors ${activeTab === 'registered' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>All Registered (1,248)</button>
                        <button onClick={() => setActiveTab('checked-in')} className={`text-[13px] font-bold pb-2 border-b-2 whitespace-nowrap transition-colors ${activeTab === 'checked-in' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>Checked-In (420)</button>
                        <button onClick={() => setActiveTab('waitlist')} className={`text-[13px] font-bold pb-2 border-b-2 whitespace-nowrap transition-colors ${activeTab === 'waitlist' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>Waitlist (56)</button>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input type="text" placeholder="Search by name, ID, or dept..." className="w-full bg-slate-50 border border-slate-200 rounded-[8px] pl-9 pr-4 py-2 text-[12px] font-medium text-slate-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm" />
                        </div>
                        <button className="bg-white border border-slate-200 text-slate-600 px-3 py-2 rounded-[8px] hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2 text-[12px] font-bold shrink-0">
                            <Filter className="w-4 h-4" /> Filters
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap w-[40px]">
                                    <input type="checkbox" className="rounded border-slate-300 w-3.5 h-3.5" />
                                </th>
                                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">Participant Profile</th>
                                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">Department & Reg Type</th>
                                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">Status</th>
                                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">Check-In Time</th>
                                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {participants.map((p, idx) => (
                                <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors">
                                    <td className="py-4 px-6">
                                        <input type="checkbox" className="rounded border-slate-300 w-3.5 h-3.5" />
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-[8px] bg-primary/10 text-primary flex items-center justify-center font-bold text-[12px] border border-primary/20 shrink-0">
                                                {p.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <div className="text-[13px] font-bold text-slate-900 leading-tight block">{p.name}</div>
                                                <div className="text-[11px] font-bold text-slate-400 font-mono mt-0.5">{p.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="text-[12px] font-semibold text-slate-700 leading-tight">{p.dept}</div>
                                        <div className="text-[10px] font-bold text-slate-400 mt-0.5">{p.type}</div>
                                    </td>
                                    <td className="py-4 px-6">
                                        {p.status === 'checked-in' && (
                                            <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-1 rounded-[6px] text-[10px] font-bold tracking-widest bg-opacity-50 inline-flex items-center gap-1.5 whitespace-nowrap">
                                                <ShieldCheck className="w-3.5 h-3.5" /> CHECKED IN
                                            </span>
                                        )}
                                        {p.status === 'registered' && (
                                            <span className="bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-1 rounded-[6px] text-[10px] font-bold tracking-widest uppercase inline-flex items-center gap-1.5 whitespace-nowrap">
                                                <CheckCircle2 className="w-3.5 h-3.5" /> REGISTERED
                                            </span>
                                        )}
                                        {p.status === 'cancelled' && (
                                            <span className="bg-slate-100 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-[6px] text-[10px] font-bold tracking-widest uppercase inline-flex items-center gap-1.5 whitespace-nowrap">
                                                <XCircle className="w-3.5 h-3.5" /> CANCELLED
                                            </span>
                                        )}
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="text-[12px] font-bold text-slate-800">{p.time}</div>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <button className="text-slate-400 hover:text-primary transition-colors p-1.5 rounded-md hover:bg-slate-100">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center text-[12px] font-medium text-slate-500">
                    <span>Showing 6 of 1,248 participants</span>
                    <div className="flex gap-1">
                        <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-[6px] hover:bg-slate-50 disabled:opacity-50 text-[11px] font-bold">Prev</button>
                        <button className="px-3 py-1.5 bg-primary text-white border border-primary rounded-[6px] text-[11px] font-bold">1</button>
                        <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-[6px] hover:bg-slate-50 text-[11px] font-bold">2</button>
                        <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-[6px] hover:bg-slate-50 text-[11px] font-bold">3</button>
                        <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-[6px] hover:bg-slate-50 text-[11px] font-bold">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
