export default function decorate(b){
  b.classList.add('faq-accordion','faq-faq');
  const wrapper = b.querySelector('.faq-wrapper');
  if(wrapper){
    const img = wrapper.querySelector('.faq-scarp');
    if(img){
      img.classList.add('faq-scarp','auto-flip');
      img.setAttribute('loading','lazy');
    }
    const textWrapper = wrapper.querySelector('.faq-text-wrapper');
    if(textWrapper){
      textWrapper.setAttribute('data-text-wrapper','');
      const title = textWrapper.querySelector('.faq-title h2');
      if(title) title.parentElement.classList.add('faq-title');
    }
    const accordions = wrapper.querySelector('.faq-accordions');
    if(accordions){
      accordions.classList.add('faq-accordions');
      accordions.querySelectorAll('.faq-accordion-item').forEach(item=>{
        item.setAttribute('data-cmp-hook-accordion','item');
        const header = item.querySelector('.faq-accordion-header');
        if(header){
          const button = header.querySelector('.faq-accordion-button');
          if(button){
            button.type = 'button';
            button.setAttribute('data-cmp-hook-accordion','button');
            button.classList.add('faq-accordion-button');
            const icon = button.querySelector('.faq-accordion-icon');
            if(icon){
              icon.classList.add('faq-accordion-icon','qd-icon','qd-icon--cheveron-down');
            }
          }
        }
        const panel = item.querySelector('[data-cmp-hook-accordion="panel"]');
        if(panel){
          panel.classList.add('faq-accordion-panel','faq-accordion-panel--hidden');
          const faqText = panel.querySelector('.faq-text');
          if(faqText){
            const cmpText = faqText.querySelector('.faq-cmp-text');
            if(cmpText) cmpText.classList.add('faq-cmp-text');
          }
        }
      });
    }
  }
}
