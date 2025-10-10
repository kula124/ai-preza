import { notFound } from 'next/navigation';
import { getAllSlides, getSlideByNumber, getTotalSlides } from '@/lib/slides';
import SlideViewer from '@/components/SlideViewer';

export async function generateStaticParams() {
  const slides = getAllSlides();
  return slides.map((slide) => ({
    number: slide.number.toString(),
  }));
}

export default async function SlidePage({
  params,
}: {
  params: Promise<{ number: string }>;
}) {
  const { number } = await params;
  const slideNumber = parseInt(number, 10);
  const slide = getSlideByNumber(slideNumber);

  if (!slide) {
    notFound();
  }

  const totalSlides = getTotalSlides();

  return (
    <SlideViewer
      slide={slide}
      currentSlide={slideNumber}
      totalSlides={totalSlides}
    />
  );
}
