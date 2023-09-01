const carrossel = document.getElementById("carrossel1");
const images = ["images/vinho1.jpg", "images/vinho2.jpg"];
let imageIndex = 0;

setInterval(() => {
  imageIndex += 1;
  if (imageIndex >= images.length) imageIndex = 0;
  carrossel.src = images[imageIndex];
}, 2500);

setInterval(mudaImagem, 2500);