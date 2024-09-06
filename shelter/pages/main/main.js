import petsData from '../../assets/data/pets.json' with { type: "json" };

const cards = document.querySelectorAll('.slider__card');
const popUp = document.querySelector('.pop-up');
const shade = document.querySelector('.shade');
const body = document.querySelector('.body');

const findSlider = (entryTarget) => {
  const classList = entryTarget.classList;
  if (classList.contains('slider__card')) {
    return entryTarget;
  } else {
    return findSlider(entryTarget.parentElement);
  }
};

cards.forEach((card) => {
  card.addEventListener('click', (event) => {
    const sliderCard = findSlider(event.target);
    const name = sliderCard.children[1].innerHTML;
    const objData = petsData.filter((obj) => {
      return name === obj.name;
    })[0];
    const relative = '../../assets/data/';
    let src = relative + objData.img;

    const img = `<img class="pop-up__img" src="${src}"></img>`;
    const header = `<h3 class="pop-up__header header-dark-l">${objData.name}</h3>`;
    const breed = `<span class="pop-up__breed header-icon">${objData.type} - ${objData.breed}</span>`;
    const description = `<p class="pop-up__description subheading">${objData.description}</p>`;
    const separator = ', ';

    const age = `<li class="pop-up__list-element subheading"><span class="pop-up__list-span">Age:</span> ${objData.age}</li>`;
    const inoculations = `<li class="pop-up__list-element subheading"><span class="pop-up__list-span">Inoculations:</span> ${objData.inoculations.join(separator)}</li>`;
    const diseases = `<li class="pop-up__list-element subheading"><span class="pop-up__list-span">Diseases:</span> ${objData.diseases.join(separator)}</li>`;
    const parasites = `<li class="pop-up__list-element subheading"><span class="pop-up__list-span">Parasites:</span> ${objData.parasites.join(separator)}</li>`;
    const list = `<ul class="pop-up__list">${age}${inoculations}${diseases}${parasites}</ul>`;
    const block = `<div class="pop-up__info">${header}${breed}${description}${list}</div>`;

    const svg = `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="50" height="50" rx="25" stroke="#F1CDB3" stroke-width="2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.4262 26L31.7046 21.7216C32.0985 21.3277 32.0985 20.6892 31.7046 20.2954C31.3108 19.9016 30.6723 19.9016 30.2785 20.2954L26 24.5739L21.7215 20.2954C21.3276 19.9015 20.6892 19.9015 20.2953 20.2954C19.9016 20.6892 19.9016 21.3277 20.2953 21.7215L24.5738 26L20.2953 30.2785C19.9016 30.6723 19.9016 31.3108 20.2953 31.7046C20.6892 32.0985 21.3276 32.0985 21.7215 31.7046L26 27.4261L30.2785 31.7046C30.6723 32.0985 31.3108 32.0985 31.7046 31.7046C32.0985 31.3108 32.0985 30.6723 31.7046 30.2785L27.4262 26Z" fill="#292929"/>
</svg>
`;
    const button = `<button class="pop-up__button">${svg}</button>`
    popUp.classList.remove('hidden');
    popUp.innerHTML = `${img}${block}${button}`;


    const buttonElement = document.querySelector('.pop-up__button');
    shade.classList.toggle('shade_active');
    body.classList.toggle('body_active');

    shade.addEventListener('click', (event) => {
      popUp.classList.add('hidden');
      body.classList.remove('body_active');
    });

    buttonElement.addEventListener('click', (event) => {
      popUp.classList.add('hidden');
      shade.classList.remove('shade_active');
      body.classList.remove('body_active');
    });
  });
});