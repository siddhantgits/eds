export default function decorate(b){
  b.classList.add('frequentlyaskedquestions-c474frequentlyaskedquestions');
  const wrapper = b.querySelector('.frequentlyaskedquestions-wrapper');
  if(wrapper) wrapper.classList.add('padding-block-end-medium');
  const title = b.querySelector('.frequentlyaskedquestions-m5titlewrapper');
  if(title) title.classList.add('frequentlyaskedquestions-title');
  const h2 = b.querySelector('h2');
  if(h2) {
    h2.classList.add('frequentlyaskedquestions-typography','frequentlyaskedquestions-m5titlewrapper-heading');
    h2.setAttribute('data-variant','heading-2');
  }
  const accordion = b.querySelector('.frequentlyaskedquestions-m6accordion');
  if(accordion) accordion.classList.add('frequentlyaskedquestions-questions');
  const headers = b.querySelectorAll('.frequentlyaskedquestions-m6accordion-accordionheader');
  headers.forEach(header=>{
    header.setAttribute('type','button');
  });
  const headerCopies = b.querySelectorAll('.frequentlyaskedquestions-m6accordion-headercopy');
  headerCopies.forEach(copy=>{
    copy.classList.add('frequentlyaskedquestions-typography','frequentlyaskedquestions-m6accordion-headercopy');
    copy.setAttribute('data-variant','body-large');
  });
  const headerIcons = b.querySelectorAll('.frequentlyaskedquestions-m6accordion-headericon');
  headerIcons.forEach(icon=>{
    icon.classList.add('frequentlyaskedquestions-a2icon','frequentlyaskedquestions-m6accordion-headericon');
    icon.setAttribute('data-name','chevron-down');
  });
  const panels = b.querySelectorAll('.frequentlyaskedquestions-m6accordion-accordionpanel');
  panels.forEach(panel=>{
    panel.setAttribute('role','region');
    panel.classList.add('frequentlyaskedquestions-m6accordion-accordionpanel');
  });
  const panelContents = b.querySelectorAll('.frequentlyaskedquestions-m6accordion-panelcontent');
  panelContents.forEach(content=>{
    content.classList.add('frequentlyaskedquestions-m6accordion-panelcontent');
  });
  const richTexts = b.querySelectorAll('.frequentlyaskedquestions-a4richtext');
  richTexts.forEach(rich=>{
    rich.classList.add('frequentlyaskedquestions-a4richtext');
    rich.setAttribute('data-alignment','start');
    rich.setAttribute('data-body-size','regular');
  });
  const image = b.querySelector('.frequentlyaskedquestions-a3image');
  if(image) image.classList.add('frequentlyaskedquestions-scarp');
  const img = b.querySelector('.frequentlyaskedquestions-a3image-image');
  if(img){
    img.classList.add('frequentlyaskedquestions-a3image-image','frequentlyaskedquestions-a3image-isloaded');
    img.setAttribute('loading','eager');
  }
}
