export default function decorate(b){
  b.classList.add('herohomepage-section');
  const bg = b.querySelector('.herohomepage-background');
  if(bg) bg.classList.add('herohomepage-background');
  const pic = b.querySelector('picture');
  if(pic) pic.classList.add('herohomepage-scarp');
  const bgMedia = b.querySelector('.herohomepage-background-media');
  if(bgMedia) bgMedia.classList.add('herohomepage-background-media');
  const videoPlayer = b.querySelector('.herohomepage-video-player');
  if(videoPlayer) videoPlayer.classList.add('herohomepage-video-player');
  const video = b.querySelectorAll('.herohomepage-native-video');
  video.forEach(v => v.classList.add('herohomepage-native-video','herohomepage-object-fit-cover'));
  const controls = b.querySelector('.herohomepage-video-player-controls');
  if(controls) controls.classList.add('herohomepage-video-player-controls','herohomepage-controls','herohomepage-is-hidden');
  const wrapper = b.querySelector('.herohomepage-wrapper');
  if(wrapper) wrapper.classList.add('herohomepage-wrapper');
  const title = b.querySelector('h1');
  if(title) title.classList.add('herohomepage-typography','herohomepage-title');
  const desc = b.querySelector('p.herohomepage-description');
  if(desc) desc.classList.add('herohomepage-typography','herohomepage-description');
  const ctas = b.querySelector('.herohomepage-call-to-actions');
  if(ctas) ctas.classList.add('herohomepage-call-to-actions');
  const ctaLinks = b.querySelectorAll('.herohomepage-call-to-actions .herohomepage-clickable-element');
  ctaLinks.forEach(link=>{
    link.classList.add('herohomepage-clickable-element');
    const lbl = link.querySelector('.herohomepage-clickable-label');
    if(lbl) lbl.classList.add('herohomepage-typography','herohomepage-clickable-label');
    if(link.href && !link.href.includes(window.location.hostname)){
      link.target='_blank';
      link.rel='noopener noreferrer';
    }
  });
  const playCta = b.querySelector('.herohomepage-play-call-to-action');
  if(playCta) playCta.classList.add('herohomepage-clickable-element','herohomepage-has-start-icon','herohomepage-play-call-to-action');
}
