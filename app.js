// app.js
let items      = document.querySelectorAll('.slider .list .item');
let next       = document.getElementById('next');
let prev       = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem  = items.length;
let itemActive = 0;

// função que troca o slide ativo
function showSlider(){
  // remove classes antigas
  document.querySelector('.slider .list .item.active').classList.remove('active');
  document.querySelector('.thumbnail .item.active').classList.remove('active');

  // adiciona classes novas
  items[itemActive].classList.add('active');
  thumbnails[itemActive].classList.add('active');
  setPositionThumbnail();

  // reinicia autoplay
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => next.click(), 5000);
}

// centraliza thumbnail quando fora da viewport
function setPositionThumbnail(){
  let thumb = document.querySelector('.thumbnail .item.active');
  let rect  = thumb.getBoundingClientRect();
  if (rect.left < 0 || rect.right > window.innerWidth) {
    thumb.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
  }
}

// próximos e anteriores
next.onclick = () => {
  itemActive = (itemActive + 1) % countItem;
  showSlider();
};
prev.onclick = () => {
  itemActive = (itemActive - 1 + countItem) % countItem;
  showSlider();
};

// clicar na thumbnail pula para aquele slide
thumbnails.forEach((thumb, i) => {
  thumb.addEventListener('click', () => {
    itemActive = i;
    showSlider();
  });
});

// autoplay
let refreshInterval = setInterval(() => next.click(), 5000);

// inicia no slide 0
showSlider();
