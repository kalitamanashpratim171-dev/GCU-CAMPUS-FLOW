import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../lib/api';
import {
    Save, Eye, Send, CheckCircle2, BookOpen, CalendarDays, MapPin,
    Users, Building2, CheckSquare, Clock, Check, Plus, Trash2,
    ShieldCheck, Info, ChevronRight, Loader2, AlertCircle
} from 'lucide-react';

const STEPS = [
    { n: 1, label: 'Basic Info' },
    { n: 2, label: 'Schedule' },
    { n: 3, label: 'Venue & Capacity' },
    { n: 4, label: 'Duty Leaves' },
    { n: 5, label: 'Compliance' },
];

export default function CreateEvent() {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [venues, setVenues] = useState([]);
    const [departments, setDepartments] = useState([]);

    const [form, setForm] = useState({
        title: '',
        description: '',
        category: 'Departmental Workshop',
        department: '',
        venue: '',
        date: '',
        startTime: '',
        endTime: '',
        registrationDeadline: '',
        maxParticipants: 100,
        rules: [],
    });

    useEffect(() => {
        // Fetch venues and departments for dropdowns
        const fetchMeta = async () => {
            try {
                const [vRes, dRes] = await Promise.all([
                    api.get('/venues'),
                    api.get('/departments'),
                ]);
                setVenues(vRes.data.venues || []);
                setDepartments(dRes.data.departments || []);
                // Set default dept from user profile
                const user = JSON.parse(localStorage.getItem('user') || '{}');
                if (user.department) setForm(f => ({ ...f, department: user.department }));
            } catch (e) {
                // Silently fail, dropdowns will just be empty
            }
        };
        fetchMeta();
    }, []);

    const update = (field, value) => setForm(f => ({ ...f, [field]: value }));

    const handleSaveDraft = async () => {
        if (!form.title) return setError('Event title is required to save a draft.');
        setIsLoading(true); setError('');
        try {
            await api.post('/events', { ...form, maxParticipants: Number(form.maxParticipants) });
            setSuccess('Draft saved successfully!');
            setTimeout(() => navigate('/organizer/my-events'), 1500);
        } catch (e) {
            setError(e.response?.data?.message || 'Failed to save draft.');
        } finally { setIsLoading(false); }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const required = ['title', 'description', 'category', 'date', 'startTime', 'endTime', 'registrationDeadline', 'maxParticipants'];
        const missing = required.filter(k => !form[k]);
        if (missing.length > 0) return setError(`Please fill in: ${missing.join(', ')}`);
        setIsLoading(true); setError('');
        try {
            await api.post('/events', { ...form, maxParticipants: Number(form.maxParticipants) });
            setSuccess('Event submitted for approval! Redirecting...');
            setTimeout(() => navigate('/organizer/my-events'), 1800);
        } catch (e) {
            setError(e.response?.data?.message || 'Failed to submit event.');
        } finally { setIsLoading(false); }
    };

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
                    <button type="button" onClick={handleSaveDraft} disabled={isLoading}
                        className="flex-1 xl:flex-none items-center justify-center gap-2 bg-white text-slate-700 border border-slate-300 px-4 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-slate-50 transition-colors shadow-sm flex disabled:opacity-60">
                        <Save className="w-4 h-4" /> Save as Draft
                    </button>
                    <button type="button" onClick={handleSubmit} disabled={isLoading}
                        className="flex-1 xl:flex-none items-center justify-center gap-2 bg-primary text-white border border-primary px-5 py-2.5 rounded-[8px] text-[13px] font-bold hover:bg-slate-900 transition-colors shadow-sm flex disabled:opacity-70">
                        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                        Submit for Dean Approval
                    </button>
                </div>
            </div>

            {/* Status Messages */}
            {error && (
                <div className="flex items-center gap-2 p-3 mb-6 bg-red-50 border border-red-200 text-red-700 rounded-[8px] text-[13px] font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" /> {error}
                </div>
            )}
            {success && (
                <div className="flex items-center gap-2 p-3 mb-6 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-[8px] text-[13px] font-medium">
                    <CheckCircle2 className="w-4 h-4 shrink-0" /> {success}
                </div>
            )}

            {/* Stepper */}
            <div className="bg-white border border-slate-200 rounded-[12px] p-2 flex overflow-x-auto no-scrollbar shadow-sm mb-8">
                <div className="flex items-center min-w-max px-2">
                    {STEPS.map((step, idx) => {
                        const state = step.n < activeStep ? 'done' : step.n === activeStep ? 'active' : 'pending';
                        return (
                            <div key={idx} className="flex items-center">
                                <button onClick={() => setActiveStep(step.n)} className={`flex items-center gap-2 px-4 py-2 rounded-[8px] transition-colors ${state === 'active' ? 'bg-primary/5' : 'hover:bg-slate-50'}`}>
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 transition-colors ${state === 'done' ? 'bg-emerald-500 text-white' : state === 'active' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                                        {state === 'done' ? <Check className="w-3.5 h-3.5" /> : step.n}
                                    </div>
                                    <p className={`text-[13px] font-bold whitespace-nowrap ${state === 'pending' ? 'text-slate-400' : 'text-slate-900'}`}>{step.label}</p>
                                </button>
                                {idx < STEPS.length - 1 && <div className="w-8 h-px bg-slate-200 mx-2" />}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
                {/* Form */}
                <form onSubmit={handleSubmit} className="xl:col-span-2 space-y-6">

                    {/* Step 1: Basic Info */}
                    {activeStep === 1 && (
                        <div className="bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm">
                            <div className="bg-slate-50/50 p-5 border-b border-slate-200 flex justify-between items-center">
                                <h3 className="font-bold text-[16px] text-slate-900 flex items-center gap-2"><BookOpen className="w-4 h-4 text-slate-400" /> 1. Categorization & Departmental Affiliation</h3>
                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-[6px] text-[11px] font-bold">Mandatory</span>
                            </div>
                            <div className="p-6 space-y-5">
                                <div>
                                    <label className="text-[12px] font-bold text-slate-700 block mb-2">Official Event Title <span className="text-red-500">*</span></label>
                                    <input type="text" value={form.title} onChange={e => update('title', e.target.value)}
                                        placeholder="e.g. TechVenture 2026: National AI & Robotics Symposium"
                                        className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[14px] font-medium text-slate-900 outline-none focus:border-primary transition-colors bg-white shadow-sm" />
                                </div>
                                <div>
                                    <label className="text-[12px] font-bold text-slate-700 block mb-2">Detailed Description <span className="text-red-500">*</span></label>
                                    <textarea rows="4" value={form.description} onChange={e => update('description', e.target.value)}
                                        placeholder="Describe the event scope, objectives, target audience, and expected outcomes..."
                                        className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[13px] font-medium text-slate-600 outline-none focus:border-primary transition-colors bg-white shadow-sm resize-none" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-[12px] font-bold text-slate-700 block mb-2">Event Category <span className="text-red-500">*</span></label>
                                        <select value={form.category} onChange={e => update('category', e.target.value)}
                                            className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[13px] font-medium text-slate-700 outline-none focus:border-primary transition-colors bg-white shadow-sm">
                                            <option>Departmental Workshop</option>
                                            <option>National Symposium</option>
                                            <option>Hackathon / Competition</option>
                                            <option>Guest Lecture</option>
                                            <option>Cultural Event</option>
                                            <option>Sports & Recreation</option>
                                            <option>Academic & Tech</option>
                                            <option>Workshops & Training</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-[12px] font-bold text-slate-700 block mb-2">Host Department</label>
                                        {departments.length > 0 ? (
                                            <select value={form.department} onChange={e => update('department', e.target.value)}
                                                className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[13px] font-medium text-slate-700 outline-none focus:border-primary bg-white shadow-sm">
                                                <option value="">Select Department</option>
                                                {departments.map(d => <option key={d._id} value={d._id}>{d.name}</option>)}
                                            </select>
                                        ) : (
                                            <input type="text" value={form.department} onChange={e => update('department', e.target.value)}
                                                placeholder="e.g. Dept. of Computer Science"
                                                className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[13px] font-medium text-slate-700 outline-none focus:border-primary bg-white shadow-sm" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Schedule */}
                    {activeStep === 2 && (
                        <div className="bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm">
                            <div className="bg-slate-50/50 p-5 border-b border-slate-200">
                                <h3 className="font-bold text-[16px] text-slate-900 flex items-center gap-2"><CalendarDays className="w-4 h-4 text-slate-400" /> 2. Date, Time & Schedule</h3>
                            </div>
                            <div className="p-6 space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-[12px] font-bold text-slate-700 block mb-2">Event Date <span className="text-red-500">*</span></label>
                                        <input type="date" value={form.date} onChange={e => update('date', e.target.value)}
                                            className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[14px] font-medium text-slate-900 outline-none focus:border-primary shadow-sm" />
                                    </div>
                                    <div>
                                        <label className="text-[12px] font-bold text-slate-700 block mb-2">Registration Deadline <span className="text-red-500">*</span></label>
                                        <input type="date" value={form.registrationDeadline} onChange={e => update('registrationDeadline', e.target.value)}
                                            className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[14px] font-medium text-slate-900 outline-none focus:border-primary shadow-sm" />
                                    </div>
                                    <div>
                                        <label className="text-[12px] font-bold text-slate-700 block mb-2">Start Time <span className="text-red-500">*</span></label>
                                        <input type="time" value={form.startTime} onChange={e => update('startTime', e.target.value)}
                                            className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[14px] font-medium text-slate-900 outline-none focus:border-primary shadow-sm" />
                                    </div>
                                    <div>
                                        <label className="text-[12px] font-bold text-slate-700 block mb-2">End Time <span className="text-red-500">*</span></label>
                                        <input type="time" value={form.endTime} onChange={e => update('endTime', e.target.value)}
                                            className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[14px] font-medium text-slate-900 outline-none focus:border-primary shadow-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Venue & Capacity */}
                    {activeStep === 3 && (
                        <div className="bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm">
                            <div className="bg-slate-50/50 p-5 border-b border-slate-200">
                                <h3 className="font-bold text-[16px] text-slate-900 flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /> 3. Venue Allocation & Participant Cap</h3>
                            </div>
                            <div className="p-6 space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-[12px] font-bold text-slate-700 block mb-2">Primary Venue</label>
                                        {venues.length > 0 ? (
                                            <select value={form.venue} onChange={e => update('venue', e.target.value)}
                                                className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[13px] font-medium text-slate-700 outline-none focus:border-primary bg-white shadow-sm">
                                                <option value="">Select Venue</option>
                                                {venues.map(v => <option key={v._id} value={v._id}>{v.name} (Cap: {v.capacity})</option>)}
                                            </select>
                                        ) : (
                                            <input type="text" value={form.venue} onChange={e => update('venue', e.target.value)}
                                                placeholder="e.g. Central Auditorium"
                                                className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[13px] font-medium text-slate-700 outline-none focus:border-primary bg-white shadow-sm" />
                                        )}
                                    </div>
                                    <div>
                                        <label className="text-[12px] font-bold text-slate-700 block mb-2">Total Participant Cap <span className="text-red-500">*</span></label>
                                        <input type="number" min="1" value={form.maxParticipants} onChange={e => update('maxParticipants', e.target.value)}
                                            className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[14px] font-medium text-slate-900 outline-none focus:border-primary shadow-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Duty Leaves */}
                    {activeStep === 4 && (
                        <div className="bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm">
                            <div className="bg-slate-50/50 p-5 border-b border-slate-200">
                                <h3 className="font-bold text-[16px] text-slate-900 flex items-center gap-2"><Users className="w-4 h-4 text-slate-400" /> 4. Registration Rules & Duty Leaves</h3>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="bg-indigo-50/50 border border-indigo-100 rounded-[12px] p-5">
                                    <div className="flex items-start gap-3">
                                        <CheckSquare className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <div>
                                            <p className="text-[14px] font-bold text-slate-900 mb-1">Sanction UGC Co-Curricular Academic Duty Leaves</p>
                                            <p className="text-[12px] text-slate-500 font-medium leading-relaxed">
                                                Enrolled students will receive approved academic leave upon completing at least <strong className="text-slate-700">80% verified QR scan checks</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-[12px] font-bold text-slate-700 block mb-2">Event Rules & Guidelines (optional)</label>
                                    <textarea rows="4" value={form.rules.join('\n')} onChange={e => update('rules', e.target.value.split('\n').filter(Boolean))}
                                        placeholder="Add rules/guidelines, one per line..."
                                        className="w-full border border-slate-200 rounded-[8px] px-4 py-3 text-[13px] font-medium text-slate-700 outline-none focus:border-primary bg-white shadow-sm resize-none" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 5: Review & Submit */}
                    {activeStep === 5 && (
                        <div className="bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm">
                            <div className="bg-slate-50/50 p-5 border-b border-slate-200">
                                <h3 className="font-bold text-[16px] text-slate-900 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-slate-400" /> 5. Compliance Review & Submit</h3>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="bg-slate-50 border border-slate-200 rounded-[12px] p-4 space-y-3 text-[13px]">
                                    <div className="flex justify-between"><span className="text-slate-500 font-medium">Title</span><span className="font-bold text-slate-900 text-right max-w-[60%]">{form.title || '—'}</span></div>
                                    <div className="flex justify-between"><span className="text-slate-500 font-medium">Category</span><span className="font-bold text-slate-900">{form.category}</span></div>
                                    <div className="flex justify-between"><span className="text-slate-500 font-medium">Date</span><span className="font-bold text-slate-900">{form.date || '—'}</span></div>
                                    <div className="flex justify-between"><span className="text-slate-500 font-medium">Time</span><span className="font-bold text-slate-900">{form.startTime && form.endTime ? `${form.startTime} – ${form.endTime}` : '—'}</span></div>
                                    <div className="flex justify-between"><span className="text-slate-500 font-medium">Reg. Deadline</span><span className="font-bold text-slate-900">{form.registrationDeadline || '—'}</span></div>
                                    <div className="flex justify-between"><span className="text-slate-500 font-medium">Participant Cap</span><span className="font-bold text-slate-900">{form.maxParticipants}</span></div>
                                </div>
                                <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-[8px] p-3">
                                    <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                                    <p className="text-[12px] text-amber-800 font-medium">After submission, your event will be reviewed by the Dean of Academic Affairs. You will be notified once it is approved or if changes are required.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center pt-2">
                        <button type="button" onClick={() => setActiveStep(s => Math.max(1, s - 1))} disabled={activeStep === 1}
                            className="text-slate-500 text-[13px] font-bold hover:text-slate-900 transition-colors flex items-center gap-2 disabled:opacity-30">
                            &lt; Back
                        </button>
                        {activeStep < STEPS.length ? (
                            <button type="button" onClick={() => setActiveStep(s => Math.min(STEPS.length, s + 1))}
                                className="bg-primary text-white border border-primary px-6 py-3 rounded-[8px] text-[14px] font-bold hover:bg-slate-900 transition-colors shadow-sm flex items-center gap-2">
                                Next <ChevronRight className="w-4 h-4" />
                            </button>
                        ) : (
                            <button type="submit" disabled={isLoading}
                                className="bg-primary text-white border border-primary px-6 py-3 rounded-[8px] text-[14px] font-bold hover:bg-slate-900 transition-colors shadow-sm flex items-center gap-2 disabled:opacity-70">
                                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                                Submit for Approval
                            </button>
                        )}
                    </div>
                </form>

                {/* Right Column: Live Preview Card & Clearance Pipeline */}
                <div className="space-y-6 sticky top-6">
                    <div className="bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm">
                        <div className="flex justify-between items-center border-b border-slate-100 px-4 py-3 bg-slate-50">
                            <span className="text-[11px] font-bold text-primary flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />Live Public Card Preview</span>
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Student Portal View</span>
                        </div>
                        <div className="p-4 bg-slate-50/50">
                            <div className="bg-white border border-slate-200 rounded-[12px] shadow-sm overflow-hidden pointer-events-none opacity-90">
                                <div className="h-28 bg-slate-900 relative flex items-center justify-center overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop" className="opacity-40 absolute w-full h-full object-cover" alt="Preview" />
                                    <div className="relative z-10 text-white text-center px-3">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-blue-200">{form.category}</p>
                                        <p className="text-[14px] font-bold leading-tight">{form.title || 'Your Event Title'}</p>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <p className="text-[11px] text-slate-500 line-clamp-2 mb-3">{form.description || 'Your event description will appear here...'}</p>
                                    <div className="flex justify-between text-[11px] font-bold text-slate-700 border-t border-slate-100 pt-2 mt-2">
                                        <span>{form.date || 'Date TBD'}</span>
                                        <span>{form.maxParticipants} seats</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Clearance Pipeline */}
                    <div className="bg-white border border-slate-200 rounded-[16px] overflow-hidden shadow-sm">
                        <div className="flex justify-between items-center border-b border-slate-100 px-5 py-4">
                            <span className="text-[13px] font-bold text-slate-900 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Clearance Pipeline</span>
                            <span className="text-[10px] text-slate-400 font-medium">Est.: ~36 Hours</span>
                        </div>
                        <div className="p-5 space-y-3">
                            {['HOD Endorsement', 'Dean Academic Affairs', 'Estate & Safety Officer', 'Finance & Accounts'].map((stage, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-[8px] bg-slate-50 border border-slate-100">
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${i === 0 ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
                                        {i === 0 ? <Check className="w-3 h-3" /> : i + 1}
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold text-slate-700">{i + 1}. {stage}</p>
                                        <p className="text-[10px] text-slate-400 font-medium">{i === 0 ? 'Auto-Approved on submit' : 'Pending submission'}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
