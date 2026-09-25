import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../lib/api';
import { QRCodeSVG } from 'qrcode.react';
import { ArrowLeft, Calendar, Clock, MapPin, Loader2, Info, ShieldCheck, Download, AlertCircle } from 'lucide-react';

export default function Ticket() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ticket, setTicket] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchTicketInfo();
    }, [id]);

    const fetchTicketInfo = async () => {
        try {
            const response = await api.get('/registrations/my-registrations');
            const regs = response.data.registrations || [];
            const currentTicket = regs.find(r => r._id === id);

            if (!currentTicket) {
                navigate('/student');
            } else {
                setTicket(currentTicket);
            }
        } catch (error) {
            console.error('Error fetching ticket', error);
            navigate('/student');
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

    if (!ticket) return null;

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-12 max-w-4xl mx-auto">

            <button
                onClick={() => navigate('/student')}
                className="flex items-center gap-2 text-slate-500 hover:text-primary font-semibold text-[13px] transition-colors mb-6"
            >
                <ArrowLeft className="w-4 h-4" />
                Return to Active Registrations
            </button>

            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-[28px] font-bold text-slate-900 tracking-tight leading-tight">Digital Event Pass</h1>
                    <p className="text-slate-500 mt-1 text-[14px]">Official GCU Academic Credential</p>
                </div>
                <button className="hidden md:flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-container text-[13px] font-semibold px-4 py-2.5 rounded-[8px] transition-colors shadow-sm">
                    <Download className="w-4 h-4" /> Export Document
                </button>
            </div>

            <div className="bg-white border text-center md:text-left border-slate-200 rounded-xl shadow-level-2 overflow-hidden relative">
                <div className="h-4 bg-primary w-full absolute top-0 left-0"></div>

                <div className="flex flex-col md:flex-row pt-4">
                    {/* Left Event Details */}
                    <div className="flex-1 p-8 md:p-10 md:border-r border-slate-200 border-dashed relative">
                        <div className="flex items-center justify-between mb-8">
                            <span className="bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold px-2 py-0.5 rounded-[4px] uppercase tracking-widest">
                                {ticket.event.category || 'Academic Session'}
                            </span>
                            <span className="text-[12px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1 rounded-[6px] font-mono">
                                REF: {ticket._id.substring(4, 12).toUpperCase()}
                            </span>
                        </div>

                        <h2 className="text-[26px] font-bold text-slate-900 mb-2 leading-tight">{ticket.event.title}</h2>
                        <p className="text-[13px] text-slate-600 mb-8 leading-relaxed max-w-lg">
                            {ticket.event.description || 'Valid for one secure entry to the event location. Non-transferable.'}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 pb-8 border-b border-slate-100">
                            <div>
                                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Session Date</h4>
                                <p className="text-[14px] font-semibold text-slate-900 flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-primary" /> {new Date(ticket.event.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Commencement Time</h4>
                                <p className="text-[14px] font-semibold text-slate-900 flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-primary" /> {ticket.event.time || '10:00 AM (IST)'}
                                </p>
                            </div>
                            <div className="sm:col-span-2">
                                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Designated Venue</h4>
                                <p className="text-[14px] font-semibold text-slate-900 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-primary" /> {ticket.event.venue?.name || 'TBA - Check Notice Board'}
                                </p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Attending Scholar</h4>
                            <p className="text-[16px] font-bold text-slate-900">{ticket.student?.name || 'Authorized Personnel'}</p>
                            <p className="text-[13px] font-medium text-slate-500 uppercase">{ticket.student?.studentId || 'GCU ID'}</p>
                        </div>
                    </div>

                    {/* Right Scanner Area */}
                    <div className="bg-slate-50 p-8 md:p-10 flex flex-col items-center justify-center md:w-[360px] shrink-0 border-t md:border-t-0 border-slate-200 relative">

                        {ticket.status === 'CANCELLED' ? (
                            <div className="text-center w-full bg-white p-8 rounded-xl border border-red-200">
                                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                                <h3 className="text-[20px] font-bold text-slate-900 mb-1">Pass Voided</h3>
                                <p className="text-[13px] text-slate-500 font-medium">This registration has been cancelled.</p>
                            </div>
                        ) : (
                            <>
                                <div className="flex items-center gap-2 text-[12px] font-bold text-primary tracking-wider uppercase mb-8 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm">
                                    <ShieldCheck className="w-4 h-4" /> Portal Verified
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-6 relative">
                                    {ticket.status === 'ATTENDED' && (
                                        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-2xl border-2 border-secondary overflow-hidden">
                                            <ShieldCheck className="w-12 h-12 text-secondary mb-2" />
                                            <p className="text-[16px] font-bold text-slate-900 uppercase">Scanned</p>
                                            <p className="text-[11px] font-semibold text-secondary">Attendance Recorded</p>
                                        </div>
                                    )}
                                    <QRCodeSVG
                                        value={ticket.qrToken}
                                        size={200}
                                        level="H"
                                        includeMargin={false}
                                        fgColor="#1E3A8A"
                                        bgColor="#ffffff"
                                    />
                                </div>

                                <h3 className="text-[15px] font-bold text-slate-900 mb-1">Gate Check-in Scan</h3>
                                <p className="text-[12px] text-slate-500 font-medium text-center">Present this QR vector to the faculty coordinator at the venue entrance.</p>

                                <div className="mt-8 pt-6 border-t border-slate-200 w-full text-center">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Cryptographic Token</p>
                                    <p className="text-[12px] font-mono text-slate-600 bg-white border border-slate-200 py-1.5 px-3 rounded-md break-all">
                                        {ticket.qrToken.substring(0, 24)}...
                                    </p>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-start gap-3 bg-secondary-container/30 border border-secondary-fixed p-4 rounded-xl">
                <Info className="w-5 h-5 text-on-secondary-container shrink-0 mt-0.5" />
                <p className="text-[13px] text-secondary font-medium leading-relaxed">
                    <strong>Notice:</strong> This digital pass is dynamically synced with the GCU Academic Registry. Any alterations or modifications to your enrollment status will automatically reflect on this page in real-time.
                </p>
            </div>

        </div>
    );
}
