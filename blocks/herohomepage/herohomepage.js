export default function decorate(b){
  b.classList.add('herohomepage-section');
  const bg = b.querySelector('.herohomepage-background');
  if(bg) bg.classList.add('herohomepage-background');
  const pic = b.querySelector('picture');
  if(pic) pic.classList.add('herohomepage-scarp');
  const bgMedia = b.querySelector('.herohomepage-background-media');
  if(bgMedia) bgMedia.classList.add('herohomepage-background-media');
  const wrapper = b.querySelector('.herohomepage-wrapper');
  if(wrapper) wrapper.classList.add('herohomepage-wrapper');
  const title = b.querySelector('h1');
  if(title) title.classList.add('herohomepage-typography','herohomepage-title');
  const desc = b.querySelector('p.herohomepage-description');
  if(desc) desc.classList.add('herohomepage-typography','herohomepage-description');
  const ctas = b.querySelector('.herohomepage-call-to-actions');
  if(ctas) ctas.classList.add('herohomepage-call-to-actions');
  const ctaLinks = b.querySelectorAll('.herohomepage-call-to-actions a.herohomepage-clickable-element');
  ctaLinks.forEach((a,i)=>{
    a.classList.add('herohomepage-clickable-element');
    if(i===0){
      a.setAttribute('data-theme','primary');
      a.setAttribute('data-size','default');
      a.setAttribute('data-palette','palette-light');
    }
    if(i===1){
      a.setAttribute('data-theme','primary');
      a.setAttribute('data-size','default');
      a.setAttribute('data-palette','palette-4');
    }
    const label = a.querySelector('.herohomepage-clickable-label');
    if(label) label.classList.add('herohomepage-typography','herohomepage-clickable-label');
  });
  const videoPlayer = b.querySelector('.herohomepage-video-player');
  if(videoPlayer) videoPlayer.classList.add('herohomepage-video-player');
  const playCta = b.querySelector('.herohomepage-play-call-to-action');
  if(playCta) playCta.classList.add('herohomepage-clickable-element','herohomepage-has-start-icon','herohomepage-play-call-to-action');
  const playCtaLabel = b.querySelector('.herohomepage-play-call-to-action .herohomepage-clickable-label');
  if(playCtaLabel) playCtaLabel.classList.add('herohomepage-typography','herohomepage-clickable-label');
}
