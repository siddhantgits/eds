export default function decorate(b){
  b.classList.add('herohomepage-section');
  const bg = b.querySelector('.herohomepage-background');
  if(bg) bg.classList.add('herohomepage-background');
  const scarp = b.querySelector('picture.herohomepage-scarp');
  if(scarp) scarp.classList.add('herohomepage-scarp');
  const wrapper = b.querySelector('.herohomepage-wrapper');
  if(wrapper) wrapper.classList.add('herohomepage-wrapper');
  const title = b.querySelector('.herohomepage-title');
  if(title) title.classList.add('herohomepage-title');
  const desc = b.querySelector('.herohomepage-description');
  if(desc) desc.classList.add('herohomepage-description');
  const ctas = b.querySelector('.herohomepage-call-to-actions');
  if(ctas){
    ctas.classList.add('herohomepage-call-to-actions');
    ctas.querySelectorAll('a.herohomepage-clickable-element').forEach(a=>{
      a.classList.add('herohomepage-clickable-element');
      const label = a.querySelector('.herohomepage-clickable-label');
      if(label) label.classList.add('herohomepage-clickable-label');
    });
  }
  const bgmedia = b.querySelector('.herohomepage-background-media');
  if(bgmedia){
    bgmedia.classList.add('herohomepage-background-media');
    const player = bgmedia.querySelector('.herohomepage-video-player');
    if(player){
      player.classList.add('herohomepage-video-player');
      player.querySelectorAll('video').forEach(v=>{
        if(v.classList.contains('herohomepage-poster')){
          v.classList.add('herohomepage-poster');
        }else{
          v.classList.add('herohomepage-video');
        }
        v.classList.add('herohomepage-native-video');
        v.classList.add('herohomepage-object-fit-cover');
      });
      const controls = player.querySelector('.herohomepage-video-player-controls');
      if(controls){
        controls.classList.add('herohomepage-video-player-controls','herohomepage-controls','herohomepage-is-hidden');
        const progressBar = controls.querySelector('.herohomepage-progress-bar');
        if(progressBar){
          progressBar.classList.add('herohomepage-progress-bar');
          ['herohomepage-progress-before','herohomepage-progress-knob','herohomepage-progress-after','herohomepage-progress-hover'].forEach(c=>{
            const el = progressBar.querySelector('.'+c);
            if(el) el.classList.add(c);
          });
        }
        const time = controls.querySelector('.herohomepage-current-time');
        if(time) time.classList.add('herohomepage-current-time');
        const duration = controls.querySelector('.herohomepage-duration');
        if(duration) duration.classList.add('herohomepage-duration');
        const rightActions = controls.querySelector('.herohomepage-right-actions');
        if(rightActions) rightActions.classList.add('herohomepage-right-actions');
        controls.querySelectorAll('.herohomepage-clickable-element').forEach(btn=>{
          btn.classList.add('herohomepage-clickable-element','herohomepage-has-icon');
          const icon = btn.querySelector('.herohomepage-icon');
          if(icon) icon.classList.add('herohomepage-icon','herohomepage-clickable-icon');
        });
      }
      const playCta = player.querySelector('.herohomepage-play-call-to-action');
      if(playCta){
        playCta.classList.add('herohomepage-clickable-element','herohomepage-has-start-icon','herohomepage-play-call-to-action');
        const icon = playCta.querySelector('.herohomepage-icon');
        if(icon) icon.classList.add('herohomepage-icon','herohomepage-clickable-icon');
        const label = playCta.querySelector('.herohomepage-clickable-label');
        if(label) label.classList.add('herohomepage-clickable-label');
      }
    }
  }
}
