export default function decorate(b) {
  b.classList.add('header-container');
  const skip = b.querySelector('.header-skip-to-content');
  if (skip) skip.classList.add('header-skip-to-content');
  const logo = b.querySelector('.header-logo');
  if (logo) logo.classList.add('header-logo');
  const mobileToggle = b.querySelector('.header-mobile-toggle');
  if (mobileToggle) mobileToggle.classList.add('header-mobile-toggle');
  const navWrapper = b.querySelector('.header-navigation-wrapper');
  if (navWrapper) navWrapper.classList.add('header-navigation-wrapper');
  const linkList = b.querySelector('.header-link-list');
  if (linkList) linkList.classList.add('header-link-list');
  const menuLists = b.querySelectorAll('.header-menu-list');
  menuLists.forEach(li => li.classList.add('header-menu-list'));
  const links = b.querySelectorAll('.header-link');
  links.forEach(link => link.classList.add('header-link'));
  const submenuWrappers = b.querySelectorAll('.header-submenu-wrapper-container');
  submenuWrappers.forEach(sub => sub.classList.add('header-submenu-wrapper-container'));
  const submenuLists = b.querySelectorAll('.header-submenu-list-container');
  submenuLists.forEach(list => list.classList.add('header-submenu-list-container'));
  const submenuItems = b.querySelectorAll('.header-submenu-list');
  submenuItems.forEach(item => item.classList.add('header-submenu-list'));
  const submenuLinks = b.querySelectorAll('.header-submenu-link');
  submenuLinks.forEach(link => link.classList.add('header-submenu-link'));
  const langSelector = b.querySelector('.header-language-selector');
  if (langSelector) langSelector.classList.add('header-language-selector');
  const localeButtons = b.querySelectorAll('.header-locale-button');
  localeButtons.forEach(btn => btn.classList.add('header-locale-button'));
}
