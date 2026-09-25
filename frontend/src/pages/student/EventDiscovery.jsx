import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../lib/api';
import { Search, MapPin, CalendarDays, Users, ArrowRight, Loader2, Info, LayoutGrid, List, RefreshCw, Bookmark, Clock, Flame, ChevronDown, Check } from 'lucide-react';

export default function EventDiscovery() {
    const [events, setEvents] = useState([]);
    const [myRegistrations, setMyRegistrations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [registeringId, setRegisteringId] = useState(null);
    const [activeTab, setActiveTab] = useState('All Events');

    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [eventsRes, regsRes] = await Promise.all([
                api.get('/events'),
                api.get('/registrations/my-registrations'),
            ]);
            setEvents(eventsRes.data.events || []);
            setMyRegistrations(regsRes.data.registrations || []);
        } catch (error) {
            console.error('Error fetching discovery data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegister = async (eventId) => {
        setRegisteringId(eventId);
        try {
            await api.post(`/registrations/${eventId}`);
            await fetchData();
        } catch (error) {
            alert(error.response?.data?.message || 'Failed to register');
        } finally {
            setRegisteringId(null);
        }
    };

    const registeredEventIds = myRegistrations.map(r => r.event._id || r.event);

    const filteredEvents = events.filter((ev) => {
        const matchesSearch = ev.title.toLowerCase().includes(search.toLowerCase());
        const matchesTab = activeTab === 'All Events' || ev.category === activeTab;
        return matchesSearch && matchesTab;
    });

    if (isLoading) {
        return (
            <div className="flex justify-center py-20">
                <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
            </div>
        );
    }

    // Helper for progress bar
    const getProgressParams = (event) => {
        const max = event.maxParticipants || 100; // arbitrary fallback
        const current = event.currentParticipants || 12; // arbitrary fallback for realism
        const ratio = current / max;

        if (ratio >= 1) return { text: 'Full', color: 'bg-red-500', bg: 'bg-red-100', textCol: 'text-red-700', action: 'Join Waitlist', disable: true };
        if (ratio >= 0.8) return { text: 'Almost Full', color: 'bg-orange-500', bg: 'bg-orange-100', textCol: 'text-orange-700', action: 'Register Now', disable: false };
        return { text: `${max - current} Available`, color: 'bg-secondary', bg: 'bg-secondary/20', textCol: 'text-secondary', action: 'Register Now', disable: false };
    };

    // UI mockup helpers for images since backend model currently lacks dedicated HD image fields
    const getMockImage = (index) => {
        const images = [
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop', // Auditorium
            'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=600&auto=format&fit=crop', // Conference round table
            'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop', // Meeting tech
            'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop', // Brainstorming
            'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop', // Tech setup
            'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop'  // Workshop class
        ];
        return images[index % images.length];
    }

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-12 w-full max-w-[1440px] mx-auto">

            {/* Header section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-6">
                <div>
                    <div className="flex items-center gap-2 text-primary font-bold text-[11px] tracking-widest uppercase mb-1.5">
                        <Check className="w-3.5 h-3.5" />
                        Spring 2025 University Calendar
                    </div>
                    <h1 className="text-[32px] font-bold text-slate-900 tracking-tight leading-tight">Explore Campus Events</h1>
                    <p className="text-slate-500 mt-1 text-[14px]">Discover workshops, technical symposia, guest lectures, cultural fests, and hackathons across all GCU departments.</p>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex bg-slate-100 p-1 rounded-[8px] border border-slate-200">
                        <button className="flex items-center gap-1.5 bg-white text-slate-700 px-3 py-1.5 rounded-[6px] text-[12px] font-bold shadow-sm"><LayoutGrid className="w-3.5 h-3.5" /> Grid View</button>
                        <button className="flex items-center gap-1.5 text-slate-500 px-3 py-1.5 rounded-[6px] text-[12px] font-bold hover:text-slate-700"><List className="w-3.5 h-3.5" /> List View</button>
                    </div>
                    <button className="flex items-center gap-1.5 text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded-[8px] text-[12px] font-bold hover:bg-slate-50 shadow-sm transition-colors">
                        <RefreshCw className="w-3.5 h-3.5" /> Sync Calendar
                    </button>
                </div>
            </div>

            {/* Advanced Filter Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-[16px] p-6 mb-8 mt-2">
                <div className="relative w-full mb-4">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="w-4 h-4 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search events, topics, faculty organizers, or venues..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-white border border-slate-200 text-slate-900 rounded-[8px] pl-11 pr-4 py-3 outline-none focus:border-primary shadow-sm transition-all placeholder:text-slate-400 text-[14px] font-medium"
                    />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {['DEPARTMENT', 'CATEGORY', 'DATE RANGE', 'VENUE', 'STATUS'].map((label, idx) => (
                        <div key={idx}>
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5">{label}</label>
                            <button className="w-full bg-white border border-slate-200 text-slate-700 rounded-[8px] px-3 py-2 text-[12px] font-bold flex justify-between items-center hover:bg-slate-50 shadow-sm transition-colors">
                                <span className="truncate">All {label.toLowerCase()}s</span>
                                <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-2" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Active Chips placeholder */}
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-slate-200">
                    <span className="text-[12px] font-semibold text-slate-500">Active filters:</span>
                    <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 cursor-pointer hover:bg-primary/20">
                        Dept: Computer Science ✕
                    </span>
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 cursor-pointer hover:bg-emerald-100">
                        Status: Open ✕
                    </span>
                    <button className="text-[11px] font-bold text-slate-400 hover:text-slate-600 ml-auto underline underline-offset-2">Reset Filters</button>
                </div>
            </div>

            {/* Tabs Row */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex gap-2 text-[13px] font-bold text-slate-500">
                    {['All Events', 'Academic & Tech', 'Workshops & Training', 'Competitions'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-full transition-colors flex items-center gap-2 border ${activeTab === tab ? 'bg-white text-slate-900 border-slate-300 shadow-sm' : 'bg-transparent border-transparent hover:text-slate-700 hover:bg-slate-100'}`}
                        >
                            {tab} {activeTab === tab && <span className="bg-slate-100 px-1.5 py-0.5 rounded-[6px] text-slate-500 text-[10px]">{filteredEvents.length}</span>}
                        </button>
                    ))}
                </div>
                <span className="text-[12px] font-medium text-slate-400 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    Updated 12 mins ago
                </span>
            </div>


            {/* Card Grid */}
            {filteredEvents.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 bg-white border border-slate-200 border-dashed rounded-[16px]">
                    <Search className="w-8 h-8 text-slate-300 mb-3" />
                    <h3 className="text-[16px] font-bold text-slate-900 mb-1">No events match your criteria</h3>
                    <p className="text-slate-500 font-medium text-[13px]">Try adjusting your search terms or clearing current filters.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredEvents.map((event, idx) => {
                        const isRegistered = registeredEventIds.includes(event._id);
                        const pData = getProgressParams(event);
                        const currentParticipants = event.currentParticipants || 0;
                        const maxParticipants = event.maxParticipants || 100;

                        return (
                            <div key={event._id} className="bg-white border border-slate-200 rounded-[16px] shadow-sm hover:shadow-level-2 transition-all flex flex-col overflow-hidden group">

                                {/* Image Header Area */}
                                <div className="h-48 relative overflow-hidden bg-slate-900">
                                    <img src={getMockImage(idx)} alt={event.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />

                                    {/* Badges Top Left/Right */}
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        {idx % 3 === 0 && <span className="bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-[6px] shadow-sm uppercase tracking-wider flex items-center gap-1"><Flame className="w-3 h-3" /> Featured</span>}
                                        <span className="bg-white text-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-[6px] shadow-sm uppercase tracking-wider">{event.category || 'Workshop'}</span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        {idx % 4 === 1 ? (
                                            <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2.5 py-1 rounded-[6px] shadow-sm tracking-wider uppercase">Invite Only</span>
                                        ) : (
                                            <span className="bg-emerald-400 text-slate-900 text-[10px] font-bold px-2.5 py-1 rounded-[6px] shadow-sm tracking-wider uppercase flex items-center gap-1"><Check className="w-3 h-3 shrink-0" /> Free</span>
                                        )}
                                    </div>

                                    {/* Date/Time Bottom Overlay */}
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-950/90 to-transparent pt-8 pb-3 px-4 flex items-center gap-2 text-white font-medium text-[12px]">
                                        <Clock className="w-4 h-4 shrink-0" />
                                        <span className="truncate">{new Date(event.date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })} • {event.time || '10:00 AM - 01:30 PM'}</span>
                                    </div>
                                </div>

                                {/* Body Area */}
                                <div className="p-5 flex-1 flex flex-col">

                                    <h3 className="text-[17px] font-bold text-slate-900 leading-tight mb-2 line-clamp-2">{event.title}</h3>
                                    <p className="text-slate-500 text-[13px] line-clamp-2 leading-relaxed mb-5">
                                        {event.description || "Comprehensive hands-on walkthrough focusing on advanced techniques, best practices, and real-world deployment parameters."}
                                    </p>

                                    <div className="space-y-2 mb-6">
                                        <p className="text-[12px] font-medium text-slate-600 flex items-center gap-3 truncate">
                                            <MapPin className="w-4 h-4 text-slate-400 shrink-0" /> {event.venue?.name || 'Administrative Block, Council Hall'}
                                        </p>
                                        <p className="text-[12px] font-medium text-slate-600 flex items-center gap-3 truncate">
                                            <Users className="w-4 h-4 text-slate-400 shrink-0" /> {event.department || 'All GCU & External Participants'}
                                        </p>
                                        <p className="text-[12px] font-medium text-slate-600 flex items-center gap-3 truncate">
                                            <Info className="w-4 h-4 text-slate-400 shrink-0" /> Certificate of Event Participation Granted
                                        </p>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mt-auto mb-6">
                                        <div className="flex justify-between items-end mb-1.5">
                                            <span className="text-[12px] font-bold text-slate-700">{currentParticipants} / {maxParticipants} Registered</span>
                                            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-[4px] uppercase tracking-wider ${pData.bg} ${pData.textCol}`}>{pData.text}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className={`h-full ${pData.color} rounded-full transition-all`} style={{ width: `${Math.min(100, (currentParticipants / maxParticipants) * 100)}%` }}></div>
                                        </div>
                                    </div>

                                    {/* Action Row */}
                                    <div className="flex items-center gap-2">
                                        {isRegistered ? (
                                            <button className="flex-1 bg-secondary-container/50 text-secondary border border-secondary-fixed py-2.5 rounded-[8px] font-bold text-[13px] flex items-center justify-center gap-2">
                                                <Check className="w-4 h-4" /> Enrolled
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handleRegister(event._id)}
                                                disabled={registeringId === event._id || pData.disable}
                                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-[8px] font-bold text-[13px] transition-colors shadow-sm disabled:opacity-70 ${pData.disable
                                                        ? 'bg-slate-100 text-slate-400 border border-slate-200'
                                                        : 'bg-primary text-white hover:bg-primary-container group'
                                                    }`}
                                            >
                                                {registeringId === event._id ? (
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                ) : (
                                                    <>
                                                        {pData.action}
                                                        {!pData.disable && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                                                    </>
                                                )}
                                            </button>
                                        )}
                                        <button className="h-10 w-10 shrink-0 flex items-center justify-center border border-slate-200 rounded-[8px] text-slate-400 hover:text-primary hover:bg-slate-50 transition-colors">
                                            <Bookmark className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
