export default function decorate(b) {
  b.classList.add('herohomepage-section');
  const bg = b.querySelector('.herohomepage-background');
  if (bg) bg.classList.add('herohomepage-background');
  const picture = b.querySelector('picture');
  if (picture) picture.classList.add('herohomepage-scarp');
  const img = b.querySelector('img.herohomepage-image');
  if (img) {
    img.classList.add('herohomepage-image');
    img.classList.add('herohomepage-is-loaded');
  }
  const bgMedia = b.querySelector('.herohomepage-background-media');
  if (bgMedia) bgMedia.classList.add('herohomepage-background-media');
  const videoPlayer = b.querySelector('.herohomepage-video-player');
  if (videoPlayer) videoPlayer.classList.add('herohomepage-video-player');
  const videos = b.querySelectorAll('video');
  videos.forEach(v => {
    v.classList.add('herohomepage-native-video');
    v.classList.add('herohomepage-object-fit-cover');
    if (v.classList.contains('herohomepage-video')) {
      v.classList.add('herohomepage-video');
    }
    if (v.classList.contains('herohomepage-poster')) {
      v.classList.add('herohomepage-poster');
    }
  });
  const controls = b.querySelector('.herohomepage-video-player-controls');
  if (controls) {
    controls.classList.add('herohomepage-video-player-controls');
    controls.classList.add('herohomepage-controls');
    controls.classList.add('herohomepage-is-hidden');
  }
  const wrapper = b.querySelector('.herohomepage-wrapper');
  if (wrapper) wrapper.classList.add('herohomepage-wrapper');
  const title = b.querySelector('h1');
  if (title) {
    title.classList.add('herohomepage-typography');
    title.classList.add('herohomepage-title');
  }
  const desc = b.querySelector('p.herohomepage-description');
  if (desc) {
    desc.classList.add('herohomepage-typography');
    desc.classList.add('herohomepage-description');
  }
  const ctas = b.querySelector('.herohomepage-call-to-actions');
  if (ctas) ctas.classList.add('herohomepage-call-to-actions');
  const links = b.querySelectorAll('a.herohomepage-clickable-element');
  links.forEach(link => {
    link.classList.add('herohomepage-clickable-element');
  });
  const playCta = b.querySelector('.herohomepage-play-call-to-action');
  if (playCta) {
    playCta.classList.add('herohomepage-clickable-element');
    playCta.classList.add('herohomepage-has-start-icon');
    playCta.classList.add('herohomepage-play-call-to-action');
  }
}
