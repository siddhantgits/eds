export default function decorate(b){
  b.classList.add('textandmedia-c27TextAndMedia','margin-block-start-medium','margin-block-end-medium','padding-block-start-medium','padding-block-end-medium');
  const wrapper = b.querySelector('.textandmedia-wrapper');
  if(wrapper){
    const mediaSection = wrapper.querySelector('.textandmedia-gradientSection.textandmedia-mediaWrapper');
    if(mediaSection){
      mediaSection.classList.add('textandmedia-gradientSection','textandmedia-mediaWrapper');
      const mediaGradient = mediaSection.querySelector('.textandmedia-gradient.textandmedia-homeGradient');
      if(mediaGradient){
        mediaGradient.classList.add('textandmedia-gradient','textandmedia-homeGradient');
      }
      const mediaInner = mediaSection.querySelector('.textandmedia-mediaWrapper-inner');
      if(mediaInner){
        mediaInner.classList.add('textandmedia-mediaWrapper-inner');
        const media = mediaInner.querySelector('.textandmedia-o14Media.textandmedia-media');
        if(media){
          media.classList.add('textandmedia-o14Media','textandmedia-media');
          const picture = media.querySelector('.textandmedia-a3Image.textandmedia-objectFitContainer');
          if(picture){
            picture.classList.add('textandmedia-a3Image','textandmedia-objectFitContainer');
            const img = picture.querySelector('img');
            if(img){
              img.classList.add('textandmedia-image','textandmedia-enableTransitionIn','textandmedia-isLoaded','textandmedia-objectFitCover');
              img.setAttribute('loading','lazy');
              img.setAttribute('alt','Tuwaiq Mountains');
              img.setAttribute('src','/content/dam/aemigrate/uploaded-folder/image/1754989656143.webp');
            }
          }
        }
      }
    }
    const contentWrapper = wrapper.querySelector('.textandmedia-contentWrapper');
    if(contentWrapper){
      contentWrapper.classList.add('textandmedia-contentWrapper');
      const titleWrapper = contentWrapper.querySelector('.textandmedia-m5TitleWrapper.textandmedia-title');
      if(titleWrapper){
        titleWrapper.classList.add('textandmedia-m5TitleWrapper','textandmedia-title');
        const h2 = titleWrapper.querySelector('h2');
        if(h2){
          h2.classList.add('textandmedia-typography','textandmedia-heading');
          h2.textContent = 'Combining Play with investment';
        }
      }
      const richText = contentWrapper.querySelector('.textandmedia-a4RichText.textandmedia-bottomCopy');
      if(richText){
        richText.classList.add('textandmedia-a4RichText','textandmedia-bottomCopy');
        const p = richText.querySelector('p');
        if(p){
          p.innerHTML = 'Qiddiya Investment Company, a PIF giga project, offers promising investment opportunities. By harnessing the power of Play, we boost economic growth, elevate the quality of life, and secure our position as a global, go-to entertainment, sports and culture hub.';
        }
      }
      const ctaWrapper = contentWrapper.querySelector('.textandmedia-ctaWrapper');
      if(ctaWrapper){
        ctaWrapper.classList.add('textandmedia-ctaWrapper');
        const cta = ctaWrapper.querySelector('a');
        if(cta){
          cta.classList.add('textandmedia-clickableElement','textandmedia-hasStartIcon');
          cta.setAttribute('href','/about/');
          cta.setAttribute('target','_self');
          cta.setAttribute('data-theme','primary');
          cta.setAttribute('data-size','default');
          cta.setAttribute('data-palette','palette-1');
          const iconSpan = cta.querySelector('.textandmedia-a2Icon.textandmedia-icon');
          if(iconSpan){
            iconSpan.classList.add('textandmedia-a2Icon','textandmedia-icon');
            iconSpan.setAttribute('data-name','chevron-right');
            const iconImg = iconSpan.querySelector('img');
            if(iconImg){
              iconImg.setAttribute('alt','svg file');
              iconImg.setAttribute('src','/content/dam/aemigrate/uploaded-folder/image/1754989655089.svg+xml');
            }
          }
          const ctaLabel = cta.querySelector('.textandmedia-typography.textandmedia-label');
          if(ctaLabel){
            ctaLabel.classList.add('textandmedia-typography','textandmedia-label');
            ctaLabel.setAttribute('data-variant','heading-5');
            ctaLabel.textContent = 'Learn more ';
          }
        }
      }
    }
  }
}
