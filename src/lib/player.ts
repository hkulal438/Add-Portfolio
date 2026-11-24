/**
 * One voice at a time. Any video started with sound through `playWithSound`
 * stops (and mutes) whichever video had the sound before it.
 */

let active: HTMLVideoElement | null = null;

export function playWithSound(video: HTMLVideoElement, fromStart = true) {
  if (active && active !== video) {
    active.pause();
    active.muted = true;
  }
  active = video;
  if (fromStart) video.currentTime = 0;
  video.muted = false;
  video.play().catch(() => {});
}

/** Mute and, if asked, pause the video that has the sound. */
export function stopSound(video: HTMLVideoElement, pause = true) {
  video.muted = true;
  if (pause) video.pause();
  if (active === video) active = null;
}

export const hasSound = (video: HTMLVideoElement) => active === video && !video.muted && !video.paused;
