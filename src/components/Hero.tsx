import {useEffect, useRef, useState} from 'react';
import {brand, hero} from '../content';
import {useReducedMotion} from '../hooks/useReducedMotion';
import {hasSound, playWithSound, stopSound} from '../lib/player';
import {scrollToHash} from '../lib/scroll';

/** Intro: who I am on the left, my best ad playing in a phone on the right. */
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [sound, setSound] = useState(false);

  // Quiet loop by default (unless the visitor prefers reduced motion).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduced) v.pause();
    else v.play().catch(() => {});
  }, [reduced]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (hasSound(v)) {
      stopSound(v, reduced);
      if (!reduced) v.play().catch(() => {});
    } else {
      playWithSound(v);
    }
  };

  return (
    <section id="top" className="relative overflow-hidden bg-void px-4 pt-28 pb-20 sm:px-6 md:px-[6vw] md:pt-36 md:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{background: 'radial-gradient(40% 50% at 75% 45%, rgba(111,182,255,0.16), transparent 70%), radial-gradient(30% 40% at 90% 15%, rgba(255,79,139,0.12), transparent 70%)'}}
      />
      <div className="relative grid items-center gap-14 md:grid-cols-[1.3fr_1fr] md:gap-10">
        <div>
          <p className="font-mono text-label text-earth uppercase">{hero.kicker}</p>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-white">{hero.heading}</h1>
          <p className="mt-6 max-w-[34rem] text-lead text-white/90">{hero.lead}</p>
          <p className="mt-4 max-w-[34rem] text-body text-regolith/70">{hero.bio}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#ads"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash('#ads');
              }}
              className="rounded-[4px] bg-white px-5 py-3.5 font-mono text-label text-void uppercase transition-colors hover:bg-earth"
            >
              See my ads
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash('#contact');
              }}
              className="rounded-[4px] px-5 py-3.5 font-mono text-label text-white uppercase ring-1 ring-white/25 transition-colors hover:bg-white hover:text-void"
            >
              Start a project
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-[min(72vw,300px)]">
          <div className="relative aspect-[9/19] rounded-[2.4rem] bg-black p-[0.55rem] shadow-[0_40px_120px_-20px_rgb(111_182_255/0.35)] ring-1 ring-white/20">
            <div className="relative size-full overflow-hidden rounded-[1.9rem] bg-void-2">
              <video
                ref={videoRef}
                src={hero.video}
                poster={hero.poster}
                muted
                loop
                playsInline
                preload="auto"
                onVolumeChange={(e) => setSound(!e.currentTarget.muted)}
                aria-label="A face serum ad I made"
                className="absolute inset-0 size-full object-cover"
              />
              <div aria-hidden="true" className="absolute top-2 left-1/2 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pt-10 pb-4 text-white">
                <p className="text-[0.8125rem] font-bold">{brand.name}</p>
                <p className="mt-0.5 text-[0.6875rem] text-white/75">#aiugc #skincare #ad</p>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={toggle}
            aria-pressed={sound}
            className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-4 py-2.5 font-mono text-label whitespace-nowrap text-void uppercase shadow-[0_12px_30px_-10px_rgb(0_0_0/0.7)] transition-colors hover:bg-earth"
          >
            <SpeakerIcon on={sound} />
            {sound ? 'Sound on' : 'Tap for sound'}
          </button>
        </div>
      </div>
    </section>
  );
}

export function SpeakerIcon({on}: {on: boolean}) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" />
      {on ? <path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" /> : <path d="M16 9.5l5 5M21 9.5l-5 5" />}
    </svg>
  );
}
