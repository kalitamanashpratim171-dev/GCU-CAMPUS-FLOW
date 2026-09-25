import { useState } from 'react';
import {
    CalendarDays,
    ChevronLeft,
    ChevronRight,
    Download,
    Plus,
    Rss,
    Search,
    MapPin,
    User,
    Clock,
    ShieldCheck,
    SmartphoneNfc,
    Bus,
    CheckCircle2,
    AlertCircle,
    ChevronDown
} from 'lucide-react';

export default function StudentCalendar() {

    // Empty state just to have the template ready
    const currentMonth = "March 2025";

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20 w-full max-w-[1440px] mx-auto mt-2 space-y-6">

            {/* Top Breadcrumb Context */}
            <div className="flex justify-between items-center bg-transparent px-1 py-1 text-[10px] font-bold">
                <div className="flex items-center gap-2 text-slate-500 uppercase tracking-widest flex-wrap">
                    GCU Campus &gt; Student Portal &gt; Community & Alerts &gt; <span className="text-primary">Academic Event Calendar</span>
                </div>
            </div>

            {/* Main Header */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-4">
                <div className="max-w-3xl">
                    <h1 className="text-[28px] md:text-[32px] font-bold text-[#0f172a] tracking-tight leading-[1.1] mb-3 flex items-center gap-3">
                        University Event Calendar & Schedule
                        <span className="bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-[4px] text-[9px] font-bold tracking-widest uppercase flex items-center gap-1.5 align-middle mt-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div> SAMARTH ERP Live Sync</span>
                    </h1>
                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                        Interactive academic schedule synchronizing registered events, departmental hackathons, exams embargo blackout periods, and co-curricular deadlines.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto shrink-0 mt-4 xl:mt-0">
                    <button className="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center justify-center gap-2 transition-colors">
                        <Download className="w-4 h-4 text-slate-400" /> Sync with iCal (.ics)
                    </button>
                    <button className="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm px-4 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center justify-center gap-2 transition-colors">
                        <Rss className="w-4 h-4 text-slate-400" /> CSE Feeds
                    </button>
                    <button className="bg-[#0f172a] text-white hover:bg-slate-800 shadow-sm px-5 py-2.5 rounded-[8px] text-[12px] font-bold flex items-center justify-center gap-2 transition-colors">
                        <Plus className="w-4 h-4" /> Quick Register Event
                    </button>
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[16px] shadow-sm overflow-hidden flex flex-col p-5">
                {/* Calendar Toolbar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 relative z-10 w-full">

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <button className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"><ChevronLeft className="w-4 h-4" /></button>
                            <div className="text-[16px] font-bold text-slate-900 mx-2 flex gap-2 items-baseline">
                                March 2025 <span className="text-[9px] font-bold text-slate-400 tracking-widest uppercase">Semester IV</span>
                            </div>
                            <button className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"><ChevronRight className="w-4 h-4" /></button>
                        </div>
                        <button className="text-[11px] font-bold text-primary bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-[6px] transition-colors">Today</button>
                    </div>

                    <div className="flex items-center bg-slate-50 p-1 rounded-[8px] border border-slate-200">
                        <button className="px-4 py-1.5 bg-white text-slate-900 rounded-[6px] text-[11px] font-bold shadow-sm">Month</button>
                        <button className="px-4 py-1.5 text-slate-500 hover:text-slate-900 rounded-[6px] text-[11px] font-bold transition-colors">Week</button>
                        <button className="px-4 py-1.5 text-slate-500 hover:text-slate-900 rounded-[6px] text-[11px] font-bold transition-colors">Day</button>
                        <button className="px-4 py-1.5 text-slate-500 hover:text-slate-900 rounded-[6px] text-[11px] font-bold transition-colors">Agenda</button>
                    </div>

                </div>

                {/* Quick Filters / Layers */}
                <div className="flex items-center gap-3 md:gap-5 pb-5 border-b border-slate-100 flex-wrap">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Layers:</span>
                    <button className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-slate-50 px-2 py-1 rounded-[6px] border border-slate-100 hover:bg-slate-100">
                        <div className="w-2 h-2 rounded-full bg-[#0f172a]"></div> My Registered (4) <ChevronDown className="w-3 h-3 text-slate-400" />
                    </button>
                    <button className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-slate-50 px-2 py-1 rounded-[6px] border border-slate-100 hover:bg-slate-100">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div> Dept. of CSE (7) <ChevronDown className="w-3 h-3 text-slate-400" />
                    </button>
                    <button className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-slate-50 px-2 py-1 rounded-[6px] border border-slate-100 hover:bg-slate-100">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Flagships & Fests (2) <ChevronDown className="w-3 h-3 text-slate-400" />
                    </button>
                    <button className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-slate-50 px-2 py-1 rounded-[6px] border border-slate-100 hover:bg-slate-100">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div> Academic Exam Embargo (1) <ChevronDown className="w-3 h-3 text-slate-400" />
                    </button>
                    <button className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 hover:text-slate-700 transition">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div> Duty Leave Permitted <ChevronDown className="w-3 h-3" />
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 mt-6">

                    {/* Calendar Grid Area */}
                    <div className="flex-1 overflow-x-auto">
                        <div className="min-w-[600px]">
                            {/* Weekday Headers */}
                            <div className="grid grid-cols-7 gap-1 mb-2">
                                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                                    <div key={day} className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">{day}</div>
                                ))}
                            </div>

                            {/* Days Grid - Approximated visually from the mockup */}
                            <div className="grid grid-cols-7 gap-[2px] bg-slate-100 border border-slate-100 p-[2px] rounded-[10px] text-[11px]">

                                {/* Row 1 */}
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-300 font-bold ml-1">23</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-300 font-bold ml-1">24</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-300 font-bold ml-1">25</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-300 font-bold ml-1">26</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-300 font-bold ml-1">27</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-300 font-bold ml-1">28</span></div>
                                <div className="bg-blue-50/30 min-h-[90px] p-2 flex flex-col border border-transparent">
                                    <span className="text-slate-900 font-bold ml-1 mb-auto">1</span>
                                    <div className="bg-slate-100 text-slate-500 rounded p-1 text-[9px] font-bold leading-tight mt-1 border border-slate-200/50">Faculty Colloquium</div>
                                </div>

                                {/* Row 2 */}
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-900 font-bold ml-1">2</span></div>
                                <div className="bg-red-50/60 min-h-[90px] p-2 flex flex-col border border-red-50 relative">
                                    <span className="text-red-800 font-bold ml-1 z-10 w-max">3</span>
                                    <div className="bg-red-100 text-red-700/80 rounded p-1 text-[9px] font-bold leading-tight mt-auto z-10 mx-auto w-[90%] text-center">Mid-Sem Review Blackout</div>
                                </div>
                                <div className="bg-red-50/60 min-h-[90px] p-2 flex flex-col border border-red-50">
                                    <span className="text-red-800 font-bold ml-1 z-10 w-max">4</span>
                                    <div className="bg-red-100 text-red-700/80 rounded p-1 text-[9px] font-bold leading-tight mt-auto z-10 mx-auto w-[90%] text-center">CSE Labs Assessment</div>
                                </div>
                                <div className="bg-red-50/60 min-h-[90px] p-2 flex flex-col border border-red-50">
                                    <span className="text-red-800 font-bold ml-1 z-10 w-max">5</span>
                                    <div className="bg-red-100 text-red-700/80 rounded p-1 text-[9px] font-bold leading-tight mt-auto z-10 mx-auto w-[90%] text-center">Embargo Ends 5 PM</div>
                                </div>
                                <div className="bg-blue-50/30 min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-900 font-bold ml-1">6</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent">
                                    <span className="text-slate-900 font-bold ml-1 mb-auto">7</span>
                                    <div className="bg-blue-50 text-blue-600 rounded p-1 text-[9px] font-bold leading-tight truncate border border-blue-100">Robotics ...</div>
                                </div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-900 font-bold ml-1">8</span></div>

                                {/* Row 3 */}
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-900 font-bold ml-1">9</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-900 font-bold ml-1">10</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-900 font-bold ml-1">11</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent">
                                    <span className="text-slate-900 font-bold ml-1 mb-auto">12</span>
                                    <div className="bg-blue-50 text-blue-600 rounded p-1 text-[9px] font-bold leading-tight truncate border border-blue-100">Research ...</div>
                                </div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-900 font-bold ml-1">13</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent relative">
                                    <span className="text-slate-900 font-bold ml-1 mb-auto flex items-center justify-between">14 <CheckCircle2 className="w-3 h-3 text-emerald-500 mr-1" /></span>
                                    <div className="bg-blue-50 text-blue-600 rounded p-1 text-[9px] font-bold leading-tight truncate border border-blue-100 mb-0.5">ML Boot...</div>
                                    <div className="text-[8px] font-bold text-slate-400 pl-1">● Attended</div>
                                </div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-900 font-bold ml-1">15</span></div>

                                {/* Row 4 (Thursday 20 is TOMORROW relative to design mockup) */}
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-900 font-bold ml-1">16</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-900 font-bold ml-1">17</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-900 font-bold ml-1">18</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent">
                                    <span className="text-slate-900 font-bold ml-1 mb-auto">19</span>
                                    <div className="bg-slate-100 text-slate-500 rounded p-1 text-[9px] font-bold leading-tight  border border-slate-200/50">Prelims Briefing</div>
                                </div>
                                <div className="bg-blue-50/50 min-h-[90px] p-2 flex flex-col border border-blue-100 relative">
                                    <div className="flex justify-between items-start mb-auto relative z-10 w-full pr-1">
                                        <span className="text-blue-800 font-bold ml-1">20</span>
                                        <span className="bg-[#0f172a] text-white text-[7px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider -mr-4 md:-mr-8 z-20 whitespace-nowrap shadow-sm">TOMORROW</span>
                                    </div>
                                    <div className="bg-[#0f172a] text-white rounded p-1.5 text-[9px] font-bold leading-tight border border-slate-800 shadow-sm relative z-10 pb-2">
                                        <span className="block truncate mb-1">Renewa...</span>
                                        <span className="text-blue-200 block text-[8px] truncate">10:00 AM • Hall 2</span>
                                    </div>
                                </div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-900 font-bold ml-1">21</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-900 font-bold ml-1">22</span></div>

                                {/* Row 5 */}
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-900 font-bold ml-1">23</span></div>
                                <div className="bg-emerald-50/50 min-h-[90px] p-2 flex flex-col border border-emerald-100 relative">
                                    <div className="flex justify-between items-start mb-auto relative z-10 w-full pr-1">
                                        <span className="text-emerald-800 font-bold ml-1">24</span>
                                        <span className="bg-emerald-600 text-white text-[8px] font-bold px-1 py-0.5 rounded uppercase tracking-wider">Day 1</span>
                                    </div>
                                    <div className="bg-teal-700 text-white rounded p-1.5 text-[9px] font-bold leading-tight border border-teal-800 shadow-sm relative z-10">
                                        Assam Biodiversity Hackathon (36h)
                                    </div>
                                </div>
                                <div className="bg-emerald-50/50 min-h-[90px] p-2 flex flex-col border border-emerald-100 relative">
                                    <div className="flex justify-between items-start mb-auto relative z-10 w-full pr-1">
                                        <span className="text-emerald-800 font-bold ml-1">25</span>
                                        <span className="bg-emerald-600 text-white text-[8px] font-bold px-1 py-0.5 rounded uppercase tracking-wider">Day 2</span>
                                    </div>
                                    <div className="bg-teal-700 text-white rounded p-1.5 text-[9px] font-bold leading-tight border border-teal-800 shadow-sm relative z-10">
                                        Final Pitch & Jury Showcase
                                    </div>
                                </div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-900 font-bold ml-1">26</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-900 font-bold ml-1">27</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent relative">
                                    <span className="text-slate-900 font-bold ml-1 flex items-center justify-between mb-auto">28 <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div></span>
                                    <div className="bg-[#0f172a] text-white rounded p-1.5 text-[9px] font-bold leading-tight shadow-sm relative z-10 pb-2">
                                        <span className="block truncate mb-1 text-slate-100">Deep Le...</span>
                                        <span className="text-blue-200 block text-[8px] truncate">12 Seats Remaining</span>
                                    </div>
                                </div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-900 font-bold ml-1">29</span></div>

                                {/* Row 6 */}
                                <div className="bg-slate-50/50 min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-900 font-bold ml-1 flex items-center justify-between">30 <div className="w-1.5 h-1.5 border border-slate-400 rounded-sm mr-2"></div></span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent">
                                    <span className="text-slate-900 font-bold ml-1 mb-auto">31</span>
                                    <div className="bg-slate-100 text-slate-500 rounded p-1 text-[9px] font-bold leading-tight border border-slate-200/50 truncate">Rust + W...</div>
                                </div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-300 font-bold ml-1">Apr 1</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-300 font-bold ml-1">Apr 2</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-300 font-bold ml-1">Apr 3</span></div>
                                <div className="bg-white min-h-[90px] p-2 flex flex-col border border-transparent"><span className="text-slate-300 font-bold ml-1">Apr 4</span></div>
                                <div className="bg-blue-50/30 min-h-[90px] p-2 flex flex-col border border-transparent relative">
                                    <span className="text-slate-900 font-bold ml-1 mb-auto flex items-center justify-between">Apr 5 <AlertCircle className="w-3 h-3 text-amber-500 mr-2" /></span>
                                    <div className="bg-[#0f172a] text-white rounded p-1.5 text-[9px] font-bold leading-tight shadow-sm">
                                        TechVenture 2025 <div className="text-amber-300">Flagship</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Below Calendar Footer / Legends */}
                        <div className="mt-6 flex flex-col md:flex-row gap-6 justify-between items-start">
                            <div>
                                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5 mb-3"><MapPin className="w-3.5 h-3.5" /> Calendar Index</h4>
                                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[11px] font-bold text-slate-700">
                                    <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-[2px] bg-[#0f172a]"></div> Registered (Self)</div>
                                    <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-[2px] bg-blue-500"></div> CSE Dept. Exclusive</div>
                                    <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-[2px] bg-teal-600"></div> Campus Flagships</div>
                                    <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-[2px] bg-red-100 border border-red-300"></div> Exam Embargo / Blackout</div>
                                </div>
                            </div>

                            <div className="bg-teal-50 border border-teal-100 rounded-[10px] p-3 shadow-sm flex items-start gap-3 max-w-sm ml-auto">
                                <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="text-[11px] font-bold text-teal-900 leading-tight">Zero Timetable Conflicts Guaranteed</h4>
                                        <span className="bg-teal-200 text-teal-800 text-[8px] font-bold px-1 py-[2px] rounded uppercase">AICTE/UGC</span>
                                    </div>
                                    <p className="text-[10px] font-medium text-teal-800/80 leading-relaxed">
                                        GCU Campus Flow cross-checks event time slots with SAMARTH regular CSE lecture timetables. You cannot accidentally register for events colliding with mandatory laboratory sessions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Sidebar Inspector Area */}
                    <div className="w-full lg:w-[320px] shrink-0 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8 flex flex-col gap-6">

                        {/* Inspector Panel */}
                        <div>
                            <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                                Active Schedule Inspector <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-[20px] font-bold text-slate-900 leading-tight">Thursday, Mar 20, 2025</h2>
                                <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-[4px] text-[10px] font-bold border border-blue-100">Tomorrow</span>
                            </div>

                            {/* Detail Card Overlay */}
                            <div className="bg-white border border-slate-200 rounded-[12px] shadow-sm overflow-hidden flex flex-col group">
                                {/* Event Image */}
                                <div className="relative h-28 bg-[#0f172a] overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop" alt="Workshop" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 mix-blend-overlay" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
                                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-white text-[10px] font-bold tracking-wide">
                                        <Clock className="w-3.5 h-3.5" /> 10:00 AM - 01:00 PM (Starts in 14 hours)
                                    </div>
                                </div>

                                <div className="p-4 border-b border-slate-100">
                                    <h3 className="text-[14px] font-bold text-slate-900 leading-tight mb-4">Workshop on Next-Gen Renewable Microgrids</h3>

                                    <div className="space-y-3">
                                        <div className="flex items-start gap-2.5 text-[11px]">
                                            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                                            <div>
                                                <div className="font-bold text-slate-500">Venue & Physical Location</div>
                                                <div className="font-bold text-slate-800">Seminar Hall 2, Block C (Ground Floor)</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2.5 text-[11px]">
                                            <User className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                                            <div>
                                                <div className="font-bold text-slate-500">Convening Faculty Lead</div>
                                                <div className="font-bold text-slate-800">Prof. D. K. Sarma (Dept. of Electrical Engg.)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-slate-50 flex gap-4 text-[10px] font-bold text-slate-600 border-b border-slate-100">
                                    <div className="flex-1">
                                        <div className="text-slate-400 font-medium mb-0.5">Curricular Credit</div>
                                        +0.5 Co-curricular
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-slate-400 font-medium mb-0.5">Duty Leave Status</div>
                                        <span className="text-teal-600">3 Hours Pre-approved</span>
                                    </div>
                                </div>

                                <div className="p-4 flex gap-3 items-center bg-white justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded border border-slate-200 border-dashed flex items-center justify-center bg-slate-50"><SmartphoneNfc className="w-4 h-4 text-slate-400" /></div>
                                        <div className="text-[10px]"><strong className="block text-slate-800 font-bold leading-tight">Entry Pass Fast-Track</strong> <span className="text-slate-400 font-medium leading-tight">No printed token required</span></div>
                                    </div>
                                    <button className="bg-[#0f172a] text-white hover:bg-slate-800 shadow-sm px-3 py-2 rounded-[6px] text-[10px] font-bold transition-colors">
                                        View Dynamic QR Pass
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Milestones / Next 7 days list */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-none">Milestones Next 7 Days</h3>
                                <span className="text-[10px] font-bold text-slate-400">2 Action Items</span>
                            </div>

                            <div className="space-y-3">
                                {/* Item 1 */}
                                <div className="bg-white border border-slate-200 rounded-[10px] p-3 shadow-sm flex items-start gap-3 relative overflow-hidden group hover:border-slate-300">
                                    <div className="w-8 h-8 rounded-[6px] bg-emerald-600 text-white flex flex-col items-center justify-center shrink-0 shadow-sm relative z-10">
                                        <span className="text-[14px] font-bold leading-none font-mono">24</span>
                                    </div>
                                    <div className="relative z-10 flex-1">
                                        <h4 className="text-[12px] font-bold text-slate-900 leading-tight mb-1 truncate">Team Check-in: Biodiversity Hac...</h4>
                                        <p className="text-[10px] text-slate-500 font-medium line-clamp-1 mb-2">Incubation Lab • 08:30 AM mandatory rollup</p>
                                        <div className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-700 bg-emerald-50 w-max px-2 py-0.5 rounded border border-emerald-100">
                                            <User className="w-3 h-3" /> Team: NeuralAssam (4 members confirmed)
                                        </div>
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="bg-white border border-slate-200 rounded-[10px] p-3 shadow-sm flex items-start gap-3 relative overflow-hidden group hover:border-slate-300">
                                    <div className="w-8 h-8 rounded-[6px] bg-[#0f172a] text-white flex flex-col items-center justify-center shrink-0 shadow-sm relative z-10">
                                        <span className="text-[14px] font-bold leading-none font-mono">28</span>
                                    </div>
                                    <div className="relative z-10 flex-1">
                                        <h4 className="text-[12px] font-bold text-slate-900 leading-tight mb-1 truncate">Deep Learning Workshop Seat Fr...</h4>
                                        <p className="text-[10px] text-slate-500 font-medium line-clamp-1 mb-2 text-red-500">Registration closes at 11:59 PM</p>
                                        <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-600 bg-slate-50 w-max px-2 py-0.5 rounded border border-slate-200">
                                            <CheckCircle2 className="w-3 h-3" /> Prerequisite: Python 3.10 & PyTorch basics
                                        </div>
                                    </div>
                                </div>

                                {/* Info Banner */}
                                <div className="bg-slate-50 border border-slate-200 rounded-[10px] p-3 flex items-start gap-2.5 mt-2">
                                    <Bus className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-[10px] font-bold text-slate-700 leading-tight mb-0.5">Late Campus Shuttle Operational</h4>
                                        <p className="text-[9px] text-slate-500 font-medium leading-relaxed">Shuttle D departs Azara Gate to Jalukbari every 20 min during Hackathons.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
