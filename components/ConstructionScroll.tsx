'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import ConstructionTextOverlays from './ConstructionTextOverlays';

const FRAME_COUNT = 120;

export default function ConstructionScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/images/construction/${i}.jpg?v=2`;
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Draw frame on canvas
  useEffect(() => {
    if (images.length === 0 || imagesLoaded < FRAME_COUNT) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let renderFrame = 0;
    
    const render = () => {
      const currentProgress = scrollYProgress.get();
      // Calculate frame index (0 to 119)
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(currentProgress * (FRAME_COUNT - 1)))
      );
      
      if (frameIndex !== renderFrame || renderFrame === 0) {
        renderFrame = frameIndex;
        const img = images[frameIndex];
        
        if (img && img.complete) {
          // Responsive object-fit: cover implementation for canvas
          const { width, height } = canvas;
          const hRatio = width / img.width;
          const vRatio = height / img.height;
          const ratio = Math.max(hRatio, vRatio);
          const centerShift_x = (width - img.width * ratio) / 2;
          const centerShift_y = (height - img.height * ratio) / 2;

          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
          );
        }
      }
      requestAnimationFrame(render);
    };
    
    const animationId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationId);
  }, [images, imagesLoaded, scrollYProgress]);

  // Handle Resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      // Force redraw by setting a dummy progress that forces the render loop to pick it up,
      // actually the requestAnimationFrame loop handles redraws on resize since width/height change.
    };
    
    handleResize(); // initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Loading State */}
        {imagesLoaded < FRAME_COUNT && (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
            <p className="text-lg font-serif text-slate-800 mb-3 tracking-wide">Loading Experience...</p>
            <div className="w-56 h-[3px] bg-slate-200 overflow-hidden">
              <div 
                className="h-full bg-blue-600 transition-all duration-300" 
                style={{ width: `${(imagesLoaded / FRAME_COUNT) * 100}%` }}
              />
            </div>
          </div>
        )}

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Cinematic Overlay - Reduced darkness so image looks brighter/clearer */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Text Overlays */}
        <ConstructionTextOverlays scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
