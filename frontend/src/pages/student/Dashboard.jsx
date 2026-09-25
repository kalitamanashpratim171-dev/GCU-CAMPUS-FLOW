import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../lib/api';
import { Calendar, CheckCircle, Clock, MapPin, Loader2, ArrowRight } from 'lucide-react';

export default function StudentDashboard() {
    const [registrations, setRegistrations] = useState([]);
    const [availableEvents, setAvailableEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            // Run both fetches concurrently for speed
            const [regRes, eventsRes] = await Promise.all([
                api.get('/registrations/my-registrations'),
                api.get('/events') // Assuming this returns PUBLISHED events by default
            ]);

            const myRegs = regRes.data.registrations || [];
            const allEvents = eventsRes.data.events || [];

            // Filter upcoming registered events
            const upcomingRegs = myRegs.filter(reg => {
                const eventDate = new Date(reg.event.date);
                return eventDate >= new Date();
            });

            // Filter available events the user hasn't registered for yet
            const registeredEventIds = myRegs.map(reg => reg.event._id);
            const openEvents = allEvents.filter(
                ev => !registeredEventIds.includes(ev._id) && new Date(ev.date) >= new Date()
            );

            setRegistrations(upcomingRegs);
            setAvailableEvents(openEvents.slice(0, 3)); // Only show top 3 on dashboard
        } catch (error) {
            console.error('Error fetching dashboard data', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex h-full items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* Header section */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Overview</h1>
                    <p className="text-neutral-400 mt-1">Check your upcoming schedule and new opportunities.</p>
                </div>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Calendar className="w-24 h-24 text-purple-500" />
                    </div>
                    <div className="relative z-10">
                        <p className="text-neutral-400 font-medium">Upcoming RSVPs</p>
                        <h2 className="text-4xl font-bold text-white mt-2">{registrations.length}</h2>
                    </div>
                </div>

                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <CheckCircle className="w-24 h-24 text-blue-500" />
                    </div>
                    <div className="relative z-10">
                        <p className="text-neutral-400 font-medium">Attended Events</p>
                        <h2 className="text-4xl font-bold text-white mt-2">--</h2>
                        {/* Logic for attended events will come from analytics or local filter */}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Upcoming RSVPs List */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-white">Your Next Event</h3>
                    </div>

                    {registrations.length === 0 ? (
                        <div className="bg-neutral-900/50 border border-neutral-800 border-dashed rounded-2xl p-8 text-center text-neutral-500">
                            You haven't registered for any upcoming events yet.
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {registrations.slice(0, 2).map((reg) => (
                                <div key={reg._id} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 hover:border-neutral-700 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-purple-500/10 text-purple-400 mb-3">
                                                {reg.event.category}
                                            </span>
                                            <h4 className="text-lg font-medium text-white">{reg.event.title}</h4>

                                            <div className="flex items-center gap-4 mt-3 text-sm text-neutral-400">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="w-4 h-4" />
                                                    {new Date(reg.event.date).toLocaleDateString()}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Clock className="w-4 h-4" />
                                                    {reg.event.time || '10:00 AM'}
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => navigate(`/student/ticket/${reg._id}`)}
                                            className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors"
                                        >
                                            View Ticket
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Discover New Events */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-white">Discover</h3>
                        <button
                            onClick={() => navigate('/student/events')}
                            className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1"
                        >
                            See all <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
                        {availableEvents.length === 0 ? (
                            <div className="p-8 text-center text-neutral-500">
                                No new events available right now.
                            </div>
                        ) : (
                            <div className="divide-y divide-neutral-800">
                                {availableEvents.map((ev) => (
                                    <div key={ev._id} className="p-5 hover:bg-neutral-800/50 transition-colors flex justify-between items-center">
                                        <div>
                                            <h4 className="font-medium text-white">{ev.title}</h4>
                                            <p className="text-sm text-neutral-400 mt-1 flex items-center gap-1.5">
                                                <MapPin className="w-3.5 h-3.5" />
                                                {ev.venue?.name || 'TBA'}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => navigate(`/student/events/${ev._id}`)}
                                            className="text-sm text-white bg-neutral-800 hover:bg-neutral-700 px-3 py-1.5 rounded-md transition-colors"
                                        >
                                            Details
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
