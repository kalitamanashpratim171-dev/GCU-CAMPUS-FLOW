import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';
import { Mail, Lock, User, Hash, Phone, ArrowRight, Loader2, BookOpen } from 'lucide-react';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        studentId: '',
        phone: '',
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            await api.post('/auth/register', formData);
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to register identity');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 min-h-screen bg-slate-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none fixed bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <div className="relative z-10 w-full max-w-[480px] mx-auto my-8">
                <div className="bg-white rounded-xl border border-slate-200 shadow-level-2 overflow-hidden px-8 py-10">

                    <div className="mb-8 text-center flex flex-col items-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 border border-primary/20">
                            <BookOpen className="w-6 h-6 text-primary" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                            Identity Enrollment
                        </h1>
                        <p className="text-slate-500 mt-1 text-sm font-medium">
                            Academic Registry Synchronization
                        </p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-6">
                        {error && (
                            <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-600 text-[13px] font-medium text-center">
                                {error}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative group md:col-span-2">
                                <label className="text-[12px] font-semibold text-slate-600 tracking-wider uppercase mb-1.5 block">Full Legal Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="As printed on Student ID"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-slate-300 text-slate-900 rounded-[8px] pl-10 pr-4 py-2.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-slate-400 text-[14px]"
                                    />
                                </div>
                            </div>

                            <div className="relative group">
                                <label className="text-[12px] font-semibold text-slate-600 tracking-wider uppercase mb-1.5 block">Student ID</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                        <Hash className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        name="studentId"
                                        required
                                        placeholder="GCU2026..."
                                        value={formData.studentId}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-slate-300 text-slate-900 rounded-[8px] pl-10 pr-4 py-2.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-slate-400 text-[14px]"
                                    />
                                </div>
                            </div>

                            <div className="relative group">
                                <label className="text-[12px] font-semibold text-slate-600 tracking-wider uppercase mb-1.5 block">Phone Contact</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        name="phone"
                                        required
                                        placeholder="+91..."
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-slate-300 text-slate-900 rounded-[8px] pl-10 pr-4 py-2.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-slate-400 text-[14px]"
                                    />
                                </div>
                            </div>

                            <div className="relative group md:col-span-2">
                                <label className="text-[12px] font-semibold text-slate-600 tracking-wider uppercase mb-1.5 block">Institutional Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="name@gcu.ac.in"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-slate-300 text-slate-900 rounded-[8px] pl-10 pr-4 py-2.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-slate-400 text-[14px]"
                                    />
                                </div>
                            </div>

                            <div className="relative group md:col-span-2">
                                <label className="text-[12px] font-semibold text-slate-600 tracking-wider uppercase mb-1.5 block">Security Key</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                        <Lock className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        required
                                        placeholder="Minimum 8 characters"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-slate-300 text-slate-900 rounded-[8px] pl-10 pr-4 py-2.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-slate-400 text-[14px]"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex items-center justify-center gap-2 bg-primary text-white py-2.5 px-4 rounded-[8px] text-[14px] font-medium transition-colors hover:bg-slate-900 active:bg-slate-950 disabled:opacity-70 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 mt-4"
                        >
                            {isLoading ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                                <>
                                    Submit Enrollment
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </>
                            )}
                        </button>

                        <div className="text-center mt-6 pt-6 border-t border-slate-100 text-[13px] text-slate-500 font-medium">
                            Existing active profile?{' '}
                            <button
                                type="button"
                                onClick={() => navigate('/login')}
                                className="text-primary hover:text-secondary-foreground transition-colors font-semibold"
                            >
                                Authenticate Here
                            </button>
                        </div>
                    </form>
                </div>
                <p className="text-center mt-6 text-xs text-slate-400 font-medium tracking-wide">
                    GIRIJANANDA CHOWDHURY UNIVERSITY • ACADEMIC REGISTRY
                </p>
            </div>
        </div>
    );
}
