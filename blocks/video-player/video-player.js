export default function decorate(b){
  b.classList.add('media-o14Media');
  const videoPlayer = b.querySelector('.media-o6VideoPlayer');
  if(videoPlayer) videoPlayer.classList.add('media-o6VideoPlayer');
  const mainVideo = b.querySelector('.media-o6VideoPlayer > .media-a7NativeVideo.media-o6VideoPlayer-video');
  if(mainVideo){
    mainVideo.classList.add('media-a7NativeVideo','media-a7NativeVideo-objectFitCover','media-o6VideoPlayer-video');
    const source = mainVideo.querySelector('source');
    if(source && source.src && !mainVideo.src) mainVideo.src = source.src;
  }
  const controls = b.querySelector('.media-videoPlayerControls');
  if(controls) controls.classList.add('media-videoPlayerControls','media-o6VideoPlayer-controls','media-o6VideoPlayer-isHidden');
  const posterVideo = b.querySelector('.media-o6VideoPlayer-poster');
  if(posterVideo) posterVideo.classList.add('media-a7NativeVideo','media-a7NativeVideo-objectFitCover','media-o6VideoPlayer-poster');
  const playCta = b.querySelector('.media-o6VideoPlayer-playCallToAction');
  if(playCta) playCta.classList.add('media-clickableElement','media-clickableElement-hasStartIcon','media-o6VideoPlayer-playCallToAction');
}
