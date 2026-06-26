import { PlayCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import hero1 from "../../../dist/assets/hero_images/hero1.jpg";
import hero2 from "../../assets/images/hero/hero2.jpg";
import hero3 from "../../assets/images/hero/hero3.jpg";
import hero4 from "../../assets/images/hero/hero4.jpg";
import hero5 from "../../assets/images/hero/hero5.jpg";

const galleryImages = [hero1, hero2, hero3, hero4, hero5];
const heroVideoUrl =
  "https://player.vimeo.com/video/1202836206?autoplay=1&title=0&byline=0&portrait=0";

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (isPaused) {
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    }, 8250);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current, isPaused]);

  const goTo = (idx: number) => setCurrent(idx);
  const goLeft = () =>
    setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  const goRight = () => setCurrent((prev) => (prev + 1) % galleryImages.length);

  return (
    <section
      className="bg-slate-950 px-2 py-2 sm:px-5 sm:py-6 lg:px-8"
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-[1672px]">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-black shadow-clean sm:rounded-[2rem]">
          <div className="relative aspect-[16/9] w-full sm:aspect-[1672/941]">
            {galleryImages.map((src, idx) => (
              <img
                alt={`Hydrogen wellness hero slide ${idx + 1}`}
                className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-1000 ${
                  idx === current ? "opacity-100" : "opacity-0"
                }`}
                decoding={idx === 0 ? "sync" : "async"}
                fetchPriority={idx === 0 ? "high" : "auto"}
                key={src}
                loading={idx === 0 ? "eager" : "lazy"}
                src={src}
              />
            ))}

            <button
              aria-label="Previous slide"
              className="absolute left-2 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-blue-700 shadow transition hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-300 sm:left-4 sm:h-11 sm:w-11"
              onClick={goLeft}
              type="button"
            >
              <span aria-hidden="true" className="text-xl font-black sm:text-2xl">
                ‹
              </span>
            </button>

            <button
              aria-label="Next slide"
              className="absolute right-2 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-blue-700 shadow transition hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-300 sm:right-4 sm:h-11 sm:w-11"
              onClick={goRight}
              type="button"
            >
              <span aria-hidden="true" className="text-xl font-black sm:text-2xl">
                ›
              </span>
            </button>

            <button
              className="absolute bottom-6 right-4 z-20 inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-yellow-100 bg-yellow-300 px-4 py-2 text-xs font-black uppercase tracking-[.1em] text-slate-950 shadow-[0_14px_34px_rgba(250,204,21,0.34)] transition hover:-translate-y-0.5 hover:bg-yellow-200 hover:shadow-[0_18px_42px_rgba(250,204,21,0.44)] focus:outline-none focus:ring-4 focus:ring-yellow-200/70 sm:bottom-5 sm:right-[50px] sm:px-5 sm:py-2.5 sm:text-sm"
              onClick={() => setIsVideoOpen(true)}
              type="button"
            >
              <PlayCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              Watch Video
            </button>

            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full bg-black/35 px-3 py-2 backdrop-blur sm:bottom-5 sm:gap-3">
              {galleryImages.map((_, idx) => (
                <button
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 w-2.5 rounded-full border border-white transition-all duration-300 sm:h-3 sm:w-3 ${
                    idx === current
                      ? "scale-125 bg-white opacity-100"
                      : "bg-white/70 opacity-70 hover:bg-blue-200 hover:opacity-100"
                  }`}
                  key={idx}
                  onClick={() => goTo(idx)}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {isVideoOpen ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[40000] overflow-y-auto bg-slate-950/88 px-4 py-8 backdrop-blur-sm sm:px-6"
          onClick={() => setIsVideoOpen(false)}
          role="dialog"
        >
          <div
            className="mx-auto max-w-5xl overflow-hidden rounded-md border border-yellow-200/35 bg-slate-950 shadow-[0_35px_120px_rgba(0,0,0,0.55)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 bg-slate-950 px-5 py-4 text-white">
              <div>
                <p className="text-xs font-black uppercase tracking-[.24em] text-yellow-300">
                  Featured Video
                </p>
                <h2 className="mt-1 text-xl font-black leading-tight sm:text-2xl">
                  Molecular Hydrogen Water
                </h2>
              </div>
              <button
                aria-label="Close hero video modal"
                className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full bg-white/12 text-white transition hover:bg-white/22"
                onClick={() => setIsVideoOpen(false)}
                type="button"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="aspect-video bg-black">
              <iframe
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
                src={heroVideoUrl}
                title="Molecular Hydrogen Water video"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
