export default function decorate(b){
  b.classList.add('herohomepage-section');
  const bg=b.querySelector('.herohomepage-background');
  if(bg)bg.classList.add('herohomepage-background');
  const pic=b.querySelector('picture.herohomepage-scarp');
  if(pic){
    pic.classList.add('herohomepage-scarp');
    const img=pic.querySelector('img.herohomepage-image');
    if(img)img.classList.add('herohomepage-image','herohomepage-is-loaded');
  }
  const bgMedia=b.querySelector('.herohomepage-background-media');
  if(bgMedia)bgMedia.classList.add('herohomepage-background-media');
  const videoPlayer=b.querySelector('.herohomepage-video-player');
  if(videoPlayer)videoPlayer.classList.add('herohomepage-video-player');
  const videos=b.querySelectorAll('video.herohomepage-native-video');
  videos.forEach(v=>{
    v.classList.add('herohomepage-native-video');
  });
  const controls=b.querySelector('.herohomepage-video-player-controls');
  if(controls)controls.classList.add('herohomepage-video-player-controls','herohomepage-controls','herohomepage-is-hidden');
  const wrapper=b.querySelector('.herohomepage-wrapper');
  if(wrapper)wrapper.classList.add('herohomepage-wrapper');
  const title=b.querySelector('.herohomepage-title');
  if(title)title.classList.add('herohomepage-typography','herohomepage-title');
  const desc=b.querySelector('.herohomepage-description');
  if(desc)desc.classList.add('herohomepage-typography','herohomepage-description');
  const ctas=b.querySelector('.herohomepage-call-to-actions');
  if(ctas)ctas.classList.add('herohomepage-call-to-actions');
  const ctaLinks=ctas?ctas.querySelectorAll('a.herohomepage-clickable-element'):[];
  ctaLinks.forEach(a=>{a.classList.add('herohomepage-clickable-element');});
  const playCta=b.querySelector('.herohomepage-play-call-to-action');
  if(playCta)playCta.classList.add('herohomepage-clickable-element','herohomepage-has-start-icon','herohomepage-play-call-to-action');
}