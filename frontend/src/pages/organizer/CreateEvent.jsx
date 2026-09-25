import { useState } from 'react';
import {
    Save,
    Eye,
    Send,
    CheckCircle2,
    BookOpen,
    CalendarDays,
    MapPin,
    Users,
    Building2,
    CheckSquare,
    Settings,
    Clock,
    Check,
    Plus,
    Trash2,
    ShieldCheck,
    Info,
    ChevronRight
} from 'lucide-react';

export default function CreateEvent() {
    const [activeStep, setActiveStep] = useState(2);

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] mx-auto">

            {/* Header */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-8 mt-2">
                <div>
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-[11px] tracking-widest uppercase mb-2">
                        GCU Campus &gt; Faculty Coordinator Portal &gt; <span className="text-primary">Create Event Proposal</span>
                    </div>
                    <h1 className="text-[28px] font-bold text-slate-900 tracking-tight leading-tight">New Event Proposal & Clearance Dossier</h1>
                    <p className="text-slate-500 mt-1.5 text-[13px] max-w-3xl leading-relaxed">
                        Submit institutional event proposals for UGC syllabus alignment, estate safety clearance, duty leave sanctions, and automated certificate workflows.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 w-full xl:w-auto">
                    <button className="flex-1 xl:flex-none items-center justify-center gap-2 bg-white text-slate-700 border border-slate-300 px-4 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-slate-50 transition-colors shadow-sm flex">
                        <Save className="w-4 h-4" /> Save as Draft
                    </button>
                    <button className="flex-1 xl:flex-none items-center justify-center gap-2 bg-white text-slate-700 border border-slate-300 px-4 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-slate-50 transition-colors shadow-sm flex">
                        <Eye className="w-4 h-4" /> Preview Public Listing
                    </button>
                    <button className="flex-1 xl:flex-none items-center justify-center gap-2 bg-primary text-white border border-primary px-5 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-primary-container transition-colors shadow-sm flex">
                        <Send className="w-4 h-4" /> Submit for Dean Approval
                    </button>
                </div>
            </div>

            {/* Modern Stepper */}
            <div className="bg-white border border-slate-200 rounded-[12px] p-2 flex overflow-x-auto no-scrollbar shadow-sm mb-8">
                <div className="flex items-center min-w-max px-2">
                    {[
                        { n: 1, label: 'Basic Info', state: 'done' },
                        { n: 2, label: 'Event Details', state: 'active' },
                        { n: 3, label: 'Schedule & Slots', state: 'pending' },
                        { n: 4, label: 'Venue Allocation', state: 'pending' },
                        { n: 5, label: 'Registration', state: 'pending' },
                        { n: 6, label: 'Duty Leaves', state: 'pending' },
                        { n: 7, label: 'Compliance', state: 'pending' }
                    ].map((step, idx) => (
                        <div key={idx} className="flex items-center">
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-[8px] ${step.state === 'active' ? 'bg-primary/5' : ''}`}>
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${step.state === 'done' ? 'bg-emerald-500 text-white' :
                                        step.state === 'active' ? 'bg-primary text-white' :
                                            'bg-slate-100 text-slate-400'
                                    }`}>
                                    {step.state === 'done' ? <Check className="w-3.5 h-3.5" /> : step.n}
                                </div>
                                <div>
                                    <p className={`text-[10px] uppercase font-bold tracking-widest ${step.state === 'done' ? 'text-emerald-600' : step.state === 'active' ? 'text-primary' : 'text-slate-400'}`}>Step {step.n}</p>
                                    <p className={`text-[13px] font-bold ${step.state === 'pending' ? 'text-slate-400' : 'text-slate-900'} whitespace-nowrap`}>{step.label}</p>
                                </div>
                            </div>
                            {idx < 6 && <div className="w-8 h-px bg-slate-200 mx-2"></div>}
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">

                {/* LEFT COLUMN: Form Sections */}
                <div className="xl:col-span-2 space-y-6">

                    {/* 1. Categorization */}
                    <div className="bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm">
                        <div className="bg-slate-50/50 p-5 border-b border-slate-200 flex justify-between items-center">
                            <h3 className="font-bold text-[16px] text-slate-900 flex items-center gap-2"><BookOpen className="w-4 h-4 text-slate-400" /> 1. Categorization & Departmental Affiliation</h3>
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-[6px] text-[11px] font-bold">Mandatory UGC Dossier</span>
                        </div>
                        <div className="p-6 space-y-6">
                            <div>
                                <label className="text-[12px] font-bold text-slate-700 block mb-2">Official Event Title <span className="text-red-500">*</span></label>
                                <input type="text" defaultValue="TechVenture 2026: North-East Artificial Intelligence & Autonomous Systems Summit" className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[14px] font-bold text-slate-900 outline-none focus:border-primary transition-colors bg-white shadow-sm" />
                                <p className="text-[11px] text-slate-500 mt-2 font-medium">Include the primary theme and geographical or disciplinary designation as per UGC gazette norms.</p>
                            </div>

                            <div>
                                <label className="text-[12px] font-bold text-slate-700 block mb-2">Event Subtitle / Tagline</label>
                                <textarea rows="2" defaultValue="A 2-day flagship symposium featuring hands-on AI workshops, paper presentations, and robotics arena battles." className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[13px] font-medium text-slate-600 outline-none focus:border-primary transition-colors bg-white shadow-sm resize-none"></textarea>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-[12px] font-bold text-slate-700 block mb-2">Event Academic Category <span className="text-red-500">*</span></label>
                                    <select className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[13px] font-medium text-slate-700 outline-none focus:border-primary transition-colors bg-white shadow-sm appearance-none cursor-pointer">
                                        <option>Institutional National Symposium</option>
                                        <option>Departmental Workshop</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-[12px] font-bold text-slate-700 block mb-2">Primary Host Department</label>
                                    <div className="flex items-center justify-between border border-primary/30 bg-primary/5 rounded-[8px] px-4 py-2.5 shadow-sm">
                                        <span className="text-[13px] font-bold text-primary">Dept. of Computer Science & Eng.</span>
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="text-[12px] font-bold text-slate-700 block mb-2">Co-Organizing Department & Recognized Student Bodies</label>
                                <div className="flex flex-wrap gap-2 border border-slate-200 rounded-[8px] p-2 bg-slate-50 shadow-inner">
                                    <span className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full text-[12px] font-semibold flex items-center gap-2 shadow-sm">
                                        <Building2 className="w-3.5 h-3.5 text-slate-400" /> GCU Robotics & Coding Club <button className="text-slate-400 hover:text-red-500 ml-1">✕</button>
                                    </span>
                                    <span className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full text-[12px] font-semibold flex items-center gap-2 shadow-sm">
                                        <Building2 className="w-3.5 h-3.5 text-slate-400" /> Dept. of Electronics & Communication <button className="text-slate-400 hover:text-red-500 ml-1">✕</button>
                                    </span>
                                    <button className="text-primary px-3 py-1.5 text-[12px] font-bold flex items-center gap-1 hover:bg-primary/5 rounded-full transition-colors ml-1"><Plus className="w-3.5 h-3.5" /> Add Affiliated Body</button>
                                </div>
                            </div>

                            <div>
                                <label className="text-[12px] font-bold text-slate-700 block mb-3">Institutional Scope & Target Reach</label>
                                <div className="flex flex-wrap gap-3">
                                    {['University-only', 'State-level', 'National-level', 'International'].map(scope => (
                                        <label key={scope} className={`flex items-center gap-2 border rounded-full px-4 py-2 cursor-pointer transition-colors shadow-sm ${scope === 'National-level' ? 'bg-primary text-white border-primary' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}>
                                            <input type="radio" name="scope" className="hidden" defaultChecked={scope === 'National-level'} />
                                            <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${scope === 'National-level' ? 'border-white' : 'border-slate-300'}`}>
                                                {scope === 'National-level' && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                                            </div>
                                            <span className="text-[12px] font-bold">{scope}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Schedule */}
                    <div className="bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm">
                        <div className="bg-slate-50/50 p-5 border-b border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <h3 className="font-bold text-[16px] text-slate-900 flex items-center gap-2"><CalendarDays className="w-4 h-4 text-slate-400" /> 2. Date, Time & Multi-Day Session Schedule</h3>
                            <div className="flex bg-slate-200/50 p-1 rounded-[8px]">
                                <button className="px-4 py-1.5 rounded-[6px] text-[12px] font-bold text-slate-500 hover:text-slate-700">Single Day</button>
                                <button className="px-4 py-1.5 rounded-[6px] text-[12px] font-bold bg-white text-primary shadow-sm">Multi-Day</button>
                                <button className="px-4 py-1.5 rounded-[6px] text-[12px] font-bold text-slate-500 hover:text-slate-700">Recurring</button>
                            </div>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="text-[12px] font-bold text-slate-700 block mb-2">Start Date</label>
                                    <div className="relative">
                                        <CalendarDays className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                        <input type="text" defaultValue="04/10/2026" className="w-full border border-slate-200 rounded-[8px] pl-4 pr-10 py-3 text-[14px] font-bold text-slate-900 outline-none focus:border-primary shadow-sm" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-[12px] font-bold text-slate-700 block mb-2">End Date</label>
                                    <div className="relative">
                                        <CalendarDays className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                        <input type="text" defaultValue="04/12/2026" className="w-full border border-slate-200 rounded-[8px] pl-4 pr-10 py-3 text-[14px] font-bold text-slate-900 outline-none focus:border-primary shadow-sm" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-[12px] font-bold text-slate-700 block mb-2">Daily Timings (IST)</label>
                                    <input type="text" defaultValue="09:00 AM – 05:30 PM" className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[14px] font-bold text-slate-900 outline-none focus:border-primary shadow-sm text-center tracking-wide" />
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <div className="flex justify-between items-center mb-4">
                                    <label className="text-[12px] font-bold text-slate-700 block">Program Schedule Timeline Breakdown</label>
                                    <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">3 Slots Configured</span>
                                </div>

                                <div className="space-y-3">
                                    {/* Slot 1 */}
                                    <div className="border border-slate-200 rounded-[12px] p-4 bg-slate-50 flex gap-4 items-start shadow-sm">
                                        <div className="w-8 h-8 shrink-0 bg-white border border-slate-200 rounded-[6px] flex items-center justify-center font-bold text-slate-400 text-[12px]">1</div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <h4 className="text-[14px] font-bold text-slate-900">Keynote & Autonomous Drone Live Demonstration</h4>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-[11px] font-bold text-slate-500">Day 1 • 09:30 AM - 01:00 PM</span>
                                                    <button className="text-slate-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                                                </div>
                                            </div>
                                            <p className="text-[12px] text-slate-500 font-medium">Inauguration by Vice-Chancellor, plenary keynote by Prof. D. Sharma (IIG), and indoor swarm robotics flight trial in Auditorium Quad.</p>
                                        </div>
                                    </div>

                                    {/* Slot 2 */}
                                    <div className="border border-slate-200 rounded-[12px] p-4 bg-slate-50 flex gap-4 items-start shadow-sm">
                                        <div className="w-8 h-8 shrink-0 bg-white border border-slate-200 rounded-[6px] flex items-center justify-center font-bold text-slate-400 text-[12px]">2</div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <h4 className="text-[14px] font-bold text-slate-900">Hands-on Edge Computer Vision & ROS 2 Workshop</h4>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-[11px] font-bold text-slate-500">Day 1 • 02:00 PM - 05:30 PM</span>
                                                    <button className="text-slate-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                                                </div>
                                            </div>
                                            <p className="text-[12px] text-slate-500 font-medium">Lab session for 120 pre-registered delegates at Advanced Computing Lab with hardware deployment kits.</p>
                                        </div>
                                    </div>

                                    {/* Slot 3 */}
                                    <div className="border border-slate-200 rounded-[12px] p-4 bg-slate-50 flex gap-4 items-start shadow-sm">
                                        <div className="w-8 h-8 shrink-0 bg-white border border-slate-200 rounded-[6px] flex items-center justify-center font-bold text-slate-400 text-[12px]">3</div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <h4 className="text-[14px] font-bold text-slate-900">National AI Hackathon Grand Finale & Valedictory</h4>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-[11px] font-bold text-slate-500">Day 2 • 10:00 AM - 04:30 PM</span>
                                                    <button className="text-slate-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                                                </div>
                                            </div>
                                            <p className="text-[12px] text-slate-500 font-medium">24-hour prototype evaluation by industry jury, award ceremony, and certificate dispatch distribution.</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full mt-4 bg-primary/5 text-primary border border-primary/20 border-dashed py-3 rounded-[8px] font-bold text-[13px] flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors">
                                    <Plus className="w-4 h-4" /> Add Session Block
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* 3. Venue Allocation */}
                    <div className="bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm">
                        <div className="bg-slate-50/50 p-5 border-b border-slate-200 flex justify-between items-center">
                            <h3 className="font-bold text-[16px] text-slate-900 flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /> 3. Venue Allocation & Facilities Requisition</h3>
                            <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-[6px] text-[11px] font-bold flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Estate Clearance</span>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-[12px] font-bold text-slate-700 block mb-2">Primary Auditorium / Ground</label>
                                    <select className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[13px] font-bold text-slate-900 outline-none focus:border-primary shadow-sm appearance-none mb-2">
                                        <option>Central Auditorium (Capacity: 500)</option>
                                    </select>
                                    <p className="text-[11px] font-medium text-emerald-600 flex items-start gap-1"><Check className="w-3.5 h-3.5 shrink-0" /> Available for selected dates (10 - 12 Apr, 2026)</p>
                                </div>
                                <div>
                                    <label className="text-[12px] font-bold text-slate-700 block mb-2">Backup / Parallel Breakout Venues</label>
                                    <select className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[13px] font-medium text-slate-900 outline-none focus:border-primary shadow-sm appearance-none mb-2">
                                        <option>Advanced Computing Lab (Block C)</option>
                                    </select>
                                    <p className="text-[11px] font-medium text-slate-500">Will be locked in the University Estate Reservation ledger.</p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <label className="text-[12px] font-bold text-slate-700 block mb-3">Mandatory Campus Facilities & Security Requisitions</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <label className="flex items-start gap-3 bg-primary/5 border border-primary/20 p-3 rounded-[8px] cursor-pointer">
                                        <div className="mt-0.5 w-4 h-4 rounded bg-primary text-white flex items-center justify-center"><CheckSquare className="w-3 h-3" /></div>
                                        <div>
                                            <p className="text-[12px] font-bold text-slate-900">High-Speed Campus Fiber Wi-Fi</p>
                                            <p className="text-[11px] text-slate-500 font-medium">Dedicated 1Gbps SSIDs for drone control & livestream</p>
                                        </div>
                                    </label>
                                    <label className="flex items-start gap-3 bg-primary/5 border border-primary/20 p-3 rounded-[8px] cursor-pointer">
                                        <div className="mt-0.5 w-4 h-4 rounded bg-primary text-white flex items-center justify-center"><CheckSquare className="w-3 h-3" /></div>
                                        <div>
                                            <p className="text-[12px] font-bold text-slate-900">Live AV, Stage Rigging & Lapels</p>
                                            <p className="text-[11px] text-slate-500 font-medium">4 wireless lapels, auditorium digital projectors & console</p>
                                        </div>
                                    </label>
                                    <label className="flex items-start gap-3 bg-primary/5 border border-primary/20 p-3 rounded-[8px] cursor-pointer">
                                        <div className="mt-0.5 w-4 h-4 rounded bg-primary text-white flex items-center justify-center"><CheckSquare className="w-3 h-3" /></div>
                                        <div>
                                            <p className="text-[12px] font-bold text-slate-900">Dedicated DG Backup Power</p>
                                            <p className="text-[11px] text-slate-500 font-medium">Zero-interruption UPS line to computing cluster</p>
                                        </div>
                                    </label>
                                    <label className="flex items-start gap-3 bg-primary/5 border border-primary/20 p-3 rounded-[8px] cursor-pointer">
                                        <div className="mt-0.5 w-4 h-4 rounded bg-primary text-white flex items-center justify-center"><CheckSquare className="w-3 h-3" /></div>
                                        <div>
                                            <p className="text-[12px] font-bold text-slate-900">Overnight Security & Hostel Passes</p>
                                            <p className="text-[11px] text-slate-500 font-medium">Gate protocol for 120 hackathon delegates till 06:00 AM</p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Registration & Duty Leaves */}
                    <div className="bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm mb-6">
                        <div className="bg-slate-50/50 p-5 border-b border-slate-200 flex justify-between items-center">
                            <h3 className="font-bold text-[16px] text-slate-900 flex items-center gap-2"><Users className="w-4 h-4 text-slate-400" /> 4. Registration Limits & Student Duty Leaves</h3>
                            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-[6px] text-[11px] font-bold">Attendance Auto-Sync</span>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-3 gap-6">
                                <div>
                                    <label className="text-[12px] font-bold text-slate-700 block mb-2">Total Participant Cap</label>
                                    <div className="relative">
                                        <input type="text" defaultValue="450" className="w-full border border-slate-200 rounded-[8px] pl-4 pr-12 py-3 text-[14px] font-bold text-slate-900 outline-none focus:border-primary shadow-sm" />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] text-slate-400 font-bold">seats</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-[12px] font-bold text-slate-700 block mb-2">Walk-In Spot Buffer</label>
                                    <div className="relative">
                                        <input type="text" defaultValue="50" className="w-full border border-slate-200 rounded-[8px] pl-4 pr-12 py-3 text-[14px] font-bold text-slate-900 outline-none focus:border-primary shadow-sm" />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] text-slate-400 font-bold">seats</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-[12px] font-bold text-slate-700 block mb-2">Fee Structure Policy</label>
                                    <div className="flex border border-slate-200 rounded-[8px] overflow-hidden shadow-sm text-center">
                                        <div className="flex-1 bg-white py-3 text-[12px] font-bold text-slate-500 leading-tight">Free for<br />GCU Students</div>
                                        <div className="flex-1 bg-slate-50 py-3 text-[14px] font-bold text-slate-900 flex items-center justify-center border-l border-slate-200">100% Waiver</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-indigo-50/50 border border-indigo-100 rounded-[12px] p-5">
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <div className="mt-0.5 w-5 h-5 rounded bg-primary text-white flex items-center justify-center shrink-0"><CheckSquare className="w-3.5 h-3.5" /></div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <p className="text-[14px] font-bold text-slate-900">Sanction UGC & University Co-Curricular Academic Duty Leaves</p>
                                            <span className="bg-indigo-100 text-indigo-700 text-[11px] font-bold px-2 py-1 rounded-[4px]">Automated Roll-Call Credit</span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                            Enrolled students will receive approved Academic Leave in GCU ERP attendance registers upon completing at least <strong className="text-slate-700">80% verified QR scan checks</strong> across plenary and laboratory sessions.
                                        </p>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons footer */}
                    <div className="flex justify-between items-center pt-4">
                        <button className="text-slate-500 text-[13px] font-bold hover:text-slate-900 transition-colors flex items-center gap-2">
                            &lt; Back to Step 1: Basic Info
                        </button>
                        <button className="bg-primary text-white border border-primary px-6 py-3 rounded-[8px] text-[14px] font-bold hover:bg-primary-container transition-colors shadow-sm flex items-center gap-2">
                            Next: Venue & Security Clearance <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                </div>


                {/* RIGHT COLUMN: Sticky Sidebars */}
                <div className="space-y-6 sticky top-6">

                    {/* Live Public Card Preview */}
                    <div className="bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm">
                        <div className="flex justify-between items-center border-b border-slate-100 px-4 py-3 bg-slate-50">
                            <span className="text-[11px] font-bold text-primary flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div> Live Public Card Preview</span>
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Student Portal View</span>
                        </div>
                        <div className="p-4 bg-slate-50/50">
                            {/* Simulated Event Card */}
                            <div className="bg-white border border-slate-200 rounded-[12px] shadow-sm flex flex-col overflow-hidden pointer-events-none opacity-90 scale-95 origin-top">
                                <div className="h-28 relative overflow-hidden bg-slate-900 flex items-center justify-center">
                                    <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop" className="opacity-50 absolute w-full h-full object-cover" alt="Preview" />
                                    <div className="absolute top-2 left-2 flex gap-1">
                                        <span className="bg-white text-slate-900 text-[9px] font-bold px-2 py-0.5 rounded shadow-sm flex items-center gap-1"><ShieldCheck className="w-2.5 h-2.5" /> National Symposium</span>
                                    </div>
                                    <div className="relative z-10 w-full px-3 flex justify-between items-end mt-12 text-white font-bold leading-tight">
                                        <div className="text-[16px]">CSE<br />Department</div>
                                        <div className="text-right text-[12px]">10 - 12 Apr<br />2026</div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <h3 className="text-[13px] font-bold text-slate-900 leading-tight mb-1">TechVenture 2026: North-East AI & Autonomous Systems Summit</h3>
                                    <p className="text-[10px] text-slate-500 line-clamp-2 mb-3">Hands-on AI workshops, paper presentations, and robotics arena battle...</p>

                                    <div className="grid grid-cols-2 gap-2 mb-3 border-b border-slate-100 pb-3">
                                        <div className="flex gap-1.5 items-start">
                                            <MapPin className="w-3 h-3 text-slate-400 mt-0.5" />
                                            <span className="text-[10px] font-bold text-slate-700">Central Auditorium</span>
                                        </div>
                                        <div className="flex gap-1.5 items-start justify-end">
                                            <span className="text-[11px] font-bold text-emerald-600">Free Entry</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-end mb-1">
                                        <span className="text-[9px] font-bold text-slate-500 uppercase">Registration Allocation</span>
                                        <span className="text-[11px] font-bold text-slate-900">0 / 450 Booked</span>
                                    </div>
                                    <div className="h-1 w-full bg-slate-100 rounded-full mb-3"><div className="h-full bg-primary w-[2%]"></div></div>
                                    <button className="w-full bg-slate-100 text-slate-400 font-bold text-[11px] py-1.5 rounded-[6px]">Register Now (Preview Mode)</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Clearance Pipeline Tracker */}
                    <div className="bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm">
                        <div className="flex justify-between items-center border-b border-slate-100 px-5 py-4">
                            <span className="text-[13px] font-bold text-slate-900 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Clearance Pipeline</span>
                            <span className="text-[10px] text-slate-400 font-medium">Est.: ~36 Hours</span>
                        </div>
                        <div className="p-5">
                            <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-6">
                                Your proposal triggers automated workflow checkpoints across university governance authorities.
                            </p>

                            <div className="space-y-0 relative before:absolute before:inset-0 before:ml-[1.125rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">

                                {/* Step 1 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-5 pl-[3rem] md:pl-0">
                                    <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 left-[0.6rem] md:left-1/2 absolute">
                                        <Check className="w-2.5 h-2.5" />
                                    </div>
                                    <div className="w-full bg-slate-50 border border-slate-200 p-3 rounded-[8px] shadow-sm">
                                        <div className="flex justify-between mb-1">
                                            <h4 className="text-[11px] font-bold text-slate-900 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> 1. HOD Endorsement (CSE)</h4>
                                            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 rounded border border-emerald-100">Auto-Approved</span>
                                        </div>
                                        <p className="text-[10px] text-slate-500 font-medium">Dr. Pranjal Barman (Coordinator & Head)</p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-5 pl-[3rem] md:pl-0">
                                    <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-secondary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 left-[0.6rem] md:left-1/2 absolute z-10 animate-pulse">
                                        <Clock className="w-2 h-2" />
                                    </div>
                                    <div className="w-full bg-white border border-primary/30 p-3 rounded-[8px] shadow-sm">
                                        <div className="flex justify-between mb-1">
                                            <h4 className="text-[11px] font-bold text-slate-900 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-secondary" /> 2. Dean Academic Affairs</h4>
                                            <span className="text-[11px] font-bold text-secondary">Ready for Dispatch</span>
                                        </div>
                                        <p className="text-[10px] text-slate-500 font-medium">Evaluates syllabus relevance & duty leave credits</p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-5 pl-[3rem] md:pl-0">
                                    <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-slate-200 text-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 left-[0.6rem] md:left-1/2 absolute z-10">
                                        <Building2 className="w-2 h-2" />
                                    </div>
                                    <div className="w-full bg-white border border-slate-200 border-dashed p-3 rounded-[8px] shadow-sm opacity-60">
                                        <div className="flex justify-between mb-1">
                                            <h4 className="text-[11px] font-bold text-slate-600 flex items-center gap-1.5">3. Estate & Safety Officer</h4>
                                            <span className="text-[11px] font-bold text-slate-400">Pending Submit</span>
                                        </div>
                                        <p className="text-[10px] text-slate-500 font-medium leading-tight">Fire safety, auditorium acoustics & crowd protocols</p>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active pl-[3rem] md:pl-0">
                                    <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-slate-200 text-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 left-[0.6rem] md:left-1/2 absolute z-10">
                                        <div className="text-[8px] font-bold">₹</div>
                                    </div>
                                    <div className="w-full bg-white border border-slate-200 border-dashed p-3 rounded-[8px] shadow-sm opacity-60">
                                        <div className="flex justify-between mb-1">
                                            <h4 className="text-[11px] font-bold text-slate-600 flex items-center gap-1.5">4. Finance & Accounts</h4>
                                            <span className="text-[11px] font-bold text-slate-500">₹1,20,000 Grant</span>
                                        </div>
                                        <p className="text-[10px] text-slate-500 font-medium leading-tight">Symposium operational budget ledger sanction</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="bg-slate-50 p-4 border-t border-slate-100 flex items-start gap-2">
                            <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                            <p className="text-[10px] text-slate-500 font-medium leading-relaxed">Duty Leave certificates and digital verify signatures are governed under GCU Academic Code SEC 14-B.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
