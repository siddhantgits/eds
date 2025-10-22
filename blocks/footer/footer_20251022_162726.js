export default function decorate(b) {
  b.classList.add('footer-c9Footer');
  const bg = b.querySelector('.footer-background');
  if (bg) bg.classList.add('footer-background');
  const wrapper = b.querySelector('.footer-wrapper');
  if (wrapper) wrapper.classList.add('footer-wrapper');
  const top = b.querySelector('.footer-top');
  if (top) top.classList.add('footer-top');
  const logo = b.querySelector('.footer-qiddiyaLogo');
  if (logo) logo.classList.add('footer-qiddiyaLogo');
  const socialLinks = b.querySelector('.footer-o100SocialLinks');
  if (socialLinks) socialLinks.classList.add('footer-o100SocialLinks');
  const navLinks = b.querySelector('.footer-navigationLinks');
  if (navLinks) navLinks.classList.add('footer-navigationLinks');
  const separator = b.querySelector('.footer-separator');
  if (separator) separator.classList.add('footer-separator');
  const bottom = b.querySelector('.footer-bottom');
  if (bottom) bottom.classList.add('footer-bottom');
  const policyLinks = b.querySelector('.footer-policyLinks');
  if (policyLinks) policyLinks.classList.add('footer-policyLinks');
  const copyrightWrapper = b.querySelector('.footer-copyrightWrapper');
  if (copyrightWrapper) copyrightWrapper.classList.add('footer-copyrightWrapper');
  const copyright = b.querySelector('.footer-copyright');
  if (copyright) copyright.classList.add('footer-copyright');
  const languageSelector = b.querySelector('.footer-languageSelector');
  if (languageSelector) languageSelector.classList.add('footer-languageSelector');
  const langBtns = b.querySelectorAll('.footer-m100LanguageSelector-localeButton');
  langBtns.forEach(btn => btn.classList.add('footer-m100LanguageSelector-localeButton'));
  const linkEls = b.querySelectorAll('a.footer-clickableElement');
  linkEls.forEach(a => {
    a.classList.add('footer-clickableElement');
    if (a.href && !a.href.includes(window.location.hostname) && a.target === '_blank') {
      a.rel = 'noopener noreferrer';
    }
  });
}
