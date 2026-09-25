import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../lib/api';
import { Search, MapPin, Calendar, Clock, ArrowRight, Loader2, Info } from 'lucide-react';

export default function EventDiscovery() {
    const [events, setEvents] = useState([]);
    const [myRegistrations, setMyRegistrations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [registeringId, setRegisteringId] = useState(null);

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
            // Refresh registrations to update UI properly
            await fetchData();
        } catch (error) {
            alert(error.response?.data?.message || 'Failed to register');
        } finally {
            setRegisteringId(null);
        }
    };

    const registeredEventIds = myRegistrations.map(r => r.event._id || r.event);

    const filteredEvents = events.filter((ev) => {
        return ev.title.toLowerCase().includes(search.toLowerCase()) &&
            new Date(ev.date) >= new Date(); // Only future events
    });

    if (isLoading) {
        return (
            <div className="flex h-[80vh] items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* Header section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Event Explorer</h1>
                    <p className="text-neutral-400 mt-1">Discover and register for upcoming campus events.</p>
                </div>

                <div className="relative w-full md:w-72">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="w-5 h-5 text-neutral-500" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search events..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-neutral-600"
                    />
                </div>
            </div>

            {filteredEvents.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 bg-neutral-900/50 border border-neutral-800 border-dashed rounded-2xl">
                    <Info className="w-10 h-10 text-neutral-600 mb-4" />
                    <p className="text-neutral-400">No upcoming events found.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredEvents.map((event) => {
                        const isRegistered = registeredEventIds.includes(event._id);
                        const isFull = event.maxParticipants > 0 && event.currentParticipants >= event.maxParticipants;

                        return (
                            <div key={event._id} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all flex flex-col">
                                <div className="h-40 bg-gradient-to-br from-neutral-800 relative to-neutral-900 p-6 flex flex-col justify-end">
                                    <span className="absolute top-4 left-4 inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-purple-500/20 text-purple-300">
                                        {event.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-white leading-tight">{event.title}</h3>
                                </div>

                                <div className="p-5 flex-1 flex flex-col">
                                    <p className="text-neutral-400 text-sm line-clamp-2 mb-4">
                                        {event.description || "Join this exciting event to learn and connect with peers."}
                                    </p>

                                    <div className="space-y-2 mt-auto mb-6 text-sm text-neutral-300">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-neutral-500" />
                                            {new Date(event.date).toLocaleDateString()}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-neutral-500" />
                                            {event.time || '10:00 AM'}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-neutral-500" />
                                            {event.venue?.name || 'Main Campus'}
                                        </div>
                                    </div>

                                    {isRegistered ? (
                                        <button
                                            onClick={() => navigate('/student')}
                                            className="w-full flex items-center justify-center gap-2 bg-neutral-800 text-white py-2.5 rounded-xl font-medium cursor-default"
                                        >
                                            <CheckCircle className="w-4 h-4 text-green-400" />
                                            Registered
                                        </button>
                                    ) : isFull ? (
                                        <button
                                            disabled
                                            className="w-full bg-neutral-800/50 text-neutral-500 py-2.5 rounded-xl font-medium cursor-not-allowed border border-neutral-800"
                                        >
                                            Event is Full
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleRegister(event._id)}
                                            disabled={registeringId === event._id}
                                            className="group relative w-full flex items-center justify-center gap-2 bg-white text-black py-2.5 rounded-xl font-medium transition-all hover:bg-neutral-200 active:scale-[0.98] disabled:opacity-70"
                                        >
                                            {registeringId === event._id ? (
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                            ) : (
                                                <>
                                                    Register Now
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
