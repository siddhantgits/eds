export default function decorate(b){
  b.classList.add('hero-full-width');
  const cover = b.querySelector(':scope > div');
  if(cover) cover.classList.add('hero-full-width__cover');
  const background = b.querySelector('.hero-full-width__background');
  if(background){
    background.classList.add('hero-full-width__background');
    const bgWrapper = background.querySelector('.hero-full-width__background-wrapper');
    if(bgWrapper) bgWrapper.classList.add('hero-full-width__background-wrapper');
    const bgVideo = background.querySelector('.hero-full-width__background-video');
    if(bgVideo) bgVideo.classList.add('hero-full-width__background-video');
  }
  const content = b.querySelector('.hero-full-width__content');
  if(content){
    content.classList.add('hero-full-width__content');
    const title = content.querySelector('.hero-full-width__content-title');
    if(title) title.classList.add('hero-full-width__content-title');
    const desc = content.querySelector('.hero-full-width__content-description');
    if(desc) desc.classList.add('hero-full-width__content-description');
    const ctas = content.querySelector('.hero-full-width__content-ctas');
    if(ctas) ctas.classList.add('hero-full-width__content-ctas');
    const cta = content.querySelector('.hero-full-width__cta');
    if(cta){
      cta.classList.add('hero-full-width__cta','hero-full-width__cta-secondary','hero-full-width__primary-cta');
      const ctaLabel = cta.querySelector('.hero-full-width__cta-label');
      if(ctaLabel) ctaLabel.classList.add('hero-full-width__cta-label');
      if(cta.href && !cta.href.includes(window.location.hostname)){
        cta.target='_blank';
        cta.rel='noopener noreferrer';
      }
    }
    const modal = content.querySelector('.hero-full-width__content-modal');
    if(modal){
      modal.classList.add('hero-full-width__content-modal');
      const closeBtn = modal.querySelector('.hero-full-width__content-modal-close-button');
      if(closeBtn) closeBtn.classList.add('hero-full-width__content-modal-close-button');
      const videoModal = modal.querySelector('.hero-full-width__video.hero-full-width__content-modal-video');
      if(videoModal) videoModal.classList.add('hero-full-width__video','hero-full-width__content-modal-video');
      const videoContainer = modal.querySelector('.hero-full-width__video-container.hero-full-width__show-controls');
      if(videoContainer) videoContainer.classList.add('hero-full-width__video-container','hero-full-width__show-controls');
      const controls = modal.querySelector('.hero-full-width__video-container-controls');
      if(controls) controls.classList.add('hero-full-width__video-container-controls');
      const timer = modal.querySelector('.hero-full-width__video-container-controls-timer');
      if(timer) timer.classList.add('hero-full-width__video-container-controls-timer');
      const progressBar = modal.querySelector('.hero-full-width__video-container-controls-timer-progress-area-progress-bar');
      if(progressBar) progressBar.classList.add('hero-full-width__video-container-controls-timer-progress-area-progress-bar');
      const pointer = modal.querySelector('.hero-full-width__video-container-controls-timer-progress-area-pointer');
      if(pointer) pointer.classList.add('hero-full-width__video-container-controls-timer-progress-area-pointer');
      const progressPending = modal.querySelector('.hero-full-width__video-container-controls-timer-progress-area-progress-pending');
      if(progressPending) progressPending.classList.add('hero-full-width__video-container-controls-timer-progress-area-progress-pending');
      const currentTime = modal.querySelector('.hero-full-width__video-container-controls-timer-current-time');
      if(currentTime) currentTime.classList.add('hero-full-width__video-container-controls-timer-current-time');
      const duration = modal.querySelector('.hero-full-width__video-container-controls-timer-duration');
      if(duration) duration.classList.add('hero-full-width__video-container-controls-timer-duration');
      const buttons = modal.querySelector('.hero-full-width__video-container-controls-buttons');
      if(buttons) buttons.classList.add('hero-full-width__video-container-controls-buttons');
      const playBtn = modal.querySelector('.hero-full-width__video-container-controls-buttons-play-button');
      if(playBtn) playBtn.classList.add('hero-full-width__video-container-controls-buttons-play-button','hero-full-width__video-container-controls-buttons--button');
      const muteBtn = modal.querySelector('.hero-full-width__video-container-controls-buttons-mute-button');
      if(muteBtn) muteBtn.classList.add('hero-full-width__video-container-controls-buttons-mute-button','hero-full-width__video-container-controls-buttons--button');
      const fullscreenBtn = modal.querySelector('.hero-full-width__video-container-controls-buttons-fullscreen-button');
      if(fullscreenBtn) fullscreenBtn.classList.add('hero-full-width__video-container-controls-buttons-fullscreen-button','hero-full-width__video-container-controls-buttons--button');
      const playIcon = modal.querySelector('.qd-icon--play');
      if(playIcon) playIcon.classList.add('hero-full-width__video-container-controls-buttons-icon','qd-icon','qd-icon--play');
      const volumeIcon = modal.querySelector('.qd-icon--volume');
      if(volumeIcon) volumeIcon.classList.add('hero-full-width__video-container-controls-buttons-icon','qd-icon','qd-icon--volume');
      const fullscreenIcon = modal.querySelector('.qd-icon--fullscreen');
      if(fullscreenIcon) fullscreenIcon.classList.add('hero-full-width__video-container-controls-buttons-icon','qd-icon','qd-icon--fullscreen');
      const video = modal.querySelector('.hero-full-width__video-container-video');
      if(video) video.classList.add('hero-full-width__video-container-video');
    }
  }
}
