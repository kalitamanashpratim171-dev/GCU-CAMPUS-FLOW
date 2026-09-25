import { useState } from 'react';
import {
    Maximize2,
    Download,
    RefreshCw,
    Camera,
    CheckCircle2,
    AlertTriangle,
    Wifi,
    Clock,
    ShieldCheck,
    ShieldAlert,
    Tv,
    Activity,
    XOctagon,
    Check,
    UserPlus,
    Database,
    Radio,
    Zap,
    Ticket,
    MapPin,
    Utensils
} from 'lucide-react';

export default function QrAttendance() {
    const [isFullscreen, setIsFullscreen] = useState(false);

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] mx-auto">

            {/* Header */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-8 mt-2">
                <div>
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-[10px] tracking-widest uppercase mb-2">
                        GCU Campus &gt; Faculty Coordinator &gt; Verification & Records &gt; <span className="text-primary">Gate QR Attendance</span>
                    </div>
                    <h1 className="text-[28px] font-bold text-slate-900 tracking-tight leading-tight">Live Gate QR Attendance & Terminal Verification</h1>
                    <div className="flex items-center gap-3 mt-2">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-[6px] text-[11px] font-bold flex items-center gap-1.5"><Radio className="w-3.5 h-3.5" /> Live Session Active</span>
                        <span className="text-slate-500 text-[13px] font-medium bg-slate-100 px-3 py-1 rounded-[6px]">TechVenture 2026 • Day 1 of 2</span>
                    </div>
                    <p className="text-slate-500 mt-2 text-[13px] max-w-3xl leading-relaxed">
                        Real-time delegate credential verification, synchronized biometric terminals, and university ERP academic duty leave validation.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 w-full xl:w-auto">
                    <button className="flex-1 xl:flex-none items-center justify-center gap-2 bg-white text-slate-700 border border-slate-300 px-4 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-slate-50 transition-colors shadow-sm flex">
                        <RefreshCw className="w-4 h-4" /> Switch Event
                    </button>
                    <button className="flex-1 xl:flex-none items-center justify-center gap-2 bg-white text-slate-700 border border-slate-300 px-4 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-slate-50 transition-colors shadow-sm flex">
                        <Download className="w-4 h-4" /> Export Ingress CSV
                    </button>
                    <button className="flex-1 xl:flex-none items-center justify-center gap-2 bg-primary text-white border border-primary px-5 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-primary-container transition-colors shadow-sm flex">
                        <Maximize2 className="w-4 h-4" /> Fullscreen Kiosk Mode
                    </button>
                </div>
            </div>

            {/* Top Value Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Card 1 */}
                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between h-32">
                    <div className="flex justify-between items-start">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Checked-in<br />Present</h3>
                        <div className="w-7 h-7 rounded-sm bg-primary/10 flex items-center justify-center text-primary"><UserPlus className="w-4 h-4" /></div>
                    </div>
                    <div>
                        <p className="text-[36px] font-bold text-slate-900 leading-none mb-2">142 <span className="text-[16px] text-slate-400 font-medium">/ 340</span></p>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-[11px] font-bold text-emerald-600">41.8%</p>
                                <p className="text-[10px] font-medium text-slate-400 leading-tight">Validated</p>
                            </div>
                            <p className="text-[10px] font-medium text-slate-400 leading-tight text-right">198 Pending Gate<br />Ingress</p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between h-32">
                    <div className="flex justify-between items-start">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Ingress Velocity</h3>
                        <div className="w-7 h-7 rounded-sm bg-emerald-50 flex items-center justify-center text-emerald-600"><Activity className="w-4 h-4" /></div>
                    </div>
                    <div>
                        <p className="text-[36px] font-bold text-slate-900 leading-none mb-2 mt-1 flex items-baseline gap-1">24 <span className="text-[14px] text-slate-500 font-medium">scans / min</span></p>
                        <p className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 mb-1.5"><Activity className="w-3 h-3" /> Peak 38/min at 09:20 AM</p>
                        <div className="flex justify-between items-end">
                            <p className="text-[10px] font-medium text-slate-400 leading-tight">Avg Sync<br />Latency</p>
                            <p className="text-[11px] font-bold text-primary leading-tight text-right">120 ms (Zero<br />Queue)</p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between h-32">
                    <div className="flex justify-between items-start">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Active Terminals</h3>
                        <div className="w-7 h-7 rounded-sm bg-blue-50 flex items-center justify-center text-blue-600"><Tv className="w-4 h-4" /></div>
                    </div>
                    <div>
                        <p className="text-[36px] font-bold text-slate-900 leading-none mb-2 mt-1">3 <span className="text-[14px] text-slate-500 font-medium tracking-tight">Online Devices</span></p>
                        <div className="flex gap-2 mb-1.5">
                            <span className="text-[9px] font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded flex items-center gap-1"><div className="w-1 h-1 rounded-full bg-emerald-500"></div>Gate B (Host)</span>
                            <span className="text-[9px] font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded flex items-center gap-1"><div className="w-1 h-1 rounded-full bg-emerald-500"></div>Gate A</span>
                        </div>
                        <div className="flex justify-between items-end mt-1">
                            <p className="text-[10px] font-medium text-slate-400 leading-tight">Auditorium<br />Central Hub</p>
                            <p className="text-[11px] font-bold text-emerald-600 leading-tight text-right">100%<br />Synced</p>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between h-32">
                    <div className="flex justify-between items-start">
                        <h3 className="text-[10px] font-bold text-red-500 uppercase tracking-widest leading-tight">Flagged<br />Discrepancies</h3>
                        <div className="w-7 h-7 rounded-[8px] bg-red-50 flex items-center justify-center border border-red-100 text-red-500"><ShieldAlert className="w-4 h-4" /></div>
                    </div>
                    <div>
                        <p className="text-[36px] font-bold text-red-600 leading-none mb-2">2 <span className="text-[14px] text-slate-500 font-medium">Incidents</span></p>
                        <p className="text-[10px] font-bold text-red-600 flex items-center gap-1 mb-1.5"><AlertTriangle className="w-3 h-3" /> 1 Duplicate pass attempt</p>
                        <div className="flex justify-between items-end">
                            <p className="text-[10px] font-medium text-slate-400 leading-tight">1 Invalid Token<br />Hash</p>
                            <p className="text-[10px] font-bold text-red-600 leading-tight text-right uppercase bg-red-50 px-1 rounded">Gate<br />Blocked</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

                {/* LEFT COLUMN */}
                <div className="lg:col-span-2 space-y-6">

                    {/* OPTICAL SCANNER VIEW */}
                    <div className="bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm p-5">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-[14px] text-slate-900">Optical Feed: Terminal 01 (Gate B)</h3>
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">60 FPS • 1080p</span>
                                <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-[6px] text-[11px] font-bold border border-emerald-100">AI Auto-Detect</span>
                            </div>
                        </div>

                        {/* Simulated Camera Area */}
                        <div className="w-full aspect-video bg-slate-900 rounded-[12px] relative overflow-hidden flex items-center justify-center border-4 border-slate-800">
                            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20 filter blur-[2px]" alt="Background" />

                            {/* Targeting reticle */}
                            <div className="relative z-10 w-[240px] h-[240px] border-2 border-primary/50 flex items-center justify-center group pointer-events-none">
                                {/* Corners */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary"></div>
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary"></div>
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary"></div>

                                <div className="bg-primary/20 backdrop-blur-sm border border-primary/50 text-white font-bold text-[11px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(30,58,138,0.5)]">
                                    Align Student QR Code
                                </div>
                            </div>

                            {/* Overlays */}
                            <div className="absolute top-4 left-4 flex flex-col gap-2">
                                <span className="bg-black/50 text-emerald-400 border border-emerald-500/30 px-2 py-1 rounded text-[9px] font-mono font-bold flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div> SRC: LOGITECH BRIO 4K (USB 3.1)</span>
                                <span className="bg-black/50 text-slate-300 border border-slate-700 px-2 py-1 rounded text-[9px] font-mono font-bold">LATENCY: 12MS</span>
                            </div>

                            <div className="absolute bottom-4 right-4 flex gap-2">
                                <button className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white border border-slate-700 flex items-center justify-center rounded-full backdrop-blur-md transition-colors"><Camera className="w-4 h-4" /></button>
                                <button className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white border border-slate-700 flex items-center justify-center rounded-full backdrop-blur-md transition-colors"><Zap className="w-4 h-4" /></button>
                            </div>

                            {/* Scanning animation line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/80 shadow-[0_0_8px_4px_rgba(30,58,138,0.5)] shadow-primary animate-[scan_3s_ease-in-out_infinite]"></div>
                        </div>

                        <div className="mt-5 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50 p-4 rounded-[12px] border border-slate-100">
                            <div className="w-full sm:w-auto flex-1">
                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block mb-1.5">Manual Override & Registration ID Fallback</label>
                                <div className="flex relative">
                                    <input type="text" defaultValue="GCU/2023/BTECH/042" className="w-full border border-slate-200 rounded-l-[8px] pl-10 pr-3 py-2.5 text-[14px] font-mono font-bold text-slate-500 outline-none focus:border-primary shadow-sm bg-slate-100/50" />
                                    <QrCodeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <button className="bg-primary text-white px-5 py-2.5 rounded-r-[8px] text-[13px] font-bold hover:bg-primary-container transition-colors shadow-sm whitespace-nowrap flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4" /> Verify & Admit
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col items-end w-full sm:w-auto">
                                <p className="text-[10px] text-slate-400 font-medium">Supports barcode, alphanumeric delegate code, or contactless NFC reader.</p>
                                <button className="text-primary text-[11px] font-bold hover:underline mt-2">Try Next Candidate</button>
                            </div>
                        </div>
                    </div>

                    {/* SUCCESS PROFILE VIEW */}
                    <div className="bg-white border-2 border-emerald-400 rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(16,185,129,0.15)] relative">
                        {/* Success Banner */}
                        <div className="bg-emerald-300/30 (emerald-100 style) p-4 flex justify-between items-center border-b border-emerald-200">
                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0"><Check className="w-4 h-4 text-white font-bold" /></div>
                                <h2 className="text-[13px] font-bold text-emerald-800 tracking-wider">ACCESS GRANTED • CREDENTIAL AUTHENTICATED</h2>
                            </div>
                            <span className="text-[9px] font-mono font-bold text-emerald-700 bg-white px-2 py-1 rounded shadow-sm">ERP INGRESS HASH: 48A1B</span>
                        </div>

                        <div className="p-6 flex flex-col md:flex-row gap-6 items-start">
                            {/* Left: User Profile */}
                            <div className="flex flex-col items-center w-full md:w-48 shrink-0 bg-slate-50 pb-5 pt-6 rounded-[12px] border border-slate-100">
                                <img src="https://i.pravatar.cc/150?u=AnanyaSharma" className="w-[100px] h-[100px] rounded-full border-4 border-white shadow-md mb-3 object-cover" alt="Student" />
                                <h3 className="text-[16px] font-bold text-slate-900 leading-tight">Ananya Sharma</h3>
                                <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded mt-1.5 mb-2">GCU/2023/BTECH/042</span>
                                <p className="text-[12px] text-slate-500 font-medium text-center px-4 leading-tight">B.Tech CSE • Semester VI</p>
                            </div>

                            {/* Right: Data Grid */}
                            <div className="flex-1 w-full space-y-3">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    <div className="bg-slate-50/50 p-3 rounded-[8px] border border-slate-100">
                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Pass Category</span>
                                        <span className="text-[14px] font-bold text-primary flex items-center gap-1.5"><Ticket className="w-3.5 h-3.5" /> Delegate</span>
                                        <span className="text-[11px] text-slate-500 font-medium block mt-0.5">(Full Pass)</span>
                                    </div>
                                    <div className="bg-slate-50/50 p-3 rounded-[8px] border border-slate-100">
                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Seating Node</span>
                                        <span className="text-[14px] font-bold text-slate-900">Row C • Seat 14</span>
                                    </div>
                                    <div className="bg-slate-50/50 p-3 rounded-[8px] border border-slate-100">
                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Ingress Gate</span>
                                        <span className="text-[14px] font-bold text-emerald-600 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Auditorium<br />Gate B</span>
                                    </div>
                                    <div className="bg-slate-50/50 p-3 rounded-[8px] border border-slate-100">
                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Verification Time</span>
                                        <span className="text-[14px] font-mono font-bold text-slate-900">09:42:15 AM</span>
                                    </div>
                                    <div className="bg-slate-50/50 p-3 rounded-[8px] border border-slate-100">
                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Duty Leave (CO)</span>
                                        <span className="text-[14px] font-bold text-primary flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Auto-Logged</span>
                                        <span className="text-[11px] text-emerald-600 font-bold block mt-0.5">(80%)</span>
                                    </div>
                                    <div className="bg-slate-50/50 p-3 rounded-[8px] border border-slate-100">
                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Food Token</span>
                                        <span className="text-[14px] font-bold text-slate-900 flex items-center gap-1.5"><Utensils className="w-3.5 h-3.5" /> Active</span>
                                        <span className="text-[11px] text-slate-500 font-medium block mt-0.5">(Lunch Kit)</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-between items-center p-3 bg-slate-50 border border-slate-100 rounded-[8px] mt-2">
                                    <div className="flex items-center gap-2 mb-3 sm:mb-0">
                                        <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                                        <span className="text-[11px] font-medium text-slate-600">Verified by Faculty Terminal 01 (Dr. Pranjal Barman)</span>
                                    </div>
                                    <button className="text-[11px] font-bold text-red-500 hover:text-red-700 transition-colors uppercase tracking-widest border border-red-200 px-3 py-1.5 rounded-[4px] hover:bg-red-50">Revoke & Re-scan</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                {/* RIGHT COLUMN */}
                <div className="space-y-6">

                    {/* Live Ingress Stream */}
                    <div className="bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm flex flex-col h-[520px]">
                        <div className="p-4 border-b border-slate-100 shadow-sm z-10 bg-white">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="font-bold text-[14px] text-slate-900 flex items-center gap-2"><Tv className="w-4 h-4 text-primary" /> Live Ingress Stream</h3>
                                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded shadow-sm border border-emerald-100 uppercase tracking-widest flex items-center gap-1.5"><Radio className="w-2.5 h-2.5 animate-pulse" /> Streaming</span>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-3 py-1.5 text-[10px] font-bold bg-white text-slate-700 border border-slate-200 rounded-full shadow-sm">All Terminals</button>
                                <button className="px-3 py-1.5 text-[10px] font-bold bg-slate-100 text-slate-500 border border-transparent hover:border-slate-200 rounded-full transition-colors">Gate B (91)</button>
                                <button className="px-3 py-1.5 text-[10px] font-bold bg-slate-100 text-slate-500 border border-transparent hover:border-slate-200 rounded-full transition-colors">Gate A (51)</button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50">
                            {[
                                { n: 'Ananya Sharma', id: 'CSE VI', g: 'B', t: '09:42:15 AM', stat: 'valid', desc: 'Valid Pass', initial: 'AS' },
                                { n: 'Rahul Debnath', id: 'MECH VIII', g: 'A', t: '09:41:01 AM', stat: 'valid', desc: 'Valid Pass', initial: 'RD' },
                                { n: 'Priyashree Das', id: 'EE IV', g: 'B', t: '09:40:48 AM', stat: 'valid', desc: 'Valid Pass', initial: 'PD' },
                                { n: 'Bikram Choudhury', id: 'CSE VI', g: 'B', t: '09:39:52 AM', stat: 'valid', desc: 'Valid Pass', initial: 'BC' },
                                { n: 'Arindam Borah', id: 'BLOCKED', g: 'gate', t: 'Duplicate Token', stat: 'invalid', desc: 'Already logged at 09:12 AM', initial: 'AB' },
                                { n: 'Karishma Mahanta', id: 'ECE VI', g: 'A', t: '09:37:41 AM', stat: 'valid', desc: 'Valid Pass', initial: 'KM' },
                            ].map((log, idx) => (
                                <div key={idx} className={`p-3 rounded-[8px] flex items-center justify-between border ${log.stat === 'invalid' ? 'bg-red-50/50 border-red-100' : 'bg-white border-slate-100 shadow-sm'}`}>
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[11px] shrink-0 border ${log.stat === 'invalid' ? 'bg-red-100 text-red-600 border-red-200' : 'bg-primary/10 text-primary border-primary/20'}`}>{log.initial}</div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-0.5">
                                                <p className="text-[12px] font-bold text-slate-900 leading-none">{log.n}</p>
                                                <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${log.stat === 'invalid' ? 'bg-red-600 text-white' : 'bg-primary/10 text-primary'}`}>{log.id}</span>
                                            </div>
                                            <p className="text-[10px] font-medium text-slate-500 flex items-center gap-1.5">
                                                {log.stat === 'valid' ? (
                                                    <>Gate {log.g} • <span className="font-mono text-slate-400">{log.t}</span> • <span className="font-bold text-emerald-600">{log.desc}</span></>
                                                ) : (
                                                    <span className="text-red-500 font-bold">{log.t}: <span className="text-red-400 font-medium">{log.desc}</span></span>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="shrink-0">
                                        {log.stat === 'valid' ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <XOctagon className="w-4 h-4 text-red-500" />}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2 justify-center text-[10px] font-medium text-slate-400">
                            <RefreshCw className="w-3.5 h-3.5 text-slate-300 animate-spin-slow" /> Sync engine connected to GCU central DB. Events Appended.
                        </div>
                    </div>

                    {/* Terminal Health */}
                    <div className="bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm">
                        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                            <h3 className="font-bold text-[14px] text-slate-900 flex items-center gap-2"><Database className="w-4 h-4 text-primary" /> Terminal Station Health</h3>
                            <span className="text-[9px] font-bold text-emerald-600 block text-right leading-tight">Mesh Wi-Fi 5GHz:<br />100% Signal</span>
                        </div>
                        <div className="p-5 space-y-4">

                            <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-[8px]">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0 relative"><div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-50"></div></div>
                                    <div>
                                        <p className="text-[12px] font-bold text-slate-900">Terminal 01 • Auditorium Gate B</p>
                                        <p className="text-[10px] text-slate-500 font-medium">Operator: Dr. Pranjal Barman • 78 scans logged</p>
                                    </div>
                                </div>
                                <div className="text-right flex flex-col items-end">
                                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Latency</span>
                                    <div className="flex items-center gap-1"><span className="text-[11px] font-mono font-bold text-emerald-600">12ms</span> <Wifi className="w-3.5 h-3.5 text-emerald-500" /></div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-[8px]">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                                    <div>
                                        <p className="text-[12px] font-bold text-slate-900">Terminal 02 • Auditorium Gate A</p>
                                        <p className="text-[10px] text-slate-500 font-medium">Operator: Prof. Debojit Sarma • 52 scans logged</p>
                                    </div>
                                </div>
                                <div className="text-right flex flex-col items-end">
                                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Latency</span>
                                    <div className="flex items-center gap-1"><span className="text-[11px] font-mono font-bold text-emerald-600">26ms</span> <Wifi className="w-3.5 h-3.5 text-emerald-500" /></div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-[8px] opacity-70">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-slate-400 mt-1.5 shrink-0"></div>
                                    <div>
                                        <p className="text-[12px] font-bold text-slate-600">Terminal 03 • Lab Concourse & Balcony</p>
                                        <p className="text-[10px] text-slate-400 font-medium">Standby Mode • 12 scans logged</p>
                                    </div>
                                </div>
                                <div className="text-right flex flex-col items-end">
                                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Standby</span>
                                    <Wifi className="w-3.5 h-3.5 text-slate-400" />
                                </div>
                            </div>

                            <div className="pt-2">
                                <button className="w-full bg-white border border-slate-200 text-slate-700 py-2.5 rounded-[8px] font-bold text-[12px] flex items-center justify-between px-4 hover:bg-slate-50 transition-colors shadow-sm">
                                    <span className="flex items-center gap-2"><Radio className="w-3.5 h-3.5 text-primary" /> Broadcast Alert to All Gate Staff</span>
                                    <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded text-[10px]">Push Notice</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* Footer Info Box */}
            <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-200 rounded-[12px] mt-6">
                <div className="flex gap-3 items-center max-w-[70%]">
                    <ShieldCheck className="w-6 h-6 text-primary opacity-50 shrink-0" />
                    <div>
                        <p className="text-[11px] text-slate-700 font-bold mb-0.5">University Ingress Policy Enforcement</p>
                        <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
                            QR passes contain cryptographic SHA-256 tokens linked to GCU Enterprise Attendance Database. Re-scans trigger immediate gate lockout.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-1 text-[9px] font-medium text-slate-400 font-mono">
                    <span>System Clock: 09:43:10 IST</span>
                    <a href="#" className="font-sans text-[10px] font-bold text-primary hover:underline">Manual Pass Override Log</a>
                </div>
            </div>

        </div>
    );
}

const QrCodeIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <rect x="7" y="7" width="3" height="3"></rect>
        <rect x="14" y="7" width="3" height="3"></rect>
        <rect x="7" y="14" width="3" height="3"></rect>
        <rect x="14" y="14" width="3" height="3"></rect>
    </svg>
)
