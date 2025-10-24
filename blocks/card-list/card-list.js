export default function decorate(b) {
  b.classList.add('cardlist-wrapper');
  const bg = b.querySelector('.cardlist-background');
  if (bg) bg.classList.add('cardlist-background');
  const content = b.querySelector('.cardlist-content');
  if (content) content.classList.add('cardlist-content', 'cardlist-content--extra-padding-top');
  const heading = b.querySelector('.cardlist-content__heading__title h2');
  if (heading) heading.classList.add('cardlist-content__heading__title');
  const cta = b.querySelector('.cardlist-cta.cardlist-cta__primary');
  if (cta) {
    cta.classList.add('cardlist-cta', 'cardlist-cta__primary');
    const icon = cta.querySelector('.cardlist-cta__icon');
    if (icon) icon.classList.add('cardlist-cta__icon', 'qd-icon', 'qd-icon--cheveron-right');
    const label = cta.querySelector('.cardlist-cta__label');
    if (label) label.classList.add('cardlist-cta__label');
    if (cta.href && !cta.href.includes(window.location.hostname)) {
      cta.target = '_blank';
      cta.rel = 'noopener noreferrer';
    }
  }
  const cards = b.querySelectorAll('.cardlist-content__card-item');
  cards.forEach(card => {
    card.classList.add('cardlist-content__card-item');
    const img = card.querySelector('.cardlist-content__card-item__image');
    if (img) img.classList.add('cardlist-content__card-item__image');
    const cardContent = card.querySelector('.cardlist-content__card-item-content');
    if (cardContent) cardContent.classList.add('cardlist-content__card-item-content');
    const cardTitle = card.querySelector('.cardlist-content__card-item-content__title');
    if (cardTitle) cardTitle.classList.add('cardlist-content__card-item-content__title');
    const cardDesc = card.querySelector('.cardlist-content__card-item-content__description');
    if (cardDesc) cardDesc.classList.add('cardlist-content__card-item-content__description');
  });
}
