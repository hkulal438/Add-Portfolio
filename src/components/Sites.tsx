import {sites} from '../content';
import {useReveals} from '../hooks/useReveals';

/** Website projects: a screenshot, what it was, what it's built with. */
export function Sites() {
  const ref = useReveals<HTMLElement>();
  return (
    <section ref={ref} id="sites" aria-labelledby="sites-title" className="relative bg-void px-4 py-24 sm:px-6 md:px-[6vw] md:py-32">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between" data-reveal>
        <div>
          <p className="font-mono text-label text-earth uppercase">{sites.eyebrow}</p>
          <h2 id="sites-title" className="mt-4 font-display text-display text-white">
            {sites.heading}
          </h2>
        </div>
        <p className="font-mono text-label text-regolith/50 uppercase">{sites.note}</p>
      </div>

      <ol className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
        {sites.items.map((s, i) => {
          const Wrap = s.url ? 'a' : 'div';
          return (
            // min-w-0: let long addresses truncate instead of widening the grid column.
            <li key={i} data-reveal style={{transitionDelay: `${(i % 3) * 110}ms`}} className="min-w-0">
              <Wrap
                {...(s.url ? {href: s.url, target: '_blank', rel: 'noreferrer'} : {})}
                className="group flex h-full flex-col overflow-hidden rounded-[10px] bg-void-2 ring-1 ring-white/10 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:ring-earth/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                  {s.image ? (
                    <img src={s.image} alt={`${s.name} — screenshot`} loading="lazy" decoding="async" className="size-full object-cover object-top" />
                  ) : (
                    <div className="flex size-full items-center justify-center font-mono text-[0.625rem] tracking-[0.14em] text-regolith/50 uppercase">Screenshot coming soon</div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="font-mono text-[0.625rem] tracking-[0.14em] text-earth uppercase">{s.type}</span>
                  <h3 className="mt-2 font-display text-[0.9375rem] tracking-[0.08em] text-white uppercase">{s.name}</h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-regolith/65">{s.body}</p>
                  {s.stack && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {s.stack.map((t) => (
                        <li key={t} className="rounded-[3px] px-2 py-1 font-mono text-[0.625rem] tracking-[0.12em] text-regolith/70 uppercase ring-1 ring-white/15">
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.url && (
                    <span className="mt-auto flex min-w-0 items-center justify-between gap-3 pt-5 font-mono text-label uppercase">
                      <span className="min-w-0 truncate text-regolith/50 normal-case">{s.url.replace(/^https?:\/\/(www\.)?/, '')}</span>
                      <span className="shrink-0 text-earth transition-transform group-hover:translate-x-0.5">Visit ↗</span>
                    </span>
                  )}
                </div>
              </Wrap>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
