(
export default function decorate(block) {
  block.classList.add('eds-textandmedia-block');
  // Media image (desktop)
  const picture = block.querySelector('picture');
  if (picture) {
    picture.classList.add('eds-textandmedia-image');
    const img = picture.querySelector('img');
    if (img) {
      img.classList.add('eds-textandmedia-img');
      img.alt = 'Tuwaiq Mountains';
      img.src = '/content/dam/aemigrate/uploaded-folder/image/1754989656143.webp';
    }
    const source = picture.querySelector('source');
    if (source) {
      source.srcset = '/content/dam/aemigrate/uploaded-folder/image/1754989656566.webp';
    }
  }
  // Title
  const title = block.querySelector('h2');
  if (title) {
    title.classList.add('eds-textandmedia-title');
  }
  // Description
  const desc = block.querySelector('.textandmedia-a4RichText');
  if (desc) {
    desc.classList.add('eds-textandmedia-description');
  }
  // CTA
  const cta = block.querySelector('a');
  if (cta) {
    cta.classList.add('eds-textandmedia-cta');
    cta.href = '/about/';
    cta.textContent = 'Learn more';
  }
}
)
