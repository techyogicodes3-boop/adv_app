'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { authAPI } from '@/lib/api';
import { saveUser } from '@/lib/auth';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) { toast.error('Please fill in all fields.'); return; }
    setLoading(true);
    try {
      const user = await authAPI.login(form.email, form.password);
      saveUser(user);
      toast.success(`Welcome back, ${user.name}!`);
      router.push(user.role === 'admin' ? '/admin' : '/');
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F4EE] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#EDE8DF]">
          <div className="bg-[#0D1B2A] px-8 py-7 text-center">
            <div className="w-12 h-12 rounded-full bg-[#B8952A]/20 border border-[#B8952A]/40 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-[#B8952A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
            <h1 className="text-xl font-semibold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Sign In</h1>
            <p className="text-gray-400 text-xs mt-1">Access your Adv. Meet Shah account</p>
          </div>
          <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">
            <div>
              <label className="block text-xs font-medium text-[#0D1B2A] mb-1.5 tracking-wide uppercase">Email Address</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="w-full px-4 py-2.5 border border-[#EDE8DF] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#B8952A]/30 focus:border-[#B8952A] bg-[#F8F4EE]/50" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#0D1B2A] mb-1.5 tracking-wide uppercase">Password</label>
              <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="••••••••" className="w-full px-4 py-2.5 border border-[#EDE8DF] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#B8952A]/30 focus:border-[#B8952A] bg-[#F8F4EE]/50" />
            </div>
            <button type="submit" disabled={loading} className="w-full py-3 bg-[#B8952A] text-white rounded-lg font-medium text-sm hover:bg-[#8B6914] transition-colors disabled:opacity-60 shadow-md mt-2">
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
            <p className="text-center text-xs text-[#6B7280]">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-[#B8952A] hover:underline font-medium">Register here</Link>
            </p>
          </form>
        </div>
        <p className="text-center text-xs text-[#9CA3AF] mt-5">
          <Link href="/" className="hover:text-[#B8952A] transition-colors">&larr; Back to Home</Link>
        </p>
      </div>
    </div>
  );
}
