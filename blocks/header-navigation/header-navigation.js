export default function decorate(b){
  b.classList.add('header-wrapper','home-page-header');
  const nav=b.querySelector('.header-navigation');
  if(nav) nav.classList.add('navigation-header-nav-css-from-wrapper');
  const navigationWrapper=b.querySelector('.navigation-wrapper');
  if(navigationWrapper){
    const logo=navigationWrapper.querySelector('.navigation-wrapper__logo a');
    if(logo) logo.setAttribute('href','/');
    const navbarDesktop=navigationWrapper.querySelector('.navigation-wrapper__navbar');
    if(navbarDesktop){
      navbarDesktop.id='navbar-desktop';
      const menuItems=navbarDesktop.querySelectorAll('.navigation-wrapper__navbar-menu');
      menuItems.forEach((item,i)=>{
        const link=item.querySelector('.navigation-wrapper__navbar-menulink');
        if(link) link.setAttribute('href',[
          '/about/',
          '/qiddiya-city/',
          '/press-room/',
          '/careers/',
          '/contact/'
        ][i]||'#');
        const submenu=item.querySelector('.navigation-wrapper__navbar-submenu');
        if(submenu){
          const subLinks=submenu.querySelectorAll('a');
          [
            ['/about/','/about/leadership/','/about/sustainability/'],
            ['/qiddiya-city/','/playqiddiyacity/','/qiddiya-city/progress/','/qiddiya-city/assets/'],
            ['/press-room/'],
            ['/careers/','/training-programmes/'],
            ['/contact/','/contact/vendors/']
          ][i]?.forEach((href,j)=>{
            if(subLinks[j]) subLinks[j].setAttribute('href',href);
          });
        }
      });
      const langSel=navbarDesktop.querySelector('.header-language-selector');
      if(langSel){
        const langLinks=langSel.querySelectorAll('.language-selector-cmp-language-selector__link');
        langLinks[0]?.setAttribute('href','/');
        langLinks[0]?.setAttribute('data-lang','en');
        langLinks[0]?.setAttribute('aria-label','English');
        langLinks[1]?.setAttribute('href','/ar/');
        langLinks[1]?.setAttribute('data-lang','ar');
        langLinks[1]?.setAttribute('aria-label','العربية');
      }
    }
    const navbarMobile=navigationWrapper.querySelector('.navigation-wrapper__mobilenavbar');
    if(navbarMobile){
      navbarMobile.id='navbar-mobile';
      const mobileMenuItems=navbarMobile.querySelectorAll('.navigation-wrapper__mobilenavbar-menu');
      [
        {
          submenu:['/about/','/about/leadership/','/about/sustainability/']
        },{
          submenu:['/qiddiya-city/','/playqiddiyacity/','/qiddiya-city/progress/','/qiddiya-city/assets/']
        },{
          submenu:['/press-room/']
        },{
          submenu:['/careers/','/training-programmes/']
        },{
          submenu:['/contact/','/contact/vendors/']
        }
      ].forEach((menu,i)=>{
        const links=mobileMenuItems[i]?.querySelectorAll('.navigation-wrapper__mobilenavbar-submenu .navigation-wrapper__mobilenavbar-menulink[href]');
        menu.submenu.forEach((href,si)=>{
          if(links&&links[si]) links[si].setAttribute('href',href);
        });
      });
      const langSel=navbarMobile.querySelector('.header-language-selector');
      if(langSel){
        const langLinks=langSel.querySelectorAll('.language-selector-cmp-language-selector__link');
        langLinks[0]?.setAttribute('href','/');
        langLinks[0]?.setAttribute('data-lang','en');
        langLinks[0]?.setAttribute('aria-label','English');
        langLinks[1]?.setAttribute('href','/ar/');
        langLinks[1]?.setAttribute('data-lang','ar');
        langLinks[1]?.setAttribute('aria-label','العربية');
      }
    }
  }
}
