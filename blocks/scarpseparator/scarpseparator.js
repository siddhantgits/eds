export default function decorate(b) {
  b.classList.add('scarpseparator');
  const p = b.querySelector('picture');
  if (p) p.classList.add('scarpseparator-scarp');
  const i = b.querySelector('img');
  if (i) {
    i.classList.add('scarpseparator-scarp-image');
    i.setAttribute('alt', 'visual separator');
    i.setAttribute('aria-hidden', 'true');
    i.setAttribute('src', '/content/dam/aemigrate/uploaded-folder/image/blue-right.png');
  }
}
