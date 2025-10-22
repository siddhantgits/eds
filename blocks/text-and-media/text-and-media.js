export default function decorate(b){
  b.classList.add('text-and-media-section','text-and-media-palette-home','text-and-media-layout-portrait');
  const cmp = b.querySelector('.text-and-media-cmp');
  if(cmp) cmp.classList.add('text-and-media-large-spacing');
  const imgContainer = b.querySelector('.text-and-media-image-container');
  if(imgContainer) imgContainer.classList.add('text-and-media-palette-home');
  const picture = b.querySelector('.text-and-media-image-container-picture');
  if(picture) picture.classList.add('text-and-media-image-container-picture');
  const img = b.querySelector('.text-and-media-image-container-image');
  if(img) img.classList.add('text-and-media-image-container-image', 'text-and-media-layout-portrait');
  const content = b.querySelector('.text-and-media-content');
  if(content) content.classList.add('text-and-media-content');
  const title = b.querySelector('.text-and-media-content-title');
  if(title) title.classList.add('text-and-media-content-title');
  const desc = b.querySelector('.text-and-media-content-description');
  if(desc) desc.classList.add('text-and-media-content-description');
  const cta = b.querySelector('.text-and-media-cta');
  if(cta){
    cta.classList.add('text-and-media-cta','text-and-media-cta-primary','text-and-media-content-cta');
    if(cta.href && !cta.href.includes(window.location.hostname)){
      cta.target='_blank';cta.rel='noopener noreferrer';
    }
    const icon = cta.querySelector('.text-and-media-cta-icon');
    if(icon) icon.classList.add('text-and-media-cta-icon', 'qd-icon', 'qd-icon--cheveron-right');
    const label = cta.querySelector('.text-and-media-cta-label');
    if(label) label.classList.add('text-and-media-cta-label');
  }
}
