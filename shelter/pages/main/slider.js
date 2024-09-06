import petsData from '../../assets/data/pets.json' with { type: "json" };

const shuffle = (oldArray) => {
  let array = [...oldArray];
  let currentInd = array.length;

  while (currentInd != 0) {
    // Return a random value, where (0 <= value < array.length)
    let randomInd = Math.floor(Math.random() * currentInd);
    currentInd -= 1;
    // Swap randomInd element with remaining arr element
    [array[randomInd], array[currentInd]] = [array[currentInd], array[randomInd]];
  }
  return array;
};

const petsObjArr = shuffle(petsData);
console.log(petsObjArr);
const slider = document.querySelector('.slider');
console.log(slider);
const relPath = '../../assets/data/';

const innerData = petsObjArr.reduce((acc, obj) => {
  const oldPath = obj.img;
  const newPath = relPath + oldPath;
  //<img class="slider__img" src="" alt="">
  const img = `<img class="slider__img" src="${newPath}" alt=""></img>`;

  return `${acc}${img}`;
}, ``);

slider.innerHTML = `${innerData}${innerData}`;

// 0 1 2 | 3 4 5 6 7 8
// ->
// 3 4 5 | 6 7 8 0 1 2
// ->
// 6 7 8 | 0 1 2 3 4 5
let imageOffset = -1080;
const rightButton = document.querySelector('#slider-right-button');
rightButton.addEventListener('click', (e) => {
  const sliderImages = document.querySelectorAll('.slider__img');
  console.log(slider.childNodes);
  console.log(sliderImages);
  imageOffset -= 1080;
  sliderImages.forEach((item) => {
    item.style.left = `${imageOffset}px`;
  })
});


