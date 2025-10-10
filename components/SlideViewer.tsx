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
    <div className="h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white flex flex-col">
      {/* Main slide content */}
      <main className="flex-1 overflow-y-auto p-8">
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
      <footer className="flex-shrink-0 p-6 flex items-center justify-between bg-black/20 backdrop-blur-sm">
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
