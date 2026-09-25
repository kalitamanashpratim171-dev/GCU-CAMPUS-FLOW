import { useState, useEffect } from 'react';
import {
    Download,
    Settings,
    Flag,
    Globe,
    Lock,
    RefreshCw,
    MapPin,
    DoorOpen,
    ShieldCheck,
    Clock,
    Sun,
    SmartphoneNfc,
    CheckCircle2,
    AlertCircle,
    Copy,
    Zap,
    FlaskConical,
    Wifi,
    ChevronRight,
    Info
} from 'lucide-react';

export default function StudentQrAttendance() {
    const [countdown, setCountdown] = useState(26);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => (prev > 0 ? prev - 1 : 30));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] mx-auto mt-2 space-y-6">

            {/* Top Breadcrumb Context */}
            <div className="flex justify-between items-center bg-transparent px-1 py-1 text-[10px] font-bold">
                <div className="flex items-center gap-2 text-slate-500 uppercase tracking-widest flex-wrap">
                    GCU Campus &gt; Student Portal &gt; Participation &gt; <span className="text-primary">QR Attendance</span>
                </div>
            </div>

            {/* Main Header */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-2">
                <div className="max-w-3xl">
                    <h1 className="text-[28px] md:text-[32px] font-bold text-[#0f172a] tracking-tight leading-[1.1] mb-2 text-left">
                        Live Gate QR Attendance & Ingress Pass
                    </h1>
                    <div className="bg-teal-50 border border-teal-100 text-teal-800 px-2 py-1 rounded-[6px] text-[10px] font-bold tracking-widest mb-3 inline-flex items-center gap-1.5 shadow-sm max-w-full truncate">
                        <Globe className="w-3.5 h-3.5" /> Gate Ingress Active • Workshop on Next-Gen Renewable Microgrids
                    </div>
                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed max-w-2xl text-left">
                        Dynamic, cryptographically authenticated time-based QR code for entry turnstiles, optical gate scanners, and SAMARTH ERP duty leave attendance reconciliation.
                    </p>
                </div>
                <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full xl:w-auto shrink-0 mt-4 xl:mt-0">
                    <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center justify-center gap-2 transition-colors">
                        <Download className="w-4 h-4 text-slate-400" /> Offline Pass (.PKPASS)
                    </button>
                    <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center justify-center gap-2 transition-colors">
                        <ShieldCheck className="w-4 h-4 text-slate-400" /> Attendance Policy
                    </button>
                    <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center justify-center gap-2 transition-colors w-full sm:w-auto">
                        <Flag className="w-4 h-4 text-slate-400" /> Report Gate Issue
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mt-6 items-stretch">

                {/* LEFT: Digital ID Pass */}
                <div className="flex-1 max-w-2xl shrink-0">
                    <div className="bg-white border border-slate-200 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col h-full relative">

                        {/* Decorative faint pattern */}
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

                        {/* Header */}
                        <div className="p-6 pb-4 border-b border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10 bg-slate-50/50">
                            <div className="flex items-center gap-4">
                                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile" className="w-14 h-14 rounded-[10px] object-cover border-2 border-white shadow-sm" />
                                <div className="text-left">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <h2 className="text-[18px] font-bold text-slate-900 leading-none">Ananya Sharma</h2>
                                        <span className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider">CSE VI</span>
                                    </div>
                                    <p className="text-[11px] font-bold text-slate-500 font-mono tracking-wide mb-0.5">GCU/2023/BTECH/042</p>
                                    <p className="text-[10px] font-medium text-slate-500">Dept. of Computer Science & Engineering</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-start md:items-end gap-1.5">
                                <div className="flex items-center gap-1.5 text-slate-700 bg-white border border-slate-200 px-2 py-1 rounded-[6px] shadow-sm">
                                    <Lock className="w-3 h-3" />
                                    <span className="text-[9px] font-bold uppercase tracking-widest">AES-256 TOTP</span>
                                </div>
                                <div className="text-[8px] font-bold text-slate-500 font-mono">HASH: 6x0F1A...x9C1</div>
                                <div className="bg-blue-600 text-white px-2 py-0.5 rounded text-[9px] font-bold shadow-sm">Samarth ERP Sync</div>
                            </div>
                        </div>

                        {/* Pass Body */}
                        <div className="p-6 md:p-8 flex flex-col items-center justify-center relative z-10 bg-white">
                            <div className="w-full flex justify-between items-center mb-6 max-w-sm mx-auto">
                                <div className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Official Academic Pass</div>
                                <div className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">Non-Transferable</div>
                            </div>

                            {/* Mock QR Container */}
                            <div className="bg-white p-4 border break-words shadow-sm rounded-[16px] border-slate-200 relative w-64 h-64 flex items-center justify-center group cursor-pointer mb-6">
                                {/* Scanline animation overlay */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500/50 blur-[1px] animate-[ping_3s_ease-in-out_infinite] pointer-events-none z-20"></div>
                                <div className="absolute top-0 left-0 w-full h-full border-2 border-blue-100 rounded-[16px] pointer-events-none"></div>

                                {/* Using a visually dense grid to look like QR */}
                                <div className="w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg')] bg-contain bg-no-repeat bg-center opacity-90 transition-opacity"></div>

                                {/* Center pill */}
                                <div className="absolute bg-[#0f172a] text-white px-3 py-1 pb-1.5 rounded-full text-[9px] font-bold border-2 border-white shadow-md flex items-center gap-1 bottom-4 right-4 z-20"><Lock className="w-2 h-2" /> GCU SECURE</div>
                            </div>

                            {/* Timer details */}
                            <div className="w-full max-w-sm mx-auto flex items-center justify-between text-[11px] font-bold text-slate-600 mb-2">
                                <div className="flex items-center gap-2">
                                    <RefreshCw className={`w-3.5 h-3.5 text-blue-600 ${countdown < 5 ? 'animate-spin' : ''}`} />
                                    Code Regenerates In: <span className="font-mono text-[14px] text-slate-900 w-6 text-center">{countdown}s</span>
                                </div>
                                <button className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1">Refresh Now <ChevronRight className="w-3 h-3" /></button>
                            </div>

                            {/* Timer Bar */}
                            <div className="w-full max-w-sm mx-auto h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-600 transition-all duration-1000 ease-linear rounded-full" style={{ width: `${(countdown / 30) * 100}%` }}></div>
                            </div>
                        </div>

                        {/* Info Blocks Bottom */}
                        <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex flex-col gap-3 relative z-10 mb-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div className="bg-white border border-slate-200 rounded-[10px] p-3 shadow-sm text-left">
                                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Allocated Gate</div>
                                    <div className="flex items-center gap-2 mb-1.5 text-slate-800">
                                        <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                                        <span className="text-[12px] font-bold leading-tight">Gate B<br />Turnstiles</span>
                                    </div>
                                    <div className="text-[9px] font-medium text-teal-600">North Entry Pedestrian Axis</div>
                                </div>

                                <div className="bg-white border border-slate-200 rounded-[10px] p-3 shadow-sm text-left">
                                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Hall & Reserved Seat</div>
                                    <div className="flex items-center gap-2 mb-1.5 text-slate-800">
                                        <DoorOpen className="w-4 h-4 text-blue-600 shrink-0" />
                                        <span className="text-[12px] font-bold leading-tight">Sem Hall 2 •<br />Row C-14</span>
                                    </div>
                                    <div className="text-[9px] font-medium text-slate-500">Block C, Ground Floor</div>
                                </div>

                                <div className="bg-white border border-slate-200 rounded-[10px] p-3 shadow-sm text-left">
                                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Sanctioned Duty Leave</div>
                                    <div className="flex items-center gap-2 mb-1.5 text-slate-800">
                                        <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                                        <span className="text-[13px] font-bold leading-tight">+3.0 Hours</span>
                                    </div>
                                    <div className="text-[9px] font-medium text-slate-500 line-clamp-1 w-full" title="CSE-401 & CSE-403 Exempted">CSE-401 & CSE-403 Exempted</div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-center bg-blue-50/50 border border-blue-100 rounded-[10px] p-3 text-left">
                                <div className="flex items-start gap-3 mb-3 md:mb-0">
                                    <Clock className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                                    <div>
                                        <div className="text-[11px] font-bold text-slate-800">Check-In Window: <span className="text-blue-700">09:15 AM - 09:45 AM</span></div>
                                        <div className="text-[10px] font-medium text-slate-500">Turnstile lock engages promptly at 10:00 AM session kickoff.</div>
                                    </div>
                                </div>
                                <button className="w-full md:w-auto bg-amber-100 text-amber-800 border border-amber-200 hover:bg-amber-200 px-4 py-2 rounded-[8px] text-[11px] font-bold flex items-center justify-center gap-2 transition-colors shrink-0">
                                    <Sun className="w-3.5 h-3.5" /> Max Screen Brightness
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* RIGHT: Sidebar Widgets */}
                <div className="w-full lg:w-[420px] shrink-0 flex flex-col gap-6">

                    {/* Telemetry Block */}
                    <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm overflow-hidden flex flex-col">
                        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <h3 className="text-[13px] font-bold text-slate-900 leading-tight flex items-center gap-2"><Wifi className="w-4 h-4 text-slate-400" /> Turnstile Scanner Telemetry</h3>
                            <span className="text-[9px] font-bold text-slate-500 flex items-center gap-1.5 text-right leading-tight max-w-[80px]">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0"></div> Campus Mesh<br />Synchronized
                            </span>
                        </div>
                        <div className="p-4 flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5"></div>
                                    <div>
                                        <h4 className="text-[11px] font-bold text-slate-800">Terminal 01 (Gate B North Turnstile)</h4>
                                        <p className="text-[9px] text-slate-500 font-medium">Optical High-Speed Laser • 14ms latency</p>
                                    </div>
                                </div>
                                <span className="bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase">Ready</span>
                            </div>
                            <div className="w-full h-px bg-slate-100"></div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5"></div>
                                    <div>
                                        <h4 className="text-[11px] font-bold text-slate-800">Terminal 02 (Gate B Handheld Proctor)</h4>
                                        <p className="text-[9px] text-slate-500 font-medium">SAMARTH NFC Mobile Scanner • Standby</p>
                                    </div>
                                </div>
                                <span className="bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase">Ready</span>
                            </div>
                        </div>
                    </div>

                    {/* Procedure Block */}
                    <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm flex flex-col p-5">
                        <h3 className="text-[14px] font-bold text-slate-900 leading-tight mb-5 flex items-center gap-2"><Info className="w-4 h-4 text-slate-400" /> Ingress Procedure at Gate B</h3>

                        <div className="relative border-l border-slate-200 ml-4 space-y-6 pb-2">
                            <div className="relative pl-6">
                                <div className="absolute -left-3 top-[-2px] w-6 h-6 rounded-full bg-[#0f172a] text-white text-[11px] font-bold flex items-center justify-center border-2 border-white shadow-sm">1</div>
                                <h4 className="text-[12px] font-bold text-slate-800 leading-tight mb-1">Hold Screen at 10-15 cm</h4>
                                <p className="text-[11px] font-medium text-slate-500 leading-relaxed max-w-xs">Align this active QR code under the scanner lens. Do not tilt device.</p>
                            </div>
                            <div className="relative pl-6">
                                <div className="absolute -left-3 top-[-2px] w-6 h-6 rounded-full bg-[#0f172a] text-white text-[11px] font-bold flex items-center justify-center border-2 border-white shadow-sm">2</div>
                                <h4 className="text-[12px] font-bold text-slate-800 leading-tight mb-1">Wait for Green LED & Chime</h4>
                                <p className="text-[11px] font-medium text-slate-500 leading-relaxed max-w-xs">Optical turnstile verifies hash in &lt;300ms and unlocks mechanical barrier.</p>
                            </div>
                            <div className="relative pl-6">
                                <div className="absolute -left-3 top-[-2px] w-6 h-6 rounded-full bg-[#0f172a] text-white text-[11px] font-bold flex items-center justify-center border-2 border-white shadow-sm">3</div>
                                <h4 className="text-[12px] font-bold text-slate-800 leading-tight mb-1">Collect Pass Kit & Meal Voucher</h4>
                                <p className="text-[11px] font-medium text-slate-500 leading-relaxed max-w-xs">Grab physical session lanyard badge & renewable workshop kit at Desk 04.</p>
                            </div>
                        </div>
                    </div>

                    {/* Contingency Block */}
                    <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm flex flex-col overflow-hidden">
                        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <h3 className="text-[13px] font-bold text-slate-900 leading-tight flex items-center gap-2"><SmartphoneNfc className="w-4 h-4 text-slate-400" /> Manual Gate Contingency</h3>
                            <span className="bg-blue-50/50 text-blue-700 px-2 py-0.5 rounded border border-blue-100 text-[9px] font-bold">Desk Assistance</span>
                        </div>

                        <div className="p-4 text-left">
                            <p className="text-[10px] text-slate-500 font-medium leading-relaxed mb-4">
                                If your screen is cracked, low on battery, or the scanner optical glass is fogged, supply these credentials directly to the station proctor:
                            </p>

                            <div className="space-y-3 mb-4">
                                <div className="bg-slate-50 border border-slate-200 rounded-[8px] p-3 flex justify-between items-center group">
                                    <div>
                                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Backup Ingress Code</div>
                                        <div className="text-[14px] font-bold font-mono text-slate-800">GCU-PASS-2025-9942</div>
                                    </div>
                                    <button className="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 rounded-[6px] text-slate-500 hover:text-slate-800 shadow-sm"><Copy className="w-3.5 h-3.5" /></button>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-[8px] p-3 flex justify-between items-center">
                                    <div>
                                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Physical Smartcard NFC Tap</div>
                                        <div className="text-[12px] font-bold font-mono text-slate-800">NFC-UID-7749-GCU</div>
                                    </div>
                                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-teal-600"><SmartphoneNfc className="w-3.5 h-3.5" /> Tap Active</span>
                                </div>
                            </div>

                            <div className="bg-blue-50/50 border border-blue-100 rounded-[8px] p-3 flex items-start gap-2">
                                <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                <p className="text-[10px] text-blue-900 leading-relaxed font-medium">
                                    <strong className="font-bold">Duty Leave Notice:</strong> 80% minimum verified dwell time inside Seminar Hall 2 is mandatory for automated SAMARTH ERP credit reconciliation.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* Schedule Banner Bottom */}
            <div className="bg-white border text-left border-slate-200 rounded-[16px] shadow-sm p-6 mt-6">
                <div className="flex justify-between items-start md:items-center mb-6 flex-col md:flex-row gap-3">
                    <div>
                        <h2 className="text-[16px] font-bold text-[#0f172a] leading-tight mb-1">Today's Registered Ingress Schedule</h2>
                        <p className="text-[11px] font-medium text-slate-500">Real-time attendance timeline and duty leave tracking for Thursday, Spring 2025.</p>
                    </div>
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-[6px] text-[10px] font-bold tracking-widest uppercase">2 Sessions Scheduled</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    {/* Card 1 */}
                    <div className="bg-blue-50/30 border border-blue-100 rounded-[12px] p-5 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400"></div>

                        <div className="flex justify-between items-start mb-4 gap-2 border-b border-blue-50 pb-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-[8px] bg-[#0f172a] text-white flex items-center justify-center shrink-0 shadow-sm">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest mb-1.5 inline-block">CURRENT SESSION</span>
                                    <h3 className="text-[14px] font-bold text-slate-900 leading-tight pr-4">Workshop on Next-Gen Renewable Microgrids</h3>
                                </div>
                            </div>
                            <span className="bg-teal-400 text-white px-2 py-1 rounded-[6px] text-[10px] font-bold whitespace-nowrap shadow-sm text-center">Check-In<br />Ready</span>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mb-4">
                            <div>
                                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">TIME SLOT</div>
                                <div className="text-[11px] font-bold text-slate-800">10:00 AM - 01:00 PM</div>
                            </div>
                            <div>
                                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">HALL LOCATION</div>
                                <div className="text-[11px] font-bold text-slate-800">Seminar Hall 2</div>
                            </div>
                            <div>
                                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">DUTY CREDIT</div>
                                <div className="text-[11px] font-bold text-blue-600">+3 Academic Hours</div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-[10px] font-medium text-slate-500 pt-3 border-t border-blue-50">
                            <span>Speaker: Prof. M. Borah (IIT Guwahati)</span>
                            <span className="font-bold text-slate-700">Gate B Active</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-slate-50/50 border border-slate-200 rounded-[12px] p-5 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-slate-300"></div>

                        <div className="flex justify-between items-start mb-4 gap-2 border-b border-slate-100 pb-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-[8px] bg-white border border-slate-200 text-slate-600 flex items-center justify-center shrink-0 shadow-sm">
                                    <FlaskConical className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest mb-1.5 inline-block">AFTERNOON SESSION</span>
                                    <h3 className="text-[14px] font-bold text-slate-700 leading-tight pr-4">Hands-on Microgrid Simulation Lab</h3>
                                </div>
                            </div>
                            <span className="bg-slate-200 text-slate-600 px-2 py-1 rounded-[6px] text-[10px] font-bold whitespace-nowrap flex flex-col items-center">
                                <Clock className="w-3.5 h-3.5 mb-0.5" />
                                Opens 01:30 PM
                            </span>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mb-4">
                            <div>
                                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">TIME SLOT</div>
                                <div className="text-[11px] font-bold text-slate-600">02:00 PM - 04:30 PM</div>
                            </div>
                            <div>
                                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">LAB LOCATION</div>
                                <div className="text-[11px] font-bold text-slate-600">Smart Grid Lab 04</div>
                            </div>
                            <div>
                                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">DUTY CREDIT</div>
                                <div className="text-[11px] font-bold text-slate-600">+2.5 Academic Hours</div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-[10px] font-medium text-slate-400 pt-3 border-t border-slate-100">
                            <span>Prerequisite: Morning Session Check-in</span>
                            <span className="font-bold text-slate-500">Ingress Gate C Turnstiles</span>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
}
