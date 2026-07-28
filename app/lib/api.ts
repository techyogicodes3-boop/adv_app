const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers as Record<string, string> || {}),
  };

  let res: Response;
  try {
    res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
  } catch {
    throw new Error('Unable to connect to server. Check NEXT_PUBLIC_API_URL and API CORS settings.');
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || 'Request failed');
  return data;
}

export const authAPI = {
  login: (email: string, password: string) =>
    apiFetch('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),
  register: (name: string, mobile: string, email: string, password: string) =>
    apiFetch('/auth/register', { method: 'POST', body: JSON.stringify({ name, mobile, email, password }) }),
};

export const blogsAPI = {
  getAll: () => apiFetch('/blogs'),
  getById: (id: string) => apiFetch(`/blogs/${id}`),
  create: (data: { title: string; description: string; image: string; author: string }) =>
    apiFetch('/blogs', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: string, data: object) =>
    apiFetch(`/blogs/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id: string) => apiFetch(`/blogs/${id}`, { method: 'DELETE' }),
};
