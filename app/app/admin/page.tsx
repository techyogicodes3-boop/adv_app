'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { getUser, removeUser } from '@/lib/auth';
import { blogsAPI } from '@/lib/api';

interface Blog {
  _id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  createdAt: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [form, setForm] = useState({ title: '', description: '', image: '', author: 'Advocate Meet Shah' });
  const [submitting, setSubmitting] = useState(false);
  const [user, setUser] = useState<ReturnType<typeof getUser>>(null);

  useEffect(() => {
    const u = getUser();
    setUser(u);
    if (!u || u.role !== 'admin') { router.push('/login'); }
  }, [router]);

  const fetchBlogs = useCallback(async () => {
    setLoadingBlogs(true);
    try {
      const data = await blogsAPI.getAll();
      setBlogs(Array.isArray(data) ? data : []);
    } catch {
      setBlogs([]);
      toast.error('Failed to load blogs.');
    } finally {
      setLoadingBlogs(false);
    }
  }, []);

  useEffect(() => { fetchBlogs(); }, [fetchBlogs]);

  const handleLogout = () => { removeUser(); router.push('/'); };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.image) { toast.error('Please fill in all required fields.'); return; }
    setSubmitting(true);
    try {
      await blogsAPI.create(form);
      toast.success('Blog post published successfully!');
      setForm({ title: '', description: '', image: '', author: 'Advocate Meet Shah' });
      fetchBlogs();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Failed to publish blog.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this blog post?')) return;
    try {
      await blogsAPI.delete(id);
      setBlogs((prev) => prev.filter((b) => b._id !== id));
      toast.success('Blog deleted.');
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Failed to delete blog.');
    }
  };

  if (!user || user.role !== 'admin') return null;

  return (
    <div className="flex h-screen bg-[#F8F4EE] overflow-hidden">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-[#0D1B2A] flex flex-col transition-all duration-300 shrink-0`}>
        <div className="flex items-center gap-2.5 px-4 py-5 border-b border-[#1A2E42]">
          <div className="w-8 h-8 rounded-full bg-[#B8952A]/20 border border-[#B8952A]/40 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-[#B8952A]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
          </div>
          {sidebarOpen && (
            <div>
              <span className="text-white font-semibold text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>Adv. Meet Shah</span>
              <span className="text-[#B8952A] text-[9px] block tracking-wider">ADMIN PANEL</span>
            </div>
          )}
        </div>
        <nav className="flex-1 py-4 px-2">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#B8952A]/10 border border-[#B8952A]/20 cursor-pointer">
            <svg className="w-5 h-5 text-[#B8952A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            {sidebarOpen && <span className="text-[#B8952A] text-sm font-medium">Blog Management</span>}
          </div>
        </nav>
        <div className="px-2 py-4 border-t border-[#1A2E42]">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="w-full flex items-center justify-center gap-2 py-2 text-gray-400 hover:text-white transition-colors text-sm">
            <svg className={`w-4 h-4 transition-transform ${sidebarOpen ? '' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
            {sidebarOpen && <span>Collapse</span>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-[#EDE8DF] px-6 py-4 flex items-center justify-between shrink-0">
          <div>
            <h1 className="text-xl font-semibold text-[#0D1B2A]" style={{ fontFamily: 'Playfair Display, serif' }}>Admin Dashboard</h1>
            <p className="text-xs text-[#6B7280]">Blog Management</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#0D1B2A] flex items-center justify-center">
                <svg className="w-4 h-4 text-[#B8952A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <div>
                <p className="text-sm font-medium text-[#0D1B2A]">{user.name}</p>
                <p className="text-xs text-[#B8952A]">Administrator</p>
              </div>
            </div>
            <button onClick={handleLogout} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-200 text-red-600 text-xs font-medium hover:bg-red-50 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
              Logout
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Add Blog Form */}
            <div className="bg-white rounded-xl border border-[#EDE8DF] overflow-hidden">
              <div className="bg-[#0D1B2A] px-6 py-4">
                <h2 className="text-base font-semibold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Add New Blog Post</h2>
                <p className="text-gray-400 text-xs mt-0.5">Create and publish a new article</p>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#0D1B2A] mb-1.5 uppercase tracking-wide">Blog Title <span className="text-red-400">*</span></label>
                  <input name="title" type="text" value={form.title} onChange={handleChange} placeholder="Enter blog title" className="w-full px-3 py-2.5 border border-[#EDE8DF] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#B8952A]/30 focus:border-[#B8952A]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0D1B2A] mb-1.5 uppercase tracking-wide">Image URL <span className="text-red-400">*</span></label>
                  <input name="image" type="url" value={form.image} onChange={handleChange} placeholder="https://images.pexels.com/..." className="w-full px-3 py-2.5 border border-[#EDE8DF] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#B8952A]/30 focus:border-[#B8952A]" />
                  {form.image && <img src={form.image} alt="Preview" className="mt-2 w-full h-32 object-cover rounded-lg border border-[#EDE8DF]" />}
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0D1B2A] mb-1.5 uppercase tracking-wide">Description <span className="text-red-400">*</span></label>
                  <textarea name="description" value={form.description} onChange={handleChange} rows={5} placeholder="Write your blog content here..." className="w-full px-3 py-2.5 border border-[#EDE8DF] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#B8952A]/30 focus:border-[#B8952A] resize-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#0D1B2A] mb-1.5 uppercase tracking-wide">Author Name</label>
                    <input name="author" type="text" value={form.author} onChange={handleChange} className="w-full px-3 py-2.5 border border-[#EDE8DF] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#B8952A]/30 focus:border-[#B8952A]" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#0D1B2A] mb-1.5 uppercase tracking-wide">Created At</label>
                    <input type="text" value={new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} readOnly className="w-full px-3 py-2.5 border border-[#EDE8DF] rounded-lg text-sm bg-[#F8F4EE] text-[#6B7280] cursor-default" />
                  </div>
                </div>
                <button type="submit" disabled={submitting} className="w-full py-3 bg-[#B8952A] text-white rounded-lg font-medium text-sm hover:bg-[#8B6914] transition-colors disabled:opacity-60 shadow-md">
                  {submitting ? 'Publishing...' : 'Publish Blog Post'}
                </button>
              </form>
            </div>

            {/* Blog List */}
            <div className="bg-white rounded-xl border border-[#EDE8DF] overflow-hidden">
              <div className="bg-[#0D1B2A] px-6 py-4 flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>All Blog Posts</h2>
                  <p className="text-gray-400 text-xs mt-0.5">{blogs.length} articles</p>
                </div>
                {loadingBlogs && <div className="w-4 h-4 border-2 border-[#B8952A] border-t-transparent rounded-full animate-spin" />}
              </div>
              <div className="divide-y divide-[#F8F4EE] max-h-[600px] overflow-y-auto">
                {blogs.map((blog) => (
                  <div key={blog._id} className="p-4 flex gap-3 hover:bg-[#F8F4EE]/50 transition-colors">
                    <img src={blog.image} alt={blog.title} className="w-16 h-16 rounded-lg object-cover shrink-0 border border-[#EDE8DF]" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[#0D1B2A] text-sm leading-tight mb-1 line-clamp-1">{blog.title}</p>
                      <p className="text-xs text-[#6B7280] line-clamp-2 mb-1.5">{blog.description}</p>
                      <div className="flex items-center gap-3 text-xs text-[#9CA3AF]">
                        <span>{blog.author}</span><span>·</span>
                        <span>{new Date(blog.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>
                    </div>
                    <button onClick={() => handleDelete(blog._id)} className="shrink-0 w-7 h-7 flex items-center justify-center text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
