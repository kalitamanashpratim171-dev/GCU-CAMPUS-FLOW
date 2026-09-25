import { useState } from 'react';
import {
    UploadCloud,
    Eye,
    Download,
    CheckCircle2,
    Users,
    Award,
    Clock,
    ScanLine,
    ShieldCheck,
    FileCheck,
    Stamp,
    Search,
    ChevronDown,
    Square,
    CheckSquare,
    Lock,
    Link,
    ChevronRight,
    ChevronLeft,
    CalendarDays,
    MapPin,
    Settings
} from 'lucide-react';

export default function Certificates() {
    const [selectedEvent, setSelectedEvent] = useState('ml');

    const roster = [
        { id: 1, name: 'Ananya Sharma', details: 'GCU/2023/BTECH/042 • CSE IV', atten: '95%', attenDesc: 'Gate-QR Logged', attenStatus: 'pass', score: '92/100', scoreDesc: 'Grade A', status: 'ready' },
        { id: 2, name: 'Rohan Dasgupta', details: 'GCU/2023/BTECH/108 • Mech IV', atten: '100%', attenDesc: 'Gate-QR Logged', attenStatus: 'pass', score: '88/100', scoreDesc: 'Grade A', status: 'ready' },
        { id: 3, name: 'Priyanka Baruah', details: 'GCU/2023/BTECH/017 • EEE IV', atten: '88%', attenDesc: 'Gate-QR Logged', attenStatus: 'pass', score: '85/100', scoreDesc: 'Grade A', status: 'ready' },
        { id: 4, name: 'Bikram Kalita', details: 'GCU/2023/BTECH/291 • CSE IV', atten: '65%', attenDesc: 'Below 80% Rule', attenStatus: 'fail', score: '74/100', scoreDesc: 'Lab Cleared', status: 'fail_attd' },
        { id: 5, name: 'Tanmoy Medhi', details: 'GCU/2023/BTECH/135 • Civil IV', atten: '90%', attenDesc: 'Gate-QR Logged', attenStatus: 'pass', score: '42/100', scoreDesc: 'Failed (<50%)', status: 'fail_score' },
        { id: 6, name: 'Manash Jyoti Chaliha', details: 'GCU/2023/BTECH/064 • CSE IV', atten: '82%', attenDesc: 'Gate-QR Logged', attenStatus: 'pass', score: '79/100', scoreDesc: 'Grade B+', status: 'ready' }
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] mx-auto">

            {/* Header */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-8 mt-2">
                <div>
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-[10px] tracking-widest uppercase mb-2">
                        ACADEMIC CRYPTOGRAPHIC LEDGER &gt; <span className="text-primary">Spring 2026 Cycle</span>
                    </div>
                    <h1 className="text-[28px] font-bold text-slate-900 tracking-tight leading-tight">Certificate Management & Digital<br />Verification Ledger</h1>
                    <p className="text-slate-500 mt-2 text-[13px] max-w-2xl leading-relaxed">
                        Generate, digitally sign, preview, and batch-issue cryptographically tamper-proof credentials for completed academic symposia and technical workshops.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 w-full xl:w-auto">
                    <button className="flex-1 xl:flex-none items-center justify-center gap-2 bg-white text-primary border border-primary/20 px-4 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-primary/5 transition-colors shadow-sm flex">
                        <UploadCloud className="w-4 h-4" /> Upload Custom Template
                    </button>
                    <button className="flex-1 xl:flex-none items-center justify-center gap-2 bg-white text-slate-700 border border-slate-300 px-4 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-slate-50 transition-colors shadow-sm flex">
                        <Eye className="w-4 h-4" /> Preview Layout
                    </button>
                    <button className="flex-1 xl:flex-none items-center justify-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-emerald-100 transition-colors shadow-sm flex">
                        <Download className="w-4 h-4" /> Export Hash Log
                    </button>
                    <button className="flex-1 xl:flex-none items-center justify-center gap-2 bg-primary text-white border border-primary px-5 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-primary-container transition-colors shadow-sm flex">
                        <CheckCircle2 className="w-4 h-4" /> Batch Issue Eligible (130)
                    </button>
                </div>
            </div>

            {/* Top Value Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between h-32">
                    <div className="flex justify-between items-start">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Total Eligible Students</h3>
                        <div className="w-7 h-7 rounded-sm bg-slate-100 flex items-center justify-center text-slate-500"><Users className="w-4 h-4" /></div>
                    </div>
                    <div>
                        <p className="text-[36px] font-bold text-slate-900 leading-none mb-2">470</p>
                        <p className="text-[10px] font-medium text-slate-500 leading-tight">across completed<br />cohorts' workshops</p>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between h-32">
                    <div className="flex justify-between items-start">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Issued & Dispatched</h3>
                        <div className="w-7 h-7 rounded-sm bg-emerald-50 flex items-center justify-center text-emerald-600"><Award className="w-4 h-4" /></div>
                    </div>
                    <div>
                        <p className="text-[36px] font-bold text-slate-900 leading-none mb-2 mt-1 flex items-baseline gap-1">340</p>
                        <p className="text-[10px] text-slate-500 font-medium flex items-start gap-1"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1 shrink-0"></div> Tamper-proof SHA-256<br />anchored</p>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-[12px] border border-secondary/30 shadow-sm relative overflow-hidden flex flex-col justify-between h-32 border-l-4 border-l-secondary">
                    <div className="flex justify-between items-start">
                        <h3 className="text-[10px] font-bold text-secondary uppercase tracking-widest leading-tight">Pending Batch<br />Issuance</h3>
                        <div className="w-7 h-7 rounded-sm bg-secondary/10 flex items-center justify-center text-secondary"><FileCheck className="w-4 h-4" /></div>
                    </div>
                    <div>
                        <p className="text-[36px] font-bold text-secondary leading-none mb-2 mt-1">130 <span className="text-[14px] font-medium tracking-tight">Ready</span></p>
                        <div className="flex gap-2 text-[10px] font-medium text-slate-500 leading-tight">
                            <strong className="text-slate-800">ML<br />Diagnostic</strong> 100% criteria<br />validated
                        </div>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-[12px] border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between h-32">
                    <div className="flex justify-between items-start">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Verification Inquiries</h3>
                        <div className="w-7 h-7 rounded-[8px] bg-blue-50 flex items-center justify-center text-blue-500"><ScanLine className="w-4 h-4" /></div>
                    </div>
                    <div>
                        <p className="text-[36px] font-bold text-slate-900 leading-none mb-2">1,420</p>
                        <p className="text-[10px] font-medium text-slate-500 leading-tight"><span className="text-emerald-600 font-bold">+18.4%</span> public scans via portal<br />validation</p>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 border-b border-slate-200 mb-6 overflow-x-auto no-scrollbar">
                <button className="px-5 py-3 border-b-2 border-primary text-primary font-bold text-[13px] flex items-center gap-2 whitespace-nowrap bg-primary/5 rounded-t-[8px]">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    ML Diagnostic Workshop
                    <span className="bg-secondary/20 text-secondary border border-secondary/30 px-1.5 py-0.5 rounded text-[10px] ml-1 tracking-wider uppercase">130 Ready</span>
                </button>
                <button className="px-5 py-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-[13px] flex items-center gap-2 whitespace-nowrap">
                    Deep Learning Hands-On
                    <span className="bg-slate-100 text-slate-400 px-1.5 py-0.5 rounded text-[10px] ml-1 tracking-wider uppercase font-bold">Live</span>
                </button>
                <button className="px-5 py-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-[13px] flex items-center gap-2 whitespace-nowrap">
                    Cybersecurity Bootcamp
                    <span className="font-bold text-[10px] text-slate-400">Issued (Feb 28)</span>
                </button>
                <button className="px-5 py-3 border-b-2 border-transparent text-slate-400 hover:text-slate-700 font-medium text-[13px] flex items-center gap-2 ml-auto">
                    <CalendarDays className="w-4 h-4" /> All Archived Events
                </button>
            </div>

            {/* Selected Event Details Block */}
            <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest mb-2 inline-block">CSE Dept Workshop</span>
                    <h2 className="text-[20px] font-bold text-slate-900 leading-tight">Machine Learning & Healthcare Diagnostic Workshop</h2>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 text-[12px] font-medium text-slate-500">
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Completed on: Mar 14, 2025</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Venue: Auditorium B</span>
                        <span className="flex items-center gap-1.5 font-bold text-slate-700"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Rule: Minimum 80% Gate Attendance (QR Scanned)</span>
                        <span className="flex items-center gap-1.5 font-bold text-slate-700"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Practical Lab Evaluation cleared (&gt;50%)</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 shrink-0 bg-emerald-50/50 p-3 rounded-[8px] border border-emerald-100">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-700 bg-white px-3 py-1.5 rounded-full border border-emerald-200 shadow-sm"><Stamp className="w-3 h-3" /> HOD Signature Attached ✓</div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-700 bg-white px-3 py-1.5 rounded-full border border-emerald-200 shadow-sm"><Stamp className="w-3 h-3" /> Dean Academic Co-Signed ✓</div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-white bg-emerald-600 px-3 py-1.5 rounded-full shadow-sm"><ShieldCheck className="w-3 h-3" /> Digital Seal Embedded ✓</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* LEFT COLUMN: Canvas & Options */}
                <div className="lg:col-span-5 space-y-6">

                    {/* Certificate Canvas Mock */}
                    <div className="bg-slate-50 border border-slate-200 rounded-[16px] overflow-hidden shadow-sm">
                        <div className="flex justify-between items-center border-b border-slate-200 px-4 py-3 bg-white">
                            <span className="text-[14px] font-bold text-slate-900 flex items-center gap-2"><Award className="w-4 h-4 text-primary" /> Live Security Certificate Canvas</span>
                            <span className="text-[10px] text-slate-500 font-bold bg-slate-100 px-2 py-1 rounded">Standard Diploma Layout (A4 Land.)</span>
                        </div>
                        <div className="p-6 flex items-center justify-center">

                            {/* The Certificate UI embedded */}
                            <div className="bg-white border-2 border-slate-200 rounded-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] w-full aspect-[1.414/1] relative p-1">
                                <div className="w-full h-full border-[6px] border-double border-primary/20 rounded flex flex-col items-center justify-center px-6 relative bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                                    <div className="absolute top-4 left-4 flex items-center gap-2">
                                        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white text-[12px] font-bold shrink-0">GCU</div>
                                        <div className="text-[8px] font-bold text-primary leading-tight font-serif tracking-widest text-left">GIRIJANANDA CHOWDHURY<br />UNIVERSITY<br /><span className="text-[5px] text-slate-400 font-sans tracking-normal">ASSAM, INDIA • ESTD. UNDER ASSAM ACT XLVII OF 2022</span></div>
                                    </div>

                                    <p className="text-[8px] text-slate-400 font-bold tracking-[0.2em] mt-12 mb-2 uppercase">Official Academic Credential</p>
                                    <h3 className="text-[18px] font-serif font-bold text-primary leading-none text-center">CERTIFICATE OF MERIT &<br />PARTICIPATION</h3>

                                    <p className="text-[8px] text-slate-600 font-serif italic mt-6 mb-2">This is certified that</p>
                                    <p className="text-[18px] font-bold text-slate-900 border-b border-slate-300 pb-1 px-8 mb-2 font-serif text-center w-full truncate">Ananya Sharma</p>

                                    <p className="text-[7px] text-slate-600 font-medium text-center px-4 leading-relaxed">
                                        Roll No: <strong className="text-slate-800">GCU/2023/BTECH/042</strong> of <strong>B.Tech CSE (Sem IV)</strong><br />has successfully cleared all practical assessments and gate-attendance minimums to conclude the <strong>Machine Learning & Healthcare Diagnostic Workshop</strong> held on Mar 14, 2025.
                                    </p>

                                    {/* Signatures mock */}
                                    <div className="absolute bottom-6 w-full px-8 flex justify-between">
                                        <div className="text-center">
                                            <div className="h-6 w-16 mx-auto mb-1 opacity-60 bg-[url('https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.svg')] bg-center bg-contain bg-no-repeat"></div>
                                            <div className="w-20 border-t border-slate-400 text-[6px] font-bold text-slate-600 pt-1">HOD, Comp. Science</div>
                                        </div>
                                        <div className="w-10 h-10 border-2 border-emerald-400 rounded-full flex items-center justify-center -translate-y-2 relative">
                                            <div className="absolute inset-1 rounded-full border border-emerald-300 transform -rotate-12 flex items-center justify-center bg-emerald-50"><span className="text-[5px] font-bold text-emerald-900 transform -rotate-12 leading-none text-center">VERIFIED<br />SEAL</span></div>
                                        </div>
                                        <div className="text-center">
                                            <div className="h-6 w-16 mx-auto mb-1 opacity-60 bg-[url('https://upload.wikimedia.org/wikipedia/commons/3/30/George_Washington_signature.svg')] bg-center bg-contain bg-no-repeat"></div>
                                            <div className="w-20 border-t border-slate-400 text-[6px] font-bold text-slate-600 pt-1">Dean, Academic Affairs</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Options */}
                    <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                        <h3 className="text-[11px] font-bold text-slate-500 tracking-widest uppercase mb-4">Credential Dispatch Options</h3>
                        <div className="space-y-4">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <div className="mt-0.5 text-primary"><CheckSquare className="w-5 h-5" /></div>
                                <div>
                                    <p className="text-[13px] font-bold text-slate-900">Append UGC Skill Enhancement Academic Credit Badge (2.0 Credits)</p>
                                    <p className="text-[11px] text-slate-500">Embeds micro-credential ontology in metadata</p>
                                </div>
                            </label>
                            <label className="flex items-start gap-3 cursor-pointer">
                                <div className="mt-0.5 text-primary"><CheckSquare className="w-5 h-5" /></div>
                                <div>
                                    <p className="text-[13px] font-bold text-slate-900">Instant Institutional Email Dispatch with PDF Attachment & Web Link</p>
                                    <p className="text-[11px] text-slate-500">Sent via mailer daemon to @gcu.edu.in accounts</p>
                                </div>
                            </label>
                            <label className="flex items-start gap-3 cursor-pointer">
                                <div className="mt-0.5 text-primary"><CheckSquare className="w-5 h-5" /></div>
                                <div>
                                    <p className="text-[13px] font-bold text-slate-900">Sync to DigiLocker & National Academic Depository (NAD) Webhook</p>
                                    <p className="text-[11px] text-slate-500">Subject to API latency (~5s per record)</p>
                                </div>
                            </label>
                        </div>
                    </div>

                </div>


                {/* RIGHT COLUMN: Ledger Table */}
                <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm flex flex-col h-full min-h-[600px]">

                    {/* Toolbar */}
                    <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-1">
                            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input type="text" placeholder="Search student name, roll number..." className="w-full border border-slate-200 rounded-[8px] pl-9 pr-3 py-2 text-[13px] font-medium outline-none focus:border-primary shadow-sm bg-slate-50" />
                        </div>
                        <div className="flex gap-2">
                            <button className="bg-white border border-slate-200 text-slate-700 px-3 py-2 rounded-[8px] text-[12px] font-bold flex items-center justify-between min-w-[140px] hover:bg-slate-50 shadow-sm">
                                <span>Eligible - Ready (130)</span> <ChevronDown className="w-3.5 h-3.5 shrink-0 ml-2 text-slate-400" />
                            </button>
                            <button className="bg-white border border-slate-200 text-slate-700 px-3 py-2 rounded-[8px] text-[12px] font-bold flex items-center justify-between min-w-[120px] hover:bg-slate-50 shadow-sm">
                                <span>Dept: CSE (All)</span> <ChevronDown className="w-3.5 h-3.5 shrink-0 ml-2 text-slate-400" />
                            </button>
                        </div>
                    </div>

                    <div className="p-4 border-b border-slate-100 bg-primary/5 flex flex-wrap justify-between items-center gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <CheckSquare className="w-5 h-5 text-primary" />
                            <span className="text-[13px] font-bold text-primary">130 of 130 Eligible Selected</span>
                        </label>
                        <div className="flex gap-3">
                            <button className="bg-white text-primary text-[12px] font-bold border border-primary/20 px-4 py-2 rounded-[8px] hover:bg-primary/5 transition-colors shadow-sm flex items-center gap-2">
                                <Download className="w-3.5 h-3.5" /> Download Batch (ZIP)
                            </button>
                            <button className="bg-primary text-white text-[13px] font-bold border border-primary px-6 py-2 rounded-[8px] hover:bg-primary-container transition-colors shadow-sm flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> Issue 130 Certificates
                            </button>
                        </div>
                    </div>

                    {/* Dynamic Table */}
                    <div className="flex-1 overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-200 text-[10px] uppercase font-bold text-slate-400 tracking-widest bg-slate-50">
                                    <th className="p-4 w-12 text-center">#</th>
                                    <th className="p-4">Student Participant</th>
                                    <th className="p-4">Attendance</th>
                                    <th className="p-4">Score</th>
                                    <th className="p-4 text-right">Clearance Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roster.map((row, i) => (
                                    <tr key={i} className={`border-b border-slate-100 hover:bg-slate-50/50 transition-colors ${row.status.includes('fail') ? 'opacity-70 bg-slate-50' : ''}`}>
                                        <td className="p-4 text-center">
                                            {row.status === 'ready' ? (
                                                <CheckSquare className="w-4 h-4 text-primary mx-auto" />
                                            ) : (
                                                <Square className="w-4 h-4 text-slate-300 mx-auto" />
                                            )}
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600 shrink-0">
                                                    {row.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div>
                                                    <p className={`text-[13px] font-bold ${row.status.includes('fail') ? 'text-slate-600 line-through decoration-slate-300' : 'text-slate-900'}`}>{row.name}</p>
                                                    <p className="text-[10px] text-slate-500 font-mono tracking-tight">{row.details}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <p className={`text-[13px] font-bold items-center gap-1.5 flex ${row.attenStatus === 'fail' ? 'text-red-600' : 'text-slate-900'}`}>{row.atten} {row.attenStatus === 'pass' && <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block"></span>}</p>
                                            <p className={`text-[10px] font-medium ${row.attenStatus === 'fail' ? 'text-red-500' : 'text-slate-500'}`}>{row.attenDesc}</p>
                                        </td>
                                        <td className="p-4">
                                            <p className={`text-[13px] font-bold ${row.status === 'fail_score' ? 'text-red-600' : 'text-slate-900'}`}>{row.score}</p>
                                            <p className={`text-[10px] font-medium ${row.status === 'fail_score' ? 'text-red-500' : 'text-slate-500'}`}>{row.scoreDesc}</p>
                                        </td>
                                        <td className="p-4 text-right">
                                            {row.status === 'ready' && (
                                                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-[6px] text-[11px] font-bold shadow-sm whitespace-nowrap">
                                                    <ShieldCheck className="w-3.5 h-3.5" /> Ready to Issue
                                                </span>
                                            )}
                                            {row.status === 'fail_attd' && (
                                                <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 border border-red-200 px-3 py-1.5 rounded-[6px] text-[11px] font-bold shadow-sm whitespace-nowrap">
                                                    <XOctagon className="w-3.5 h-3.5" /> Ineligible (Attd)
                                                </span>
                                            )}
                                            {row.status === 'fail_score' && (
                                                <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 border border-red-200 px-3 py-1.5 rounded-[6px] text-[11px] font-bold shadow-sm whitespace-nowrap">
                                                    <XOctagon className="w-3.5 h-3.5" /> Ineligible (Exam)
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-4 bg-white flex justify-between items-center border-t border-slate-100">
                        <p className="text-[11px] font-medium text-slate-500">Showing <strong className="text-slate-700">1-6</strong> of 142 Participants<br />(130 Passed Criteria)</p>
                        <div className="flex items-center gap-1">
                            <button className="px-3 py-1.5 text-[11px] font-medium text-slate-400">Previous</button>
                            <button className="w-7 h-7 rounded bg-primary text-white text-[12px] font-bold flex items-center justify-center shadow-sm">1</button>
                            <button className="w-7 h-7 rounded hover:bg-slate-100 text-slate-600 text-[12px] font-bold flex items-center justify-center transition-colors">2</button>
                            <button className="w-7 h-7 rounded hover:bg-slate-100 text-slate-600 text-[12px] font-bold flex items-center justify-center transition-colors">3</button>
                            <span className="text-slate-400 mx-1">...</span>
                            <button className="w-7 h-7 rounded hover:bg-slate-100 text-slate-600 text-[12px] font-bold flex items-center justify-center transition-colors">24</button>
                            <button className="px-3 py-1.5 text-[11px] font-bold text-slate-600 hover:text-primary transition-colors">Next</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Info Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-[12px] p-6 mt-8 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
                <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm shrink-0">
                        <Lock className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                        <h3 className="text-[13px] font-bold text-slate-900 mb-1">Cryptographic Verification Ledger & Public Key State</h3>
                        <p className="text-[11px] text-slate-500 font-medium leading-relaxed max-w-2xl">
                            Certificates generated by GCU Campus Flow are signed with Dr. Pranjal Barman's Ed25519 faculty certificate key and counter-signed by the Registrar's HSM.
                        </p>
                    </div>
                </div>

                <div className="w-full xl:w-auto">
                    <div className="flex items-center gap-4 bg-white border border-slate-200 p-3 rounded-[8px] shadow-sm">
                        <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">KID: GCU-FACULTY-23C9-FD1941A-v2</span>
                        <button className="text-[11px] font-bold text-primary hover:underline whitespace-nowrap">Verify Authority Keys</button>
                    </div>
                </div>
            </div>

            {/* Process Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <div className="p-3 border-l-2 border-slate-300">
                    <h4 className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5 mb-1"><ScanLine className="w-3.5 h-3.5 text-slate-400" /> 1. Gate QR Verification</h4>
                    <p className="text-[10px] text-slate-500">Validated against physical geo-fenced campus entry logs.</p>
                </div>
                <div className="p-3 border-l-2 border-slate-300">
                    <h4 className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5 mb-1"><CheckSquare className="w-3.5 h-3.5 text-slate-400" /> 2. Practical Rubric</h4>
                    <p className="text-[10px] text-slate-500">Evaluator Dr. Barman committed grades to database.</p>
                </div>
                <div className="p-3 border-l-2 border-slate-300">
                    <h4 className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5 mb-1"><Settings className="w-3.5 h-3.5 text-slate-400" /> 3. SHA-256 Hashing</h4>
                    <p className="text-[10px] text-slate-500">Unique hash generated combining student roll & timestamp.</p>
                </div>
                <div className="p-3 border-l-2 border-slate-300">
                    <h4 className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5 mb-1"><Link className="w-3.5 h-3.5 text-slate-400" /> 4. Registry Anchor</h4>
                    <p className="text-[10px] text-slate-500">Public immutable lookup at verify.gcu.ac.in.</p>
                </div>
            </div>

        </div>
    );
}

const XOctagon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
)
