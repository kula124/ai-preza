'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import type { Slide } from '@/lib/slides';

interface SlideViewerProps {
  slide: Slide;
  currentSlide: number;
  totalSlides: number;
}

export default function SlideViewer({
  slide,
  currentSlide,
  totalSlides,
}: SlideViewerProps) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (currentSlide < totalSlides) {
          router.push(`/slides/${currentSlide + 1}`);
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSlide > 1) {
          router.push(`/slides/${currentSlide - 1}`);
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        router.push('/slides/1');
      } else if (e.key === 'End') {
        e.preventDefault();
        router.push(`/slides/${totalSlides}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides, router]);

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      {/* Main slide content */}
      <main className="flex-1 overflow-y-auto p-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none [&_ul]:list-disc [&_ul]:ml-6 [&_ol]:list-decimal [&_ol]:ml-6">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {slide.content}
            </ReactMarkdown>
          </div>
        </div>
      </main>

      {/* Navigation footer */}
      <footer className="flex-shrink-0 p-6 flex items-center justify-between bg-black/30 backdrop-blur-md border-t border-white/10 relative z-10">
        <button
          onClick={() => currentSlide > 1 && router.push(`/slides/${currentSlide - 1}`)}
          disabled={currentSlide === 1}
          className="px-6 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-all"
        >
          ← Previous
        </button>

        <div className="text-sm text-gray-300">
          Slide {currentSlide} of {totalSlides}
        </div>

        <button
          onClick={() => currentSlide < totalSlides && router.push(`/slides/${currentSlide + 1}`)}
          disabled={currentSlide === totalSlides}
          className="px-6 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-all"
        >
          Next →
        </button>
      </footer>

      {/* Keyboard hints */}
      <div className="fixed bottom-20 right-6 text-xs text-gray-400 opacity-50 hover:opacity-100 transition-opacity">
        <div>← → Navigate</div>
        <div>Home/End Jump</div>
      </div>
    </div>
  );
}
