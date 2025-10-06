export default function decorate(b) {
  b.classList.add('honda-section');
  const bg = b.querySelector('.honda-background');
  if (bg) bg.classList.add('honda-background');
  const pic = b.querySelector('picture');
  if (pic) pic.classList.add('honda-scarp');
  const bgMedia = b.querySelector('.honda-background-media');
  if (bgMedia) bgMedia.classList.add('honda-background-media');
  const videoPlayer = b.querySelector('.honda-video-player');
  if (videoPlayer) videoPlayer.classList.add('honda-video-player');
  const video = b.querySelectorAll('.honda-native-video');
  video.forEach(v => v.classList.add('honda-native-video', 'honda-object-fit-cover'));
  const controls = b.querySelector('.honda-video-player-controls');
  if (controls) controls.classList.add('honda-video-player-controls', 'honda-controls', 'honda-is-hidden');
  const wrapper = b.querySelector('.honda-wrapper');
  if (wrapper) wrapper.classList.add('honda-wrapper');
  const title = b.querySelector('h1');
  if (title) title.classList.add('honda-typography', 'honda-title');
  const desc = b.querySelector('p.honda-description');
  if (desc) desc.classList.add('honda-typography', 'honda-description');
  const ctas = b.querySelector('.honda-call-to-actions');
  if (ctas) ctas.classList.add('honda-call-to-actions');
  const ctaLinks = b.querySelectorAll('.honda-call-to-actions .honda-clickable-element');
  ctaLinks.forEach(link => {
    link.classList.add('honda-clickable-element');
    const lbl = link.querySelector('.honda-clickable-label');
    if (lbl) lbl.classList.add('honda-typography', 'honda-clickable-label');
    if (link.href && !link.href.includes(window.location.hostname)) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });
  const playCta = b.querySelector('.honda-play-call-to-action');
  if (playCta) playCta.classList.add('honda-clickable-element', 'honda-has-start-icon', 'honda-play-call-to-action');
}
