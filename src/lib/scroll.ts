/**
 * Plain browser scrolling — no smooth-scroll library. Smooth jumps come from
 * `scroll-behavior: smooth` in index.css (turned off for reduced motion).
 */

/** Scrolls to an in-page hash like `#ads`, or to the top for `#top`. */
export function scrollToHash(hash: string) {
  if (hash === '#top') {
    window.scrollTo({top: 0});
  } else {
    document.querySelector<HTMLElement>(hash)?.scrollIntoView();
  }
  history.replaceState(null, '', hash === '#top' ? ' ' : hash);
}
