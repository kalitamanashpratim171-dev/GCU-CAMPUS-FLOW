import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../lib/api';
import { ShieldCheck, History, Download, Calendar, MapPin, Loader2, QrCode, MessageSquare, AlertCircle, ArrowRight, ScanLine, Clock, HelpCircle } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export default function StudentDashboard() {
    const [registrations, setRegistrations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('upcoming');
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await api.get('/registrations/my-registrations');
            setRegistrations(res.data.registrations || []);
        } catch (error) {
            console.error('Error fetching data', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex h-[60vh] items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    const upcomingRegs = registrations.filter(r => new Date(r.event.date) >= new Date() && r.status !== 'CANCELLED');
    const pastRegs = registrations.filter(r => new Date(r.event.date) < new Date() || r.status === 'ATTENDED');
    const cancelledRegs = registrations.filter(r => r.status === 'CANCELLED');

    const activeReg = upcomingRegs[0] || null; // Feature the most immediate upcoming event

    const getStatusChip = (status) => {
        switch (status) {
            case 'REGISTERED':
                return <span className="bg-secondary-container text-on-secondary-container border border-secondary-fixed text-[11px] font-bold px-2.5 py-1rounded-[6px] uppercase tracking-wider flex items-center gap-1.5 w-fit"><div className="w-1.5 h-1.5 bg-on-secondary-container rounded-full"></div> Registration Confirmed</span>;
            case 'ATTENDED':
                return <span className="bg-secondary-container text-on-secondary-container border border-secondary-fixed text-[11px] font-bold px-2.5 py-1 rounded-[6px] uppercase tracking-wider flex items-center gap-1.5 w-fit"><div className="w-1.5 h-1.5 bg-on-secondary-container rounded-full"></div> Present (Verified)</span>;
            case 'CANCELLED':
                return <span className="bg-red-50 text-red-700 border border-red-200 text-[11px] font-bold px-2.5 py-1 rounded-[6px] uppercase tracking-wider w-fit">Cancelled</span>;
            default:
                return <span className="bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-bold px-2.5 py-1 rounded-[6px] uppercase tracking-wider w-fit">{status}</span>;
        }
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-12">

            {/* Header section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
                <div>
                    <div className="flex items-center gap-2 text-primary font-semibold text-[13px] tracking-wide uppercase mb-2">
                        <ShieldCheck className="w-4 h-4" />
                        Credential & Verification Services
                    </div>
                    <h1 className="text-[32px] font-bold text-slate-900 tracking-tight leading-tight">My Event Registrations</h1>
                    <p className="text-slate-500 mt-1 text-[14px]">Access your digital entry QR passes, attendance check-ins, and downloadable completion certificates.</p>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none items-center justify-center gap-2 bg-slate-100 text-slate-700 hover:bg-slate-200 text-[13px] font-semibold px-4 py-2.5 rounded-[8px] transition-colors border border-slate-200 flex">
                        <History className="w-4 h-4" /> Archived Records
                    </button>
                    <button className="flex-1 md:flex-none items-center justify-center gap-2 bg-primary text-white hover:bg-primary-container text-[13px] font-semibold px-4 py-2.5 rounded-[8px] transition-colors shadow-sm flex">
                        <Download className="w-4 h-4" /> Download All Passes
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-200 mb-8 bg-white rounded-t-xl px-4 pt-2">
                <button
                    onClick={() => setActiveTab('upcoming')}
                    className={`flex items-center gap-2 px-6 py-3 text-[14px] font-bold border-b-2 transition-colors ${activeTab === 'upcoming' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
                >
                    Active & Upcoming <span className={`text-[11px] px-2 py-0.5 rounded-full ${activeTab === 'upcoming' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'}`}>{upcomingRegs.length}</span>
                </button>
                <button
                    onClick={() => setActiveTab('completed')}
                    className={`flex items-center gap-2 px-6 py-3 text-[14px] font-bold border-b-2 transition-colors ${activeTab === 'completed' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
                >
                    Completed <span className={`text-[11px] px-2 py-0.5 rounded-full ${activeTab === 'completed' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'}`}>{pastRegs.length}</span>
                </button>
            </div>

            {/* Hero Active Pass */}
            {activeTab === 'upcoming' && activeReg && (
                <div className="bg-white border-2 border-primary rounded-xl mb-12 shadow-level-1 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>

                    <div className="flex flex-col lg:flex-row">
                        {/* Left Info */}
                        <div className="flex-1 p-8 lg:border-r border-slate-200 border-dashed">
                            <div className="flex justify-between items-start mb-6">
                                {getStatusChip(activeReg.status)}
                                <span className="text-[12px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1 rounded-[6px] font-mono">Pass ID: REG-GCU-2025-{activeReg._id.substring(4, 9).toUpperCase()}</span>
                            </div>

                            <p className="text-[11px] font-bold text-primary uppercase tracking-widest mb-1.5">Upcoming Live Session</p>
                            <h2 className="text-[24px] font-bold text-slate-900 mb-2 leading-tight">{activeReg.event.title}</h2>
                            <p className="text-[13px] text-slate-500 mb-8 border-b border-slate-100 pb-4">Issued to: <strong className="text-slate-900 font-semibold">{activeReg.student?.name || 'Authorized Student'}</strong> • {activeReg.student?.studentId || 'GCU ID'}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-[8px] bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                                        <Calendar className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Schedule</h4>
                                        <p className="text-[14px] font-semibold text-slate-900">{new Date(activeReg.event.date).toLocaleDateString()}</p>
                                        <p className="text-[13px] text-slate-500">{activeReg.event.time || '10:00 AM'}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-[8px] bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Venue & Hall</h4>
                                        <p className="text-[14px] font-semibold text-slate-900">{activeReg.event.venue?.name || 'TBA'}</p>
                                        <p className="text-[13px] text-slate-500">Main Campus</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary/5 rounded-[8px] p-4 flex gap-3 text-[13px] text-primary mb-8 border border-primary/10">
                                <AlertCircle className="w-5 h-5 shrink-0" />
                                <p><strong>Attendance Requirement:</strong> Gate check-in opens 30 minutes prior. Minimum 80% session duration required for auto-generated certificate.</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => navigate(`/student/ticket/${activeReg._id}`)}
                                    className="bg-primary text-white px-5 py-2.5 rounded-[8px] text-[13px] font-semibold hover:bg-primary-container transition-colors shadow-sm flex items-center gap-2"
                                >
                                    <QrCode className="w-4 h-4" /> Full Pass View
                                </button>
                                <button className="bg-white text-slate-700 border border-slate-300 px-5 py-2.5 rounded-[8px] text-[13px] font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2">
                                    Add to Calendar
                                </button>
                            </div>
                        </div>

                        {/* Right QR Box */}
                        <div className="bg-slate-50 p-8 flex flex-col items-center justify-center lg:w-[320px] shrink-0 border-t lg:border-t-0 border-slate-200">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6 relative">
                                <div className="absolute -top-3 -right-3 bg-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"><div className="w-1.5 h-1.5 bg-white rounded-full"></div> VALID PASS</div>
                                <QRCodeSVG
                                    value={activeReg.qrToken}
                                    size={180}
                                    level="H"
                                    includeMargin={false}
                                    fgColor="#1E3A8A" /* Primary Academic Blue */
                                    bgColor="#ffffff"
                                />
                            </div>
                            <p className="text-[14px] font-bold text-slate-900 mb-1">Scan at Venue Door</p>
                            <p className="text-[12px] text-slate-500 font-medium flex items-center gap-1">Token Refresh <Loader2 className="w-3 h-3 animate-spin" /> Valid</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Data Table */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-[20px] font-bold text-slate-900">Registered University Sessions</h3>
                {/* Search placeholder for table */}
            </div>

            <div className="bg-white border border-slate-200 rounded-xl shadow-level-1 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="py-3 px-6 text-[12px] font-bold text-slate-500 uppercase tracking-wider w-[35%]">Event Particulars</th>
                                <th className="py-3 px-6 text-[12px] font-bold text-slate-500 uppercase tracking-wider">Date & Venue</th>
                                <th className="py-3 px-6 text-[12px] font-bold text-slate-500 uppercase tracking-wider">Registration Status</th>
                                <th className="py-3 px-6 text-[12px] font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">

                            {registrations.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="py-12 text-center text-slate-500 text-[14px]">No registrations found for this semester.</td>
                                </tr>
                            ) : (
                                registrations.map(reg => (
                                    <tr key={reg._id} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="py-4 px-6">
                                            <div className="flex gap-4">
                                                <div className="w-10 h-10 rounded-[8px] bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                                    <span className="text-primary font-bold text-[12px]">{reg.event.title.substring(0, 2)}</span>
                                                </div>
                                                <div>
                                                    <p className="text-[14px] font-bold text-slate-900 mb-0.5 line-clamp-1">{reg.event.title}</p>
                                                    <p className="text-[12px] text-slate-500 line-clamp-1">Track: {reg.event.category || 'General Session'}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <p className="text-[13px] font-semibold text-slate-700">{new Date(reg.event.date).toLocaleDateString(undefined, { month: 'short', day: '2-digit', year: 'numeric' })}</p>
                                            <p className="text-[12px] text-slate-500 flex items-center gap-1 mt-0.5"><MapPin className="w-3 h-3" /> {reg.event.venue?.name || 'TBA'}</p>
                                        </td>
                                        <td className="py-4 px-6">
                                            {getStatusChip(reg.status)}
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            {reg.status !== 'CANCELLED' && new Date(reg.event.date) >= new Date() ? (
                                                <button
                                                    onClick={() => navigate(`/student/ticket/${reg._id}`)}
                                                    className="bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1.5 rounded-[6px] text-[12px] font-bold hover:bg-slate-200 transition-colors inline-flex items-center gap-1.5"
                                                >
                                                    View Pass <ArrowRight className="w-3 h-3" />
                                                </button>
                                            ) : reg.status === 'ATTENDED' ? (
                                                <button className="bg-white text-slate-700 border border-slate-300 px-3 py-1.5 rounded-[6px] text-[12px] font-bold hover:bg-slate-50 transition-colors inline-flex items-center gap-1.5">
                                                    <MessageSquare className="w-3 h-3" /> Feedback
                                                </button>
                                            ) : null}
                                        </td>
                                    </tr>
                                ))
                            )}

                        </tbody>
                    </table>
                </div>
                <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-between items-center">
                    <p className="text-[12px] font-medium text-slate-500 flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Official certificates are digitally verified via GCU Academic Registry. <span className="ml-4 text-slate-400">Showing {registrations.length} of {registrations.length} records</span></p>
                </div>
            </div>

            {/* Assistance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm flex items-start gap-4 hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-[8px] bg-primary/5 flex items-center justify-center shrink-0">
                        <ScanLine className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h4 className="text-[13px] font-bold text-slate-900 mb-1">Gate Check-In Assistance</h4>
                        <p className="text-[12px] text-slate-500 font-medium leading-relaxed">Having trouble scanning? Present your Student Identity Card alongside this digital ticket code at the help desk.</p>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm flex items-start gap-4 hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-[8px] bg-primary/5 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h4 className="text-[13px] font-bold text-slate-900 mb-1">Certificate Generation Delay</h4>
                        <p className="text-[12px] text-slate-500 font-medium leading-relaxed">Certificates take up to 24 hours post-event for faculty attendance reconciliation before generating.</p>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm flex items-start gap-4 hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-[8px] bg-primary/5 flex items-center justify-center shrink-0">
                        <HelpCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h4 className="text-[13px] font-bold text-slate-900 mb-1">Event Desk Support</h4>
                        <p className="text-[12px] text-slate-500 font-medium leading-relaxed">Reach event coordinators directly at <strong className="text-primary font-mono">events@gcu.edu.in</strong> or Ext: 4402 on campus.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
