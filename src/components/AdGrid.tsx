import {useRef, useState} from 'react';
import {ads, intro} from '../content';
import {useReveals} from '../hooks/useReveals';
import {hasSound, playWithSound, stopSound} from '../lib/player';
import {SpeakerIcon} from './Hero';

const pad = (n: number) => String(n).padStart(2, '0');
const CATEGORIES = ['All', ...Array.from(new Set(ads.map((a) => a.type)))];

/** All the ads in a grid, filterable by category. Tap one to play it with sound. */
export function AdGrid() {
  const ref = useReveals<HTMLElement>();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [filter, setFilter] = useState('All');
  const [playing, setPlaying] = useState(-1);

  const toggle = (i: number) => {
    const v = videoRefs.current[i];
    if (!v) return;
    if (hasSound(v)) stopSound(v);
    else playWithSound(v);
  };

  return (
    <section ref={ref} id="ads" aria-labelledby="ads-title" className="relative bg-void px-4 py-24 sm:px-6 md:px-[6vw] md:py-32">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
        <div className="max-w-[40rem]">
          <p className="font-mono text-label text-earth uppercase">{intro.eyebrow}</p>
          <h2 id="ads-title" className="mt-4 font-display text-display text-white">
            {intro.heading}
          </h2>
          <p className="mt-5 text-body text-regolith/70">{intro.body}</p>
        </div>
        <div role="group" aria-label="Filter ads by category" className="flex flex-wrap gap-2 md:justify-end">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-3.5 py-2 font-mono text-[0.6875rem] tracking-[0.12em] uppercase transition-colors ${
                filter === c ? 'bg-white text-void' : 'text-regolith/80 ring-1 ring-white/20 hover:text-white hover:ring-white/50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <ol className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 md:mt-16 md:gap-x-6 md:gap-y-10">
        {ads.map((ad, i) => {
          const shown = filter === 'All' || ad.type === filter;
          const isPlaying = playing === i;
          return (
            <li key={i} hidden={!shown}>
              <figure>
                <div className="group relative aspect-[9/16] overflow-hidden rounded-[10px] bg-void-2 ring-1 ring-white/10">
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    src={ad.src}
                    poster={ad.poster}
                    muted
                    playsInline
                    preload="none"
                    onPlay={() => setPlaying(i)}
                    onPause={() => setPlaying((p) => (p === i ? -1 : p))}
                    onEnded={() => setPlaying((p) => (p === i ? -1 : p))}
                    className="absolute inset-0 size-full object-cover"
                  />
                  <span className="absolute top-3 left-3 rounded-[3px] bg-void/70 px-2 py-1 font-mono text-[0.625rem] tracking-[0.14em] text-white uppercase backdrop-blur">
                    {ad.type}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-label={isPlaying ? `Pause ${ad.brand}` : `Play ${ad.brand} with sound`}
                    className={`absolute inset-0 flex items-center justify-center transition-colors ${isPlaying ? 'bg-transparent' : 'bg-black/20 hover:bg-black/35'}`}
                  >
                    {isPlaying ? (
                      <span className="absolute right-3 bottom-3 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 font-mono text-[0.625rem] tracking-[0.14em] text-void uppercase">
                        <SpeakerIcon on /> Playing
                      </span>
                    ) : (
                      <span className="flex size-14 items-center justify-center rounded-full bg-white/90 text-void shadow-lg transition-transform group-hover:scale-110">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-1 size-6" fill="currentColor">
                          <path d="M7 5l12 7-12 7z" />
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
                <figcaption className="mt-3 flex gap-3">
                  <span className="font-mono text-label text-earth">{pad(i + 1)}</span>
                  <span>
                    <span className="block font-display text-[0.8125rem] tracking-[0.08em] text-white uppercase">{ad.brand}</span>
                    <span className="mt-1 block text-[0.8125rem] leading-relaxed text-regolith/65">{ad.body}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
