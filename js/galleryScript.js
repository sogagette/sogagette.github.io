

const gallery = document.getElementById('gallery')
const prevButton = document.getElementById('prevButton')
const nextButton = document.getElementById('nextButton')

const images = [['img/gallery_TLB.png', "On the surface lay a frigid wasteland.", "A picture of a snowy land with mountains in the background. The main character of the game is standing in the snow, facing a building made of scrap metal."], ['img/gallery_jelly.png', "Friend or foe?", "The main character of the game is facing a shadowy figure in a cave. Behind it, a couple of jellyfish are floating."], ['img/gallery_pax.png', "Meet Pax and Floresco, the first sinners", "The main character is facing Pax. He is a green human made of grass. Behind him, his brother Floresco is on the ground, wounded."]];
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex = currentIndex -= 1
  updateImage();
})
nextButton.addEventListener('click', () => {
  currentIndex = currentIndex += 1
  updateImage();
})

function updateImage(){
if(currentIndex < 0){
    currentIndex = (images.length - 1)
}
else if(currentIndex > (images.length - 1)){
    currentIndex = (0)
}
  const img = gallery.querySelector('.currentImage');
  const imgCaption = gallery.querySelector('.currentCaption');
  img.classList.add('changeImage');
  imgCaption.classList.add('changeImage');
  setTimeout(() => {
    img.src = images[currentIndex][0]
    img.alt = images[currentIndex][2]
    img.classList.remove('changeImage');
    imgCaption.innerHTML = images[currentIndex][1]
    imgCaption.classList.remove('changeImage');
  }, 500);
}