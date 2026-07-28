'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { authAPI } from '@/lib/api';
import { saveUser } from '@/lib/auth';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', mobile: '', email: '', password: '', confirm: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) { toast.error('Please fill in all required fields.'); return; }
    if (form.password !== form.confirm) { toast.error('Passwords do not match.'); return; }
    if (form.password.length < 6) { toast.error('Password must be at least 6 characters.'); return; }
    setLoading(true);
    try {
      const user = await authAPI.register(form.name, form.mobile, form.email, form.password);
      saveUser(user);
      toast.success(`Welcome, ${user.name}! Account created successfully.`);
      router.push('/');
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Registration failed');
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
              <svg className="w-5 h-5 text-[#B8952A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
            </div>
            <h1 className="text-xl font-semibold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Create Account</h1>
            <p className="text-gray-400 text-xs mt-1">Join Adv. Meet Shah portal</p>
          </div>
          <form onSubmit={handleSubmit} className="px-8 py-8 space-y-4">
            {[
              { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
              { name: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: '+91 99999 99999', required: false },
              { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', required: true },
              { name: 'password', label: 'Password', type: 'password', placeholder: 'Min. 6 characters', required: true },
              { name: 'confirm', label: 'Confirm Password', type: 'password', placeholder: 'Re-enter password', required: true },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-xs font-medium text-[#0D1B2A] mb-1.5 tracking-wide uppercase">
                  {field.label} {field.required && <span className="text-red-400">*</span>}
                </label>
                <input
                  name={field.name}
                  type={field.type}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2.5 border border-[#EDE8DF] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#B8952A]/30 focus:border-[#B8952A] bg-[#F8F4EE]/50"
                />
              </div>
            ))}
            <button type="submit" disabled={loading} className="w-full py-3 bg-[#B8952A] text-white rounded-lg font-medium text-sm hover:bg-[#8B6914] transition-colors disabled:opacity-60 shadow-md mt-2">
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
            <p className="text-center text-xs text-[#6B7280]">
              Already have an account?{' '}
              <Link href="/login" className="text-[#B8952A] hover:underline font-medium">Sign in</Link>
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
