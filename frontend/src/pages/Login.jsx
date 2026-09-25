import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';
import { Mail, Lock, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await api.post('/auth/login', { email, password });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            const role = response.data.user.role;
            if (role === 'admin') navigate('/admin');
            else if (role === 'organizer') navigate('/organizer');
            else navigate('/student');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to login');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 min-h-screen bg-slate-50 flex items-center justify-center p-4">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <div className="relative z-10 w-full max-w-[420px] mx-auto">
                <div className="bg-white rounded-xl border border-slate-200 shadow-level-2 overflow-hidden px-8 py-10">

                    <div className="mb-8 text-center flex flex-col items-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 border border-primary/20">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                            GCU Portal Access
                        </h1>
                        <p className="text-slate-500 mt-1 text-sm font-medium">
                            Academic Event & Credential Management
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {error && (
                            <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-600 text-[13px] font-medium text-center">
                                {error}
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="relative group">
                                <label className="text-[12px] font-semibold text-slate-600 tracking-wider uppercase mb-1.5 block">College Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        placeholder="name@gcu.ac.in"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-white border border-slate-300 text-slate-900 rounded-[8px] pl-10 pr-4 py-2.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-slate-400 text-[14px]"
                                    />
                                </div>
                            </div>

                            <div className="relative group">
                                <label className="text-[12px] font-semibold text-slate-600 tracking-wider uppercase mb-1.5 block">Secure Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                        <Lock className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-white border border-slate-300 text-slate-900 rounded-[8px] pl-10 pr-4 py-2.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-slate-400 text-[14px]"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex items-center justify-center gap-2 bg-primary text-white py-2.5 px-4 rounded-[8px] text-[14px] font-medium transition-colors hover:bg-slate-900 active:bg-slate-950 disabled:opacity-70 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                        >
                            {isLoading ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                                <>
                                    Authenticate Securely
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </>
                            )}
                        </button>

                        <div className="text-center mt-6 pt-6 border-t border-slate-100 text-[13px] text-slate-500 font-medium">
                            Unregistered Personnel?{' '}
                            <button
                                type="button"
                                onClick={() => navigate('/register')}
                                className="text-primary hover:text-secondary-foreground transition-colors font-semibold"
                            >
                                Enroll Identity Profile
                            </button>
                        </div>
                    </form>
                </div>
                <p className="text-center mt-6 text-xs text-slate-400 font-medium tracking-wide">
                    GIRIJANANDA CHOWDHURY UNIVERSITY • SECURE PORTAL
                </p>
            </div>
        </div>
    );
}
