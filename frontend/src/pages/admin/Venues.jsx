import { useState } from 'react';
import {
    Building2,
    MapPin,
    Search,
    ChevronDown,
    LayoutGrid,
    AlignLeft,
    Download,
    PlusSquare,
    ShieldAlert,
    ShieldCheck,
    Wifi,
    Radio,
    Zap,
    Ticket,
    CalendarDays,
    Shield,
    Activity,
    ArrowRight,
    ExternalLink,
    SmartphoneNfc
} from 'lucide-react';

export default function Venues() {

    const initialVenues = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop',
            tag1: 'Tier 1 Flagship', tag1Color: 'bg-[#0f172a] text-white',
            tag2: 'Occupied Today', tag2Color: 'bg-white/90 text-slate-700', tag2Dot: 'bg-slate-400',
            title: 'Central University Auditorium',
            location: 'Block C, Ground Floor • 500 Seats (Theatre style with Balcony)',
            hardware: ['4K Laser Projector', '8 Lapel Mics', 'Live Stream Rig', 'Dual 100KVA DG', 'Central AC', '4 Turnstiles'],
            statusTitle: 'Fire Safety Cleared (Valid Dec 2025)', statusExt: '1102', statusIcon: ShieldCheck, statusColor: 'text-teal-600',
            leadLabel: 'Lead Estate Warden:', leadName: 'Mr. Bikash Roy',
            utilizationDays: '24', loadPct: '80%',
            btn1: 'View Booking Ledger', btn2: 'Share', btn1Dark: false, btn2Dark: false
        },
        {
            id: 2,
            image: 'https://plus.unsplash.com/premium_photo-1661339893540-3a201b157434?q=80&w=600&auto=format&fit=crop',
            tag1: 'High-Tech Lab', tag1Color: 'bg-[#0f172a] text-white',
            tag2: 'Reserved Tomorrow', tag2Color: 'bg-white/90 text-slate-700', tag2Dot: 'bg-teal-500',
            title: 'Advanced Computing Lab 3',
            location: 'Tech Block B, 3rd Floor • 80 GPU Workstations',
            hardware: ['80 RTX 4080 Nodes', '1Gbps Leased Line', 'Smart Touch Board', 'Gigabit Core Switch'],
            statusTitle: 'NFC Door Access Active', statusExt: '3409', statusIcon: SmartphoneNfc, statusColor: 'text-slate-600',
            leadLabel: 'Lab Administrator:', leadName: 'Dr. M. Bordoloi',
            utilizationDays: '19', loadPct: '63%',
            btn1: 'Schedule Slot', btn2: 'Diagnostics', btn1Dark: false, btn2Dark: false
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1571260899304-425dea597ee2?q=80&w=600&auto=format&fit=crop',
            tag1: 'Academic Hall', tag1Color: 'bg-white/90 text-slate-800',
            tag2: 'Available', tag2Color: 'bg-white/90 text-slate-700', tag2Dot: 'bg-emerald-500',
            title: 'Mechanical Seminar Hall 1',
            location: 'Mechanical Block D, 1st Floor • 150 Seats',
            hardware: ['Dual HD Projectors', 'Podium Mic Console', 'Acoustic Panelling', 'Seat Power Outlets'],
            statusTitle: 'Audio-Visual Calibrated', statusExt: '2110', statusIcon: ShieldCheck, statusColor: 'text-teal-600',
            leadLabel: 'Facility Coordinator:', leadName: 'Er. Ananya Kakati',
            utilizationDays: '18', loadPct: '60%',
            btn1: 'Quick Reserve', btn2: 'View Schedule', btn1Dark: true, btn2Dark: false
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
            tag1: 'Executive Boardroom', tag1Color: 'bg-[#0f172a] text-white',
            tag2: 'Available', tag2Color: 'bg-white/90 text-slate-700', tag2Dot: 'bg-emerald-500',
            title: 'Dr. B. R. Ambedkar Concourse',
            location: 'Administrative Block A, 2nd Floor • 60 Seats (U-Shape)',
            hardware: ['360° Polycom Bar', 'Digital Mic Units', 'Delegated Voting Console', 'Dual Privacy Blinds'],
            statusTitle: 'Deanery Privilege Level 1', statusExt: '1005', statusIcon: Shield, statusColor: 'text-indigo-600',
            leadLabel: 'Protocol Officer:', leadName: 'Mrs. Rina Sharma',
            utilizationDays: '11', loadPct: '36%',
            btn1: 'Reserve for Deanery', btn2: 'Details', btn1Dark: true, btn2Dark: false
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop',
            tag1: 'Specialized Hall', tag1Color: 'bg-teal-700 text-white',
            tag2: 'Occupied Today', tag2Color: 'bg-white/90 text-slate-700', tag2Dot: 'bg-slate-400',
            title: 'Pharmacy Multipurpose Hall 1',
            location: 'Pharmacy Building, 2nd Floor • 200 Seats',
            hardware: ['Full Sound Reinforcement', 'Chemical Air Scrubber', 'Direct Ramp Ingress', 'Dual Display Output'],
            statusTitle: 'HVAC Filtration Active', statusExt: '5201', statusIcon: Zap, statusColor: 'text-teal-600',
            leadLabel: 'Faculty In-Charge:', leadName: 'Prof. N. K. Sarma',
            utilizationDays: '21', loadPct: '70%',
            btn1: 'View Ingress Telemetry', btn2: 'Schedule', btn1Dark: false, btn2Dark: false
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=600&auto=format&fit=crop',
            tag1: 'Outdoor Arena', tag1Color: 'bg-[#0f172a] text-white',
            tag2: 'Estate Cleared', tag2Color: 'bg-white/90 text-slate-700', tag2Dot: 'bg-emerald-500',
            title: 'Open Air Amphitheatre & Quad',
            location: 'Central Quadrangle • 2,500 Standing / 1,200 Seated',
            hardware: ['Heavy 3-Phase Power', 'Stage Rigging Anchors', 'Perimeter Floodlights', 'Emergency Crowd Exits'],
            statusTitle: 'Noise Ordinance Curfew: 10:00 PM', statusExt: '1109', statusIcon: ShieldAlert, statusColor: 'text-slate-600',
            leadLabel: 'Chief Proctor Liaison:', leadName: 'Col. S. Dutta',
            utilizationDays: '8', loadPct: '26%',
            btn1: 'Safety Clearance Form', btn2: 'Reserve', btn1Dark: false, btn2Dark: true
        }
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] mx-auto mt-2 space-y-6">

            {/* Top Breadcrumb Context */}
            <div className="flex justify-between items-center bg-transparent px-1 py-1 text-[10px] font-bold">
                <div className="flex items-center gap-2 text-slate-500 uppercase tracking-widest flex-wrap">
                    Campus Home &gt; Administration &gt; Campus Facilities &gt; <span className="text-primary">Venues & Space Ledger</span>
                </div>
            </div>

            {/* Main Header */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-2 border-b border-slate-100 pb-6">
                <div className="max-w-3xl">
                    <h1 className="text-[32px] font-bold text-[#0f172a] tracking-tight leading-[1.1] mb-3">
                        Campus Venues & Infrastructure<br />Management
                    </h1>
                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed max-w-2xl">
                        Real-time auditorium reservation calendar, biometric gate scanner hardware allocation, clash detection engine, and estate clearance compliance across Girijananda Chowdhury University.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto shrink-0 mt-2 xl:mt-0">
                    <button className="bg-white border border-slate-200 text-teal-700 hover:bg-slate-50 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center justify-center gap-2 transition-colors">
                        <ShieldCheck className="w-4 h-4" /> Estate Safety Audit
                    </button>
                    <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center justify-center gap-2 transition-colors">
                        <Download className="w-4 h-4 text-slate-400" /> Download Floorplans (.PDF)
                    </button>
                    <button className="bg-[#0f172a] text-white hover:bg-slate-800 shadow-sm px-5 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center justify-center gap-2 transition-colors">
                        <PlusSquare className="w-4 h-4" /> Add New Venue / Hall
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Total Campus Venues</h3>
                            <div className="w-8 h-8 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600"><Building2 className="w-4 h-4" /></div>
                        </div>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-[36px] font-bold text-slate-900 leading-none tracking-tight">42</span>
                            <span className="text-[12px] font-bold text-slate-500">Sanctioned Spaces</span>
                        </div>
                    </div>
                    <div className="flex justify-between gap-2 items-center text-[10px] text-slate-600 font-bold bg-slate-50 px-3 py-1.5 rounded-[6px]">
                        <span className="text-center leading-tight">3<br />Aud</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-center leading-tight text-blue-600">18<br />Halls</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-center leading-tight">12<br />Labs</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-center leading-tight text-teal-600">9<br />Arenas</span>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Live Occupancy<br />Today</h3>
                            <div className="w-8 h-8 rounded-md bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600"><Radio className="w-4 h-4 animate-pulse" /></div>
                        </div>
                        <div className="flex flex-col gap-1 mb-4">
                            <span className="text-[36px] font-bold text-slate-900 leading-none tracking-tight">68%</span>
                            <span className="text-[11px] font-bold text-slate-500">Utilized Right Now</span>
                        </div>
                    </div>
                    <div className="text-[11px] text-blue-700 font-medium leading-snug pt-2 border-t border-slate-100">
                        8 active academic & tech sessions across Azara Campus
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Venue Clash Index</h3>
                            <div className="w-8 h-8 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600"><LayoutGrid className="w-4 h-4" /></div>
                        </div>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-[36px] font-bold text-emerald-600 leading-none tracking-tight">0</span>
                            <span className="text-[12px] font-bold text-slate-500">Clashes Detected</span>
                        </div>
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium leading-snug pt-2 border-t border-slate-100 flex gap-2 items-start">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" /> Automated 72-hour pre-event buffer lock active
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">A/V & Power Health</h3>
                            <div className="w-8 h-8 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500"><Zap className="w-4 h-4" /></div>
                        </div>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-[36px] font-bold text-slate-900 leading-none tracking-tight">99.4%</span>
                            <span className="text-[12px] font-bold text-slate-500">Operational</span>
                        </div>
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium flex gap-2 items-start pt-2 border-t border-slate-100">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1 shrink-0"></div> Dual UPS systems & 1Gbps Wi-Fi access points active
                    </div>
                </div>
            </div>

            {/* Control/Filter Bar */}
            <div className="bg-white border border-slate-200 rounded-[12px] p-4 flex flex-col lg:flex-row gap-4 justify-between items-center shadow-sm">
                <div className="relative w-full lg:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="text" placeholder="Search by venue name, building, block..." className="w-full bg-slate-50 border border-slate-200 rounded-[8px] pl-10 pr-4 py-2.5 text-[12px] font-medium text-slate-700 outline-none focus:border-primary transition-colors" />
                </div>

                <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 w-full lg:w-auto">
                    <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-slate-500">Zone:</span>
                        <div className="relative w-32">
                            <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-[6px] px-3 py-2 text-[12px] font-bold text-slate-700 outline-none cursor-pointer">
                                <option>All Zones</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-slate-500">Type:</span>
                        <div className="relative w-32">
                            <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-[6px] px-3 py-2 text-[12px] font-bold text-slate-700 outline-none cursor-pointer">
                                <option>All Types</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-slate-500">Capacity:</span>
                        <div className="relative w-32">
                            <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-[6px] px-3 py-2 text-[12px] font-bold text-slate-700 outline-none cursor-pointer">
                                <option>All Capacities</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 hidden lg:flex">
                        <span className="text-[11px] font-bold text-slate-500">Status:</span>
                        <div className="relative w-28">
                            <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-[6px] px-3 py-2 text-[12px] font-bold text-slate-700 outline-none cursor-pointer">
                                <option>All Statuses</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                        </div>
                    </div>

                    <div className="flex items-center ml-auto lg:ml-2 bg-slate-100 p-1 rounded-[8px] border border-slate-200">
                        <button className="px-3 py-1.5 bg-white text-slate-800 rounded-[6px] text-[11px] font-bold flex items-center gap-1.5 shadow-sm">
                            <LayoutGrid className="w-3.5 h-3.5" /> Cards
                        </button>
                        <button className="px-3 py-1.5 text-slate-500 rounded-[6px] text-[11px] font-bold flex items-center gap-1.5 hover:text-slate-800 transition-colors">
                            <AlignLeft className="w-3.5 h-3.5" /> Gantt
                        </button>
                    </div>
                </div>
            </div>

            {/* Venues Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {initialVenues.map((venue) => (
                    <div key={venue.id} className="bg-white border border-slate-200 rounded-[16px] shadow-sm flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                        {/* Card Header Profile Imagery */}
                        <div className="relative h-[200px] bg-slate-100 w-full overflow-hidden">
                            <img src={venue.image} alt={venue.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent opacity-90"></div>

                            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                                <span className={`${venue.tag1Color} px-3 py-1 rounded-full text-[10px] font-bold shadow-sm backdrop-blur border border-white/10 uppercase tracking-widest`}>
                                    {venue.tag1}
                                </span>
                                <span className={`${venue.tag2Color} px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-2 shadow-sm border border-slate-200/50 backdrop-blur`}>
                                    <div className={`w-1.5 h-1.5 rounded-full ${venue.tag2Dot}`}></div> {venue.tag2}
                                </span>
                            </div>

                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-[18px] font-bold leading-tight mb-1">{venue.title}</h3>
                                <p className="text-[11px] text-slate-300 font-medium flex items-start gap-1"><MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-400" /> {venue.location}</p>
                            </div>
                        </div>

                        {/* Body Content */}
                        <div className="p-5 flex-1 flex flex-col">
                            <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">Sanctioned Hardware & Facilities</h4>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {venue.hardware.map((hw, i) => (
                                    <span key={i} className="bg-blue-50 text-blue-700 border border-blue-100 px-2 py-1 rounded text-[10px] font-bold cursor-default">{hw}</span>
                                ))}
                            </div>

                            {/* Status Info Box */}
                            <div className="bg-slate-50 border border-slate-100 rounded-[8px] p-3 mb-6">
                                <div className="flex justify-between items-center mb-1.5">
                                    <span className={`flex items-center gap-1.5 text-[11px] font-bold ${venue.statusColor}`}>
                                        <venue.statusIcon className="w-3.5 h-3.5" /> {venue.statusTitle}
                                    </span>
                                    <span className="text-[9px] font-medium text-slate-400 bg-white border border-slate-200 px-1.5 py-0.5 rounded">Ext: {venue.statusExt}</span>
                                </div>
                                <p className="text-[11px] font-medium text-slate-500">
                                    {venue.leadLabel} <strong className="text-slate-800 font-bold">{venue.leadName}</strong>
                                </p>
                            </div>

                            {/* Utilization Bar */}
                            <div className="mt-auto">
                                <div className="flex justify-between items-end mb-1.5">
                                    <span className="text-[10px] font-medium text-slate-500">{venue.id > 3 ? 'Scheduled Booking Utilization' : 'Current Month Ledger'}</span>
                                    <span className="text-[11px] font-bold text-slate-800">{venue.utilizationDays} / 30 Days <span className="font-medium text-slate-500 text-[10px]">({venue.loadPct})</span></span>
                                </div>
                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className={`h-full rounded-full transition-all duration-500 ${venue.id === 6 ? 'bg-amber-500' : 'bg-[#0f172a]'}`} style={{ width: venue.loadPct }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Actions Bottom Bar */}
                        <div className="border-t border-slate-100 flex p-3 gap-3">
                            <button className={`flex-1 py-2 text-[12px] font-bold rounded-[8px] transition-colors flex items-center justify-center gap-2 ${venue.btn1Dark ? 'bg-[#0f172a] text-white hover:bg-slate-800 shadow-sm' : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 shadow-sm'}`}>
                                {venue.id === 1 ? <CalendarDays className="w-3.5 h-3.5" /> : venue.id === 2 ? <CalendarDays className="w-3.5 h-3.5" /> : venue.id === 3 ? <Ticket className="w-3.5 h-3.5" /> : venue.id === 4 ? <Building2 className="w-3.5 h-3.5" /> : venue.id === 6 ? <ShieldCheck className="w-3.5 h-3.5" /> : <Activity className="w-3.5 h-3.5" />}
                                {venue.btn1}
                            </button>
                            <button className={`flex-1 py-2 text-[12px] font-bold rounded-[8px] transition-colors flex items-center justify-center gap-2 ${venue.btn2Dark ? 'bg-[#0f172a] text-white hover:bg-slate-800 shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 shadow-sm'}`}>
                                {venue.id === 1 ? <ExternalLink className="w-3.5 h-3.5" /> : venue.id === 2 ? <Activity className="w-3.5 h-3.5" /> : venue.id === 3 ? <CalendarDays className="w-3.5 h-3.5" /> : venue.id === 6 ? <CalendarDays className="w-3.5 h-3.5" /> : null}
                                {venue.btn2}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Telemetry & Intelligence Panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                {/* Estate Intelligence Block */}
                <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm p-6 flex flex-col justify-between relative overflow-hidden">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-[8px] bg-[#0f172a] flex items-center justify-center text-blue-400 shadow-sm">
                                <ShieldCheck className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Estate Intelligence</h4>
                                <h3 className="text-[14px] font-bold text-slate-900 leading-tight">Automated Clash Prevention Engine</h3>
                            </div>
                        </div>
                        <p className="text-[12px] text-slate-500 font-medium leading-relaxed mt-4">
                            UGC & AICTE institutional compliance requires structural crowd and sound buffer checks. The system automatically cross-references sound output decibels (dB), student ingress corridors, and emergency evacuation paths across adjacent venues prior to issuing final deanery approval.
                        </p>

                        <div className="mt-4 bg-teal-50 border border-teal-100 rounded-[8px] p-3 flex  justify-between items-center">
                            <span className="flex items-center gap-2 text-[11px] font-bold text-teal-800">
                                <Shield className="w-4 h-4" /> Next Audit Checkpoint: Today, 18:00 IST (Night Protocol)
                            </span>
                            <span className="text-[10px] font-bold text-teal-600">Active Engine v4.2</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-6 text-[11px] font-bold">
                        <span className="flex items-center gap-2 text-slate-600">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Clash Prediction Pipeline: 0 Flagged
                        </span>
                        <a href="#" className="text-primary hover:text-blue-700 flex items-center gap-1">Configure Thresholds <ArrowRight className="w-3 h-3" /></a>
                    </div>
                </div>

                {/* Hardware Telemetry Block */}
                <div className="bg-white border text-[#0f172a] border-emerald-100 rounded-[16px] shadow-sm p-6 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-emerald-50/50 to-transparent pointer-events-none"></div>

                    <div>
                        <div className="flex justify-between items-start mb-2 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-[8px] bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                                    <Radio className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Hardware Telemetry</h4>
                                    <h3 className="text-[14px] font-bold text-slate-900 leading-tight">Live Gate Terminal Scanner Fleet</h3>
                                </div>
                            </div>
                            <span className="bg-slate-50 text-slate-600 border border-slate-200 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest">24 Deployed</span>
                        </div>
                        <p className="text-[12px] text-slate-600 font-medium leading-relaxed mt-4 relative z-10">
                            All 24 handheld NFC readers, turnstiles, and biometric facial attendance kiosks across GCU auditorium concourses report active sync with university LDAP credentials.
                        </p>

                        <div className="grid grid-cols-3 gap-3 mt-5 relative z-10">
                            <div className="bg-white border border-slate-200 rounded-[8px] p-3 text-center shadow-sm">
                                <span className="text-[18px] font-bold text-[#0f172a] block leading-none mb-1">23 / 24</span>
                                <span className="text-[10px] font-medium text-slate-500">Online & Active</span>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-[8px] p-3 text-center shadow-sm">
                                <span className="text-[18px] font-bold text-teal-600 block leading-none mb-1">14 ms</span>
                                <span className="text-[10px] font-medium text-slate-500">Avg Wi-Fi Latency</span>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-[8px] p-3 text-center shadow-sm">
                                <span className="text-[18px] font-bold text-[#0f172a] block leading-none mb-1">94%</span>
                                <span className="text-[10px] font-medium text-slate-500">Fleet Avg Battery</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-6 text-[11px] font-bold relative z-10">
                        <span className="text-slate-500">Turnstile Gate 4 (East Ramp): Routine Battery Charge</span>
                        <a href="#" className="text-slate-900 flex items-center gap-1 hover:text-primary transition-colors">Terminal Command Mesh <ArrowRight className="w-3 h-3" /></a>
                    </div>
                </div>

            </div>

        </div>
    );
}
