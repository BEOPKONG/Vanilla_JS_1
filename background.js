const body = document.querySelector("body");
const IMG_NUMBER = 4;

function img() {
  const NUMBER = Math.floor(Math.random() * IMG_NUMBER) + 1;
  const img = new Image();
  img.src = `images/${NUMBER}.jpg`;
  body.appendChild(img);
  img.classList.add("bgImage");
}

function init() {
  img();
}
init();
