import {useState, type FormEvent} from 'react';
import {brand, contact, services} from '../content';
import {useReveals} from '../hooks/useReveals';

type Status = 'idle' | 'invalid' | 'sent';

/**
 * Contact. Email on one side, a short brief form on the other; the form hands
 * a drafted message to the visitor's mail app — no backend.
 */
export function Contact() {
  const ref = useReveals<HTMLElement>();
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus('invalid');
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(`Project enquiry: ${String(data.get('service'))}`);
    const body = encodeURIComponent(
      `Name: ${String(data.get('name'))}\nEmail: ${String(data.get('email'))}\nService: ${String(data.get('service'))}\n\n${String(data.get('message'))}`,
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  const field =
    'w-full rounded-[4px] bg-white/[0.04] px-4 py-3.5 text-body text-white ring-1 ring-white/15 outline-none placeholder:text-regolith/40 focus:ring-earth user-invalid:ring-red-400/70';

  return (
    <section ref={ref} id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-void px-4 pb-28 sm:px-6 md:px-[6vw] md:pb-40">
      {/* A sliver of the Earth rising at the bottom edge — the hero, bookended. */}
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-[62vw] left-1/2 size-[90vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(111,182,255,0.35),rgba(111,182,255,0.05)_55%,transparent_70%)]" />

      <div className="relative grid gap-12 border-t border-white/10 pt-20 md:grid-cols-2 md:gap-16 md:pt-28">
        <div data-reveal>
          <p className="font-mono text-label text-earth uppercase">{contact.eyebrow}</p>
          <h2 id="contact-title" className="mt-4 font-display text-display text-white">
            {contact.heading}
          </h2>
          <p className="mt-5 max-w-[28rem] text-body text-regolith/70">{contact.body}</p>

          <a href={`mailto:${brand.email}`} className="mt-10 inline-block font-display text-[1.125rem] tracking-[0.04em] text-white underline decoration-earth/60 underline-offset-8 hover:decoration-earth md:text-[1.375rem]">
            {brand.email}
          </a>
        </div>

        <form noValidate onSubmit={onSubmit} aria-describedby="contact-status" className="space-y-3" data-reveal>
          <label className="block">
            <span className="mb-1.5 block font-mono text-label text-regolith/60 uppercase">Name</span>
            <input name="name" required autoComplete="name" placeholder="Your name" className={field} onInput={() => setStatus('idle')} />
          </label>
          <label className="block">
            <span className="mb-1.5 block font-mono text-label text-regolith/60 uppercase">Email</span>
            <input name="email" type="email" required autoComplete="email" placeholder="you@brand.com" className={field} onInput={() => setStatus('idle')} />
          </label>
          <label className="block">
            <span className="mb-1.5 block font-mono text-label text-regolith/60 uppercase">Service</span>
            <select name="service" defaultValue={services.items[1].name} className={`${field} appearance-none`}>
              {services.items.map((m) => (
                <option key={m.name} value={m.name} className="bg-void">
                  {m.name}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block font-mono text-label text-regolith/60 uppercase">Project</span>
            <textarea name="message" rows={4} placeholder="What's the product, and what should people do after watching?" className={`${field} resize-y`} />
          </label>
          <button type="submit" className="mt-2 w-full rounded-[4px] bg-white px-5 py-4 font-mono text-label text-void uppercase transition-colors hover:bg-earth">
            Send the brief
          </button>
          <p id="contact-status" role="status" className="min-h-[1.25rem] text-[0.8125rem] text-regolith/70">
            {status === 'invalid' && 'Your name and a valid email, please.'}
            {status === 'sent' && `Your mail app should be open with the brief drafted. If not: ${brand.email}.`}
          </p>
        </form>
      </div>
    </section>
  );
}
