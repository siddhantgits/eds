export default function decorate(b){
  b.classList.add('footer-wrapper');
  const nav = b.querySelector('.footer-navigation');
  if(nav) nav.classList.add('footer-navigation');
  const navWrapper = b.querySelector('.footer-navigation__wrapper');
  if(navWrapper) navWrapper.classList.add('footer-navigation__wrapper');
  const logo = b.querySelector('.footer-navigation__logo');
  if(logo) logo.classList.add('footer-navigation__logo');
  const navContent = b.querySelector('.footer-navigation__content');
  if(navContent) navContent.classList.add('footer-navigation__content');
  const social = b.querySelector('.footer-social-links');
  if(social) social.classList.add('footer-social-links');
  const socialList = b.querySelector('.footer-social-links__list');
  if(socialList) socialList.classList.add('footer-social-links__list');
  b.querySelectorAll('.footer-social-links__icon').forEach(a=>{
    a.classList.add('footer-social-links__icon');
    if(a.href&&!a.href.includes(window.location.hostname)){
      a.target='_blank';a.rel='noopener noreferrer';
    }
  });
  const navLinks = b.querySelector('.footer-navigation__links');
  if(navLinks) navLinks.classList.add('footer-navigation__links');
  b.querySelectorAll('.footer-navigation__link-item').forEach(a=>{
    a.classList.add('footer-navigation__link-item');
    if(a.href&&!a.href.includes(window.location.hostname)){
      a.target='_blank';a.rel='noopener noreferrer';
    }
  });
  const divider = b.querySelector('.footer-divider');
  if(divider) divider.classList.add('footer-divider');
  const bottom = b.querySelector('.footer-bottom');
  if(bottom) bottom.classList.add('footer-bottom');
  const langSelector = b.querySelector('.footer-language-selector');
  if(langSelector) langSelector.classList.add('footer-language-selector');
  const langList = b.querySelector('.footer-language-selector__list');
  if(langList) langList.classList.add('footer-language-selector__list');
  b.querySelectorAll('.footer-language-selector__link').forEach(a=>{
    a.classList.add('footer-language-selector__link');
    if(a.href&&!a.href.includes(window.location.hostname)){
      a.target='_blank';a.rel='noopener noreferrer';
    }
  });
  const policy = b.querySelector('.footer-policy-links');
  if(policy) policy.classList.add('footer-policy-links');
  const policyWrap = b.querySelector('.footer-policy-links__wrapper');
  if(policyWrap) policyWrap.classList.add('footer-policy-links__wrapper');
  const policyContent = b.querySelector('.footer-policy-links__content');
  if(policyContent) policyContent.classList.add('footer-policy-links__content');
  b.querySelectorAll('.footer-policy-links__item').forEach(a=>{
    a.classList.add('footer-policy-links__item');
    if(a.href&&!a.href.includes(window.location.hostname)){
      a.target='_blank';a.rel='noopener noreferrer';
    }
  });
  const copyright = b.querySelector('.footer-policy-links__copyright');
  if(copyright) copyright.classList.add('footer-policy-links__copyright');
}
