import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';
import { Mail, Lock, User, Hash, Phone, ArrowRight, Loader2 } from 'lucide-react';

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
            // After successful registration, route them to login
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to register');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 min-h-screen bg-neutral-950 flex items-center justify-center p-4 selection:bg-purple-500/30 overflow-y-auto">
            {/* Dynamic Background Effect */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none fixed">
                <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/10 blur-[100px] mix-blend-screen" />
                <div className="absolute bottom-[0%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-blue-600/10 blur-[120px] mix-blend-screen" />
            </div>

            <div className="relative z-10 w-full max-w-md mx-auto my-8">
                <div className="bg-neutral-900/60 backdrop-blur-xl rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden p-8">

                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                            Create Account
                        </h1>
                        <p className="text-neutral-400 mt-2 text-sm">
                            Join GCU Campus Flow
                        </p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-5">
                        {error && (
                            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                                {error}
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-purple-400 transition-colors">
                                    <User className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-neutral-950/50 border border-neutral-800 text-white rounded-xl pl-11 pr-4 py-3 outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-neutral-600"
                                />
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-purple-400 transition-colors">
                                    <Hash className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    name="studentId"
                                    required
                                    placeholder="Student ID (e.g., GCU2026001)"
                                    value={formData.studentId}
                                    onChange={handleChange}
                                    className="w-full bg-neutral-950/50 border border-neutral-800 text-white rounded-xl pl-11 pr-4 py-3 outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-neutral-600"
                                />
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-purple-400 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="College Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-neutral-950/50 border border-neutral-800 text-white rounded-xl pl-11 pr-4 py-3 outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-neutral-600"
                                />
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-purple-400 transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    name="phone"
                                    required
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-neutral-950/50 border border-neutral-800 text-white rounded-xl pl-11 pr-4 py-3 outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-neutral-600"
                                />
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-purple-400 transition-colors">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="Secure Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full bg-neutral-950/50 border border-neutral-800 text-white rounded-xl pl-11 pr-4 py-3 outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-neutral-600"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex items-center justify-center gap-2 bg-white text-black py-3 px-4 rounded-xl font-medium tracking-wide transition-all hover:bg-neutral-200 active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none mt-2"
                        >
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    Create Account
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>

                        <div className="text-center mt-6 text-sm text-neutral-500">
                            Already have an account?{' '}
                            <button
                                type="button"
                                onClick={() => navigate('/login')}
                                className="text-white hover:text-purple-400 transition-colors"
                            >
                                Sign in here
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
