import {process} from '../content';
import {useReveals} from '../hooks/useReveals';

/** How a project runs, in four plain steps. */
export function Process() {
  const ref = useReveals<HTMLElement>();
  return (
    <section ref={ref} id="process" aria-labelledby="process-title" className="relative bg-void px-4 pb-24 sm:px-6 md:px-[6vw] md:pb-32">
      <div data-reveal>
        <p className="font-mono text-label text-earth uppercase">{process.eyebrow}</p>
        <h2 id="process-title" className="mt-4 max-w-[22ch] font-display text-display text-white">
          {process.heading}
        </h2>
      </div>
      <ol className="mt-12 grid gap-8 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
        {process.steps.map((s, i) => (
          <li key={s.title} data-reveal style={{transitionDelay: `${i * 90}ms`}} className="border-t border-white/15 pt-6">
            <span className="font-display text-[2rem] leading-none text-earth">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-4 font-display text-[1rem] tracking-[0.08em] text-white uppercase">{s.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-regolith/70">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
