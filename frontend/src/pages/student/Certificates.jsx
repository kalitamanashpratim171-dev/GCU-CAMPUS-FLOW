import { useState } from 'react';
import {
    Download,
    FileText,
    ShieldCheck,
    BookOpen,
    Trophy,
    Link as LinkIcon,
    CheckCircle2,
    Award,
    Share2,
    Search,
    ChevronDown,
    LayoutGrid,
    List,
    Eye,
    Hash,
    Landmark,
    ExternalLink,
    Activity
} from 'lucide-react';

export default function StudentCertificates() {

    const credentials = [
        {
            id: 1, type: 'Merit Award (2nd Pos.)', title: 'Assam Biodiversity & Green Tech Hackathon 2024',
            issuer: 'Organized by GCU Environmental Club & Dept of Civil Eng. Project: IoT River Basin Level...',
            credits: '+1.0 Credit', date: 'Nov 22, 2024', hashID: 'GCU CERT 2024 BIO 041'
        },
        {
            id: 2, type: 'Workshop Completion', title: 'Deep Learning & AI Colloquium 2025',
            issuer: 'Intensive 32-hour practical track covering PyTorch, Transformers architecture and Edg...',
            credits: '+0.5 Credit', date: 'Jan 10, 2025', hashID: 'GCU CERT 2025 AI 114'
        },
        {
            id: 3, type: 'Delegate Participation', title: 'National Conf. on Renewable Energy & Smart Grid',
            issuer: 'Presented student poster on micro-inverter telemetry. Keynote address by EEE regional...',
            credits: '+0.5 Credit', date: 'Oct 18, 2024', hashID: 'GCU CERT 2024 CONF 072'
        },
        {
            id: 4, type: 'Technical Masterclass', title: 'Hands-on Rust Programming & WebAssembly',
            issuer: 'Zero-cost abstractions, memory ownership models, and compiling safe Rust binaries for...',
            credits: '+0.5 Credit', date: 'Aug 28, 2024', hashID: 'GCU CERT 2024 RUST 021'
        },
        {
            id: 5, type: 'Hands-on Bootcamp', title: 'Cybersecurity & Vulnerability Assessment Lab',
            issuer: 'Certified offensive security simulation, OWASP Top 10 auditing, and penetration lab...',
            credits: '+0.5 Credit', date: 'Feb 20, 2025', hashID: 'GCU CERT 2025 SEC 104'
        },
        {
            id: 6, type: 'Seminar Participation', title: 'Machine Learning & Healthcare Diagnostics',
            issuer: 'Joint medical AI symposia exploring automated radiology scans and ethical...',
            credits: '+0.5 Credit', date: 'Mar 15, 2025', hashID: 'GCU CERT 2025 MED 100'
        }
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] mx-auto mt-2 space-y-6">

            {/* Top Breadcrumb Context */}
            <div className="flex justify-between items-center bg-transparent px-1 py-1 text-[10px] font-bold">
                <div className="flex items-center gap-2 text-slate-500 uppercase tracking-widest flex-wrap">
                    GCU Campus &gt; Student Portal &gt; Participation &gt; <span className="text-primary">Verified Certificates & Credentials</span>
                </div>
            </div>

            {/* Main Header */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-2">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-[4px] text-[10px] font-bold tracking-widest uppercase">Institutional Ledger #2024-25</span>
                        <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded-[4px] text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> DigiLocker / NAD Validated</span>
                    </div>
                    <h1 className="text-[28px] md:text-[32px] font-bold text-[#0f172a] tracking-tight leading-[1.1] mb-3">
                        Verified Certificates & Digital<br />Credentials
                    </h1>
                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                        Cryptographically anchored, tamper-proof academic event certificates, merit awards, and co-curricular credit badges verified on the GCU Private Subnet and mirrored to DigiLocker / NAD.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 w-full xl:w-auto shrink-0 mt-4 xl:mt-0">
                    <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors">
                        <Download className="w-4 h-4 text-slate-400" /> Download All (.ZIP)
                    </button>
                    <button className="bg-[#0f172a] text-white hover:bg-slate-800 shadow-sm px-5 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center gap-2 transition-colors">
                        <FileText className="w-4 h-4" /> Export Transcript Ledger (PDF)
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Earned</h3>
                        <div className="w-8 h-8 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600"><ShieldCheck className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-[32px] md:text-[36px] font-bold text-slate-900 leading-none tracking-tight">12</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold pt-3 border-t border-slate-100 text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" /> 100% On-Chain Hash Verified
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Co-Curricular Credits</h3>
                        <div className="w-8 h-8 rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600"><BookOpen className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-[32px] md:text-[36px] font-bold text-slate-900 leading-none tracking-tight">4.5</span>
                        <span className="text-[14px] font-bold text-slate-400">/ 8.0</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-bold pt-3 border-t border-slate-100 text-slate-500">
                        <span>56% of NAAC Requirement</span>
                        <span className="text-slate-400">3.5 req...</span>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Merit & Podium Awards</h3>
                        <div className="w-8 h-8 rounded-md bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600"><Trophy className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-[32px] md:text-[36px] font-bold text-slate-900 leading-none tracking-tight">3</span>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] font-bold pt-3 border-t border-slate-100 text-slate-600">
                        <span className="flex items-center gap-1.5"><div className="w-4 h-4 rounded bg-slate-100 flex justify-center items-center text-[9px]">2</div> Runner-up</span>
                        <span className="text-slate-300">•</span>
                        <span className="flex items-center gap-1.5"><div className="w-4 h-4 rounded bg-amber-100 text-amber-700 flex justify-center items-center text-[9px]">1</div> First Prize</span>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm bg-gradient-to-br from-white to-teal-50/30">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">DigiLocker & NAD</h3>
                        <div className="w-8 h-8 rounded-md bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600"><LinkIcon className="w-4 h-4" /></div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[20px] md:text-[24px] font-bold text-slate-900 leading-tight tracking-tight">Synced & Linked</span>
                        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-sm shadow-emerald-200"></div>
                    </div>
                    <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest pt-3 border-t border-slate-200 text-slate-500">
                        <span className="text-slate-400">NAD ID: GCU 21-1402</span>
                        <span className="flex items-center gap-1 text-teal-700"><ShieldCheck className="w-3 h-3" /> ABC Active</span>
                    </div>
                </div>
            </div>

            {/* Spotlight Credential Hero */}
            <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm overflow-hidden mt-6">
                <div className="bg-slate-50 border-b border-slate-100 px-6 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2"><Award className="w-3.5 h-3.5 text-blue-600" /> Spotlight Credential: Most Recent Distinction</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Assam Tech Innovation Conclave 2024</span>
                </div>

                <div className="p-6 grid grid-cols-1 xl:grid-cols-3 gap-8">

                    {/* Actual Certificate Mockup Frame */}
                    <div className="xl:col-span-2 relative bg-white border border-slate-200 shadow-md rounded-[12px] p-8 md:p-12 aspect-[1.414] sm:aspect-auto sm:min-h-[460px] flex flex-col justify-center text-center overflow-hidden">

                        {/* subtle background pattern */}
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100%] opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-50 rounded-tr-[100%] opacity-50"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-10 text-left">
                                <div className="flex items-center gap-4 text-left">
                                    <div className="w-14 h-14 bg-[#0f172a] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner">GCU</div>
                                    <div>
                                        <h2 className="text-[13px] md:text-[15px] text-[#0f172a] font-bold tracking-[2px] leading-tight mb-0.5">GIRIJANANDA CHOWDHURY UNIVERSITY</h2>
                                        <p className="text-[8px] md:text-[9px] text-slate-500 font-bold uppercase tracking-[2px]">Office of the Controller of Examinations & Student Affairs</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 max-w-2xl mx-auto">
                                <h4 className="text-[11px] font-bold text-blue-700 tracking-[4px] uppercase mb-1">Certificate of Merit</h4>
                                <h1 className="text-[26px] md:text-[36px] font-bold text-slate-900 font-serif leading-tight">TechVenture 2024: All India Hackathon</h1>

                                <div className="flex justify-center my-4">
                                    <span className="bg-[#0f172a] text-white px-5 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-2 shadow-sm"><Trophy className="w-3.5 h-3.5 text-amber-400" /> 1st Runner Up (Merit Distinction)</span>
                                </div>

                                <p className="text-[13px] md:text-[16px] text-slate-700 italic font-medium leading-relaxed max-w-xl mx-auto mt-4 px-4">
                                    Conferred upon <strong className="font-bold text-[#0f172a] not-italic">Ananya Sharma</strong> (GCU/2023/BTECH/042) for exceptional innovation in Autonomous Disaster Telemetry.
                                </p>
                            </div>

                            <div className="flex justify-between items-end mt-16 md:mt-24 px-4 md:px-12 relative">
                                <div className="text-center w-40">
                                    <div className="h-6 mb-1 text-[18px] font-serif font-bold text-slate-800 italic border-b border-slate-300 mx-auto w-3/4">P. Barman</div>
                                    <h4 className="text-[10px] font-bold text-slate-700 mt-2">Dr. Pranjal Barman</h4>
                                    <p className="text-[9px] text-slate-500 font-medium">Head, Dept. of CSE</p>
                                </div>

                                <div className="flex flex-col items-center justify-center opacity-80 md:absolute md:left-1/2 md:-translate-x-1/2">
                                    <div className="w-14 h-14 rounded-full border-2 border-blue-200 bg-blue-50/50 flex items-center justify-center text-blue-600 mb-1">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <span className="text-[7px] font-bold text-slate-400 uppercase tracking-widest">SEAL 46208</span>
                                </div>

                                <div className="text-center w-40">
                                    <div className="h-6 mb-1 text-[18px] font-serif font-bold text-slate-800 italic border-b border-slate-300 mx-auto w-3/4">K. Sarma</div>
                                    <h4 className="text-[10px] font-bold text-slate-700 mt-2">Dr. K. Sarma</h4>
                                    <p className="text-[9px] text-slate-500 font-medium">Vice-Chancellor, GCU</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Data Panel */}
                    <div className="flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-[6px] text-[10px] font-bold flex items-center gap-1.5 shadow-sm">
                                <Activity className="w-3.5 h-3.5" /> 1.5 Activity Credits Awarded
                            </span>
                            <span className="text-[11px] font-bold text-slate-400">Issued Dec 14, 2024</span>
                        </div>

                        <h3 className="text-[18px] md:text-[22px] font-bold text-slate-900 leading-tight mb-3 pr-4">TechVenture 2024: All India Hackathon – 1st Runner Up</h3>
                        <p className="text-[12px] text-slate-600 font-medium leading-relaxed mb-6">
                            Organized by the Department of Computer Science & Engineering in partnership with Assam Science Technology and Environment Council (ASTEC). Evaluated by 14 industry adjudicators.
                        </p>

                        {/* Blockchain Details */}
                        <div className="bg-slate-50 border border-slate-200 rounded-[12px] p-4 mb-6">
                            <table className="w-full text-left text-[11px]">
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="py-2.5 font-bold text-slate-500 uppercase tracking-widest text-[9px] w-[140px]">Ledger Verification Node</td>
                                        <td className="py-2.5 font-mono font-bold text-slate-800 text-right">BLOCK 482109X</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-slate-500 uppercase tracking-widest text-[9px]">CPAT ID</td>
                                        <td className="py-2.5 font-mono font-bold text-slate-800 text-right">GCU CERT 2024 HACK 041</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-slate-500 uppercase tracking-widest text-[9px]">SHA-256</td>
                                        <td className="py-2.5 font-mono font-bold text-slate-800 text-right">0x4a0f...9b2e</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-slate-500 uppercase tracking-widest text-[9px]">Issued By</td>
                                        <td className="py-2.5 font-mono font-bold text-slate-800 text-right">GCU School of Tech (SOET)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex gap-3 mb-6 mt-auto">
                            <button className="flex-1 bg-[#0f172a] text-white hover:bg-slate-800 shadow-sm px-4 py-3 rounded-[8px] text-[12px] font-bold flex items-center justify-center gap-2 transition-colors">
                                <Download className="w-4 h-4" /> Download PDF
                            </button>
                            <button className="flex-1 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm px-4 py-3 rounded-[8px] text-[12px] font-bold flex items-center justify-center gap-2 transition-colors">
                                <Share2 className="w-4 h-4" /> Share Link
                            </button>
                        </div>

                        <div className="text-center bg-blue-50/50 border border-blue-100 py-3 rounded-[8px] flex items-center justify-center gap-2">
                            <LinkIcon className="w-3.5 h-3.5 text-blue-600" />
                            <span className="text-[11px] font-bold text-slate-600">DigiLocker Push ID: <span className="font-mono text-slate-800">GCU-DL-2024-8841</span> <span className="text-teal-600 ml-1 font-medium">(Synchronized)</span></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter / Search Bar */}
            <div className="bg-white border border-slate-200 rounded-[12px] p-4 flex flex-col lg:flex-row gap-4 justify-between items-center shadow-sm">
                <div className="relative w-full lg:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="text" placeholder="Search event, credential ID, or key..." className="w-full bg-slate-50 border border-slate-200 rounded-[8px] pl-10 pr-4 py-2 text-[12px] font-medium text-slate-700 outline-none focus:border-primary transition-colors h-10" />
                </div>

                <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 w-full lg:w-auto">
                    {['All Categories', 'All Terms', 'All Credential Types'].map((label, idx) => (
                        <div key={idx} className="relative flex-1 lg:w-44">
                            <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-[8px] px-4 py-2 h-10 text-[12px] font-bold text-slate-600 outline-none cursor-pointer shadow-sm">
                                <option>{label}</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                    ))}

                    <div className="flex items-center ml-auto lg:ml-2 bg-slate-50 p-1 rounded-[8px] border border-slate-200 h-10">
                        <button className="w-8 h-full bg-white text-slate-800 rounded-[6px] text-[11px] font-bold flex items-center justify-center shadow-sm">
                            <LayoutGrid className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-full text-slate-400 rounded-[6px] text-[11px] font-bold flex items-center justify-center hover:text-slate-800 transition-colors">
                            <List className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {credentials.map((cert) => (
                    <div key={cert.id} className="bg-white border border-slate-200 rounded-[12px] shadow-sm flex flex-col hover:shadow-md transition-shadow">
                        <div className="p-5 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest">{cert.type}</span>
                                <span className="text-teal-600 font-bold text-[10px] flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> Verified</span>
                            </div>
                            <h3 className="text-[15px] font-bold text-slate-900 leading-tight mb-2 pr-4">{cert.title}</h3>
                            <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-6 flex-1 pr-2">{cert.issuer}</p>

                            <div className="bg-slate-50 border border-slate-100 rounded-[8px] p-3 mb-2 flex justify-between items-center text-[10px] font-bold">
                                <div className="flex flex-col gap-1 text-slate-500">
                                    <span className="uppercase tracking-widest text-[9px] text-slate-400">Activity Credits</span>
                                    <span className="text-slate-900">{cert.credits}</span>
                                </div>
                                <div className="flex flex-col gap-1 text-slate-500 text-right">
                                    <span className="uppercase tracking-widest text-[9px] text-slate-400">Issue Date</span>
                                    <span className="text-slate-900">{cert.date}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono font-bold px-1 mb-4">
                                <span className="bg-slate-100 px-1 py-0.5 rounded border border-slate-200 text-slate-500 text-[9px]">ID</span> {cert.hashID}
                            </div>

                            {/* Footer Actions */}
                            <div className="grid grid-cols-5 gap-2">
                                <button className="col-span-3 bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 py-2.5 rounded-[6px] text-[11px] font-bold flex items-center justify-center gap-2 transition-colors">
                                    <Eye className="w-3.5 h-3.5" /> Preview
                                </button>
                                <button className="bg-white border border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 py-2.5 rounded-[6px] flex items-center justify-center transition-colors">
                                    <Download className="w-4 h-4" />
                                </button>
                                <button className="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 py-2.5 rounded-[6px] flex items-center justify-center transition-colors">
                                    <Hash className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Disclaimer */}
            <div className="bg-white border border-blue-100 rounded-[12px] p-5 shadow-sm flex flex-col md:flex-row items-center gap-6 mt-6">
                <div className="w-12 h-12 rounded-[10px] bg-[#0f172a] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Landmark className="w-6 h-6" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
                        <h3 className="text-[12px] font-bold text-slate-900 uppercase tracking-widest">Academic Bank of Credits (ABC) & SAMARTH Depository</h3>
                        <span className="bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded text-[9px] font-bold">UGC Recognized</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed max-w-4xl">
                        All issued credentials are cryptographically signed using GCU's SHA-256 e-Governance keys, automatically recorded in your National Academic Depository (NAD) account, and synchronized with SAMARTH for NAAC Criterion 5 compliance.
                    </p>
                </div>
                <button className="shrink-0 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm px-5 py-2.5 rounded-[8px] text-[12px] font-bold flex flex-row items-center gap-2 transition-colors">
                    <ExternalLink className="w-4 h-4 text-slate-400" /> View ABC Portal
                </button>
            </div>

        </div>
    );
}
