export default function decorate(block) {
  block.classList.add('header-position-relative', 'header-mb-15');

  const appName = block.querySelector('.header-app-name');
  if (appName) {
    appName.classList.add('header-d-none', 'header-app-name');
  }

  const header = block.querySelector('header');
  if (header) {
    header.classList.add(
      'header-boing-container',
      'header-d-flex',
      'header-justify-content-between',
      'header-align-items-center',
      'header-h-15',
      'header-px-5',
      'header-py-2',
      'header-fixed-top',
      'header-w-100',
      'header-bg-white'
    );
    const logoContainer = header.querySelector('div.header-d-flex.header-w-25');
    if (logoContainer) {
      logoContainer.classList.add('header-d-flex', 'header-w-25');
    }

    const logoLink = header.querySelector('.header-analytics_cta_click[a-label="header-logo-boing"]');
    if (logoLink) {
      logoLink.classList.add('header-analytics_cta_click');
      const logo = logoLink.querySelector('.header__logo');
      if (logo) {
        logo.classList.add('header__logo', 'header-d-flex', 'header-align-items-center');
        const logoImg = logo.querySelector('img');
        if (logoImg) {
          logoImg.classList.add('header__logo-img');
        }
      }
    }

    const loginBtnWrapper = header.querySelector('.header__login-btn-wrapper');
    if (loginBtnWrapper) {
      loginBtnWrapper.classList.add('header__login-btn-wrapper', 'header-analytics_cta_click');
      const loginBtn = loginBtnWrapper.querySelector('.header__login-btn');
      if (loginBtn) {
        loginBtn.classList.add(
          'header__login-btn',
          'header-btn',
          'header-text-boing-primary',
          'header-bg-transparent',
          'header-fw-semibold',
          'header-rounded-4',
          'header-btn-sm',
          'header-py-3',
          'header-px-4'
        );
      }
    }
  }

  const submenuContainer = block.querySelector('.header-submenu-container');
  if (submenuContainer) {
    submenuContainer.classList.add(
      'header-submenu-container',
      'header-position-fixed',
      'header-top-0',
      'header-start-0',
      'header-end-0',
      'header-m-auto',
      'header-overflow-hidden'
    );

    const sidebar = submenuContainer.querySelector('.header-sidebar');
    if (sidebar) {
      sidebar.classList.add(
        'header-sidebar',
        'header-start-0',
        'header-bg-white',
        'header-position-absolute'
      );
      const menu = sidebar.querySelector('.header-sidebar__menu');
      if (menu) {
        menu.classList.add('header-sidebar__menu', 'header-list-unstyled', 'header-px-4');
        const menuItems = menu.querySelectorAll('li.header-sidebar__menu-item');
        menuItems.forEach(item => {
          item.classList.add('header-sidebar__menu-item', 'header-py-6', 'header-border-bottom', 'header-border-boing-neutral-gray-200');
          const link = item.querySelector('a.header-sidebar__menu-link');
          if (link) {
            link.classList.add(
              'header-sidebar__menu-link',
              'header-d-flex',
              'header-align-items-center',
              'header-text-decoration-none',
              'header-px-6',
              'header-fw-medium',
              'header-analytics_cta_click'
            );
            const icon = link.querySelector('img.header-sidebar__menu-icon');
            if (icon) {
              icon.classList.add('header-sidebar__menu-icon', 'header-me-4');
            }
          }
        });
        const logoutItem = menu.querySelector('li.header__menu-item--logout');
        if (logoutItem) {
          logoutItem.classList.add('header-sidebar__menu-item', 'header__menu-item--logout', 'header-py-6', 'header-border-bottom', 'header-border-boing-neutral-gray-200');
        }
      }
      const sidebarCurve = sidebar.querySelector('.header-sidebar__curve');
      if (sidebarCurve) {
        sidebarCurve.classList.add('header-sidebar__curve');
      }
      const footerBrand = sidebar.querySelector('.header-footer-brand');
      if (footerBrand) {
        footerBrand.classList.add('header-footer-brand', 'header-w-100', 'header-bg-boing-neutral-gray-600');
        const footerBrandPrimary = footerBrand.querySelector('.header-footer-brand__primary');
        if (footerBrandPrimary) {
          footerBrandPrimary.classList.add('header-footer-brand__primary');
          const primaryContent = footerBrandPrimary.querySelector('.header-footer-brand__primary--content');
          if (primaryContent) {
            primaryContent.classList.add(
              'header-footer-brand__primary--content',
              'header-d-flex',
              'header-flex-column',
              'header-flex-md-row',
              'header-justify-content-md-between',
              'header-align-items-center'
            );
            const left = primaryContent.querySelector('.header-footer-brand__left');
            if (left) {
              left.classList.add('header-footer-brand__left', 'header-d-flex', 'header-gap-16', 'header-px-10', 'header-align-items-center', 'header-justify-content-center');
              const logo1 = left.querySelector('.header-footer-brand__logo');
              if (logo1) {
                logo1.classList.add('header-footer-brand__logo', 'header-d-inline-block', 'header-analytics_cta_click');
                const logo1Img = logo1.querySelector('img');
                if (logo1Img) {
                  logo1Img.classList.add('header-object-fit-contain', 'header-w-100', 'header-h-100');
                }
              }
              const logo2 = left.querySelector('.header-footer-brand__secondary--logo');
              if (logo2) {
                logo2.classList.add('header-footer-brand__secondary--logo', 'header-d-inline-block');
                const logo2Img = logo2.querySelector('img');
                if (logo2Img) {
                  logo2Img.classList.add('header-object-fit-contain', 'header-w-100');
                }
              }
            }
            const right = primaryContent.querySelector('.header-footer-brand__right');
            if (right) {
              right.classList.add('header-footer-brand__right');
              const navbar = right.querySelector('.header-footer-brand__navbar');
              if (navbar) {
                navbar.classList.add('header-footer-brand__navbar', 'header-d-grid', 'header-d-md-flex');
                const leftNav = navbar.querySelector('.header-footer-brand__navbar--left');
                if (leftNav) {
                  leftNav.classList.add('header-footer-brand__navbar--left', 'header-d-flex', 'header-flex-column', 'header-flex-md-row');
                  leftNav.querySelectorAll('.header-footerList').forEach(list => {
                    list.classList.add('header-footerList');
                    const ul = list.querySelector('.header-footer-list');
                    if (ul) {
                      ul.classList.add('header-footer-list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-align-items-md-start', 'header-flex-column');
                      ul.querySelectorAll('li.header-footer-list__item').forEach(li => {
                        li.classList.add('header-footer-list__item');
                        const link = li.querySelector('a');
                        if (link) {
                          link.classList.add('header-cta-analytics', 'header-analytics_cta_click', 'header-footer-list__item--link', 'header-d-inline-block');
                        }
                      });
                    }
                  });
                }
                const rightNav = navbar.querySelector('.header-footer-brand__navbar--right');
                if (rightNav) {
                  rightNav.classList.add('header-footer-brand__navbar--right', 'header-d-flex', 'header-flex-column', 'header-flex-md-row');
                  rightNav.querySelectorAll('.header-footerList').forEach(list => {
                    list.classList.add('header-footerList');
                    const ul = list.querySelector('.header-footer-list');
                    if (ul) {
                      ul.classList.add('header-footer-list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-align-items-md-start', 'header-flex-column');
                      ul.querySelectorAll('li.header-footer-list__item').forEach(li => {
                        li.classList.add('header-footer-list__item');
                        const link = li.querySelector('a');
                        if (link) {
                          link.classList.add('header-cta-analytics', 'header-analytics_cta_click', 'header-footer-list__item--link', 'header-d-inline-block');
                        }
                      });
                    }
                  });
                }
              }
            }
          }
        }
        const footerBrandSecondary = footerBrand.querySelector('.header-footer-brand__secondary');
        if (footerBrandSecondary) {
          footerBrandSecondary.classList.add('header-footer-brand__secondary');
          const secondaryContent = footerBrandSecondary.querySelector('.header-footer-brand__secondary--content');
          if (secondaryContent) {
            secondaryContent.classList.add('header-footer-brand__secondary--content', 'header-d-flex', 'header-flex-column', 'header-justify-content-md-between', 'header-align-items-center');
            const right = secondaryContent.querySelector('.header-footer-brand__right');
            if (right) {
              right.classList.add('header-footer-brand__right', 'header-d-flex', 'header-flex-column', 'header-pb-5');
              const title = right.querySelector('.header-social_media--title');
              if (title) {
                title.classList.add('header-social_media--title');
              }
              const socialList = right.querySelector('.header-footer-brand__right--list');
              if (socialList) {
                socialList.classList.add('header-footer-brand__right--list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-px-10', 'header-flex-wrap');
                socialList.querySelectorAll('li.header-footer-brand__right--item').forEach(li => {
                  li.classList.add('header-footer-brand__right--item', 'header-d-flex', 'header-justify-content-center', 'header-align-items-center');
                  const link = li.querySelector('a.header-footer-brand__right--link');
                  if (link) {
                    link.classList.add('header-footer-brand__right--link', 'header-d-flex', 'header-justify-content-center', 'header-align-items-center', 'header-analytics_cta_click');
                    const img = link.querySelector('img');
                    if (img) {
                      img.classList.add('header-object-fit-contain', 'header-w-100', 'header-h-100');
                    }
                  }
                });
              }
            }
            const left = secondaryContent.querySelector('.header-footer-brand__left');
            if (left) {
              left.classList.add('header-footer-brand__left', 'header-py-5', 'header-d-flex', 'header-flex-column', 'header-gap-3');
              const leftList = left.querySelector('.header-footer-brand__left--list');
              if (leftList) {
                leftList.classList.add('header-footer-brand__left--list', 'header-d-flex', 'header-align-items-center', 'header-justify-content-center', 'header-flex-wrap');
                leftList.querySelectorAll('li.header-footer-brand__left--item').forEach(li => {
                  li.classList.add('header-footer-brand__left--item', 'header-foot_link');
                  const link = li.querySelector('a.header-footer-brand__left--link');
                  if (link) {
                    link.classList.add('header-footer-brand__left--link', 'header-analytics_cta_click');
                  }
                });
              }
              const copyright = left.querySelector('.header-footer-brand__left--copyright');
              if (copyright) {
                copyright.classList.add('header-footer-brand__left--copyright', 'header-text-center');
                const copyrightText = copyright.querySelector('.header-footer-brand__left--text');
                if (copyrightText) {
                  copyrightText.classList.add('header-footer-brand__left--text', 'header-text-white');
                }
              }
            }
          }
        }
      }
    }
    const overlay = submenuContainer.querySelector('.header-overlay');
    if (overlay) {
      overlay.classList.add('header-overlay', 'header-position-absolute', 'header-top-0', 'header-start-0', 'header-w-100', 'header-h-100', 'header-bg-black', 'header-opacity-25');
    }
  }
}
