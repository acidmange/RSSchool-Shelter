const hamMenu = document.querySelector('.nav__burger');
const listMenuItems = document.querySelectorAll('.nav__list-item');
const navLinks = document.querySelector('.nav__links');
const navList = document.querySelector('.nav__list');
const listHelp = document.querySelector('.nav-list__help')
const body = document.querySelector('.body');
const shade = document.querySelector('.shade');
const linksDark = document.querySelectorAll('.nav__list-link_dark');

const removeToggles = () => {
  hamMenu.classList.remove('nav__burger_active');
  listMenuItems.forEach((item) => {
    item.classList.remove('nav__list-item_active');
  })
  navLinks.classList.remove('nav__links_active');
  navList.classList.remove('nav__list_active');
  body.classList.remove('body_active');
  shade.classList.remove('shade_active');
  linksDark.forEach((item) => {
    item.classList.remove('nav__list-link_dark-active');
  });
};

const addToggles = () => {
  hamMenu.classList.toggle('nav__burger_active');
  listMenuItems.forEach((item) => {
    item.classList.toggle('nav__list-item_active');
  })
  navLinks.classList.toggle('nav__links_active');
  navList.classList.toggle('nav__list_active');
  body.classList.toggle('body_active');
  shade.classList.toggle('shade_active');
  linksDark.forEach((item) => {
    item.classList.toggle('nav__list-link_dark-active');
  });
}

hamMenu.addEventListener('click', () => {
  addToggles();
});

shade.addEventListener('click', () => {
  removeToggles();
});

listMenuItems.forEach((item) => {
  item.addEventListener('click', () => {
    removeToggles();
  });
});