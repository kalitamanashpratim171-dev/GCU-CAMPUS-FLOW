import { useState } from 'react';
import {
    ShieldCheck,
    User,
    PenTool,
    Camera,
    UploadCloud,
    Save,
    FileText,
    Cpu,
    Bell,
    Link2,
    CheckCircle2,
    ShieldAlert,
    Info,
    ChevronRight,
    ChevronDown
} from 'lucide-react';

export default function Settings() {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] mx-auto">

            {/* Header */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-8 mt-2">
                <div>
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-[10px] tracking-widest uppercase mb-3">
                        GCU Campus &gt; Faculty Coordinator Portal &gt; Account & Preferences &gt; <span className="text-primary">Profile & Department Settings</span>
                    </div>
                    <h1 className="text-[28px] font-bold text-slate-900 tracking-tight leading-tight">Organizer Profile & Department<br />Settings</h1>
                    <p className="text-slate-500 mt-2 text-[13px] max-w-2xl leading-relaxed">
                        Manage faculty credentials, official digital signature delegation, automated UGC compliance alerts, and terminal scanner hardware bindings.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 w-full xl:w-auto">
                    <button className="flex-1 xl:flex-none items-center justify-center gap-2 bg-white text-slate-700 border border-slate-300 px-4 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-slate-50 transition-colors shadow-sm flex">
                        <FileText className="w-4 h-4" /> Export Dossier (.PDF)
                    </button>
                    <button className="flex-1 xl:flex-none items-center justify-center gap-2 bg-white text-slate-700 border border-slate-300 px-4 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-slate-50 transition-colors shadow-sm flex">
                        Discard Changes
                    </button>
                    <button className="flex-1 xl:flex-none items-center justify-center gap-2 bg-primary text-white border border-primary px-6 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-primary-container transition-colors shadow-sm flex">
                        <Save className="w-4 h-4" /> Save Changes
                    </button>
                </div>
            </div>

            {/* Security Alert Bar */}
            <div className="bg-white border border-slate-200 rounded-[12px] p-5 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
                <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-[10px] bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-[14px] font-bold text-slate-900 mb-1 flex items-center gap-3">
                            Academic Year 2024-25 Coordinator Charter Active
                            <span className="bg-blue-50 text-blue-700 text-[9px] px-2 py-0.5 rounded tracking-widest uppercase border border-blue-100">UGC / NAAC Cycle 3</span>
                        </h3>
                        <p className="text-[12px] text-slate-500 font-medium">
                            All duty leaves, certificates, and event clearance logs signed under this profile carry cryptographic Ed25519 HSM timestamping.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 px-4 py-3 rounded-[8px] flex items-center gap-4 shrink-0">
                    <div className="text-right">
                        <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-tight">HSM Token Valid Until</span>
                        <span className="block text-[12px] font-bold text-slate-900">31 Dec 2025</span>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 font-bold text-[10px] uppercase tracking-widest px-2 py-1 rounded border border-emerald-200 flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Operational</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

                {/* LEFT SIDEBAR NAVIGATION */}
                <div className="lg:col-span-1 space-y-6">

                    <div className="bg-white border border-slate-200 rounded-[12px] p-3 shadow-sm">
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-3 mt-1">Configuration Sections</h4>
                        <nav className="space-y-1">
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`w-full flex items-center justify-between px-4 py-3 text-[13px] font-bold rounded-[8px] transition-colors ${activeTab === 'profile' ? 'bg-primary text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
                            >
                                <span className="flex items-center gap-3"><User className="w-4 h-4" /> Faculty Credentials & Bio</span>
                                {activeTab === 'profile' && <ChevronRight className="w-4 h-4" />}
                            </button>
                            <button
                                onClick={() => setActiveTab('delegation')}
                                className={`w-full flex items-center justify-between px-4 py-3 text-[13px] font-bold rounded-[8px] transition-colors ${activeTab === 'delegation' ? 'bg-primary text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
                            >
                                <span className="flex items-center gap-3"><PenTool className="w-4 h-4" /> Delegation & Sign-Off</span>
                                {activeTab === 'delegation' && <ChevronRight className="w-4 h-4" />}
                            </button>
                            <button
                                onClick={() => setActiveTab('scanners')}
                                className={`w-full flex items-center justify-between px-4 py-3 text-[13px] font-bold rounded-[8px] transition-colors ${activeTab === 'scanners' ? 'bg-primary text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
                            >
                                <span className="flex items-center gap-3"><Cpu className="w-4 h-4" /> Terminal & Gate Scanners</span>
                                {activeTab === 'scanners' && <ChevronRight className="w-4 h-4" />}
                            </button>
                            <button
                                onClick={() => setActiveTab('notifications')}
                                className={`w-full flex items-center justify-between px-4 py-3 text-[13px] font-bold rounded-[8px] transition-colors ${activeTab === 'notifications' ? 'bg-primary text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
                            >
                                <span className="flex items-center gap-3"><Bell className="w-4 h-4" /> Notification & UGC Sync</span>
                                {activeTab === 'notifications' && <ChevronRight className="w-4 h-4" />}
                            </button>
                            <button
                                onClick={() => setActiveTab('erp')}
                                className={`w-full flex items-center justify-between px-4 py-3 text-[13px] font-bold rounded-[8px] transition-colors ${activeTab === 'erp' ? 'bg-primary text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
                            >
                                <span className="flex items-center gap-3"><Link2 className="w-4 h-4" /> Connected ERP Systems</span>
                                {activeTab === 'erp' && <ChevronRight className="w-4 h-4" />}
                            </button>
                        </nav>
                    </div>

                    {/* Quota Box */}
                    <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Signing Quota</span>
                            <span className="text-[10px] font-bold text-emerald-600">Healthy</span>
                        </div>
                        <div className="flex items-end gap-1 mb-3">
                            <p className="text-[28px] font-bold text-slate-900 leading-none">1,842</p>
                            <p className="text-[12px] text-slate-500 font-medium mb-1">of 5,000 / mo</p>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5 mb-3 overflow-hidden">
                            <div className="bg-primary h-full rounded-full w-[36%]"></div>
                        </div>
                        <p className="text-[10px] font-medium text-slate-400">Resets automatically on 1st of next month.</p>
                    </div>

                </div>


                {/* RIGHT MAIN CONTENT (Profile Tab Active) */}
                <div className="lg:col-span-3 space-y-6">

                    {activeTab === 'profile' && (
                        <>
                            {/* Profile Header Card */}
                            <div className="bg-white border border-slate-200 rounded-[16px] p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start gap-6">
                                <div className="flex gap-5 items-start">
                                    <div className="relative">
                                        <div className="w-20 h-20 bg-[#0f172a] rounded-[16px] flex items-center justify-center text-white text-[28px] font-bold shadow-md">PB</div>
                                        <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white border border-slate-200 shadow-sm rounded-full flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                                            <Camera className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div>
                                        <h2 className="text-[20px] font-bold text-slate-900 mb-1 flex items-center gap-2">
                                            Dr. Pranjal Barman
                                            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> University Directory Verified</span>
                                        </h2>
                                        <p className="text-[14px] font-bold text-slate-700 mb-0.5">Associate Professor & Head of Department (HOD)</p>
                                        <p className="text-[13px] text-slate-500 font-medium">Department of Computer Science & Engineering | School of Technology</p>
                                    </div>
                                </div>
                                <div className="w-full sm:w-auto flex flex-col items-end">
                                    <button className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-[8px] text-[12px] font-bold hover:bg-slate-100 transition-colors shadow-sm flex items-center gap-2 mb-2 w-full sm:w-auto justify-center">
                                        <UploadCloud className="w-4 h-4" /> Update Official Photo
                                    </button>
                                    <span className="text-[10px] text-slate-400 font-medium w-full sm:text-right">Max size 2MB (JPG/PNG)</span>
                                </div>
                            </div>

                            {/* Meta 4 Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-primary/5 p-4 rounded-[12px] border border-primary/10">
                                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Faculty ID</span>
                                    <span className="text-[14px] font-bold text-primary block mb-0.5">GCU/FAC/CSE-0182</span>
                                    <span className="text-[11px] text-slate-500 font-medium">Biometric Linked</span>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-[12px] border border-slate-100">
                                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Employee Code</span>
                                    <span className="text-[14px] font-bold text-slate-900 block mb-0.5">EMP-2016-894</span>
                                    <span className="text-[11px] text-slate-500 font-medium">Service Class A</span>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-[12px] border border-slate-100">
                                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Academic Tenure</span>
                                    <span className="text-[14px] font-bold text-slate-900 block mb-0.5">8 Years, 4 Mos</span>
                                    <span className="text-[11px] text-slate-500 font-medium">Permanent Tenure</span>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-[12px] border border-slate-100">
                                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Assigned Campus</span>
                                    <span className="text-[14px] font-bold text-slate-900 block mb-0.5">Azara Campus</span>
                                    <span className="text-[11px] text-slate-500 font-medium">Block B, Room 304</span>
                                </div>
                            </div>

                            {/* Official Contact & Directory Metadata */}
                            <div className="bg-white border border-slate-200 rounded-[16px] p-6 shadow-sm">
                                <h3 className="text-[15px] font-bold text-slate-900 mb-6 font-serif">Official Contact & Directory Metadata</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="text-[11px] font-bold text-slate-700 block mb-2">Official University Email</label>
                                        <input type="text" defaultValue="pranjal.barman@gcu.ac.in" disabled className="w-full border border-slate-200 rounded-[8px] px-3 py-2.5 text-[14px] font-medium text-slate-500 bg-slate-50/50 cursor-not-allowed shadow-sm" />
                                        <p className="text-[10px] text-slate-500 font-medium mt-1.5">Synchronized via SAMARTH Single Sign-On (Read-only)</p>
                                    </div>
                                    <div>
                                        <label className="text-[11px] font-bold text-slate-700 block mb-2">Alternative Notification Email</label>
                                        <input type="text" defaultValue="p.barman.cse@gmail.com" className="w-full border border-slate-200 rounded-[8px] px-3 py-2.5 text-[14px] font-medium text-slate-900 focus:border-primary outline-none shadow-sm" />
                                        <p className="text-[10px] text-slate-500 font-medium mt-1.5">Used for secondary system outage alerts</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <label className="text-[11px] font-bold text-slate-700 block mb-2">Office Contact / Mobile Number</label>
                                        <div className="flex">
                                            <span className="bg-slate-50 border border-slate-200 border-r-0 rounded-l-[8px] px-4 py-2.5 text-[14px] font-medium text-slate-500">+91</span>
                                            <input type="text" defaultValue="98640 12845" className="w-full border border-slate-200 rounded-r-[8px] px-3 py-2.5 text-[14px] font-medium text-slate-900 focus:border-primary outline-none shadow-sm" />
                                        </div>
                                        <p className="text-[10px] text-slate-500 font-medium mt-1.5">Receives SMS OTPs for high-volume pass overrides</p>
                                    </div>
                                    <div>
                                        <label className="text-[11px] font-bold text-slate-700 block mb-2">Campus Intercom Extension</label>
                                        <input type="text" defaultValue="Ext: 4402" className="w-full border border-slate-200 rounded-[8px] px-3 py-2.5 text-[14px] font-medium text-slate-900 focus:border-primary outline-none shadow-sm" />
                                        <p className="text-[10px] text-slate-500 font-medium mt-1.5">Main Switchboard Routing: 0361-2843400 / 4402</p>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[11px] font-bold text-slate-700 block mb-2">Faculty Profile Bio & Research Focus (Printed on Public Symposium Agendas)</label>
                                    <textarea rows="4" className="w-full border border-slate-200 rounded-[8px] p-3 text-[13px] font-medium text-slate-700 focus:border-primary outline-none shadow-sm leading-relaxed resize-y" defaultValue="Dr. Pranjal Barman is Associate Professor & HOD in Computer Science & Engineering at Girijananda Chowdhury University. Specializes in Distributed Systems, Embedded IoT Sensors, and Blockchain Security Protocols. Serving as Faculty Lead for GCU Hackathon Series and NAAC Criterion 5 Coordinator."></textarea>
                                </div>
                            </div>

                            {/* Disclaimer Box */}
                            <div className="bg-slate-50 border border-slate-200 rounded-[12px] p-6 flex gap-4 items-start relative overflow-hidden">
                                <ShieldAlert className="w-5 h-5 text-slate-400 shrink-0" />
                                <div>
                                    <h4 className="text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-1.5 flex items-center gap-2">GIRIJANANDA CHOWDHURY UNIVERSITY IT GOVERNANCE & SECURITY COMPLIANCE NOTICE</h4>
                                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                        Modifications to academic signing authorities, deputy delegation limits, and departmental credentials require explicit cryptographic re-validation by the Dean of Academic Affairs. All configuration commits are permanently journaled to the immutable <strong className="text-slate-700">GCU Campus audit ledger under Institutional Policy 2024-B.</strong>
                                    </p>
                                </div>
                                {/* subtle background pattern */}
                                <div className="absolute right-0 top-0 bottom-0 w-32 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-[0.03] pointer-events-none"></div>
                            </div>

                        </>
                    )}

                    {/* If other tabs were clicked, show placeholder */}
                    {activeTab !== 'profile' && (
                        <div className="bg-white border border-slate-200 rounded-[16px] p-12 shadow-sm flex flex-col items-center justify-center text-center h-[500px]">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                                <Info className="w-8 h-8 text-slate-300" />
                            </div>
                            <h3 className="text-[18px] font-bold text-slate-900 mb-2">Configuration Section Locked</h3>
                            <p className="text-[13px] text-slate-500 max-w-sm">This module ({activeTab}) requires Level-2 administrative clearance. Please contact ITS for elevation.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
