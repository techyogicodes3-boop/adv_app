'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Eye, X } from 'lucide-react';
import { blogsAPI } from '@/lib/api';

interface Blog {
  _id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  createdAt: string;
}

const galleryImages = [
  { src: '/blog1.jpeg', alt: 'Legal consultation and documentation' },
  { src: '/blog2.jpeg', alt: 'Property and legal advisory' },
  { src: '/blog3.jpeg', alt: 'Mumbai legal practice insight' },
  { src: '/blog4.jpeg', alt: 'Real estate legal review' },
  { src: '/blog5.jpeg', alt: 'Strategic legal planning' },
];

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[number] | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await blogsAPI.getAll();
        setBlogs(Array.isArray(data) ? data : []);
      } catch {
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <>
      <section className="bg-[#0D1B2A] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Insights</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>Legal Insights & Commentary</h1>
          <p className="text-gray-400 text-base max-w-xl mx-auto">In-depth analysis on real estate law, commercial litigation, and legal developments affecting property and business in India.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Gallery</p>
            <h2 className="text-3xl font-semibold text-[#0D1B2A]" style={{ fontFamily: 'Playfair Display, serif' }}>Moments From Our Practice</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className="group relative overflow-hidden rounded-xl border border-[#EDE8DF] bg-[#F8F4EE] shadow-sm gallery-float"
                style={{ animationDelay: `${index * 0.25}s` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={940}
                  height={627}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#0D1B2A]/0 transition group-hover:bg-[#0D1B2A]/35">
                  <button
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    aria-label={`View ${image.alt}`}
                    title="View image"
                    className="flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-white text-[#0D1B2A] opacity-0 shadow-lg transition group-hover:scale-100 group-hover:opacity-100 hover:bg-[#B8952A] hover:text-white"
                  >
                    <Eye className="h-5 w-5" aria-hidden />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-[#B8952A] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-20 text-[#6B7280]">
              No blog posts yet. Check back soon.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <article key={blog._id} className="bg-white rounded-xl overflow-hidden border border-[#EDE8DF] hover:shadow-xl transition-shadow group">
                  <div className="relative overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-[#6B7280] mb-3">
                      <span>{formatDate(blog.createdAt)}</span><span>·</span><span>{blog.author}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#0D1B2A] mb-2 line-clamp-2 group-hover:text-[#B8952A] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>{blog.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-3">{blog.description}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <div className="relative h-[86vh] w-full max-w-5xl overflow-hidden rounded-xl bg-white p-3 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
              title="Close"
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#0D1B2A] text-white shadow-lg transition hover:bg-[#B8952A]"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
            <div className="relative h-full w-full">
              <Image src={selectedImage.src} alt={selectedImage.alt} fill sizes="100vw" className="object-contain" priority />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
